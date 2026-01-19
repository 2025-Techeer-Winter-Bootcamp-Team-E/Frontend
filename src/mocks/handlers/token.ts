import { API } from '@/constants/api';
import { myTokenCharge } from '@/data/token';
import { http, HttpResponse } from 'msw';

export const tokenHandler = [
  http.get(API.ORDERS_TOKENS, () => {
    return HttpResponse.json(myTokenCharge);
  }),
];
