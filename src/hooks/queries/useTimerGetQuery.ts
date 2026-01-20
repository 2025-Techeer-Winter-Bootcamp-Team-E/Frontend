import { getTimersByProductId } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TimersIdGetResDto } from '@/types/timerType';
import { useQuery } from '@tanstack/react-query';

const useTimerGetQuery = (product_code: number) => {
  return useQuery<TimersIdGetResDto>({
    queryKey: QUERY_KEY.TIMER_PRODUCT_ID(product_code),
    queryFn: () => getTimersByProductId(product_code),
    enabled: !!product_code,
  });
};

export default useTimerGetQuery;
