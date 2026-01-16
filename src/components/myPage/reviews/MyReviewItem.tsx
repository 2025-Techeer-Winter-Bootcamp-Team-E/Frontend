import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ReviewItemProps {
  review: {
    id: string;
    productName: string;
    rating: number;
    createdAt: string;
    content: string;
    imageUrl?: string;
  };
  onEdit?: (review: ReviewItemProps['review']) => void;
}

const MyReviewItem = ({ review, onEdit }: ReviewItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex gap-4">
        {/* 상품 이미지 */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
          {review.imageUrl ? (
            <img
              src={review.imageUrl}
              alt={review.productName}
              className="h-full w-full rounded-lg object-cover"
            />
          ) : (
            <span className="text-xs">IMAGE</span>
          )}
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className="flex-1">
          {/* 상단 영역 */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="mb-1 text-sm font-semibold text-gray-900">{review.productName}</h3>

              {/* 평점 + 날짜 */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>{idx < Math.floor(review.rating) ? '⭐' : '☆'}</span>
                  ))}
                </div>
                <span className="font-medium text-gray-700">{review.rating.toFixed(1)}</span>
                <span>·</span>
                <span>{review.createdAt}</span>
              </div>
            </div>

            {/* 수정 / 삭제 */}
            <div className="flex gap-2 text-xs text-gray-400">
              <button onClick={() => onEdit?.(review)} className="hover:text-gray-700">
                수정
              </button>
              <button className="hover:text-red-500">삭제</button>
            </div>
          </div>

          {/* 리뷰 내용 */}
          <p
            className={`mt-3 text-sm leading-relaxed bg-[#f9fafb]  text-gray-700 ${
              expanded ? '' : 'line-clamp-3'
            }`}
          >
            {review.content}
          </p>

          {/* 펼치기 버튼 */}
          {review.content.length > 80 && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-2 flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600"
            >
              {expanded ? (
                <>
                  접기 <ChevronUp size={14} />
                </>
              ) : (
                <>
                  펼치기 <ChevronDown size={14} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviewItem;
