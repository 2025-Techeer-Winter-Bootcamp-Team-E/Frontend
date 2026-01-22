import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tabs from '@/components/productList/Tabs';
import PriceRangeFilter from '@/components/productList/PriceRangeFilter';
import SortOptions from '@/components/productList/SortOptions';
import ProductCard from '@/components/productList/ProductCard';
import Pagination from '@/components/productList/Pagination';
import useProductListQuery from '@/hooks/queries/useProductListQuery';
import { CATEGORY } from '@/constants/category';

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /** URL 기반 값 */
  const mainCat = searchParams.get('main_cat') || '';
  const subCat = searchParams.get('sub_cat') || '';

  /** 로컬 상태 */
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [priceMin, setPriceMin] = useState(searchParams.get('min_price') || '');
  const [priceMax, setPriceMax] = useState(searchParams.get('max_price') || '');
  const [currentSort, setCurrentSort] = useState(searchParams.get('sort') || 'popular');
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);

  /** ✅ 서브 카테고리 Tabs (전체 포함) */
  const subCategoryTabs = useMemo(() => {
    const category = CATEGORY.find((c) => c.id === mainCat);
    if (!category) return [];

    return [
      { id: 'all', label: '전체' },
      ...category.subCategories.map((sub) => ({
        id: sub.id,
        label: sub.name,
      })),
    ];
  }, [mainCat]);

  /** API Query Params */
  const queryParams = {
    q: searchQuery || undefined,
    page: currentPage,
    page_size: 20,
    main_cat: mainCat || undefined,
    sub_cat: subCat || undefined,
    min_price: priceMin ? Number(priceMin) : undefined,
    max_price: priceMax ? Number(priceMax) : undefined,
    sort: currentSort as 'price_low' | 'price_high' | 'popular',
  };

  const { data, isLoading, isError } = useProductListQuery(queryParams);

  /** URL → 상태 동기화 */
  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
    setPriceMin(searchParams.get('min_price') || '');
    setPriceMax(searchParams.get('max_price') || '');
    setCurrentSort(searchParams.get('sort') || 'popular');
    setCurrentPage(Number(searchParams.get('page')) || 1);
  }, [searchParams]);

  /** ✅ 서브 카테고리 변경 */
  const handleSubCategoryChange = (tabId: string) => {
    const params = Object.fromEntries(searchParams.entries());

    if (tabId === 'all') {
      delete params.sub_cat; // ⭐ 핵심
    } else {
      params.sub_cat = tabId;
    }

    setSearchParams(
      {
        ...params,
        page: '1',
      },
      { replace: true },
    );
  };

  const handlePriceApply = () => setCurrentPage(1);

  const handleSortChange = (sort: string) => {
    setCurrentSort(sort);
    setCurrentPage(1);
  };

  /** active 탭 결정 */
  const activeSubTab = subCat || 'all';

  if (isLoading)
    return <div className="flex min-h-screen items-center justify-center">로딩 중…</div>;
  if (isError)
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">에러 발생</div>
    );

  const products = data?.products || [];
  const pagination = data?.pagination;

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-20 py-10">
      <div className="mx-auto max-w-7xl">
        {subCategoryTabs.length > 0 && (
          <div className="mb-6 flex items-center gap-4">
            <h3 className="min-w-20 text-sm font-bold">카테고리</h3>
            <Tabs
              tabs={subCategoryTabs}
              activeTab={activeSubTab}
              onTabChange={handleSubCategoryChange}
            />
          </div>
        )}

        <PriceRangeFilter
          min={priceMin}
          max={priceMax}
          onMinChange={setPriceMin}
          onMaxChange={setPriceMax}
          onApply={handlePriceApply}
        />

        <div className="my-4 flex items-center justify-between">
          <p className="text-sm">
            총 <b>{pagination?.count ?? 0}</b>개의 상품
          </p>
          <SortOptions currentSort={currentSort} onSortChange={handleSortChange} />
        </div>

        <div className="flex flex-col gap-4">
          {products.length > 0 ? (
            products.map((p) => <ProductCard key={p.product_code} product={p} />)
          ) : (
            <div className="flex h-40 items-center justify-center rounded-lg bg-white">
              검색 결과가 없습니다.
            </div>
          )}
        </div>

        {pagination && pagination?.total_pages > 1 && (
          <Pagination
            currentPage={pagination.current_page}
            totalPages={pagination.total_pages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
