export const QUERY_KEY = {
  TOKEN: ['token'],

  USERS: ['users'],

  SEARCH: ['search'],
  SEARCH_KEYWORD: (keyword: string) => ['search', keyword],
  SEARCH_POPULAR: ['search', 'popular'],
  SEARCH_RECENT: ['search', 'recent'],
};
