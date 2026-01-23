export type ProductSpecs = Record<string, string>;

export type PageInfo = {
  current_page: number;
  size: number;
  total_elements: number;
  total_pages: number;
};

export type ProductBase = {
  product_code: number;
  product_name: string;
  brand: string;
  specs: ProductSpecs;
  thumbnail_url: string;
};

/**
 * 상품 상세 정보 조회 응답
 * GET /products/{product_code}
 */
export type ProductDetailResDto = ProductBase & {
  price: number;
  category: string;
  product_image_url_list: string[];
  product_detail_url: string;
};

export type ProductPriceHistoryEntity = {
  date: string;
  price: number;
};

/**
 * 월별 상품 최저가 조회 응답
 * GET /products/{product_code}/price-trend
 */
export type ProductPriceTrendsResDto = {
  product_code: number;
  product_name: string;
  period_unit: 'month' | 'day';
  selected_period: number;
  price_history: ProductPriceHistoryEntity[];
};

export type MallPriceEntity = {
  mall_name: string;
  price: number;
  url: string;
};

/**
 * 쇼핑몰 별 상품 가격 조회 응답
 * GET /products/{product_code}/prices
 */
export type ProductPricesResDto = MallPriceEntity[];

export type ReviewEntity = {
  review_id: number;
  review_images: string[];
  author_name: string;
  rating: number;
  content: string;
  created_at: string;
};

export type ReviewPageInfo = PageInfo;

/**
 * 상품 리뷰 목록 조회 응답
 * GET /products/{product_code}/reviews
 */
export type ProductReviewsResDto = {
  pagination: ReviewPageInfo;
  average_rating: number;
  reviews: ReviewEntity[];
  has_next: boolean;
};

/**
 * AI 통합 리뷰 요약 조회
 * GET /products/{product_code}/reviews/summary
 */
export type ProductReviewAiSummaryResDto = {
  product_code: number;
  total_review_count: number;
  ai_summary: string;
  pros: string[];
  cons: string[];
  recommendation_score: number;
  score_reason: string;
  last_updated: string;
};

export type ProductListItem = ProductBase & {
  base_price: number;
  mall_prices: MallPriceEntity[];
};

/**
 * 카테고리별 상품 목록 조회 응답
 * GET /products
 */
export type ProductsListResDto = {
  pagination: PageInfo;
  products: ProductListItem[];
};

/**
 * 상품 목록 조회 파라미터
 */
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
