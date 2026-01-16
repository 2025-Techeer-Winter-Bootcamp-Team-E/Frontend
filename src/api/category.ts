import getAPIResponseData from "@/api/getAPIResponseData";
import { API } from "@/constants/api";
import type { MainNavCategoryResDto } from "@/types/categoryType";

// 메인 네비게이션 카테고리 목록 GET
export const getMainNavCategory= async () => {
  return await getAPIResponseData<MainNavCategoryResDto, null>({
    method: 'GET',
    url: API.CATEGORY_MAIN,
  });
};