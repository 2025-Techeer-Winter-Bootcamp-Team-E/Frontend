import { getTimerByProductCode } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TimerGetByProductCodeResDto } from '@/types/timerType';
import { useQuery } from '@tanstack/react-query';

const useTimerGetQuery = (product_code: number) =>
  useQuery<TimerGetByProductCodeResDto>({
    queryKey: QUERY_KEY.TIMER_PRODUCT_ID(product_code),
    queryFn: () => getTimerByProductCode(product_code),
    enabled: !!product_code,
  });

export default useTimerGetQuery;
