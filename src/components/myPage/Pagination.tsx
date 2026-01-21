import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-400 transition-all hover:border-indigo-500 hover:text-indigo-500 disabled:opacity-30 disabled:hover:border-gray-200"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-1.5 rounded-2xl bg-gray-100/50 p-1.5">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`flex h-9 min-w-9 items-center justify-center rounded-xl text-sm transition-all duration-200 ${
              currentPage === page
                ? 'bg-white font-black text-indigo-600 shadow-sm ring-1 ring-gray-200'
                : page === '...'
                  ? 'cursor-default text-gray-300'
                  : 'font-bold text-gray-500 hover:bg-white hover:text-gray-900'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-400 transition-all hover:border-indigo-500 hover:text-indigo-500 disabled:opacity-30 disabled:hover:border-gray-200"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};
export default Pagination;
