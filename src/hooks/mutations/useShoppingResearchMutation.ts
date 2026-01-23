import { useMutation } from '@tanstack/react-query';
import { postSearchShoppingResearch } from '@/api/search';
import type {
  SearchShoppingResearchReqDto,
  SearchShoppingResearchResDto,
} from '@/types/searchType';

const useShoppingResearchMutation = () =>
  useMutation<SearchShoppingResearchResDto, unknown, SearchShoppingResearchReqDto>({
    mutationFn: postSearchShoppingResearch,
  });

export default useShoppingResearchMutation;
