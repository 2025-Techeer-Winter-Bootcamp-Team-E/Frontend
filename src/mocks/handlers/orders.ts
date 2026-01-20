import { API } from '@/constants/api';
import {
  cartAdd,
  cartDelete,
  cartItemCheckout,
  cartItems,
  myTokenCharge,
  successTokenCharge,
} from '@/mocks/data/orders';
import { http, HttpResponse } from 'msw';

export const ordersHandler = [
  http.get(API.ORDERS_TOKENS, () => {
    return HttpResponse.json(myTokenCharge);
  }),
  http.post(API.ORDERS_TOKEN_RECHARGE, () => {
    return HttpResponse.json(successTokenCharge);
  }),
  http.post(API.ORDERS_CART_CHECKOUT, () => {
    return HttpResponse.json(cartItemCheckout);
  }),
  http.post(API.ORDERS_CART, () => {
    return HttpResponse.json(cartAdd);
  }),
  http.delete(API.ORDERS_CART_ITEM_ID(1001), () => {
    return HttpResponse.json(cartDelete);
  }),
  http.get(API.ORDERS_CART, () => {
    return HttpResponse.json(cartItems);
  }),
];
