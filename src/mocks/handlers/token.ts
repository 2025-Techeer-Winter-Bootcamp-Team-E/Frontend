import { API } from '@/constants/api';
import { myTokenCharge, successTokenCharge } from '@/data/token';
import { http, HttpResponse } from 'msw';

export const tokenHandler = [
  http.get(API.ORDERS_TOKENS, () => {
    return HttpResponse.json(myTokenCharge);
  }),
  http.post(API.ORDERS_TOKEN_RECHARGE, () => {
    return HttpResponse.json(successTokenCharge);
  }),
];
