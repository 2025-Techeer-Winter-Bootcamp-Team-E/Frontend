import { useState } from 'react';
import TimerCard from './TimerCard';
import Pagination from '../Pagination';
import timerData from '@/data/myTimer.json';

// 진행 상태 variant 결정
const getProgressVariant = (badgeColor?: string, status?: string): 'teal' | 'orange' => {
  if (badgeColor === 'orange' || status === 'expired' || status === 'soldout') return 'orange';
  return 'teal';
};

const MyTimerGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(timerData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = timerData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1 className="px-2 pb-4 text-xl font-bold text-gray-900">타이머 보관함</h1>

      {currentItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((item) => {
              const progressVariant = getProgressVariant(item.badgeColor, item.status);

              // 진행 상태 설정
              const progress =
                item.progressPercent > 0 ? { current: item.progressPercent, total: 100 } : null;

              return (
                <TimerCard
                  key={item.id}
                  image={'/images/timer.png'}
                  title={item.title}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  discount={item.discount}
                  progress={progress}
                  progressVariant={progressVariant}
                  progressText={item.statusText}
                  additionalInfo={item.status === 'expired' ? '타이머 종료' : undefined}
                />
              );
            })}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
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
