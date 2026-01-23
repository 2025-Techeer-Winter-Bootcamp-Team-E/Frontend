/**
 * 회원가입 요청 데이터
 * POST /users/signup
 */
export type UserSignUpReqDto = {
  email: string;
  name: string;
  nickname: string;
  phone: string;
  password: string;
};

/**
 * 회원가입 응답 데이터
 * POST /users/signup
 */
export type UserSignUpResDto = {
  user_id: number;
  email: string;
  created_at: string;
};

/**
 * 로그인 요청 데이터
 * POST /users/login
 */
export type UserLoginReqDto = {
  email: string;
  password: string;
};

/**
 * 로그인 응답 데이터
 * POST /users/login
 */
export type UsersLoginResDto = {
  user_id: number;
  access_token: string;
  refresh_token: string;
  token_type: string;
};

/**
 * 프로필 조회 응답 데이터
 * GET /users
 */
export type UserProfileResDto = {
  name: string;
  email: string;
  nickname: string;
  phone: string;
};
