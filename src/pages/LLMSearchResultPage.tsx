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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

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
    <div className="min-h-screen bg-[#F5F5F7] pt-32 pb-24">
      <div className="mx-auto max-w-[980px] px-6">
        {/* 상단 분석 요약: 그림자 대신 미세한 보더와 투명도 활용 */}
        <section className="animate-in fade-in slide-in-from-bottom-4 mb-16 duration-1000">
          <AIAnalysisSection analysis={transformedData.aiAnalysis} />
        </section>

        {/* 추천 리스트 섹션 */}
        <section className="animate-in fade-in slide-in-from-bottom-6 mb-24 delay-200 duration-1000">
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
