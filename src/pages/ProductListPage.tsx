import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tabs from '@/components/productList/Tabs';
import PriceRangeFilter from '@/components/productList/PriceRangeFilter';
import SortOptions from '@/components/productList/SortOptions';
import ProductCard from '@/components/productList/ProductCard';
import Pagination from '@/components/productList/Pagination';
import useProductListQuery from '@/hooks/queries/useProductListQuery';

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // ✅ 검색어 상태 추가
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [activeTab, setActiveTab] = useState(searchParams.get('main_cat') || '');
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.get('brand')?.split(',').filter(Boolean) || [],
  );
  const [priceMin, setPriceMin] = useState(searchParams.get('min_price') || '');
  const [priceMax, setPriceMax] = useState(searchParams.get('max_price') || '');
  const [currentSort, setCurrentSort] = useState(searchParams.get('sort') || 'popular');
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);

  const queryParams = {
    q: searchQuery || undefined, // ✅ 검색어 추가
    page: currentPage,
    page_size: 20,
    main_cat: activeTab || undefined,
    sub_cat: searchParams.get('sub_cat') || undefined,
    brand: selectedBrands.length > 0 ? selectedBrands.join(',') : undefined,
    min_price: priceMin ? Number(priceMin) : undefined,
    max_price: priceMax ? Number(priceMax) : undefined,
    sort: currentSort as 'price_low' | 'price_high' | 'popular',
  };

  const { data, isLoading, isError } = useProductListQuery(queryParams);

  // ✅ URL 파라미터가 변경되면 상태 업데이트
  useEffect(() => {
    const newSearchQuery = searchParams.get('q') || '';
    const newMainCat = searchParams.get('main_cat') || '';
    const newBrand = searchParams.get('brand')?.split(',').filter(Boolean) || [];
    const newMinPrice = searchParams.get('min_price') || '';
    const newMaxPrice = searchParams.get('max_price') || '';
    const newSort = searchParams.get('sort') || 'popular';
    const newPage = Number(searchParams.get('page')) || 1;

    setSearchQuery(newSearchQuery);
    setActiveTab(newMainCat);
    setSelectedBrands(newBrand);
    setPriceMin(newMinPrice);
    setPriceMax(newMaxPrice);
    setCurrentSort(newSort);
    setCurrentPage(newPage);
  }, [searchParams]);

  // ✅ 상태가 변경되면 URL 업데이트
  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchQuery) params.q = searchQuery; // ✅ 검색어 추가
    if (activeTab) params.main_cat = activeTab;
    if (selectedBrands.length > 0) params.brand = selectedBrands.join(',');
    if (priceMin) params.min_price = priceMin;
    if (priceMax) params.max_price = priceMax;
    if (currentSort) params.sort = currentSort;
    if (currentPage > 1) params.page = String(currentPage);

    setSearchParams(params, { replace: true });
  }, [
    searchQuery,
    activeTab,
    selectedBrands,
    priceMin,
    priceMax,
    currentSort,
    currentPage,
    setSearchParams,
  ]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
    setCurrentPage(1);
  };

  const handlePriceApply = () => {
    setCurrentPage(1);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setCurrentSort(sort);
    setCurrentPage(1);
  };

  const tabs = [
    { id: '', label: '전체' },
    { id: '디스플레이', label: '디스플레이' },
    { id: '프로세서', label: '프로세서' },
    { id: '그래픽카드', label: '그래픽카드' },
    { id: '메모리', label: '메모리' },
    { id: '스토리지', label: '스토리지' },
  ];

  const brandOptions = [
    { value: 'Apple', label: 'Apple' },
    { value: 'Samsung', label: 'Samsung' },
    { value: 'LG', label: 'LG' },
    { value: 'Dell', label: 'Dell' },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] px-20 py-10">
        <div className="mx-auto flex max-w-[1280px] items-center justify-center">
          <p className="text-lg text-[#6B7280]">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] px-20 py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <p className="text-lg text-red-500">데이터를 불러오는데 실패했습니다.</p>
        </div>
      </div>
    );
  }

  const products = data?.products || [];
  const pagination = data?.pagination || {
    current_page: 1,
    total_pages: 1,
    count: 0,
    size: 20,
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-20 py-10">
      <div className="mx-auto max-w-7xl">
        {/* ✅ 검색어 표시 추가 */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-lg text-[#111827]">
              '<span className="font-bold">{searchQuery}</span>' 검색 결과
            </p>
          </div>
        )}

        <div className="mb-10 rounded-lg border border-[#E5E7EB] bg-white p-5.25">
          <div className="mb-4 flex items-start gap-4">
            <h3 className="min-w-20 py-1 pr-6 text-sm font-bold text-[#111827]">카테고리</h3>
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
          </div>

          <div className="mb-4 h-px border-t border-[#F3F4F6]" />
          <PriceRangeFilter
            min={priceMin}
            max={priceMax}
            onMinChange={setPriceMin}
            onMaxChange={setPriceMax}
            onApply={handlePriceApply}
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-light text-[#6B7280]">
            총 <span className="font-bold text-[#111827]">{pagination.count}</span>개의 상품이
            있습니다.
          </p>
          <SortOptions currentSort={currentSort} onSortChange={handleSortChange} />
        </div>

        <div className="mb-8 flex flex-col gap-4">
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product.product_code} product={product} />)
          ) : (
            <div className="flex h-40 items-center justify-center rounded-lg bg-white">
              <p className="text-[#6B7280]">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>

        {pagination.total_pages > 1 && (
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
