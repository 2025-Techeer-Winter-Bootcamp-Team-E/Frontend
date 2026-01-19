import { getPricePredictionIdAnalysis } from '@/api/timer';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TimersIdGetResDto } from '@/types/timerType';
import { useQuery } from '@tanstack/react-query';

const useTimerGetQuery = (timer_id: number) => {
  return useQuery<TimersIdGetResDto>({
    queryKey: QUERY_KEY.TIMER_ID(timer_id),
    queryFn: () => getPricePredictionIdAnalysis(timer_id),
    enabled: !!timer_id,
    
  });
};

export default useTimerGetQuery;
