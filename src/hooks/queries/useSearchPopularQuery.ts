import { getSearchPopular } from '@/api/search';
import { QUERY_KEY } from '@/constants/queryKey';
import type { SearchPopularResDto } from '@/types/searchType';
import { useQuery } from '@tanstack/react-query';

const useSearchPopularQuery = () => {
  return useQuery<SearchPopularResDto>({
    queryKey: QUERY_KEY.SEARCH_POPULAR,
    queryFn: getSearchPopular,
    staleTime: 1000 * 60 * 10,
  });
};

export default useSearchPopularQuery;
