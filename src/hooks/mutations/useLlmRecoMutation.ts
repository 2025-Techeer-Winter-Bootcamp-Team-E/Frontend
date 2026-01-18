import { postSearchLLMRecommendation } from '@/api/search';
import type { SearchLlmRecommendationReqDto } from '@/types/searchType';
import { useMutation } from '@tanstack/react-query';

const useLlmRecoMutation = () => {
  return useMutation({
    mutationFn: (body: SearchLlmRecommendationReqDto) => postSearchLLMRecommendation(body),
  });
};

export default useLlmRecoMutation;
