import { getSearchRecent } from '@/api/search';
import { QUERY_KEY } from '@/constants/queryKey';
import type { SearchRecentResDto } from '@/types/searchType';
import { useQuery } from '@tanstack/react-query';

const useSearchRecentQuery = () => {
  return useQuery<SearchRecentResDto>({
    queryKey: QUERY_KEY.SEARCH_RECENT,
    queryFn: getSearchRecent,
    staleTime: 1000 * 60 * 10,
  });
};

export default useSearchRecentQuery;
