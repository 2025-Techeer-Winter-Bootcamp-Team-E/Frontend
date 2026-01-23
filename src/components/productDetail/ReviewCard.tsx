import { Star } from 'lucide-react';
import type { ReivewEntity } from '@/types/productsType';

interface ReviewCardProps {
  review: ReivewEntity;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="border-b border-[#f5f5f7] py-10 last:border-none">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d1d1f] text-white">
            <span className="text-xs font-bold">{review.author_name.charAt(0)}</span>
          </div>
          <div>
            <div className="mb-0.5 flex items-center gap-3">
              <span className="text-[15px] font-semibold text-[#1d1d1f]">{review.author_name}</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < review.rating ? 'fill-[#1d1d1f] text-[#1d1d1f]' : 'text-[#d2d2d7]'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-[12px] font-medium text-[#86868b]">{review.created_at}</p>
          </div>
        </div>
      </div>

      <p className="max-w-3xl text-[15px] leading-relaxed font-medium whitespace-pre-wrap text-[#424245]">
        {review.content}
      </p>
    </div>
  );
};

export default ReviewCard;
