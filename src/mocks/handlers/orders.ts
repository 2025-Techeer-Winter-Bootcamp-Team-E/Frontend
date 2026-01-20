import { API } from '@/constants/api';
import { myTokenCharge, successTokenCharge } from '@/mocks/data/orders';
import { http, HttpResponse } from 'msw';

export const ordersHandler = [
  http.get(API.ORDERS_TOKENS, () => {
    return HttpResponse.json(myTokenCharge);
  }),
  http.post(API.ORDERS_TOKEN_RECHARGE, () => {
    return HttpResponse.json(successTokenCharge);
  }),
];
