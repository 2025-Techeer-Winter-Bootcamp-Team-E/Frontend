import { useState } from 'react';
import TimerCard from './TimerCard';
import Pagination from '../Pagination';
import useTimerAllGetQuery from '@/hooks/queries/useTimerAllGetQuery';
import { RefreshCw } from 'lucide-react';

const MyTimerGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const userId = Number(localStorage.getItem('user_id'));

  const { data } = useTimerAllGetQuery(userId, currentPage, 6);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timers = data?.timers || [];
  const pageInfo = data?.page_info;

  return (
    <div className="space-y-12">
      {timers.length > 0 ? (
        <div className="space-y-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {timers.map((timer) => (
              <TimerCard key={timer.timer_id} timer={timer} />
            ))}
          </div>
          {pageInfo && pageInfo.total_pages > 1 && (
            <Pagination
              currentPage={pageInfo.current_page + 1}
              totalPages={pageInfo.total_pages}
              onPageChange={(page) => handlePageChange(page - 1)}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-[32px] border border-dashed border-[#d2d2d7] bg-white py-32 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F5F5F7]">
            <RefreshCw className="h-8 w-8 text-[#d2d2d7]" />
          </div>
          <h3 className="text-[21px] font-semibold text-[#1d1d1f]">보관함이 비어있습니다</h3>
          <p className="mt-2 text-[15px] text-[#86868b]">
            새로운 타이머를 등록해 쇼핑 인텔리전스를 경험하세요.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyTimerGrid;
