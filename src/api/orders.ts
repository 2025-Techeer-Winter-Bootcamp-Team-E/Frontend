import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  CartAllItemsResDto,
  CartItemPatchReqDto,
  CartItemPostReqDto,
  CartItemPostResDto,
  CartItemsCheckoutReqDto,
  CartItemsCheckoutResDto,
  SingleItemCheckoutReqDto,
  SingleItemCheckoutResDto,
  TokenBalanceResDto,
  TokenRechargeReqDto,
  TokenRechargeResDto,
} from '@/types/ordersType';

/**
 * 토큰 충전
 * POST /orders/tokens/recharge
 */
export const postTokenRecharge = (body: TokenRechargeReqDto) =>
  getAPIResponseData<TokenRechargeResDto, TokenRechargeReqDto>({
    method: 'POST',
    url: API.ORDERS_TOKEN_RECHARGE,
    data: body,
  });

/**
 * 보유 토큰 조회
 * GET /orders/tokens
 */
export const getTokenBalance = () =>
  getAPIResponseData<TokenBalanceResDto>({
    method: 'GET',
    url: API.ORDERS_TOKENS,
  });

/**
 * 토큰으로 단일 상품 결제
 * POST /orders/checkout
 */
export const postTokenSingleItemCheckout = (body: SingleItemCheckoutReqDto) =>
  getAPIResponseData<SingleItemCheckoutResDto, SingleItemCheckoutReqDto>({
    method: 'POST',
    url: API.ORDERS_CHECKOUT,
    data: body,
  });

/**
 * 장바구니 상품 결제
 * POST /orders/cart/checkout
 */
export const postCartItemsCheckout = (body: CartItemsCheckoutReqDto) =>
  getAPIResponseData<CartItemsCheckoutResDto, CartItemsCheckoutReqDto>({
    method: 'POST',
    url: API.ORDERS_CART_CHECKOUT,
    data: body,
  });

/**
 * 장바구니 상품 추가
 * POST /orders/cart
 */
export const postCartItem = (body: CartItemPostReqDto) =>
  getAPIResponseData<CartItemPostResDto, CartItemPostReqDto>({
    method: 'POST',
    url: API.ORDERS_CART,
    data: body,
  });

/**
 * 장바구니 상품 수량 변경
 * PATCH /orders/cart/{cart_item_id}
 */
export const patchCartItem = (cartItemId: number, body: CartItemPatchReqDto) =>
  getAPIResponseData<null, CartItemPatchReqDto>({
    method: 'PATCH',
    url: API.ORDERS_CART_ITEM_ID(cartItemId),
    data: body,
  });

/**
 * 장바구니 상품 삭제
 * DELETE /orders/cart/{cart_item_id}
 */
export const deleteCartItem = (cartItemId: number) =>
  getAPIResponseData<null>({
    method: 'DELETE',
    url: API.ORDERS_CART_ITEM_ID(cartItemId),
  });

/**
 * 장바구니 상품 목록 조회
 * GET /orders/cart
 */
export const getCartItems = () =>
  getAPIResponseData<CartAllItemsResDto>({
    method: 'GET',
    url: API.ORDERS_CART,
  });
