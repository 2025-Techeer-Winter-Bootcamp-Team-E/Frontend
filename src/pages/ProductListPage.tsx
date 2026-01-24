import { useSearchParams } from 'react-router-dom';
import PriceRangeFilter from '@/components/productList/PriceRangeFilter';
import ProductCard from '@/components/productList/ProductCard';
import useProductListQuery from '@/hooks/queries/useProductListQuery';
import Pagination from '@/components/layout/Pagination';
import { Tabs } from '@/components/productList';

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const mainCat = searchParams.get('main_cat') || '';
  const subCat = searchParams.get('sub_cat') || '';
  const minPrice = searchParams.get('min_price') || '';
  const maxPrice = searchParams.get('max_price') || '';
  const sort = searchParams.get('sort') || 'popular';
  const pageParam = searchParams.get('page');
  const page = pageParam ? Number(pageParam) : 1;

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
    main_cat: mainCat || undefined,
    sub_cat: subCat || undefined,
    min_price: minPrice ? Number(minPrice) : undefined,
    max_price: maxPrice ? Number(maxPrice) : undefined,
    sort: sort as 'price_low' | 'price_high' | 'popular',
    page,
    page_size: 20,
  };

  const { data } = useProductListQuery(queryParams);

  const products = data?.products || [];
  const pagination = data?.pagination;

  const handlePageChange = (newPage: number) => {
    if (!pagination) return;
    if (newPage < 1 || newPage > pagination.total_pages) return;

    updateURL({ page: newPage });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (sortValue: string) => {
    updateURL({ sort: sortValue, page: 1 });
  };

  const sortTabs = [
    { id: 'popular', label: '인기순' },
    { id: 'price_low', label: '낮은 가격순' },
    { id: 'price_high', label: '높은 가격순' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-20 py-10">
      <div className="mx-auto max-w-7xl">
        <PriceRangeFilter
          key={`${minPrice}-${maxPrice}`}
          initialMin={minPrice}
          initialMax={maxPrice}
          onApply={(min, max) => updateURL({ min_price: min, max_price: max })}
        />

        <div className="my-4 flex items-center justify-between border-t pt-4">
          <p className="text-sm text-[#86868b]">
            총 <span className="font-semibold text-[#1d1d1f]">{pagination?.count ?? 0}</span>개의
            상품
          </p>

          <Tabs tabs={sortTabs} activeTab={sort} onTabChange={handleSortChange} />
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

        {pagination && (
          <Pagination
            currentPage={pagination.current_page}
            onPageChange={handlePageChange}
            totalPages={pagination.total_pages}
          />
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
