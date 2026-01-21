import { useMutation } from '@tanstack/react-query';
import { postSearchShoppingResearchResult } from '@/api/search';
import type {
  SearchShoppingResearchResultReqDto,
  SearchShoppingResearchResultResDto,
} from '@/types/searchType';

const useShoppingResultMutation = () => {
  return useMutation<
    SearchShoppingResearchResultResDto, // 성공 시 반환 타입
    unknown, // 에러 타입
    SearchShoppingResearchResultReqDto // 요청 바디 타입
  >({
    mutationFn: (body: SearchShoppingResearchResultReqDto) =>
      postSearchShoppingResearchResult(body),
  });
};

export default useShoppingResultMutation;
