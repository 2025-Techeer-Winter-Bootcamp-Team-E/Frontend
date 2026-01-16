import React from 'react';
import {
  StatusBanner,
  AnalysisSummary,
  FeaturedProductCard,
  ComparisonTable,
  SituationCard,
  CTASection,
} from '@/components/shoppingResearchResult';
import { Target, Gift } from 'lucide-react';
import shoppingResearchResultData from '@/data/shoppingResearchResult.json';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/routes/path';

// 아이콘 매핑
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Gift,
};

const ShoppingResearchResultPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate(PATH.SHOPPING_RESEARCH);
  };

  // 아이콘 매핑 적용
  const situations = shoppingResearchResultData.situations.map((situation) => ({
    ...situation,
    icon: iconMap[situation.icon],
  }));

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(245, 247, 248, 1) 0%, rgba(245, 247, 248, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      <div className="mx-auto max-w-[1280px] px-8 py-8">
        {/* 상태 배너 */}
        <div className="mb-8">
          <StatusBanner
            text={shoppingResearchResultData.status.text}
            mode={shoppingResearchResultData.status.mode}
          />
        </div>

        <div className="flex flex-col gap-12">
          {/* AI 분석 요약 */}
          <AnalysisSummary
            title={shoppingResearchResultData.analysis.title}
            content={shoppingResearchResultData.analysis.content}
          />

          {/* 최적 상품 추천 */}
          <FeaturedProductCard product={shoppingResearchResultData.featuredProduct} />

          {/* 비교표 */}
          <ComparisonTable
            title={shoppingResearchResultData.comparison.title}
            products={shoppingResearchResultData.comparison.products}
          />

          {/* 상황별 상품 추천 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="scale-y-[-1]">
                <Target className="w-6 h-7 text-[#0d9dda]" />
              </div>
              <h2 className="text-xl font-bold text-[#111827] leading-[28px]">상황별 상품 추천</h2>
            </div>
            <div className="flex gap-6">
              {situations.map((situation, index) => (
                <SituationCard
                  key={index}
                  icon={situation.icon}
                  title={situation.title}
                  description={situation.description}
                  highlight={situation.highlight}
                  iconColor={situation.iconColor}
                  highlightColor={situation.highlightColor}
                />
              ))}
            </div>
          </div>

          {/* CTA 섹션 */}
          <CTASection
            buttonText={shoppingResearchResultData.cta.buttonText}
            inputPrompt={shoppingResearchResultData.cta.inputPrompt}
            onRetry={handleRetry}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingResearchResultPage;
