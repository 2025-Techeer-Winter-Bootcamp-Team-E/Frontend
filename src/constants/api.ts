export const HTTP = import.meta.env.VITE_API_URL;

export const API = {
  ORDERS_TOKEN_RECHARGE: `/orders/tokens/recharge`,
  ORDERS_TOKENS: `/orders/tokens`,
  ORDERS_CHECKOUT: `/orders/checkout`,
  ORDERS_CART_CHECKOUT: `/orders/cart/checkout`,
  ORDERS_CART: `/orders/cart`,
  ORDERS_CART_ITEM_ID: (cart_item_id: number) => `/orders/cart/${cart_item_id}`,

  TIMERS: `/timers`,
  TIMERS_ID: (timer_id: number) => `/timers/${timer_id}`,

  PRODUCTS_CODE: (product_code: number) => `/products/${product_code}`,
  PRODUCTS_CODE_PRICE_TRENDS: (product_code: number) => `/products/${product_code}/price-trend`,
  PRODUCTS_CODE_PRICES: (product_code: number) => `/products/${product_code}/prices`,
  PRODUCTS_CODE_REVIEWS: (product_code: number) => `/products/${product_code}/reviews`,
  PRODUCTS_ID_REVIEW_SUMMARY: (product_code: number) => `/products/${product_code}/reviews/summary`,

  SEARCH_AUTOCOMPLETE: `/search/autocomplete`,
  SEARCH_TERMS: `/search/terms`,
  SEARCH_LLM_RECOMMENDATION: `/search/llm-recommendation`,
  SEARCH_SHOPPING_RESEARCH: `/search/shopping-research`,

  USERS_SIGNUP: `/users/singup`,
  USERS_LOGIN: `/users/login`,
  USERS_SOCIAL_LOGIN: `/users/social-login`,
  USERS_PASSWORD: `/users/password`,
  USERS_ME: `/users/me`,
  USERS_RECENT_PRODUCTS: `/users/recent-products`,
  USERS_WISHLIST: `users/wishlist`,
  USERS_TIMERS: `/users/timers`,
  USERS_CART: `/users/cart`,

  CATEGORY_MAIN: `/categories/main`,
};
