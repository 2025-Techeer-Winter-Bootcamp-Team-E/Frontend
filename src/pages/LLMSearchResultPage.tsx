import { useEffect } from 'react';
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

  return (
    <div className="min-h-screen bg-[#F5F5F7] pt-32 pb-24">
      <div className="mx-auto max-w-245 px-6">
        <section className="animate-in fade-in slide-in-from-bottom-4 mb-16 duration-1000">
          <AIAnalysisSection analysisMessage={data?.analysis_message} keyword={keyword} />
        </section>
        <section className="animate-in fade-in slide-in-from-bottom-6 mb-24 delay-200 duration-1000">
          <BestRecommendations recommendedProducts={data?.recommended_products} />
        </section>
        <section className="animate-in fade-in zoom-in-95 delay-500 duration-1000">
          <CTASection keyword={keyword} />
        </section>
      </div>
    </div>
  );
};

export default LLMSearchResultPage;
