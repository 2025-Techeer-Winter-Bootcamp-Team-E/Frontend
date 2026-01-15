import { useState } from 'react';
import myReview from '@/data/myReview.json';
import Pagination from '@/components/myPage/Pagination';
import MyReviewItem from '@/components/myPage/reviews/MyReviewItem';

const MyReviewList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews] = useState(myReview);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = reviews.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <h1 className="px-2 pb-4 text-xl font-bold text-gray-900">내 리뷰</h1>

      <div className="rounded-xl bg-white shadow-sm">
        <div className="p-6">
          {currentItems.length > 0 ? (
            <div className="space-y-6">
              {currentItems.map((review) => (
                <MyReviewItem key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-400">작성한 리뷰가 없습니다.</p>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviewList;
