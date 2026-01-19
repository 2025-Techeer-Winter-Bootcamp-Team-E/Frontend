/**
 * 타이머 등록 요청
 * POST /timers
 */
export type TimerPostReqDto = {
  product_id: number;
  target_price: number;
  is_active: boolean;
};

/**
 * 타이머 등록 응답
 * POST /timers
 */
export type TimerPostResDto = {
  timer_id: number;
};

/**
 * 현가격의 저점/고점 판정 결과 및 정보 조회 응답
 * GET /timers/{timer_id}
 */
export type TimersIdGetResDto = {
  target_price: number;
  predicted_price: number;
  confidence_score: number;
  recommendation_score: number;
  reason_message: string;
  predicted_at: string;
};

/**
 * 타이머 설정 수정 요청
 * PATCH /timers/{timer_id}
 */
export type TimersIdPatchReqDto = {
  target_price: number;
  is_active: boolean;
};

type PageInfo = {
  current_page: number;
  page_size: number;
  total_elements: number;
  total_pages: number;
  is_last: boolean;
};

export type TimersEntity = {
  timer_id: number;
  product_id: number;
  product_name: string;
  target_price: number;
  predicted_price: number;
  confidence_score: number;
  recommendation_score: number;
  reason_message: string;
  predicted_at: string;
};

/**
 * 타이머 보관함 목록 조회 페이지네이션 응답
 * GET /timers?user_id={user_id}&page={page}&size={size}
 */
export type TimersIdAllGetResDto = {
  user_id: number;
  page_info: PageInfo;
  timers: TimersEntity[];
};
