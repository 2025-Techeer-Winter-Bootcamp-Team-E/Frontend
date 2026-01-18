/**
 * 회원가입 요청
 * POST /users/signup
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
 * POST /users/signup
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
