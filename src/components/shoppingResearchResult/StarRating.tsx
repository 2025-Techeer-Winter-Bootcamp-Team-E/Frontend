import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'fill-current text-[#1d1d1f]' : 'fill-none text-[#d2d2d7]'
          }`}
          strokeWidth={2}
        />
      ))}
    </div>
  );
};

export default StarRating;
