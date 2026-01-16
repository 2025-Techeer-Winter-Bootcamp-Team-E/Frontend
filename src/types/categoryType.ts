export type CategoryEntity = {
  category_id: number;
  name: string;
  depth: number;
  children: CategoryEntity[];
};

/**
 * 메인 네비게이션 카테고리 목록 응답
 * GET /categories/main
 */
export type MainNavCategoryResDto = CategoryEntity[];
