import { Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import type { LlmRecommendationEntity } from '@/types/searchType';

interface BestRecommendationsProps {
  recommendedProducts?: LlmRecommendationEntity[];
}

const BestRecommendations = ({ recommendedProducts }: BestRecommendationsProps) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 px-2">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/5">
            <Sparkles className="h-4.5 w-4.5 text-[#1d1d1f]" />
          </div>
          <h2 className="text-[28px] font-bold tracking-tight text-[#1d1d1f] sm:text-[32px]">
            AI 추천 BEST 리스트
          </h2>
        </div>
        <p className="max-w-2xl text-[17px] leading-relaxed font-medium text-[#86868b]">
          사용자의 검색 의도와 실시간 시장 데이터를 결합하여 <br className="hidden sm:block" />
          가장 합리적인 선택지를 제안합니다.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {recommendedProducts &&
          recommendedProducts.map((product, index) => (
            <div
              key={product.product_code}
              className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
      </div>
      <div className="mt-8 flex justify-center">
        <div className="h-px w-16 bg-[#d2d2d7]" />
      </div>
    </div>
  );
};

export default BestRecommendations;
