import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  ProductIdAllReviewsResDto,
  ProductIdReviewAiSummaryResDto,
  ProductIdReviewsReqDto,
  ProductIdReviewSummaryResDto,
  ProductIdTrendsResDto,
  ProductsIdPricesResDto,
  ProductsIdResDto,
} from '@/types/productsType';

// 상품 상세 정보 조회 GET
export const getProductsId = async (productId: number) => {
  return await getAPIResponseData<ProductsIdResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_ID(productId),
  });
};

// 상품 상세 정보 조회 GET
export const getProductsIdPrices = async (productId: number) => {
  return await getAPIResponseData<ProductsIdPricesResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_ID_PRICES(productId),
  });
};

// 상품 최저가 추이 그래프 조회 GET
export const getProductsIdPriceTrends = async (productId: number, period: number) => {
  return await getAPIResponseData<ProductIdTrendsResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_ID_PRICES_TRENDS(productId),
    params: { period },
  });
};

/**
 * LLM 리뷰 핵심 요약 및 장담점 조회 응답 GET
 */
export const getProductsIdReviewSummary = async (productId: number) => {
  return await getAPIResponseData<ProductIdReviewSummaryResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_ID_REVIEWS_SUMMARY(productId),
  });
};

/**
 * 상품 상세 페이지 전체 리뷰 목록 조회 응답 GET
 */
export const getProductsIdAllReview = async (product_id: number, page: number, size: number) => {
  return await getAPIResponseData<ProductIdAllReviewsResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_ID_REVIEWS(product_id),
    params: { page, size },
  });
};

/**
 * 상품 리뷰 등록 요청 POST
 */
export const postProductsIdReviews = async (product_id: number, body: ProductIdReviewsReqDto) => {
  return await getAPIResponseData<null, ProductIdReviewsReqDto>({
    method: 'POST',
    url: API.PRODUCTS_REVIEW_ID(product_id),
    data: body,
  });
};

/**
 * 상품 리뷰 삭제 DELETE
 */
export const deleteProductsIdReviews = async (review_id: number) => {
  return await getAPIResponseData<null, null>({
    method: 'DELETE',
    url: API.PRODUCTS_REVIEW_ID(review_id),
  });
};

/**
 * AI 통합 리뷰 조회(내용 요약, 키워드 추출, 장단점 요약) GET
 */
export const getProductsIdReviewAISummary = async (product_id: number) => {
  return await getAPIResponseData<ProductIdReviewAiSummaryResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_ID_REVIEW_AI_SUMMARY(product_id),
  });
};
