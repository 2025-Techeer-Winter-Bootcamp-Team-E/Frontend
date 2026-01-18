import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  ProductCodeAllReviewsResDto,
  ProductCodePricesResDto,
  ProductCodePriceTrendsResDto,
  ProductCodeReviewAiSummaryResDto,
  ProductsCodeResDto,
} from '@/types/productsType';

// 상품 상세 정보 조회 GET
export const getProductsCode = async (product_code: number) => {
  return await getAPIResponseData<ProductsCodeResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_CODE(product_code),
  });
};

// 월별 상품 최저가 조회 GET
export const getProductsCodePriceTrends = async (product_code: number) => {
  return await getAPIResponseData<ProductCodePriceTrendsResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_CODE_PRICE_TRENDS(product_code),
  });
};

/**
 * 쇼핑몰 별 상품 가격 조회 응답 GET
 */
export const getProductsIdReviewSummary = async (product_code: number) => {
  return await getAPIResponseData<ProductCodePricesResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_CODE_PRICES(product_code),
  });
};

/**
 * 상품 상세 페이지 전체 리뷰 목록 조회 응답 GET
 */
export const getProductsIdAllReview = async (product_code: number, page: number, size: number) => {
  return await getAPIResponseData<ProductCodeAllReviewsResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_CODE_REVIEWS(product_code),
    params: { page, size },
  });
};

/**
 * AI 통합 리뷰 조회(내용 요약, 키워드 추출, 장단점) GET
 */
export const getProductsIdReviewAISummary = async (product_code: number) => {
  return await getAPIResponseData<ProductCodeReviewAiSummaryResDto, null>({
    method: 'GET',
    url: API.PRODUCTS_ID_REVIEW_SUMMARY(product_code),
  });
};
