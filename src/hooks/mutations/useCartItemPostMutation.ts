import { postCartItem } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { CartItemPostReqDto } from '@/types/ordersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCartItemPostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: CartItemPostReqDto) => postCartItem(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.CART,
      });
    },
  });
};
export default useCartItemPostMutation;
