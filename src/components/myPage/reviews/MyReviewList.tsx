import { useState } from 'react';
import myReview from '@/data/myReview.json';
import Pagination from '@/components/myPage/Pagination';
import MyReviewItem from '@/components/myPage/reviews/MyReviewItem';
import ReviewModal from '@/components/myPage/reviews/ReviewModal';

const MyReviewList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews] = useState(myReview);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<{
    id: string;
    productName: string;
    rating: number;
    createdAt: string;
    content: string;
    imageUrl?: string;
  } | null>(null);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = reviews.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditReview = (review: {
    id: string;
    productName: string;
    rating: number;
    createdAt: string;
    content: string;
    imageUrl?: string;
  }) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  const handleSubmitReview = (data: { rating: number; content: string; images: string[] }) => {
    console.log('리뷰 수정:', { reviewId: selectedReview?.id, ...data });
    alert('리뷰가 수정되었습니다!');
    handleCloseModal();
    // TODO: 실제 API 호출로 리뷰 업데이트
  };

  return (
    <div>
      <h1 className="px-2 pb-4 text-xl font-bold text-gray-900">내 리뷰</h1>

      <div className="rounded-xl bg-white shadow-sm">
        <div className="p-6">
          {currentItems.length > 0 ? (
            <div className="space-y-6">
              {currentItems.map((review) => (
                <MyReviewItem key={review.id} review={review} onEdit={handleEditReview} />
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

      {/* 리뷰 수정 모달 */}
      {selectedReview && (
        <ReviewModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitReview}
          mode="edit"
          initialData={{
            rating: selectedReview.rating,
            content: selectedReview.content,
            images: selectedReview.imageUrl ? [selectedReview.imageUrl] : [],
          }}
          productInfo={{
            name: selectedReview.productName,
            image: selectedReview.imageUrl,
          }}
        />
      )}
    </div>
  );
};

export default MyReviewList;
