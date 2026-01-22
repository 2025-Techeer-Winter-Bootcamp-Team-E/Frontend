import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  TimerPostReqDto,
  TimerPostResDto,
  TimersIdAllGetResDto,
  TimersIdGetReqDto,
  TimersIdGetResDto,
  TimersIdPatchReqDto,
} from '@/types/timerType';

// 상품 상세페이지에서의 적정구매 타이머 POST
export const postPricePrediction = async (body: TimerPostReqDto) => {
  return await getAPIResponseData<TimerPostResDto, TimerPostReqDto>({
    method: 'POST',
    url: API.TIMERS,
    data: body,
  });
};

// 적정구매 단일 타이머 GET
export const getTimersByProductId = async (product_code: number) => {
  return await getAPIResponseData<TimersIdGetResDto, null>({
    method: 'GET',
    url: API.TIMERS_PRODUCT_CODE(product_code),
    params: { product_code },
  });
};

// 현가격의 저점/고점 판정 결과 및 정보 GET
export const getPricePredictionIdAnalysis = async (timer_id: number) => {
  return await getAPIResponseData<TimersIdGetResDto, TimersIdGetReqDto>({
    method: 'GET',
    url: API.TIMERS_ID(timer_id),
  });
};

// 타이머 설정 수정 PATCH
export const patchPricePredictionId = async (timer_id: number, body: TimersIdPatchReqDto) => {
  return await getAPIResponseData<null, TimersIdPatchReqDto>({
    method: 'PATCH',
    url: API.TIMERS_ID(timer_id),
    data: body,
  });
};

// 타이머 삭제 DELETE
export const deletePricePredictionId = async (timer_id: number) => {
  return await getAPIResponseData<null, null>({
    method: 'DELETE',
    url: API.TIMERS_ID(timer_id),
  });
};

/**
 * 마이페이지 내 타이머 보관함 조회 응답 GET
 */
export const getTimerAllMypage = async (user_id: number, page: number = 1, size: number = 10) => {
  return await getAPIResponseData<TimersIdAllGetResDto, null>({
    method: 'GET',
    url: API.TIMERS,
    params: { user_id, page, size },
  });
};
