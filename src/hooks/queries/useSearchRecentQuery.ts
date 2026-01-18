import { getSearchRecent } from '@/api/search';
import { QUERY_KEY } from '@/constants/queryKey';
import type { SearchRecentResDto } from '@/types/searchType';
import { useQuery } from '@tanstack/react-query';

const useSearchRecentQuery = (enabled: boolean) => {
  return useQuery<SearchRecentResDto>({
    queryKey: QUERY_KEY.SEARCH_RECENT,
    queryFn: getSearchRecent,
    staleTime: 1000 * 60 * 10,
    enabled,
  });
};

export default useSearchRecentQuery;
