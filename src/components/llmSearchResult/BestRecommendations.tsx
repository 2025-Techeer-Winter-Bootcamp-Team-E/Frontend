import React from 'react';
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
    <div className="flex flex-col gap-12">
      {/* 섹션 헤더: 서체 두께와 자간으로만 강조 */}
      <div className="flex flex-col gap-4 px-2">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/[0.05]">
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

      {/* 제품 리스트: 간격을 조정하여 가독성 최적화 */}
      <div className="flex flex-col gap-6">
        {recommendations.map((product, index) => (
          <div
            key={product.product_code}
            className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both duration-1000"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* 리스트 하단: 애플 스타일의 미니멀한 구분선 */}
      <div className="mt-8 flex justify-center">
        <div className="h-[1px] w-16 bg-[#d2d2d7]" />
      </div>
    </div>
  );
};

export default BestRecommendations;
