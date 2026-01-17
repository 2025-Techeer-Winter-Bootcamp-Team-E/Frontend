/**
 * 회원가입 요청
 * POST /users/singup
 */
export type UsersSignUpReqDto = {
  email: string;
  name: string;
  nickname: string;
  phone: string;
  password: string;
};

/**
 * 회원가입 요청 응답
 * POST /users/singup
 */
export type UsersSignUpResDto = {
  memberId: number;
  email: string;
  created_at: string;
};

/**
 ** 로그인 요청
 * POST /users/login
 */
export type UsersLoginReqDto = {
  email: string;
  password: string;
};

/**
 * 로그인 요청 응답
 * POST /users/login
 */
export type UsersLoginResDto = {
  access_token: string;
  refresh_token: string;
  token_type: string;
};

/**
 * 소셜 로그인 요청
 * POST /users/social-login
 */
export type UsersSocialLoginReqDto = {
  provider: string;
  social_token: string;
};

/**
 * 비밀번호 변경 요청
 * PATCH /users/password
 */
export type UsersPasswordReqDto = {
  current_password: string;
  new_password: string;
};

/**
 * 회원 탈퇴요청
 * DELETE /users/me
 */
export type UsersDeleteMeReqDto = {
  password: string;
  re_password: string;
};

type RecentsItemEntity = {
  product_id: number;
  product_name: string;
  thumbnail_url: string;
  viewed_at: string;
};

/**
 * 회원 최근 본 상품 조회 응답
 * GET /users/recent-products
 */
export type UsersRecentProductsResDto = RecentsItemEntity[];

type WishItemEntity = {
  wishlist_id: number;
  product_id: number;
  product_name: string;
  price: number;
  added_at: string;
};

/**
 * 회원 위시 상품 조회 응답
 * GET users/wishlist
 */
export type UsersWishProductsResDto = WishItemEntity[];

type MyTimerEntity = {
  timer_id: number;
  product_id: number;
  product_name: string;
  target_price: number;
  remaining_time: string;
  is_expired: boolean;
};
/**
 * 회원 적정 구매 타이머 조회 응답
 * GET /users/timers
 */
export type UsersTimerResDto = MyTimerEntity[];

type MyCartEntity = {
  cart_item_id: number;
  product_id: number;
  product_name: string;
  quantity: number;
  price: number;
  total_price: number;
};
/**
 * 회원 장바구니 조회 응답
 * GET /users/cart
 */
export type UsersCartResDto = MyCartEntity[];
