export const SEARCH_MODE = {
  LLM: { label: 'LLM 검색', id: 'llm' } as const,
  SHOPPING_RESEARCH: { label: '쇼핑 리서치', id: 'shopping-research' } as const,
} as const;

export const SEARCH_TYPES = [SEARCH_MODE.LLM, SEARCH_MODE.SHOPPING_RESEARCH] as const;

export type SearchType = (typeof SEARCH_TYPES)[number];
export type SearchModeId = SearchType['id'];
