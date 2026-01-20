import { API } from '@/constants/api';
import { llmSearch, searchAutoComplete, searchPopluar, searchRecent } from '@/mocks/data/search';
import { http, HttpResponse } from 'msw';

export const searchHandler = [
  http.get(API.SEARCH_RECENT, () => {
    return HttpResponse.json(searchRecent);
  }),
  http.get(API.SEARCH_POPULAR, () => {
    return HttpResponse.json(searchPopluar);
  }),
  http.get(API.SEARCH_AUTOCOMPLETE, () => {
    return HttpResponse.json(searchAutoComplete);
  }),
  http.post(API.SEARCH_LLM_RECOMMENDATION, async () => {
    return HttpResponse.json(llmSearch);
  }),
];
