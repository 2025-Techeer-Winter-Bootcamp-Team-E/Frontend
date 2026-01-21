import { useMutation } from '@tanstack/react-query';
import { postSearchShoppingResearch } from '@/api/search';
import type {
  SearchShoppingResearchReqDto,
  SearchShoppingResearchResDto,
} from '@/types/searchType';

const useShoppingResearchMutation = () => {
  return useMutation<SearchShoppingResearchResDto, unknown, SearchShoppingResearchReqDto>({
    mutationFn: (body: SearchShoppingResearchReqDto) => postSearchShoppingResearch(body),
  });
};

export default useShoppingResearchMutation;
