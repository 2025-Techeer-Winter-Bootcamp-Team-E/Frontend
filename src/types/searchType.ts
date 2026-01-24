import type { ProductSpecs } from '@/types/productsType';

/**
 * 검색창 입력 기반 추천 키워드 조회 응답
 * GET /search/autocomplete?keyword={keyword}
 */
export type SearchAutocompleteResDto = {
  suggestions: string[];
};

export type PopularSearchTermEntity = {
  rank: number;
  term: string;
};

/**
 * 인기 검색어 조회 응답
 * GET /search/popular
 */
export type SearchPopularResDto = {
  popular_terms: PopularSearchTermEntity[];
};

export type RecentSearchTermEntity = {
  id: number;
  term: string;
  searched_at: string;
};

/**
 * 최금 검색어 조회 응답
 * GET /search/recent
 */
export type SearchRecentResDto = {
  recent_terms: RecentSearchTermEntity[];
};

/** LLM 기반 상품 제안 검색 요청
 * POST /search/llm-recommendation
 */
export type SearchLlmRecommendationReqDto = {
  user_query: string;
};

export type LlmRecommendationEntity = {
  product_code: number;
  thumbnail_url: string;
  product_name: string;
  recommendation_reason: string;
  price: number;
  specs: ProductSpecs;
  product_detail_url: string;
};

/** LLM 기반 상품 제안 검색 응답
 * POST /search/llm-recommendation
 */
export type SearchLlmRecommendationResDto = {
  analysis_message: string;
  recommended_products: LlmRecommendationEntity[];
};

/** 쇼핑 리서치 검색 요청
 * POST /search/qeustion
 */
export type SearchShoppingResearchReqDto = {
  user_query: string;
};

export type ResearchQuestionEntity = {
  question_id: number;
  question: string;
  options: string[];
};

/** 쇼핑 리서치 검색 요청 응답 (질문 생성)
 * POST /search/questions
 */
export type SearchShoppingResearchResDto = {
  search_id: string;
  questions: ResearchQuestionEntity[];
};

export type ResearchQuestionAnswerEntity = {
  question_id: number;
  question: string;
  answer: string;
};

/** 쇼핑 리서치 요청 결과 요청 데이터
 * POST /search/shopping-research
 */
export type SearchShoppingResearchResultReqDto = {
  search_id: string;
  user_query: string;
  survey_contents: ResearchQuestionAnswerEntity[];
};

export type MallInfoEntity = {
  match_rank: number;
  is_lowest_price: boolean;
};

export type ShoppingResearchResultEntity = {
  similarity_score: number;
  product_image_url: string;
  product_name: string;
  product_code: number;
  recommendation_reason: string;
  price: number;
  performance_score: number;
  product_specs: ProductSpecs;
  ai_review_summary: string;
  product_detail_url: string;
  optimal_product_info: MallInfoEntity[];
};

/** 쇼핑 리서치 요청 응답 데이터
 * POST /search/shopping-research
 */
export type SearchShoppingResearchResultResDto = {
  user_query: string;
  products: ShoppingResearchResultEntity[];
};
