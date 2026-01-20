import { API } from '@/constants/api';
import { userProfile, userSignIn, usersLogin } from '@/mocks/data/users';
import { http, HttpResponse } from 'msw';

export const usersHandler = [
  http.get(API.USERS, () => {
    return HttpResponse.json(userProfile);
  }),

  http.post(API.USERS_LOGIN, async () => {
    return HttpResponse.json(usersLogin);
  }),

  http.post(API.USERS_SIGNUP, async () => {
    return HttpResponse.json(userSignIn);
  }),
];
