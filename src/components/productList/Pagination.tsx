import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, '...', 9, 10);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="rounded bg-[#F3F4F6] p-1 disabled:opacity-50"
      >
        <ChevronLeft className="h-4 w-4 text-[#111827]" />
      </button>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
          className={`rounded px-[13px] py-[5px] text-sm transition-colors ${
            page === currentPage
              ? 'border border-[#0D9DDA] bg-[#0D9DDA] font-medium text-white'
              : page === '...'
                ? 'cursor-default px-4 font-light text-[#9CA3AF]'
                : 'border border-[#E5E7EB] bg-white font-medium text-[#111827] hover:bg-gray-50'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="rounded bg-[#F3F4F6] p-1 disabled:opacity-50"
      >
        <ChevronRight className="h-4 w-4 text-[#111827]" />
      </button>
    </div>
  );
};

export default Pagination;
