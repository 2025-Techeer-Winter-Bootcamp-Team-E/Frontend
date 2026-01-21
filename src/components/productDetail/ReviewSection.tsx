import { Star } from 'lucide-react';
import { useState } from 'react';
import ReviewCard from './ReviewCard';
import useProductReviewQuery from '@/hooks/queries/useProductReviewQuery';
import useProductAIReviewQuery from '@/hooks/queries/useProductAIReviewQuery';

interface ReviewSectionProps {
  productCode: number;
}

const ReviewSection = ({ productCode }: ReviewSectionProps) => {
  const [page, setPage] = useState(1);

  const { data: reviewData } = useProductReviewQuery(productCode, page);
  const { data: aiData } = useProductAIReviewQuery(productCode);

  if (!reviewData) return null;

  const { reviews, pagination, average_rating } = reviewData;
  const totalPages = pagination.total_pages;

  return (
    <section className="space-y-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">구매 후기</h2>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < Math.floor(average_rating) ? 'fill-[#1d1d1f] text-[#1d1d1f]' : 'text-[#d2d2d7]'}`}
              />
            ))}
          </div>
          <span className="text-2xl font-bold tracking-tighter text-[#1d1d1f]">
            {average_rating.toFixed(1)}
          </span>
          <span className="border-l border-[#d2d2d7] pl-4 text-sm font-medium text-[#86868b]">
            전체 {pagination.total_elements.toLocaleString()}개의 통합 리뷰
          </span>
        </div>
      </div>

      {aiData && (
        <div className="rounded-[2.5rem] border border-white/40 bg-[#f5f5f7]/60 p-10 shadow-sm backdrop-blur-sm">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-7 w-12 items-center justify-center rounded-full bg-[#1d1d1f] text-[10px] font-bold tracking-widest text-white uppercase">
              AI
            </div>
            <p className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
              {aiData.ai_summary}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h4 className="mb-4 text-xs font-bold tracking-widest text-[#86868b] uppercase">
                  Pros
                </h4>
                <ul className="space-y-3 text-[14px] font-medium text-[#424245]">
                  {aiData.pros.map((item, idx) => (
                    <li key={idx} className="flex gap-3 leading-relaxed">
                      <span className="text-[#1d1d1f]">/</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-bold tracking-widest text-[#86868b] uppercase">
                  Cons
                </h4>
                <ul className="space-y-3 text-[14px] font-medium text-[#86868b]">
                  {aiData.cons.map((item, idx) => (
                    <li key={idx} className="flex gap-3 leading-relaxed">
                      <span className="opacity-40">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-white/60 bg-white/40 p-8">
              <h4 className="mb-2 text-xs font-bold tracking-widest text-[#86868b] uppercase">
                Recommendation
              </h4>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tighter text-[#1d1d1f]">
                  {aiData.recommendation_score}
                </span>
                <span className="text-lg font-semibold text-[#86868b]">/ 100</span>
              </div>
              <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-black/5">
                <div
                  className="h-full bg-[#1d1d1f]"
                  style={{ width: `${aiData.recommendation_score}%` }}
                />
              </div>
              <p className="text-[13px] leading-relaxed font-medium text-[#424245] italic">
                "{aiData.score_reason}"
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="divide-y divide-[#d2d2d7]/30">
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
