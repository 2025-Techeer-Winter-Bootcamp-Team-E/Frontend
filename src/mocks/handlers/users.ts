import { API } from '@/constants/api';
import { userProfile, usersLogin } from '@/data/users';
import { http, HttpResponse } from 'msw';

export const usersHandler = [
  http.get(API.USERS, () => {
    return HttpResponse.json(userProfile);
  }),

  http.post(API.USERS_LOGIN, async () => {
    return HttpResponse.json(usersLogin);
  }),
];
