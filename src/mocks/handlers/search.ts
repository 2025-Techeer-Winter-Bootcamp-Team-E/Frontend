import { API } from '@/constants/api';
import {
  deleteRecentSearch,
  llmSearch,
  searchAutoComplete,
  searchPopluar,
  searchRecent,
  ShoppingResearchQuestion,
  ShoppingResearchResule,
} from '@/mocks/data/search';
import { http, HttpResponse } from 'msw';

export const searchHandler = [
  http.get(API.SEARCH_RECENT, () => {
    return HttpResponse.json(searchRecent);
  }),
  http.delete('/search/recent/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json(deleteRecentSearch);
  }),

  http.get(API.SEARCH_POPULAR, () => {
    return HttpResponse.json(searchPopluar);
  }),
  http.get(/\/search\/autocomplete.*/, () => {
    return HttpResponse.json(searchAutoComplete);
  }),

  http.post(API.SEARCH_LLM_RECOMMENDATION, async () => {
    return HttpResponse.json(llmSearch);
  }),
  http.post(`*${API.SEARCH_QUESTION}`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(ShoppingResearchQuestion);
  }),
  http.post(API.SEARCH_SHOPPING_RESEARCH, async () => {
    return HttpResponse.json(ShoppingResearchResule);
  }),
];
