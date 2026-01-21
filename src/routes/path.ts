export const ROUTE_PATH = {
  ROOT: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',

  CART: '/cart',
  CHECKOUT: '/checkout',

  PRODUCT_LIST: '/products',
  PRODUCT_DETAIL: '/products/:id',

  LLM_SEARCH_RESULT: '/search/llm',
  SHOPPING_RESEARCH: '/shopping-research',
  SHOPPING_RESEARCH_RESULT: '/shopping-research/result',

  MY_PAGE: '/mypage',
  TIMER: 'timer',
  TOKEN: 'token',
};

export const PATH = {
  ROOT: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',

  CART: '/cart',
  CHECKOUT: '/checkout',

  PRODUCT_LIST: '/products',

  PRODUCT_DETAIL: (id: number | string) => `/products/${id}`,
  LLM_SEARCH_RESULT: `/search/llm`,
  SHOPPING_RESEARCH: `/shopping-research`,
  SHOPPING_RESEARCH_RESULT: `/shopping-research/result`,

  MY_PAGE: '/mypage',
  TIMER: '/mypage/timer',
  TOKEN: '/mypage/token',
};
