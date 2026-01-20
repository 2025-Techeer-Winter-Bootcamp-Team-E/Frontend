import { API } from '@/constants/api';
import {
  myPageAllTImerPaging,
  successTimePatch,
  successTimerDelete,
  suceessTimerGet,
  suceessTimerPost,
} from '@/mocks/data/timer';
import { http, HttpResponse } from 'msw';

export const timerHandler = [
  // 타이머 조회 (쿼리 파라미터로 필터링)
  http.get(API.TIMERS, ({ request }) => {
    const url = new URL(request.url);
    const productCode = url.searchParams.get('product_code');

    if (productCode) {
      console.log('✅ 상품별 타이머 조회:', productCode);
      return HttpResponse.json(suceessTimerGet);
    }

    console.log('✅ 전체 타이머 목록 조회');
    return HttpResponse.json(myPageAllTImerPaging);
  }),

  // 타이머 등록
  http.post(API.TIMERS, async ({ request }) => {
    const body = await request.json();
    console.log('✅ 타이머 등록:', body);
    return HttpResponse.json(suceessTimerPost);
  }),

  // 타이머 수정 (동적 ID 처리)
  http.patch(`${API.TIMERS}/:id`, ({ params }) => {
    console.log('✅ 타이머 수정:', params.id);
    return HttpResponse.json(successTimePatch);
  }),

  // 타이머 삭제 (동적 ID 처리)
  http.delete(`${API.TIMERS}/:id`, ({ params }) => {
    console.log('✅ 타이머 삭제:', params.id);
    return HttpResponse.json(successTimerDelete);
  }),
];
