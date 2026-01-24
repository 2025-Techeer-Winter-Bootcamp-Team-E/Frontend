export const QUERY_KEY = {
  TOKEN: ['token'] as const,
  USERS: ['users'] as const,

  SEARCH: ['search'] as const,
  SEARCH_KEYWORD: (keyword: string) => ['search', keyword] as const,
  SEARCH_POPULAR: ['search', 'popular'] as const,
  SEARCH_RECENT: ['search', 'recent'] as const,

  PRODUCT_LIST: (params: {
    page: number;
    main_cat?: string;
    sub_cat?: string;
    brand?: string;
    min_price?: number;
    max_price?: number;
    sort?: string;
  }) =>
    [
      'product',
      'list',
      params.page,
      params.main_cat ?? '',
      params.sub_cat ?? '',
      params.brand ?? '',
      params.min_price ?? 0,
      params.max_price ?? 0,
      params.sort ?? 'default',
    ] as const,

  PRODUCT_INFO: (product_code: number) => ['product', 'info', product_code] as const,
  PRODUCT_TREND: (product_code: number) => ['product', 'trend', product_code] as const,
  PRODUCT_PRICES: (product_code: number) => ['product', 'prices', product_code] as const,
  PRODUCT_REVIEW: (product_code: number, page: number, size: number) =>
    ['product', 'review', product_code, page, size] as const,
  PRODUCT_REVIEW_AI: (product_code: number) => ['product', 'review', 'ai', product_code] as const,

  TIMER_PRODUCT_ID: (product_code: number) => ['timer', product_code] as const,
  TIMER_MYPAGE: ['timer', 'mypage'] as const,
  TIMER_MY_LIST: (user_id: number, page: number, size: number) =>
    ['timer', 'mypage', user_id, page, size] as const,

  CART: ['cart'] as const,
};
