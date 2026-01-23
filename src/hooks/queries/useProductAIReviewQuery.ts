import { getProductReviewAiSummary } from '@/api/products';
import { QUERY_KEY } from '@/constants/queryKey';
import type { ProductReviewAiSummaryResDto } from '@/types/productsType';
import { useQuery } from '@tanstack/react-query';

const useProductAIReviewQuery = (product_code: number) =>
  useQuery<ProductReviewAiSummaryResDto>({
    queryKey: QUERY_KEY.PRODUCT_REVIEW_AI(product_code),
    queryFn: () => getProductReviewAiSummary(product_code),
    enabled: !!product_code,
    staleTime: 1000 * 60 * 30,
  });

export default useProductAIReviewQuery;
