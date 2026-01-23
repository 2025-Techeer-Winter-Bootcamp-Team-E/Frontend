export type TokenBalance = {
  current_tokens: number;
};

export type OrderBase = {
  order_id: string;
  total_price: number;
  order_status: string;
};

/**
 * 토큰 충전 요청
 * POST /orders/tokens/recharge
 */
export type TokenRechargeReqDto = {
  recharge_token: number;
};

/**
 * 토큰 충전 응답
 */
export type TokenRechargeResDto = TokenBalance;

/**
 * 보유 토큰 조회 응답
 * GET /orders/tokens
 */
export type TokenBalanceResDto = TokenBalance;

/**
 * 토큰으로 상품 단일 결제 요청
 * POST /orders/checkout
 */
export type SingleItemCheckoutReqDto = {
  product_code: number;
  quantity: number;
  total_price: number;
};

/**
 * 단일 상품 결제 응답
 */
export type SingleItemCheckoutResDto = OrderBase &
  TokenBalance & {
    product_name: string;
    ordered_at: string;
  };

export type CartItemIdEntity = {
  cart_item_id: number;
  quantity: number;
};

/**
 * 장바구니 상품 결제 요청
 * POST /orders/cart/checkout
 */
export type CartItemsCheckoutReqDto = {
  items: CartItemIdEntity[];
  total_price: number;
};

/**
 * 장바구니 상품 결제 응답
 */
export type CartItemsCheckoutResDto = OrderBase &
  TokenBalance & {
    order_items: CartItemIdEntity[];
  };

/**
 * 장바구니 상품 추가 요청
 * POST /orders/cart
 */
export type CartItemPostReqDto = {
  product_code: number;
  quantity: number;
};

/**
 * 장바구니 상품 추가 응답
 */
export type CartItemPostResDto = {
  cart_item_id: number;
  product_code: number;
  quantity: number;
  added_at: string;
};

/**
 * 장바구니 상품 조회 아이템
 */
export type CartItemEntity = {
  cart_item_id: number;
  product_code: number;
  product_name: string;
  product_representative_image_url: string;
  quantity: number;
  price: number;
  total_price: number;
};

/**
 * 장바구니 전체 조회 응답
 * GET /orders/cart
 */
export type CartAllItemsResDto = CartItemEntity[];
