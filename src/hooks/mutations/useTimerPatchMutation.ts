import { patchPricePredictionId } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TimersIdPatchReqDto } from '@/types/timerType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTimerPatchMutation = (timer_id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: TimersIdPatchReqDto) => patchPricePredictionId(timer_id, body),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: QUERY_KEY.TIMER_MYPAGE,
      });
    },
  });
};

export default useTimerPatchMutation;
