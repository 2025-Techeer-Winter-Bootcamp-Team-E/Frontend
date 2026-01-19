import { deletePricePredictionId } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTimerDeleteMutation = (timer_id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deletePricePredictionId(timer_id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.TIMER_MYPAGE,
      });
      queryClient.removeQueries({
        queryKey: QUERY_KEY.TIMER_ID(timer_id),
      });
    },
  });
};
export default useTimerDeleteMutation;
