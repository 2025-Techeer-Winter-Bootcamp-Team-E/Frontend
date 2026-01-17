import type { ProductSpecs } from '@/types/searchType';

/**
 * 상품 상세 정보 조회 응답
 * GET /products/{productId}
 */
export type ProductsIdResDto = {
  product_name: number;
  brand: string;
  specs: ProductSpecs;
  base_price: number;
  category: string;
  thumbnail_url: string;
};

export type ProductPriceEntity = {
  mall_name: string;
  price: number;
  url: string;
};

/**
 * 상품 가격 비교 조회 응답
 * GET /products/{productId}/prices
 */
export type ProductsIdPricesResDto = ProductPriceEntity[];

export type PriceHistoryEntity = {
  date: string;
  price: number;
};

/**
 * 상품 최저가 추이 그래프 조회 응답
 * GET /products/{productId}/price-trends
 */
export type ProductIdTrendsResDto = {
  product_name: string;
  period_unit: string;
  selected_period: number;
  price_history: PriceHistoryEntity[];
};

/**
 * LLM 리뷰 핵심 요약 및 장담점 조회 응답
 * GET /products/{productId}/reviews/summary
 */
export type ProductIdReviewSummaryResDto = {
  summary: string;
  pros: string[];
  cons: string[];
  keywords: string[];
};

export type ReivewEntity = {
  review_id: number;
  author_name: string;
  rating: number;
  content: string;
  created_at: string;
};

/**
 * 상품 상세 페이지 전체 리뷰 목록 조회 응답
 * GET /products/{productId}/reviews/summary
 */
export type ProductIdAllReviewsResDto = {
  total_count: number;
  average_rating: number;
  reviews: ReivewEntity[];
};

/**
 * 상품별 리뷰 등록 요청
 * POST /products/{productId}/reviews
 */
export type ProductIdReviewsReqDto = {
  review_id: number;
  content: string;
};

/**
 * AI 통합 리뷰 조회(내용 요약, 키워드 추출, 장단점 요약)
 * GET /products/{productId}/reviews/ai-summary
 */
export type ProductIdReviewAiSummaryResDto = {
  product_id: number;
  summary: string;
  analyzed_review_count: number;
  keywords: string[];
};
