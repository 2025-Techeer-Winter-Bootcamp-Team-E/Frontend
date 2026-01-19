import { getProductsCode } from '@/api/products';
import { QUERY_KEY } from '@/constants/queryKey';
import type { ProductsCodeResDto } from '@/types/productsType';
import { useQuery } from '@tanstack/react-query';

const useProductInfoQuery = (product_code: number) => {
  return useQuery<ProductsCodeResDto>({
    queryKey: QUERY_KEY.PRODUCT_INFO(product_code),
    queryFn: () => getProductsCode(product_code),
    enabled: !!product_code,
  });
};

export default useProductInfoQuery;
