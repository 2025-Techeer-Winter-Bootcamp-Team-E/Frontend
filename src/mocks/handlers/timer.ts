import { API } from '@/constants/api';
import { myPageAllTImerPaging } from '@/mocks/data/timer';
import { http, HttpResponse } from 'msw';

export const timerHandler = [
  http.get(API.TIMERS, () => {
    return HttpResponse.json(myPageAllTImerPaging);
  }),
];
