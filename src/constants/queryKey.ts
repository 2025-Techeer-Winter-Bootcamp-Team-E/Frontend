export const QUERY_KEY = {
  TOKEN: ['token'],

  USERS: ['users'],

  SEARCH: ['search'],
  SEARCH_KEYWORD: (keyword: string) => ['search', keyword],
  SEARCH_POPULAR: ['search', 'popular'],
  SEARCH_RECENT: ['search', 'recent'],

  PRODUCT_LIST: (params: {
    q?: string;
    page: number;
    page_size: number;
    main_cat?: string;
    sub_cat?: string;
    brand?: string;
    min_price?: number;
    max_price?: number;
    sort?: string;
  }) => [
    'product',
    'list',
    params.q ?? '',
    params.page,
    params.page_size,
    params.main_cat ?? '',
    params.sub_cat ?? '',
    params.brand ?? '',
    params.min_price ?? 0,
    params.max_price ?? 0,
    params.sort ?? 'default',
  ],
  PRODUCT_INFO: (product_code: number) => ['product', 'info', product_code],
  PRODUCT_TREND: (product_code: number) => ['product', 'trend', product_code],
  PRODUCT_PRICES: (product_code: number) => ['product', 'prices', product_code],
  PRODUCT_REVIEW: (product_code: number, page: number, size: number) => [
    'product',
    'review',
    product_code,
    page,
    size,
  ],
  PRODUCT_REVIEW_AI: (product_code: number) => ['product', 'review', 'ai', product_code],

  TIMER_PRODUCT_ID: (product_code: number) => ['timer', product_code],
  TIMER_MYPAGE: ['timer', 'mypage'],
  TIMER_MY_LIST: (user_id: number, page: number, size: number) => [
    'timer',
    'mypage',
    user_id,
    page,
    size,
  ],

  CART: ['cart'],
};
