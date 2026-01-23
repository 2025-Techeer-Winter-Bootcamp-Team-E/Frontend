import { getTokenBalance } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { TokenBalanceResDto } from '@/types/ordersType';
import { useQuery } from '@tanstack/react-query';

const useTokenBalanceQuery = () =>
  useQuery<TokenBalanceResDto>({
    queryKey: QUERY_KEY.TOKEN,
    queryFn: getTokenBalance,
  });

export default useTokenBalanceQuery;
