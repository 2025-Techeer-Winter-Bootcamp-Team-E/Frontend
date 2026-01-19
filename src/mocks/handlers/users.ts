import { API } from '@/constants/api';
import { userProfile } from '@/data/users';
import { http, HttpResponse } from 'msw';

export const usersHandler = [
  http.get(API.USERS, () => {
    return HttpResponse.json(userProfile);
  }),
];
