import { getProductsIdAllReview } from '@/api/products';
import { QUERY_KEY } from '@/constants/queryKey';
import type { ProductCodeAllReviewsResDto } from '@/types/productsType';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const useProductReviewQuery = (product_code: number, page: number, size: number = 10) => {
  return useQuery<ProductCodeAllReviewsResDto>({
    queryKey: QUERY_KEY.PRODUCT_REVIEW(product_code, page, size),
    queryFn: () => getProductsIdAllReview(product_code, page, size),
    enabled: !!product_code,
    staleTime: 1000 * 60 * 30,
    placeholderData: keepPreviousData,
  });
};

export default useProductReviewQuery;
