import { postTimer } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTimerPostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTimer,
    onSuccess: (_data, { product_code }) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.TIMER_PRODUCT_ID(product_code),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.TIMER_MYPAGE,
      });
    },
  });
};

export default useTimerPostMutation;
