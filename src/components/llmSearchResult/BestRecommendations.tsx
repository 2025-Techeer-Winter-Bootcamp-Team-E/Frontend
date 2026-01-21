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
    <div className="flex flex-col gap-10">
      {/* 섹션 헤더: 타이틀과 부가 설명을 통해 전문성 강조 */}
      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50">
            <Sparkles className="h-4.5 w-4.5 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
            AI 추천 BEST 리스트
          </h2>
        </div>
        <p className="text-sm font-medium text-gray-500 sm:text-base">
          사용자의 검색 의도와 실시간 시장 데이터를 결합한 최적의 솔루션입니다.
        </p>
      </div>

      {/* 제품 리스트: 카드 간의 간격을 넓혀 가독성 확보 */}
      <div className="flex flex-col gap-8">
        {recommendations.map((product, index) => (
          <div
            key={product.product_id}
            className="animate-in fade-in slide-in-from-bottom-5 duration-700"
            style={{ animationDelay: `${index * 150}ms` }} // 순차적으로 나타나는 효과
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* 리스트 하단 안내 (선택 사항) */}
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-12 rounded-full bg-gray-200" />
      </div>
    </div>
  );
};

export default BestRecommendations;
