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

  const mainCat = searchParams.get('main_cat') || '';
  const subCat = searchParams.get('sub_cat') || '';
  const searchQuery = searchParams.get('q') || '';
  const minPrice = searchParams.get('min_price') || '';
  const maxPrice = searchParams.get('max_price') || '';
  const sort = searchParams.get('sort') || 'popular';
  const page = Number(searchParams.get('page')) || 1;

  const updateURL = (newParams: Record<string, string | number | undefined>) => {
    const params = Object.fromEntries(searchParams.entries());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === '') {
        delete params[key];
      } else {
        params[key] = String(value);
      }
    });

    setSearchParams(params, { replace: true });
  };

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

        <PriceRangeFilter
          initialMin={minPrice}
          initialMax={maxPrice}
          onApply={(min, max) => updateURL({ min_price: min, max_price: max })}
        />

        <div className="my-4 flex items-center justify-between border-t pt-4">
          <p className="text-sm">
            총 <b>{pagination?.count ?? 0}</b>개의 상품
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {products.length > 0 ? (
            products.map((p) => <ProductCard key={p.product_code} product={p} />)
          ) : (
            <div className="flex h-40 items-center justify-center rounded-lg bg-white shadow-sm">
              검색 결과가 없습니다.
            </div>
          )}
        </div>

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
