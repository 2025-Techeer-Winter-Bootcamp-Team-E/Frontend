import { getProductPriceTrends } from '@/api/products';
import { QUERY_KEY } from '@/constants/queryKey';
import type { ProductPriceTrendsResDto } from '@/types/productsType';
import { useQuery } from '@tanstack/react-query';

const useProductTrendQuery = (product_code: number) =>
  useQuery<ProductPriceTrendsResDto>({
    queryKey: QUERY_KEY.PRODUCT_TREND(product_code),
    queryFn: () => getProductPriceTrends(product_code),
    enabled: !!product_code,
  });

export default useProductTrendQuery;
