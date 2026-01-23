import { getSearchAutocomplete } from '@/api/search';
import { QUERY_KEY } from '@/constants/queryKey';
import type { SearchAutocompleteResDto } from '@/types/searchType';
import { useQuery } from '@tanstack/react-query';

const useAutocompleteQuery = (keyword: string) => {
  return useQuery<SearchAutocompleteResDto>({
    queryKey: QUERY_KEY.SEARCH_KEYWORD(keyword),
    queryFn: () => getSearchAutocomplete(keyword),
    enabled: keyword.trim().length > 0,
  });
};

export default useAutocompleteQuery;
