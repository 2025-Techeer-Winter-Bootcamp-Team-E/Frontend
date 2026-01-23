import { useMutation } from '@tanstack/react-query';
import { postSearchShoppingResearchResult } from '@/api/search';
import type {
  SearchShoppingResearchResultReqDto,
  SearchShoppingResearchResultResDto,
} from '@/types/searchType';

const useShoppingResultMutation = () => {
  return useMutation<
    SearchShoppingResearchResultResDto,
    unknown,
    SearchShoppingResearchResultReqDto
  >({
    mutationFn: (body: SearchShoppingResearchResultReqDto) =>
      postSearchShoppingResearchResult(body),
  });
};

export default useShoppingResultMutation;
