import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  CartAllItemsResDto,
  CartItemPostReqDto,
  CartItemPostResDto,
  CartItemPatchReqDto,
  CartItemsReqDto,
  CartItemsResDto,
  TokenBalanceResDto,
  TokenRechargeReqDto,
  TokenRechargeResDto,
  TokenSingleItemReqDto,
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
export const postTokenSingleItem = async (body: TokenSingleItemReqDto) => {
  return await getAPIResponseData<TokenSingleItemResDto, TokenSingleItemReqDto>({
    method: 'POST',
    url: API.ORDERS_CHECKOUT,
    data: body,
  });
};

// 장바구니 상품 결제 POST
export const postCartItemsCheckout = async (body: CartItemsReqDto) => {
  return await getAPIResponseData<CartItemsResDto, CartItemsReqDto>({
    method: 'POST',
    url: API.ORDERS_CART_CHECKOUT,
    data: body,
  });
};

// 장바구니 상품 추가 POST
export const postCartItem = async (body: CartItemPostReqDto) => {
  return await getAPIResponseData<CartItemPostResDto, CartItemPostReqDto>({
    method: 'POST',
    url: API.ORDERS_CART,
    data: body,
  });
};

// 장바구니 상품 수량 변경 PATCH
export const patchCartItemQuantity = async (cart_item_id: number, body: CartItemPatchReqDto) => {
  return await getAPIResponseData<null, CartItemPatchReqDto>({
    method: 'PATCH',
    url: `${API.ORDERS_CART.replace(/\/$/, '')}/${cart_item_id}/`,
    data: body,
  });
};

// 장바구니 상품 삭제 DELETE
export const deleteCartItem = async (cart_item_id: number) => {
  return await getAPIResponseData<null, null>({
    method: 'DELETE',
    url: `${API.ORDERS_CART.replace(/\/$/, '')}/${cart_item_id}/`,
  });
};

// 장바구나 상품 목록 조회 GET
export const getCartAllItem = async () => {
  return await getAPIResponseData<CartAllItemsResDto, null>({
    method: 'GET',
    url: API.ORDERS_CART,
  });
};
