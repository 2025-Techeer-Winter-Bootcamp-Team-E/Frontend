import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  UsersCartResDto,
  UsersDeleteMeReqDto,
  UsersLoginReqDto,
  UsersLoginResDto,
  UsersPasswordReqDto,
  UsersRecentProductsResDto,
  UsersSignUpReqDto,
  UsersSignUpResDto,
  UsersSocialLoginReqDto,
  UsersTimerResDto,
  UsersWishProductsResDto,
} from '@/types/usersType';

// 회원가입 POST
export const postUsersSignUp = async (body: UsersSignUpReqDto) => {
  return await getAPIResponseData<UsersSignUpResDto, UsersSignUpReqDto>({
    method: 'POST',
    url: API.USERS_SIGNUP,
    data: body,
  });
};

// 로그인 POST
export const postUsersLogin = async (body: UsersLoginReqDto) => {
  return await getAPIResponseData<UsersLoginResDto, UsersLoginReqDto>({
    method: 'POST',
    url: API.USERS_LOGIN,
    data: body,
  });
};

// 소셜 로그인 POST
export const postUsersSocialLogin = async (body: UsersSocialLoginReqDto) => {
  return await getAPIResponseData<UsersLoginResDto, UsersSocialLoginReqDto>({
    method: 'POST',
    url: API.USERS_SOCIAL_LOGIN,
    data: body,
  });
};

// 비밀번호 변경 PATCH
export const postUsersPassword = async (body: UsersPasswordReqDto) => {
  return await getAPIResponseData<null, UsersPasswordReqDto>({
    method: 'PATCH',
    url: API.USERS_PASSWORD,
    data: body,
  });
};

// 회원탈퇴 DELETE
export const deleteUsersMe = async (body: UsersDeleteMeReqDto) => {
  return await getAPIResponseData<null, UsersDeleteMeReqDto>({
    method: 'DELETE',
    url: API.USERS_ME,
    data: body,
  });
};

// 최근 본 상품 조회 GET
export const getUsersRecentProducts = async (limit: number = 10) => {
  return await getAPIResponseData<UsersRecentProductsResDto, null>({
    method: 'GET',
    url: API.USERS_RECENT_PRODUCTS,
    params: { limit },
  });
};

// 위시 상품 조회 GET
export const getUsersWishProducts = async () => {
  return await getAPIResponseData<UsersWishProductsResDto, null>({
    method: 'GET',
    url: API.USERS_WISHLIST,
  });
};

// 적정 구매 타이머 보관함 조회 GET
export const getUsersTimer = async () => {
  return await getAPIResponseData<UsersTimerResDto, null>({
    method: 'GET',
    url: API.USERS_TIMERS,
  });
};


// 회원 장바구니 조회 GET
export const getUsersCart = async () => {
  return await getAPIResponseData<UsersCartResDto, null>({
    method: 'GET',
    url: API.USERS_CART,
  });
};
