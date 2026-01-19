import { getProductsCodePriceTrends } from '@/api/products';
import { QUERY_KEY } from '@/constants/queryKey';
import type { ProductCodePriceTrendsResDto } from '@/types/productsType';
import { useQuery } from '@tanstack/react-query';

const useProductTrendQuery = (product_code: number) => {
  return useQuery<ProductCodePriceTrendsResDto>({
    queryKey: QUERY_KEY.PRODUCT_TREND(product_code),
    queryFn: () => getProductsCodePriceTrends(product_code),
    enabled: !!product_code,
  });
};

export default useProductTrendQuery;
