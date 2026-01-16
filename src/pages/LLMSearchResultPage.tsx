import React from 'react';
import { AIAnalysisSection, BestRecommendations, CTASection } from '@/components/llmSearchResult';
import { Package, ShoppingCart, HeadphonesIcon } from 'lucide-react';
import llmSearchResultData from '@/data/llmSearchResult.json';

// 아이콘 매핑
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Package,
  ShoppingCart,
  HeadphonesIcon,
};

// JSON 데이터를 TypeScript 형식으로 변환
const data = {
  ...llmSearchResultData,
  features: llmSearchResultData.features.map((feature) => ({
    ...feature,
    icon: iconMap[feature.icon],
  })),
};

const LLMSearchResultPage: React.FC = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(239, 246, 255, 1) 0%, rgba(239, 246, 255, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      <div className="mx-auto max-w-[1024px] px-8 py-12">
        <AIAnalysisSection analysis={data.aiAnalysis} />
        <div className="my-12">
          <BestRecommendations recommendations={data.recommendations} />
        </div>
        <div className="my-12">
          <CTASection cta={data.cta} features={data.features} />
        </div>
      </div>
    </div>
  );
};

export default LLMSearchResultPage;
