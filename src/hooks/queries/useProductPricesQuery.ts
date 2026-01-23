import { getProductPrices } from '@/api/products';
import { QUERY_KEY } from '@/constants/queryKey';
import type { ProductPricesResDto } from '@/types/productsType';
import { useQuery } from '@tanstack/react-query';

const useProductPricesQuery = (product_code: number) => {
  return useQuery<ProductPricesResDto>({
    queryKey: QUERY_KEY.PRODUCT_PRICES(product_code),
    queryFn: () => getProductPrices(product_code),
    enabled: !!product_code,
    refetchInterval: 1000 * 60,
  });
};

export default useProductPricesQuery;
