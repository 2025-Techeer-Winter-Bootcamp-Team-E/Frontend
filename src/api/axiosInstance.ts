import { HTTP } from '@/constants/api';
import axios, { type AxiosInstance } from 'axios';
const axiosInstance: AxiosInstance = axios.create({
  baseURL: HTTP,
  timeout: 300000, // 5분
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});
// 요청 인터셉터
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);
// 응답 인터셉터
axiosInstance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    console.log(response.data)
    return response.data;
  },
  async function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    const statusCode = error.response?.status;
    const errorData = error.response?.data;
    // 400 오류
    if (statusCode === 400) {
      return Promise.reject(error);
    }
    // 401 : 토큰 오류
    if (statusCode === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_id');
      window.location.href = '/login';
      return Promise.reject(error);
    }
    // 403 : 권한 오류
    if (statusCode === 403) {
      window.location.href = '/';
    }
    alert(errorData);
    return Promise.reject(error);
  },
);
export default axiosInstance;
