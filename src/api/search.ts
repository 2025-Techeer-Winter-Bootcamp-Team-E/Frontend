import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type { SearchAutocompleteResDto, SearchLlmRecommendationReqDto, SearchLlmRecommendationResDto, SearchShoppingResearchReqDto, SearchShoppingResearchResDto, SearchTermsResDto } from '@/types/searchType';

// 검색창 입력 키워드와 관련된 추천 검색어 리스트 자동완성 GET
export const getSearchAutocomplete = async (keyword: string) => {
  return await getAPIResponseData<SearchAutocompleteResDto, null>({
    method: 'GET',
    url: API.SEARCH_AUTOCOMPLETE,
    params: { keyword },
  });
};


// 인기/최근 검색어 GET
export const getSearchTerms = async () => {
  return await getAPIResponseData<SearchTermsResDto, null>({
    method: 'GET',
    url: API.SEARCH_TERMS,
  });
};


// 사용자 입력 LLM 기반 상품 제안 검색 POST
export const postSearchLLMRecommendation = async (body : SearchLlmRecommendationReqDto) => {
  return await getAPIResponseData<SearchLlmRecommendationResDto, SearchLlmRecommendationReqDto>({
    method: 'POST',
    url: API.SEARCH_LLM_RECOMMENDATION,
    data : body
  });
};


// 사용자 입력 쇼핑 리서치 결과 POST
export const postSearchShoppingResearch = async (body : SearchShoppingResearchReqDto) => {
  return await getAPIResponseData<SearchShoppingResearchResDto, SearchShoppingResearchReqDto>({
    method: 'POST',
    url: API.SEARCH_SHOPPING_RESEARCH,
    data : body
  });
};
