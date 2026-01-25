import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import useShoppingResultMutation from '@/hooks/mutations/useShoppingResultMutation';
import {
  ComparisonTable,
  CTASection,
  FeaturedProductCard,
} from '@/components/shoppingResearchResult';
import SearchModal from '@/components/layout/SearchModal';
import { PATH } from '@/routes/path';
import { SEARCH_MODE } from '@/constants/searchMode';
import Loading from '@/components/layout/Loading';
import Error from '@/components/layout/Error';

interface LocationState {
  user_query: string;
  survey_contents: Array<{
    question_id: number;
    question: string;
    answer: string;
  }>;
  search_id: string;
}

const ShoppingResearchResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const state = location.state as LocationState | null;

  const searchIdFromUrl = searchParams.get('search_id');
  const userQueryFromUrl = searchParams.get('q');

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { mutate, data, isPending, isError, error } = useShoppingResultMutation();

  useEffect(() => {
    if (state?.search_id && state?.user_query && state?.survey_contents) {
      mutate({
        search_id: state.search_id,
        user_query: state.user_query,
        survey_contents: state.survey_contents,
      });
    } else if (!searchIdFromUrl || !userQueryFromUrl) {
      navigate(PATH.SHOPPING_RESEARCH);
    }
  }, [
    state?.search_id,
    state?.user_query,
    state?.survey_contents,
    mutate,
    searchIdFromUrl,
    userQueryFromUrl,
    navigate,
  ]);

  // 개발 환경에서 디버깅 로그
  if (import.meta.env.MODE === 'development') {
    if (data) {
      console.log('🔵 ShoppingResearchResultPage - data:', data);
      console.log('🔵 ShoppingResearchResultPage - product:', data.product);
    }
    if (isError) {
      console.error('🔴 ShoppingResearchResultPage - error:', error);
    }
  }

  const products = data?.product || [];
  const topProduct = products[0];
  const comparisonProducts = products.slice(1);

  if (isPending) {
    return <Loading />;
  }
  
  if (isError) {
    // 에러 메시지 추출
    let errorMessage = '쇼핑 리서치 결과를 불러오는 중 문제가 발생했습니다.';
    if (error && typeof error === 'object') {
      const axiosError = error as any;
      if (axiosError?.response?.data?.error) {
        errorMessage = axiosError.response.data.error;
      } else if (axiosError?.response?.data?.message) {
        errorMessage = axiosError.response.data.message;
      } else if (axiosError?.message) {
        errorMessage = axiosError.message;
      }
    }
    
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-xl font-semibold text-red-600">오류가 발생했습니다</h2>
          <p className="mb-4 text-gray-600">{errorMessage}</p>
          {import.meta.env.MODE === 'development' && error && (
            <details className="mt-4 max-w-2xl">
              <summary className="cursor-pointer text-sm text-gray-500">상세 에러 정보 (개발 모드)</summary>
              <pre className="mt-2 max-h-96 overflow-auto rounded bg-gray-100 p-4 text-left text-xs">
                {JSON.stringify(error, null, 2)}
              </pre>
            </details>
          )}
          <button
            onClick={() => navigate(PATH.SHOPPING_RESEARCH)}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            다시 검색하기
          </button>
        </div>
      </div>
    );
  }

  // 상품이 없는 경우
  if (!products || products.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">검색 결과가 없습니다</h2>
          <p className="mb-4 text-gray-600">
            조건에 맞는 상품을 찾지 못했습니다. 다른 검색어로 시도해보세요.
          </p>
          <button
            onClick={() => navigate(PATH.SHOPPING_RESEARCH)}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            다시 검색하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] pt-12 pb-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        {topProduct && <FeaturedProductCard product={topProduct} />}
        {comparisonProducts.length > 0 && <ComparisonTable products={comparisonProducts} />}
        <CTASection buttonText="다시 검색하기" onRetry={() => setIsSearchModalOpen(true)} />
      </div>
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        initialType={SEARCH_MODE.SHOPPING_RESEARCH.id}
      />
    </div>
  );
};

export default ShoppingResearchResultPage;
