import { Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import type { LLMRecommendationEntity } from '@/types/searchType';

interface BestRecommendationsProps {
  recommendations: LLMRecommendationEntity[];
}

const BestRecommendations: React.FC<BestRecommendationsProps> = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <div className="h-6 w-8 scale-y-[-1]">
          <Sparkles className="h-7 w-[24.02px] text-[#0d9dda]" />
        </div>
        <h2 className="text-2xl leading-8 font-bold text-[#111827]">AI 추천 BEST 리스트</h2>
      </div>

      <div className="flex flex-col gap-6">
        {recommendations.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestRecommendations;
