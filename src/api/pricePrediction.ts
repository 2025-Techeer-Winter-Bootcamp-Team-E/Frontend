import getAPIResponseData from '@/api/getAPIResponseData';
import { API } from '@/constants/api';
import type {
  PricePredictionIdAnalysisResDto,
  PricePredictionIdReqDto,
  PricePredictionIdStatusResDto,
  PricePredictionReqDto,
  PricePredictionResDto,
} from '@/types/pricePredictionType';

// 상품 상세페이지에서의 적정구매 타이머 POST
export const postPricePrediction = async (body: PricePredictionReqDto) => {
  return await getAPIResponseData<PricePredictionResDto, PricePredictionReqDto>({
    method: 'POST',
    url: API.PRICE_PREDICTIONS,
    data: body,
  });
};

// 상품 최신 가격 및 시계열 업데이트 상태 GET
export const getPricePredictionIdStatus = async (prediction_id: number) => {
  return await getAPIResponseData<PricePredictionIdStatusResDto, null>({
    method: 'GET',
    url: API.PRICE_PREDICTIONS_STATUS(prediction_id),
  });
};

// 현가격의 저점/고점 판정 결과 및 정보 GET
export const getPricePredictionIdAnalysis = async (predictionId: number) => {
  return await getAPIResponseData<PricePredictionIdAnalysisResDto, null>({
    method: 'GET',
    url: API.PRICE_PREDICTIONS_STATUS(predictionId),
  });
};

// 타이머 설정 수정 PATCH
export const patchPricePredictionId = async (
  predictionId: number,
  body: PricePredictionIdReqDto,
) => {
  return await getAPIResponseData<null, PricePredictionIdReqDto>({
    method: 'PATCH',
    url: API.PRICE_PREDICTIONS_ID(predictionId),
    data: body,
  });
};

// 타이머 삭제 DELETE
export const deletePricePredictionId = async (predictionId: number) => {
  return await getAPIResponseData<null, null>({
    method: 'DELETE',
    url: API.PRICE_PREDICTIONS_ID(predictionId),
  });
};
