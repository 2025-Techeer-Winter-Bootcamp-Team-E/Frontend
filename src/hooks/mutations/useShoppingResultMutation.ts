import { useMutation } from '@tanstack/react-query';
import { postSearchShoppingResearchResult } from '@/api/search';
import type {
  SearchShoppingResearchResultReqDto,
  SearchShoppingResearchResultResDto,
} from '@/types/searchType';

const useShoppingResultMutation = () =>
  useMutation<SearchShoppingResearchResultResDto, unknown, SearchShoppingResearchResultReqDto>({
    mutationFn: postSearchShoppingResearchResult,
  });

export default useShoppingResultMutation;
