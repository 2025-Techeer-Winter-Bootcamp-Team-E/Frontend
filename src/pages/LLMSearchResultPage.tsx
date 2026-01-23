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
      <div className="mx-auto max-w-245 px-6">
        <section className="animate-in fade-in slide-in-from-bottom-4 mb-16 duration-1000">
          <AIAnalysisSection analysis={transformedData.aiAnalysis} />
        </section>
        <section className="animate-in fade-in slide-in-from-bottom-6 mb-24 delay-200 duration-1000">
          <BestRecommendations recommendations={transformedData.recommendations} />
        </section>
        <section className="animate-in fade-in zoom-in-95 delay-500 duration-1000">
          <CTASection keyword={keyword} />
        </section>
      </div>
    </div>
  );
};

export default LLMSearchResultPage;
