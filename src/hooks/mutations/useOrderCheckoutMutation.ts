import { postTokenSingleItem } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TokenSingleItemReqDto } from '@/types/ordersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useOrderCheckoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: TokenSingleItemReqDto) => postTokenSingleItem(body),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: QUERY_KEY.TOKEN,
      });
    },
  });
};

export default useOrderCheckoutMutation;
