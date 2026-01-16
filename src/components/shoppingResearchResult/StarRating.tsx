import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="scale-y-[-1]">
          <Star
            className={`w-6 h-7 ${
              star <= rating ? 'text-[#facc15] fill-current' : 'text-[#facc15] fill-none'
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
