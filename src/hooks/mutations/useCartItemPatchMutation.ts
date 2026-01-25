import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchCartItem } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';

const useCartItemPatchMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ cartItemId, quantity }: { cartItemId: number; quantity: number }) =>
      patchCartItem(cartItemId, { quantity }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.CART });
    },
  });
};

export default useCartItemPatchMutation;
