// ReviewSection.tsx
import { Star } from 'lucide-react';
import { useState } from 'react';
import ReviewCard from './ReviewCard';
import useProductReviewQuery from '@/hooks/queries/useProductReviewQuery';
import useProductAIReviewQuery from '@/hooks/queries/useProductAIReviewQuery';
import { Pagination } from '@/components/productList';

interface ReviewSectionProps {
  productCode: number;
}

const ReviewSection = ({ productCode }: ReviewSectionProps) => {
  const [page, setPage] = useState(1);

  const { data: reviewData } = useProductReviewQuery(productCode, page);
  const { data: aiData } = useProductAIReviewQuery(productCode);

  if (!reviewData) return null;

  const { reviews, total_count, average_rating } = reviewData;

  const totalPages = Math.ceil(total_count / 10);

  return (
    <div>
      {/* 헤더 */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-2xl font-black text-[#111827]">구매 후기</h2>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-7 w-7 ${
                    i < Math.floor(average_rating)
                      ? 'fill-[#FACC15] text-[#FACC15]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-black text-[#111827]">{average_rating.toFixed(1)}</span>
          </div>
          <p className="text-sm font-light text-[#6B7280]">
            전체 {total_count.toLocaleString()}개의 통합 리뷰
          </p>
        </div>
      </div>

      {/* AI 분석 섹션 */}
      {aiData && (
        <div className="mb-6 rounded-2xl border border-[rgba(219,234,254,0.5)] bg-[rgba(239,246,255,0.5)] p-8">
          {/* 상단 요약 */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D9DDA] text-sm font-black text-white">
              AI
            </div>
            <p className="text-base leading-snug font-bold text-[#0D9DDA]">{aiData.ai_summary}</p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {/* Pros / Cons */}
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-sm font-bold text-[#1F2937]">👍 이런 점이 좋아요</h4>
                <ul className="space-y-2 text-sm font-light text-[#4B5563]">
                  {aiData.pros.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="font-bold text-[#0D9DDA]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-bold text-[#1F2937]">👎 아쉬운 점이에요</h4>
                <ul className="space-y-2 text-sm font-light text-[#4B5563]">
                  {aiData.cons.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="font-bold text-[#9CA3AF]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 추천 점수 */}
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="mb-4 text-sm font-bold text-[#1F2937]">AI 추천 점수</h4>

                <div className="mb-3 flex items-end gap-3">
                  <span className="text-4xl font-black text-[#0D9DDA]">
                    {aiData.recommendation_score}
                  </span>
                  <span className="mb-1 text-sm font-light text-[#6B7280]">/ 100점</span>
                </div>

                {/* 게이지 */}
                <div className="mb-4 h-2 overflow-hidden rounded-full bg-[#E5E7EB]">
                  <div
                    className="h-full rounded-full bg-[#0D9DDA] transition-all"
                    style={{ width: `${aiData.recommendation_score}%` }}
                  />
                </div>

                <p className="text-sm leading-relaxed font-light text-[#4B5563]">
                  {aiData.score_reason}
                </p>
              </div>

              <p className="mt-6 text-[11px] text-[#9CA3AF]">
                마지막 업데이트 · {new Date(aiData.last_updated).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 리뷰 목록 */}
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>

      {/* 페이지네이션 (재사용) */}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default ReviewSection;
