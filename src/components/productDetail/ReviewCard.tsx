import { Star, ThumbsUp, MessageCircle } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  purchaseOption?: string;
  content: string;
  images: (string | null)[];
  helpful: number;
  comments: number;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="border-t border-[#F3F4F6] pt-8 pb-4">
      {/* 리뷰 헤더 */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F3F4F6] rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-[#9CA3AF]">
              {review.author.charAt(0)}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-sm text-[#111827]">
                {review.author}
              </span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-[#FACC15] text-[#FACC15]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-[#6B7280] font-light">
              {review.date}
              {review.purchaseOption && ` | ${review.purchaseOption}`}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-[11px] text-[#6B7280] font-light hover:text-[#111827]">
            수정
          </button>
          <button className="text-[11px] text-[#6B7280] font-light hover:text-[#111827]">
            신고
          </button>
        </div>
      </div>

      {/* 리뷰 내용 */}
      <p className="text-sm text-[#374151] font-light leading-[22.75px] mb-4 whitespace-pre-wrap">
        {review.content}
      </p>

      {/* 도움됨 및 댓글 버튼 */}
      <div className="flex gap-2">
        <button className="flex items-center gap-1.5 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[11px] font-bold text-[#111827] hover:bg-gray-50 transition-colors">
          <ThumbsUp className="w-4 h-4" />
          도움돼요 {review.helpful}
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[11px] font-bold text-[#111827] hover:bg-gray-50 transition-colors">
          <MessageCircle className="w-4 h-4" />
          댓글 {review.comments}
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
