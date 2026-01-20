import { API } from '@/constants/api';
import {
  productAIReviews,
  productDetail,
  productPrices,
  productReviews,
  productTrend,
} from '@/data/products';
import { http, HttpResponse } from 'msw';

export const productsHandler = [
  http.get(API.PRODUCTS_CODE(1), () => {
    return HttpResponse.json(productDetail);
  }),
  http.get(API.PRODUCTS_CODE_PRICE_TRENDS(1), () => {
    return HttpResponse.json(productTrend);
  }),
  http.get(API.PRODUCTS_CODE_PRICES(1), () => {
    return HttpResponse.json(productPrices);
  }),
  http.get(API.PRODUCTS_CODE_REVIEWS(1), () => {
    return HttpResponse.json(productReviews);
  }),
  http.get(API.PRODUCTS_ID_REVIEW_SUMMARY(1), () => {
    return HttpResponse.json(productAIReviews);
  }),
];
