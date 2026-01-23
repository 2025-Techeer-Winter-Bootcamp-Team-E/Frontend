import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  ProductDetailResDto,
  ProductPricesResDto,
  ProductPriceTrendsResDto,
  ProductReviewAiSummaryResDto,
  ProductReviewsResDto,
  ProductsListParams,
  ProductsListResDto,
} from '@/types/productsType';

/**
 * 상품 상세 정보 조회
 * GET /products/{product_code}
 */
export const getProductDetail = (productCode: number) =>
  getAPIResponseData<ProductDetailResDto>({
    method: 'GET',
    url: API.PRODUCTS_CODE(productCode),
  });

/**
 * 월별 상품 최저가 조회
 * GET /products/{product_code}/price-trend
 */
export const getProductPriceTrends = (productCode: number) =>
  getAPIResponseData<ProductPriceTrendsResDto>({
    method: 'GET',
    url: API.PRODUCTS_CODE_PRICE_TRENDS(productCode),
  });

/**
 * 쇼핑몰 별 상품 가격 조회
 * GET /products/{product_code}/prices
 */
export const getProductPrices = (productCode: number) =>
  getAPIResponseData<ProductPricesResDto>({
    method: 'GET',
    url: API.PRODUCTS_CODE_PRICES(productCode),
  });

/**
 * 상품 리뷰 목록 조회
 * GET /products/{product_code}/reviews
 */
export const getProductReviews = (productCode: number, page: number = 1, size: number = 15) =>
  getAPIResponseData<ProductReviewsResDto>({
    method: 'GET',
    url: API.PRODUCTS_CODE_REVIEWS(productCode),
    params: { page, size },
  });

/**
 * AI 통합 리뷰 요약 조회
 * GET /products/{product_code}/reviews/summary
 */
export const getProductReviewAiSummary = (productCode: number) =>
  getAPIResponseData<ProductReviewAiSummaryResDto>({
    method: 'GET',
    url: API.PRODUCTS_ID_REVIEW_SUMMARY(productCode),
  });

/**
 * 상품 목록 조회
 * GET /products
 */
export const getProductsList = (params: ProductsListParams) =>
  getAPIResponseData<ProductsListResDto>({
    method: 'GET',
    url: API.PRODUCTS,
    params,
  });
