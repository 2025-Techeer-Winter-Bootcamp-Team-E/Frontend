import type { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';
import axios from 'axios';

const getAPIResponseData = async <T, D = T>(option: AxiosRequestConfig<D>): Promise<T> => {
  try {
    const result = await axiosInstance<T>(option);
    return result.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (import.meta.env.MODE === 'development') {
        console.error(e.toJSON());
      }
    }
    throw e;
  }
};

export default getAPIResponseData;
