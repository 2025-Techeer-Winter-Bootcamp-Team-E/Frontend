/**
 * 검색창 입력 기반 추천 키워드 조회 응답
 * GET /search/autocomplete
 */
export type SearchAutocompleteResDto = {
  suggestions: string[];
};

type PopularTermsEntity = {
  rank: number;
  term: string;
};

type RecentTermsEntity = {
  id: number;
  term: string;
  searchedAt: string;
};

/**
 * 검색창 입력 기반 추천 키워드 조회 응답
 * GET /search/terms
 */
export type SearchTermsResDto = {
  popular_terms: PopularTermsEntity[];
  recent_terms: RecentTermsEntity[];
};

/** LLM 기반 상품 제안 검색 요청
 * POST /search/llm-recommendation
 */

export type SearchLlmRecommendationReqDto = {
  prompt: string;
};

type LLMRecommendationEntity = {
  product_id: number;
  product_name: string;
  reason: string;
  productDetail?: string | null;
};

/** LLM 기반 상품 제안 검색 응답
 * POST /search/llm-recommendation
 */
export type SearchLlmRecommendationResDto = LLMRecommendationEntity[];

type QuestionEntity = {
  question_id: number;
  question: string;
  answer: string;
};

/** 쇼핑 리서치 검색 요청
 * POST /search/shopping-research
 */
export type SearchShoppingResearchReqDto = {
  searchText: string;
  surveyContents: QuestionEntity[];
};

export type ProductSpecs = Record<string, string>;

type OptimalProductInfo = {
  match_rank: number;
  is_lowest_price: boolean;
};

type ShoppingResearchResultEntity = {
  similarity_score: number;
  product_image_url: string;
  product_name: string;
  product_code: string;
  recommendation_reason: string;
  price: number;
  performance_score: number;
  product_specs: ProductSpecs;
  ai_review_summary: string;
  product_detail_url: string;
  optimal_product_info: OptimalProductInfo;
};

/** 쇼핑 리서치 검색 요청 응답
 * POST /search/shopping-research
 */
export type SearchShoppingResearchResDto = ShoppingResearchResultEntity[];
