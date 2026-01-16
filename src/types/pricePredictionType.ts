/**
 * 타이머 등록 요청
 * POST /price-prediction
 */
export type PricePredictionReqDto = {
  product_id: number;
  target_price: number;
  is_active: boolean;
};

/**
 * 타이머 등록 응답
 * POST /price-prediction
 */
export type PricePredictionResDto = {
  predictionId: number;
};

/**
 * 상품 최신 가격 및 시계열 업데이트 상태 조회 응답
 * GET /price-predictions/{predictionId}/status
 */
export type PricePredictionIdStatusResDto = {
  prediction_id: number;
  product_id: number;
  predicted_price: number;
  predicted_at: string;
  is_active: boolean;
};

/**
 * 현가격의 저점/고점 판정 결과 및 정보 조회 응답
 * GET /price-predictions/{predictionId}/analysis
 */
export type PricePredictionIdAnalysisResDto = {
  predicted_price: number;
  confidence_score: number;
  recommendation_score: number;
  advice_message: string;
  predicted_at: string;
};

/**
 * 타이머 설정 수정 요청
 * PATCH /price-predictions/{predictionId}
 */
export type PricePredictionIdReqDto = {
  target_price: number;
  is_active: boolean;
};
