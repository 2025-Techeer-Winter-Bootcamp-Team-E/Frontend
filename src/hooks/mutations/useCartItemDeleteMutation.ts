import { deleteCartItem } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCartItemDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.CART });
    },
  });
};

export default useCartItemDeleteMutation;
