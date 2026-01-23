export type TimerPageInfo = {
  current_page: number;
  page_size: number;
  total_elements: number;
  total_pages: number;
  is_last: boolean;
};

export type TimerEntity = {
  timer_id: number;
  product_code: number;
  product_name: string;
  target_price: number;
  predicted_price: number;
  confidence_score: number;
  recommendation_score: number;
  thumbnail_url: string;
  reason_message: string;
  predicted_at: string;
};

/**
 * 타이머 등록 요청
 * POST /timers
 */
export type TimerPostReqDto = {
  product_code: number;
  target_price: number;
};

/**
 * 타이머 등록 응답
 * POST /timers
 */
export type TimerPostResDto = {
  timer_id: number;
};

/**
 * 적정 구매 타이머 조회 응답
 * GET /timers/{product_code}
 */
export type TimerGetByProductCodeResDto = TimerEntity;

/**
 * 적정 구매 타이머 수정 요청
 * PATCH /timers/{timer_id}
 */
export type TimerUpdateReqDto = {
  target_price: number;
};

/**
 * 타이머 보관함 목록 조회 응답 (페이지네이션)
 * GET /timers?page={page}&size={size}
 */
export type TimerListResDto = {
  user_id: number;
  page_info: TimerPageInfo;
  timers: TimerEntity[];
};
