import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tabs from '@/components/productList/Tabs';
import PriceRangeFilter from '@/components/productList/PriceRangeFilter';
import ProductCard from '@/components/productList/ProductCard';
import Pagination from '@/components/productList/Pagination';
import useProductListQuery from '@/hooks/queries/useProductListQuery';
import { CATEGORY } from '@/constants/category';

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /** * 1. URL 검색 파라미터로부터 상태 추출
   * useState 대신 URL에서 값을 실시간으로 읽어옵니다.
   */
  const mainCat = searchParams.get('main_cat') || '';
  const subCat = searchParams.get('sub_cat') || '';
  const searchQuery = searchParams.get('q') || '';
  const minPrice = searchParams.get('min_price') || '';
  const maxPrice = searchParams.get('max_price') || '';
  const sort = searchParams.get('sort') || 'popular';
  const page = Number(searchParams.get('page')) || 1;

  /**
   * 2. 공통 URL 업데이트 함수
   * 새로운 필터가 적용될 때 기존 파라미터를 유지하면서 필요한 값만 변경합니다.
   */
  const updateURL = (newParams: Record<string, string | number | undefined>) => {
    const params = Object.fromEntries(searchParams.entries());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === '') {
        delete params[key]; // 빈 값이나 undefined는 파라미터에서 제거
      } else {
        params[key] = String(value);
      }
    });

    setSearchParams(params, { replace: true });
  };

  /** * 3. API 데이터 페칭
   * URL에서 파생된 변수들을 queryParams로 전달합니다.
   */
  const queryParams = {
    q: searchQuery || undefined,
    main_cat: mainCat || undefined,
    sub_cat: subCat || undefined,
    min_price: minPrice ? Number(minPrice) : undefined,
    max_price: maxPrice ? Number(maxPrice) : undefined,
    sort: sort as 'price_low' | 'price_high' | 'popular',
    page,
    page_size: 20,
  };

  const { data, isLoading, isError } = useProductListQuery(queryParams);

  /** 4. 서브 카테고리 탭 데이터 생성 */
  const subCategoryTabs = useMemo(() => {
    const category = CATEGORY.find((c) => c.name === mainCat);
    if (!category) return [];

    return [
      { id: 'all', label: '전체' },
      ...category.subCategories.map((sub) => ({
        id: sub.name,
        label: sub.name,
      })),
    ];
  }, [mainCat]);

  // 로딩 및 에러 처리
  if (isLoading)
    return <div className="flex min-h-screen items-center justify-center">로딩 중…</div>;
  if (isError)
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        데이터를 불러오지 못했습니다.
      </div>
    );

  const products = data?.products || [];
  const pagination = data?.pagination;

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-20 py-10">
      <div className="mx-auto max-w-7xl">
        {/* ✅ 서브 카테고리 탭 */}
        {subCategoryTabs.length > 0 && (
          <div className="mb-6 flex items-center gap-4">
            <h3 className="min-w-20 text-sm font-bold">카테고리</h3>
            <Tabs
              tabs={subCategoryTabs}
              activeTab={subCat || 'all'}
              onTabChange={(tabId) => updateURL({ sub_cat: tabId === 'all' ? undefined : tabId })}
            />
          </div>
        )}

        {/* ✅ 가격 범위 필터 (URL의 값을 초기값으로 전달) */}
        <PriceRangeFilter
          initialMin={minPrice}
          initialMax={maxPrice}
          onApply={(min, max) => updateURL({ min_price: min, max_price: max })}
        />

        {/* ✅ 정렬 및 총 개수 */}
        <div className="my-4 flex items-center justify-between border-t pt-4">
          <p className="text-sm">
            총 <b>{pagination?.count ?? 0}</b>개의 상품
          </p>
        </div>

        {/* ✅ 상품 카드 리스트 */}
        <div className="flex flex-col gap-4">
          {products.length > 0 ? (
            products.map((p) => <ProductCard key={p.product_code} product={p} />)
          ) : (
            <div className="flex h-40 items-center justify-center rounded-lg bg-white shadow-sm">
              검색 결과가 없습니다.
            </div>
          )}
        </div>

        {/* ✅ 페이지네이션 */}
        {pagination && pagination.total_pages > 1 && (
          <Pagination
            currentPage={pagination.current_page}
            totalPages={pagination.total_pages}
            onPageChange={(newPage) => updateURL({ page: newPage })}
          />
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
