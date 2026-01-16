import React from 'react';
import { Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  category: string;
  name: string;
  price: string;
  badge: string;
  description: string;
  image: string;
}

interface BestRecommendationsProps {
  recommendations: Product[];
}

const BestRecommendations: React.FC<BestRecommendationsProps> = ({ recommendations }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-6 scale-y-[-1]">
          <Sparkles className="w-[24.02px] h-[28px] text-[#0d9dda]" />
        </div>
        <h2 className="text-2xl font-bold text-[#111827] leading-[32px]">AI 추천 BEST 리스트</h2>
      </div>

      <div className="flex flex-col gap-6">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestRecommendations;
