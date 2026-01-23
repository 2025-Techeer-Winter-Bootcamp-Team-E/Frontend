export const HTTP = import.meta.env.VITE_API_URL;

export const API = {
  ORDERS_TOKEN_RECHARGE: `/orders/tokens/recharge/`,
  ORDERS_TOKENS: `/orders/tokens/`,
  ORDERS_CHECKOUT: `/orders/checkout/`,
  ORDERS_CART_CHECKOUT: `/orders/cart/checkout/`,
  ORDERS_CART: `/orders/cart/`,
  ORDERS_CART_ITEM_ID: (cart_item_id: number) => `/orders/cart/${cart_item_id}/`,

  TIMERS: `/timers/`,
  TIMERS_ID: (timer_id: number) => `/timers/${timer_id}/`,
  TIMERS_PRODUCT_CODE: (product_code: number) => `/timers/${product_code}/`,

  PRODUCTS: `/products/`,
  PRODUCTS_CODE: (product_code: number) => `/products/${product_code}/`,
  PRODUCTS_CODE_PRICE_TRENDS: (product_code: number) => `/products/${product_code}/price-trend/`,
  PRODUCTS_CODE_PRICES: (product_code: number) => `/products/${product_code}/prices/`,
  PRODUCTS_CODE_REVIEWS: (product_code: number, page: number = 1, size: number = 5) =>
    `/products/${product_code}/reviews?$page=${page}&size=${size}/`,
  PRODUCTS_ID_REVIEW_SUMMARY: (product_code: number) =>
    `/products/${product_code}/reviews/summary/`,

  SEARCH_AUTOCOMPLETE: (keyword: string) => `/search/autocomplete?keyword=${keyword}/`,
  SEARCH_POPULAR: `/search/popular/`,
  SEARCH_RECENT: `/search/recent/`,
  SEARCH_RECENT_DELETE: (id: number) => `/search/recent/${id}/`,
  SEARCH_LLM_RECOMMENDATION: `/search/llm-recommendation/`,
  SEARCH_QUESTION: `/search/questions/`,
  SEARCH_SHOPPING_RESEARCH: `/search/shopping-research/`,

  USERS: `/users/`,
  USERS_SIGNUP: `/users/signup/`,
  USERS_LOGIN: `/users/login/`,
  USERS_PASSWORD: `/users/password/`,
  USERS_ME: `/users/me/`,
};
