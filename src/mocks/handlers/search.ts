import { API } from '@/constants/api';
import { searchPopluar, searchRecent } from '@/data/search';
import { http, HttpResponse } from 'msw';

export const searchHandler = [
  http.get(API.SEARCH_RECENT, () => {
    return HttpResponse.json(searchRecent);
  }),
  http.get(API.SEARCH_POPULAR, () => {
    return HttpResponse.json(searchPopluar);
  }),
];
