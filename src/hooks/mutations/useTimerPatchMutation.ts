import { patchPricePredictionId } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TimersIdPatchReqDto } from '@/types/timerType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type PatchVariables = {
  timer_id: number;
  body: TimersIdPatchReqDto;
};

const useTimerPatchMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ timer_id, body }: PatchVariables) => patchPricePredictionId(timer_id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.TIMER_MYPAGE,
      });
    },
  });
};

export default useTimerPatchMutation;
