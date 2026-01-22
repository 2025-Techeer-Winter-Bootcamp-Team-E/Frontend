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
    <div className="mt-16 flex items-center justify-center gap-4">
      {/* 이전 버튼: 테두리를 없애고 아이콘만 강조하는 고스트 스타일 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full text-[#1d1d1f] transition-all hover:bg-black/[0.04] active:scale-90 disabled:opacity-20 disabled:hover:bg-transparent"
      >
        <ChevronLeft className="h-5 w-5 stroke-[2.5px]" />
      </button>

      {/* 페이지 번호 컨테이너: 애플의 세그먼트 컨트롤 질감 적용 */}
      <div className="flex items-center gap-1 rounded-full bg-black/[0.03] p-1 backdrop-blur-md">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`flex h-8 min-w-[32px] items-center justify-center rounded-full px-2 text-[13px] transition-all duration-300 ${
              currentPage === page
                ? 'bg-white font-bold text-[#1d1d1f] shadow-[0_2px_8px_rgba(0,0,0,0.12)]' // 활성화 상태: 화이트 팝업 효과
                : page === '...'
                  ? 'cursor-default text-[#86868b]'
                  : 'font-medium text-[#86868b] hover:text-[#1d1d1f] active:scale-95'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 다음 버튼 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-full text-[#1d1d1f] transition-all hover:bg-black/[0.04] active:scale-90 disabled:opacity-20 disabled:hover:bg-transparent"
      >
        <ChevronRight className="h-5 w-5 stroke-[2.5px]" />
      </button>
    </div>
  );
};

export default Pagination;
