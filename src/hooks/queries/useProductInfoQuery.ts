import { getProductDetail } from '@/api/products';
import { QUERY_KEY } from '@/constants/queryKey';
import type { ProductDetailResDto } from '@/types/productsType';
import { useQuery } from '@tanstack/react-query';

const useProductInfoQuery = (product_code: number) =>
  useQuery<ProductDetailResDto>({
    queryKey: QUERY_KEY.PRODUCT_INFO(product_code),
    queryFn: () => getProductDetail(product_code),
    enabled: !!product_code,
  });

export default useProductInfoQuery;
