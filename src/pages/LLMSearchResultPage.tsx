import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AIAnalysisSection, BestRecommendations, CTASection } from '@/components/llmSearchResult';
import useLlmRecoMutation from '@/hooks/mutations/useLlmRecoMutation';

const LLMSearchResultPage: React.FC = () => {
  const { keyword } = useParams<{ keyword: string }>();
  const navigate = useNavigate();
  const { mutate, data, isPending, isError } = useLlmRecoMutation();

  useEffect(() => {
    if (keyword) {
      mutate({
        user_query: decodeURIComponent(keyword),
      });
    }
  }, [keyword, mutate]);

  // 로딩 상태
  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-blue-50 to-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#0d9dda]" />
          <p className="text-lg text-gray-700">AI가 상품을 분석하고 있습니다...</p>
        </div>
      </div>
    );
  }

  // 에러 상태
  if (isError || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-blue-50 to-white">
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-red-600">상품 추천을 불러오는데 실패했습니다.</p>
          <button
            onClick={() => navigate('/')}
            className="rounded-lg bg-[#0d9dda] px-6 py-2 text-white hover:bg-[#0b8bc4]"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // 데이터가 없는 경우
  if (!data.recommended_products || data.recommended_products.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-blue-50 to-white">
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-gray-700">추천 상품이 없습니다.</p>
          <button
            onClick={() => navigate('/')}
            className="rounded-lg bg-[#0d9dda] px-6 py-2 text-white hover:bg-[#0b8bc4]"
          >
            다시 검색하기
          </button>
        </div>
      </div>
    );
  }

  const transformedData = {
    aiAnalysis: {
      title: 'AI 분석 결과',
      description: data.analysis_message || '',
      budget: decodeURIComponent(keyword || ''),
    },
    recommendations: data.recommended_products,
    cta: {
      title: '더 많은 상품을 찾아보세요',
      subtitle: '지금 바로 AI 쇼핑 어시스턴트와 함께',
      highlight: '맞춤형 상품',
      buttonText: '전체 상품 보기',
    },
  };

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(239, 246, 255, 1) 0%, rgba(239, 246, 255, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      <div className="mx-auto max-w-5xl px-8 py-12">
        <AIAnalysisSection analysis={transformedData.aiAnalysis} />
        <div className="my-12">
          <BestRecommendations recommendations={transformedData.recommendations} />
        </div>
        <div className="my-12">
          <CTASection cta={transformedData.cta} />
        </div>
      </div>
    </div>
  );
};

export default LLMSearchResultPage;
