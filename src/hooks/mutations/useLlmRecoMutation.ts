import { postSearchLLMRecommendation } from '@/api/search';
import { useMutation } from '@tanstack/react-query';

const useLlmRecoMutation = () =>
  useMutation({
    mutationFn: postSearchLLMRecommendation,
  });

export default useLlmRecoMutation;
