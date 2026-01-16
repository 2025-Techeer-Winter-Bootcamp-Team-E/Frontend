/**
 * 토큰 충전 요청
 * POST /orders/tokens/recharge
 */
export type TokenRechargeReqDto = {
  recharge_amount: number;
};

/**
 * 토큰 충전 응답
 * POST /orders/tokens/recharge
 */
export type TokenRechargeResDto = {
  current_tokens: number;
};

/**
 * 보유 토큰 조회 요청
 * GET /orders/tokens
 */
export type TokenBalanceReqDto = null;

/**
 * 보유 토큰 조회 응답 데이터
 * GET /orders/tokens
 */
export type TokenBalanceResDto = {
  available_tokens: number;
};

/**
 * 토큰으로 상품 단일 결제 요청 데이터
 * POST /orders/checkout
 */
export type TokenSingleItemReqDto = {
  product_id: number;
  quantity: number;
  total_price: number;
};

/**
 * 토큰으로 상품 단일 결제 응담 데이터
 * POST /orders/checkout
 */
export type TokenSingleItemResDto = {
  order_id: string;
  remaining_tokens: number;
};

/**
 * 장바구니 상품 결제 요청 데이터
 * POST /orders/cart-checkout
 */
export type CartItemsReqDto = {
  cart_itemIds: number[];
  total_payment_tokens: number;
};

/**
 * 토큰으로 상품 단일 결제 응답 데이터
 * POST /orders/cart-checkout
 */
export type CartItemsResDto = null;
