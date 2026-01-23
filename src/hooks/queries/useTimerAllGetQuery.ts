import { getTimersMypage } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TimerListResDto } from '@/types/timerType';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const useTimerAllGetQuery = (user_id: number, page: number, size: number) => {
  return useQuery<TimerListResDto>({
    queryKey: QUERY_KEY.TIMER_MY_LIST(user_id, page, size),
    queryFn: () => getTimersMypage(user_id, page, size),
    enabled: !!user_id,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });
};

export default useTimerAllGetQuery;
