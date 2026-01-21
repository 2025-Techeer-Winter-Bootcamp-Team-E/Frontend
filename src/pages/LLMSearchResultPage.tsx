import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AIAnalysisSection, BestRecommendations, CTASection } from '@/components/llmSearchResult';
import useLlmRecoMutation from '@/hooks/mutations/useLlmRecoMutation';

const LLMSearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('q') || '';
  const { mutate, data } = useLlmRecoMutation();

  useEffect(() => {
    if (keyword) mutate({ user_query: keyword });
  }, [keyword, mutate]);

  const transformedData = useMemo(
    () => ({
      aiAnalysis: {
        description: data?.analysis_message ?? '',
        keyword: keyword,
      },
      recommendations: data?.recommended_products ?? [],
    }),
    [data, keyword],
  );

  return (
    <div className="min-h-screen bg-[#F8F9FB] pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* 상단 분석 요약 */}
        <section className="animate-in fade-in slide-in-from-bottom-4 mb-12 duration-700">
          <AIAnalysisSection analysis={transformedData.aiAnalysis} />
        </section>

        {/* 추천 리스트 섹션 */}
        <section className="animate-in fade-in slide-in-from-bottom-6 mb-20 delay-200 duration-1000">
          <div className="mb-10 flex items-end justify-between px-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-gray-900">
                Best Recommendations
              </h2>
              <p className="mt-2 font-medium text-gray-500">
                AI가 엄선한 가장 가치 있는 선택지입니다.
              </p>
            </div>
            <span className="text-sm font-bold text-indigo-600">
              {transformedData.recommendations.length} Products Found
            </span>
          </div>
          <BestRecommendations recommendations={transformedData.recommendations} />
        </section>

        {/* 하단 CTA */}
        <section className="animate-in fade-in zoom-in-95 delay-500 duration-1000">
          <CTASection keyword={keyword} />
        </section>
      </div>
    </div>
  );
};

export default LLMSearchResultPage;
