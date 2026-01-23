import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  UserLoginReqDto,
  UserProfileResDto,
  UserSignUpReqDto,
  UserSignUpResDto,
  UsersLoginResDto,
} from '@/types/usersType';

// 회원가입 POST
export const postUsersSignUp = async (body: UserSignUpReqDto) => {
  return await getAPIResponseData<UserSignUpResDto, UserSignUpReqDto>({
    method: 'POST',
    url: API.USERS_SIGNUP,
    data: body,
  });
};

// 로그인 POST
export const postUsersLogin = async (body: UserLoginReqDto) => {
  return await getAPIResponseData<UsersLoginResDto, UserLoginReqDto>({
    method: 'POST',
    url: API.USERS_LOGIN,
    data: body,
  });
};

// 프로필 조회 GET
export const getUserProfile = async () => {
  return await getAPIResponseData<UserProfileResDto>({
    method: 'GET',
    url: API.USERS,
  });
};
