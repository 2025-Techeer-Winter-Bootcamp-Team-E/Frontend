import type { ProductSpecs } from '@/types/searchType';

/**
 * 상품 상세 정보 조회 응답
 * GET /products/{product_code}
 */
export type ProductsCodeResDto = {
  product_name: string;
  product_code: number;
  brand: string;
  specs: ProductSpecs;
  base_price: number;
  category: string;
  thumbnail_url: string;
  product_image_url_list: string[];
  product_detail_url: string;
};

export type ProductsCodeHistoryEntity = {
  date: string;
  price: number;
};

/**
 * 월별 상품 최저가 조회 응답
 * GET /products/{product_code}/price-trend
 */
export type ProductCodePriceTrendsResDto = {
  product_code: number;
  product_name: string;
  period_unit: string;
  selected_period: number;
  price_history: ProductsCodeHistoryEntity[];
};

export type ProductPriceEntity = {
  mall_name: string;
  price: number;
  url: string;
};

/**
 * 쇼핑몰 별 상품 가격 조회 GET
 * GET /products/{product_code}/prices
 */
export type ProductCodePricesResDto = ProductPriceEntity[];

export type ReivewEntity = {
  review_id: number;
  review_images: string;
  author_name: string;
  rating: number;
  content: string;
  created_at: string;
};

type ReviewPaging = {
  current_page: number;
  size: number;
  total_elements: number;
  total_pages: number;
};

/**
 * 상품 상세 페이지 전체 리뷰 목록 조회 응답
 * GET /products/{product_code}/reviews&page={page}&size={size}
 */
export type ProductCodeAllReviewsResDto = {
  pagination: ReviewPaging;
  average_rating: number;
  reviews: ReivewEntity[];
  has_next: boolean;
};

/**
 * AI 통합 리뷰 조회(내용 요약, 키워드 추출, 장단점 요약)
 * GET /products/{product_code}/reviews/summary
 */
export type ProductCodeReviewAiSummaryResDto = {
  product_id: number;
  product_code: number;
  total_review_count: number;
  ai_summary: string;
  pros: string[];
  cons: string[];
  recommendation_score: number;
  score_reason: string;
  last_updated: string;
};

/**
 * 카테고리별 상품 목록 조회 응답
 * GET /products?
 */
export type ProductsListResDto = {
  pagination: {
    current_page: number;
    size: number;
    count: number;
    total_pages: number;
  };
  products: {
    product_code: number;
    product_name: string;
    brand: string;
    specs: ProductSpecs;
    base_price: number;
    category: string;
    thumbnail_url: string;
    mall_price: {
      mall_name: string;
      price: number;
      url: string;
    }[];
  }[];
};

export type ProductsListParams = {
  q?: string;
  main_cat?: string;
  sub_cat?: string;
  brand?: string;
  min_price?: number;
  max_price?: number;
  sort?: 'price_low' | 'price_high' | 'popular';
  page?: number;
  page_size?: number;
};
