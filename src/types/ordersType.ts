/**
 * 토큰 충전 요청
 * POST /orders/tokens/recharge
 */
export type TokenRechargeReqDto = {
  recharge_token: number;
};

/**
 * 토큰 충전 응답
 * POST /orders/tokens/recharge
 */
export type TokenRechargeResDto = {
  current_tokens: number;
};

/**
 * 보유 토큰 조회 응답 데이터
 * GET /orders/tokens
 */
export type TokenBalanceResDto = {
  current_tokens: number;
};

/**
 * 토큰으로 상품 단일 결제 요청 데이터
 * POST /orders/checkout
 */
export type TokenSingleItemReqDto = {
  product_code: number;
  quantity: number;
  total_price: number;
};

/**
 * 토큰으로 상품 단일 결제 응답 데이터
 * POST /orders/checkout
 */
export type TokenSingleItemResDto = {
  order_id: string;
  product_name: string;
  total_price: number;
  current_tokens: number;
  order_status: string;
  ordered_at: string;
};

type CartItemsEntity = {
  cart_item_id: number;
  quantity: number;
};

/**
 * 장바구니 상품 결제 요청 데이터
 * POST /orders/cart/checkout
 */
export type CartItemsReqDto = {
  items: CartItemsEntity[];
  total_price: number;
};

/**
 * 장바구니 상품 결제 응답 데이터
 * POST /orders/cart/checkout
 */
export type CartItemsResDto = {
  order_id: string;
  order_items: CartItemsEntity[];
  total_price: number;
  current_tokens: number;
  order_status: string;
};

/**
 * 장바구니 상품 추가 요청 데이터
 * POST /orders/cart
 */
export type CartItemPostReqDto = {
  product_code: number;
  quantity: number;
};

/**
 * 장바구니 상품 추가 응답 데이터
 * POST /orders/cart
 */
export type CartItemPostResDto = {
  cart_item_id: number;
  product_code: number;
  quantity: number;
  added_at: string;
};

/**
 * 장바구니 상품 수량 변경 요청 데이터
 * PATCH /orders/cart/{cart_item_id}/
 */
export type CartItemPatchReqDto = {
  quantity: number;
};

/**
 * 장바구니 모든 상품 조회 응답 데이터
 * POST /orders/cart
 */
export type CartItemEntity = {
  cart_item_id: number;
  product_code: number;
  product_name: string;
  product_resentative_image_url: string;
  quantity: number;
  price: number;
  total_price: number;
};
export type CartAllItemsResDto = CartItemEntity[];

export type BuyItemEntity = {
  id: number;
  product_code: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
};
