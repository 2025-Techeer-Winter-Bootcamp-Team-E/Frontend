import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AIAnalysisSection, BestRecommendations, CTASection } from '@/components/llmSearchResult';
import useLlmRecoMutation from '@/hooks/mutations/useLlmRecoMutation';

const LLMSearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('q') || '';

  const { mutate, data } = useLlmRecoMutation();

  useEffect(() => {
    if (!keyword) return;
    mutate({
      user_query: keyword,
    });
  }, [keyword, mutate]);

  const transformedData = useMemo(() => {
    return {
      aiAnalysis: {
        description: data?.analysis_message ?? '',
        keyword: keyword,
      },
      recommendations: data?.recommended_products ?? [],
    };
  }, [data, keyword]);

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(239, 246, 255, 1) 0%, rgba(239, 246, 255, 1) 100%)',
      }}
    >
      <div className="mx-auto max-w-5xl px-8 py-12">
        <AIAnalysisSection analysis={transformedData.aiAnalysis} />
        <div className="my-12">
          <BestRecommendations recommendations={transformedData.recommendations} />
        </div>
        <div className="my-12">
          <CTASection keyword={keyword} /> {/* ✅ keyword prop 전달 */}
        </div>
      </div>
    </div>
  );
};

export default LLMSearchResultPage;
