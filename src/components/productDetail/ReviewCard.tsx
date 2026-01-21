import { Star } from 'lucide-react';
import type { ReivewEntity } from '@/types/productsType';

interface ReviewCardProps {
  review: ReivewEntity;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="border-t border-[#F3F4F6] pt-8 pb-4">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6]">
            <span className="text-xs font-bold text-[#9CA3AF]">{review.author_name.charAt(0)}</span>
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="text-sm font-bold text-[#111827]">{review.author_name}</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'fill-[#FACC15] text-[#FACC15]' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-[11px] font-light text-[#6B7280]">{review.created_at}</p>
          </div>
        </div>
      </div>
      <p className="mb-4 text-sm leading-[22.75px] font-light whitespace-pre-wrap text-[#374151]">
        {review.content}
      </p>
    </div>
  );
};

export default ReviewCard;
