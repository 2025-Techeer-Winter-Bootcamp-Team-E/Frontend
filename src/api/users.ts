import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  UsersDeleteMeReqDto,
  UsersLoginReqDto,
  UsersLoginResDto,
  UsersPasswordReqDto,
  UsersSignUpReqDto,
  UsersSignUpResDto,
  UsersSocialLoginReqDto,
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
