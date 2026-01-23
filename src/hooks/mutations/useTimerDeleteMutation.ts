import { deleteTimer } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTimerDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTimer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.TIMER_MYPAGE });
    },
  });
};

export default useTimerDeleteMutation;
