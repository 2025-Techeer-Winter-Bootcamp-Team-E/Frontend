import { postSearchShoppingResearch } from '@/api/search';
import type { SearchShoppingResearchReqDto } from '@/types/searchType';
import { useMutation } from '@tanstack/react-query';

const useShoppingResearchMutation = () => {
  return useMutation({
    mutationFn: (body: SearchShoppingResearchReqDto) => postSearchShoppingResearch(body),
  });
};

export default useShoppingResearchMutation;
