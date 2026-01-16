import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  CartItemsReqDto,
  CartItemsResDto,
  TokenBalanceResDto,
  TokenRechargeReqDto,
  TokenRechargeResDto,
  TokenSingleItemResDto,
} from '@/types/ordersType';

// 결제를 위한 토큰 충전 POST
export const postTokenRecharge = async (body: TokenRechargeReqDto) => {
  return await getAPIResponseData<TokenRechargeResDto, TokenRechargeReqDto>({
    method: 'POST',
    url: API.ORDERS_TOKEN_RECHARGE,
    data: body,
  });
};

// 결제 토큰 조회 GET
export const getTokenBalance = async () => {
  return await getAPIResponseData<TokenBalanceResDto>({
    method: 'GET',
    url: API.ORDERS_TOKENS,
  });
};

// 토큰으로 상품 직접 결제 POST
export const postTokenSingleItem = async (body: CartItemsReqDto) => {
  return await getAPIResponseData<TokenSingleItemResDto, CartItemsReqDto>({
    method: 'POST',
    url: API.ORDERS_CART_CHECKOUT,
    data: body,
  });
};

// 장바구니 상품 결제 POST
export const postCartItems = async (body: CartItemsReqDto) => {
  return await getAPIResponseData<CartItemsResDto, CartItemsReqDto>({
    method: 'POST',
    url: API.ORDERS_CART_CHECKOUT,
    data: body,
  });
};
