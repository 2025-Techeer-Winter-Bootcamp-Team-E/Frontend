import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AIAnalysisSection, BestRecommendations, CTASection } from '@/components/llmSearchResult';
import useLlmRecoMutation from '@/hooks/mutations/useLlmRecoMutation';
import { useDecodedParam } from '@/hooks/useDecodeParam';

const LLMSearchResultPage = () => {
  const { keyword } = useParams<{ keyword?: string }>();
  const decodedKeyword = useDecodedParam(keyword);

  const { mutate, data } = useLlmRecoMutation();

  useEffect(() => {
    if (!decodedKeyword) return;
    mutate({
      user_query: decodedKeyword,
    });
  }, [decodedKeyword, mutate]);

  const transformedData = useMemo(() => {
    return {
      aiAnalysis: {
        description: data?.analysis_message ?? '',
        keyword: decodedKeyword,
      },
      recommendations: data?.recommended_products ?? [],
    };
  }, [data, decodedKeyword]);

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
          <CTASection  />
        </div>
      </div>
    </div>
  );
};

export default LLMSearchResultPage;
