import { useState } from 'react';
import TimerCard from './TimerCard';
import Pagination from '../Pagination';
import useTimerAllGetQuery from '@/hooks/queries/useTimerAllGetQuery';
import { RefreshCw } from 'lucide-react';

const MyTimerGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useTimerAllGetQuery(101, currentPage, 6);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timers = data?.timers || [];
  const pageInfo = data?.page_info;

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between px-2">
        <div className="space-y-1">
          <p className="text-sm font-medium mt-4 text-gray-500">
            추적 중인 상품의 가격 변동을 실시간으로 감시합니다.
          </p>
        </div>
      </div>

      {timers.length > 0 ? (
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="flex flex-col items-center justify-center rounded-[40px] border border-dashed border-gray-200 py-32 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50">
            <RefreshCw className="h-8 w-8 text-gray-200" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">보관함이 비어있습니다</h3>
          <p className="mt-1 text-sm text-gray-400">
            새로운 타이머를 등록해 쇼핑 인텔리전스를 경험하세요.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyTimerGrid;
