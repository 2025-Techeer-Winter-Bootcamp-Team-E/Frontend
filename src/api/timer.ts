import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';

import type {
  TimerGetByProductCodeResDto,
  TimerListResDto,
  TimerPostReqDto,
  TimerPostResDto,
  TimerUpdateReqDto,
} from '@/types/timerType';

/**
 * 적정 구매 타이머 등록 (상품 상세 페이지)
 * POST /timers
 */
export const postTimer = (body: TimerPostReqDto) =>
  getAPIResponseData<TimerPostResDto, TimerPostReqDto>({
    method: 'POST',
    url: API.TIMERS,
    data: body,
  });

/**
 * 상품별 적정 구매 타이머 조회
 * GET /timers/{product_code}
 */
export const getTimerByProductCode = (productCode: number) =>
  getAPIResponseData<TimerGetByProductCodeResDto>({
    method: 'GET',
    url: API.TIMERS_PRODUCT_CODE(productCode),
  });

/**
 * 적정 구매 타이머 수정
 * PATCH /timers/{timer_id}
 */
export const patchTimer = (timerId: number, body: TimerUpdateReqDto) =>
  getAPIResponseData<null, TimerUpdateReqDto>({
    method: 'PATCH',
    url: API.TIMERS_ID(timerId),
    data: body,
  });

/**
 * 적정 구매 타이머 삭제
 * DELETE /timers/{timer_id}
 */
export const deleteTimer = (timer_id: number) =>
  getAPIResponseData<null>({
    method: 'DELETE',
    url: `${API.TIMERS.replace(/\/$/, '')}/detail/${timer_id}`,
  });

/**
 * 마이페이지 타이머 보관함 조회 (페이지네이션)
 * GET /timers?user_id={user_id}&page={page}&size={size}
 */
export const getTimersMypage = (userId: number, page: number = 1, size: number = 6) =>
  getAPIResponseData<TimerListResDto>({
    method: 'GET',
    url: API.TIMERS,
    params: { user_id: userId, page, size },
  });
