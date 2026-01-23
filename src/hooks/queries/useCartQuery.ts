import { getCartItems } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { CartAllItemsResDto } from '@/types/ordersType';
import { useQuery } from '@tanstack/react-query';

const useCartQuery = () => {
  return useQuery<CartAllItemsResDto>({
    queryKey: QUERY_KEY.CART,
    queryFn: getCartItems,
  });
};

export default useCartQuery;
