import type { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';
import axios from 'axios';

const getAPIResponseData = async <T, D = T>(option: AxiosRequestConfig<D>): Promise<T> => {
  try {
    const result = await axiosInstance<T>(option);
    
    // 개발 환경에서 응답 로깅
    if (import.meta.env.MODE === 'development') {
      console.log('🔵 getAPIResponseData - raw result:', result);
      console.log('🔵 getAPIResponseData - URL:', option.url);
      console.log('🔵 getAPIResponseData - result type:', typeof result);
      console.log('🔵 getAPIResponseData - has data?', result && typeof result === 'object' && 'data' in result);
      console.log('🔵 getAPIResponseData - has status?', result && typeof result === 'object' && 'status' in result);
    }
    
    // axiosInstance 인터셉터가 이미 response.data를 반환하므로
    // 백엔드 응답이 { status: 200, data: {...} } 형식이면 data 필드를 추출
    if (result && typeof result === 'object' && 'data' in result && 'status' in result) {
      const extractedData = (result as any).data;
      if (import.meta.env.MODE === 'development') {
        console.log('🟢 getAPIResponseData - extracted data:', extractedData);
      }
      return extractedData as T;
    }
    // 이미 data 필드가 추출된 경우 그대로 반환
    if (import.meta.env.MODE === 'development') {
      console.log('🟡 getAPIResponseData - returning result as-is:', result);
    }
    return result as T;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (import.meta.env.MODE === 'development') {
        console.error('API Error:', {
          message: e.message,
          response: e.response?.data,
          status: e.response?.status,
          config: {
            url: e.config?.url,
            method: e.config?.method,
            params: e.config?.params,
          },
        });
      }
    }
    throw e;
  }
};

export default getAPIResponseData;
