export const HTTP = import.meta.env.VITE_API_URL;

export const API = {
  ORDERS_TOKEN_RECHARGE: `/orders/tokens/recharge`,
  ORDERS_TOKENS: `/orders/tokens`,
  ORDERS_CHECKOUT: `/orders/checkout`,
  ORDERS_CART_CHECKOUT: `/orders/cart-checkout`,

  PRICE_PREDICTIONS: `/price-prediction`,
  PRICE_PREDICTIONS_STATUS: (predictionId: number) => `/price-predictions/${predictionId}/status`,
  PRICE_PREDICTIONS_ANALYSIS: (predictionId: number) =>
    `/price-predictions/${predictionId}/analysis`,
  PRICE_PREDICTIONS_ID: (predictionId: number) => `/price-predictions/${predictionId}`,

  PRODUCTS_ID: (productId: number) => `/products/${productId}`,
  PRODUCTS_ID_PRICES: (productId: number) => `/products/${productId}/prices`,
  PRODUCTS_ID_PRICES_TRENDS: (productId: number) => `/products/${productId}/price-trends}`,
  PRODUCTS_ID_REIVEWS_SUMMARY: (productId: number) => `/products/${productId}/reviews/summary`,
  PRODUCTS_ID_REIVEWS: (productId: number) => `/products/${productId}/reviews`,
  PRODUCTS_REIVEW_ID: (reviewId: number) => `/products/reviews/${reviewId}`,
  PRODUCTS_ID_REVIEW_AI_SUMMARY: (productId: number) => `/products/${productId}/reviews/ai-summary`,

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
