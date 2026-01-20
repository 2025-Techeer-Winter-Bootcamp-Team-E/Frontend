import { postCartItemsCheckout } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { CartItemsReqDto } from '@/types/ordersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCheckoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: CartItemsReqDto) => postCartItemsCheckout(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.CART,
      });
    },
  });
};
export default useCheckoutMutation;
