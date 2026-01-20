import { useState } from 'react';
import TimerCard from './TimerCard';
import Pagination from '../Pagination';
import useTimerAllGetQuery from '@/hooks/queries/useTimerAllGetQuery';

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
    <div>
      <h1 className="px-2 pb-4 text-xl font-bold text-gray-900">타이머 보관함</h1>

      {timers.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        </>
      ) : (
        <div className="py-20 text-center">
          <p className="text-gray-400">타이머 보관함이 비어 있습니다.</p>
        </div>
      )}
    </div>
  );
};

export default MyTimerGrid;