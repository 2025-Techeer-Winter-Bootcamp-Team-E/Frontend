import { postTokenRecharge } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TokenRechargeReqDto } from '@/types/ordersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTokenChargeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: TokenRechargeReqDto) => postTokenRecharge(body),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: QUERY_KEY.TOKEN,
      });
    },
  });
};

export default useTokenChargeMutation;
