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
  const { mutate, data, isPending, isError } = useShoppingResultMutation();

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

  const products = data?.product || [];
  const topProduct = products[0];
  const comparisonProducts = products.slice(1);

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] pt-12 pb-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <FeaturedProductCard product={topProduct} />
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
