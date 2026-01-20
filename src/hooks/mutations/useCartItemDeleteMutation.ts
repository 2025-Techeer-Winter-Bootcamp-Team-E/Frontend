import { delteeCartItem } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCartItemDeleteMutation = (cart_item_id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => delteeCartItem(cart_item_id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.CART,
      });
    },
  });
};
export default useCartItemDeleteMutation;
