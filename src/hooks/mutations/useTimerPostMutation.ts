import { postPricePrediction } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TimerPostReqDto } from '@/types/timerType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTimerPostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: TimerPostReqDto) => postPricePrediction(body),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.TIMER_PRODUCT_ID(variables.product_code),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.TIMER_MYPAGE,
      });
    },
  });
};

export default useTimerPostMutation;
