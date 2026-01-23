import { postTokenSingleItemCheckout } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useOrderCheckoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTokenSingleItemCheckout,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: QUERY_KEY.TOKEN });
    },
  });
};

export default useOrderCheckoutMutation;
