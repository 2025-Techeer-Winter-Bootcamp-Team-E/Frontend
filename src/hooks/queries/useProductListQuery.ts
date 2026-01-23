import { useQuery } from '@tanstack/react-query';
import { getProductsList } from '@/api/products';
import { QUERY_KEY } from '@/constants/queryKey';
import type { ProductsListParams } from '@/types/productsType';

const useProductListQuery = (params: ProductsListParams) =>
  useQuery({
    queryKey: QUERY_KEY.PRODUCT_LIST({
      q: params.q,
      page: params.page ?? 1,
      page_size: params.page_size ?? 20,
      main_cat: params.main_cat,
      sub_cat: params.sub_cat,
      brand: params.brand,
      min_price: params.min_price,
      max_price: params.max_price,
      sort: params.sort ?? 'popular',
    }),
    queryFn: () => getProductsList(params),
    placeholderData: (previousData) => previousData,
  });

export default useProductListQuery;
