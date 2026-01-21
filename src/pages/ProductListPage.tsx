import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tabs from '@/components/productList/Tabs';
import CheckboxFilter from '@/components/productList/CheckboxFilter';
import PriceRangeFilter from '@/components/productList/PriceRangeFilter';
import SortOptions from '@/components/productList/SortOptions';
import ProductCard from '@/components/productList/ProductCard';
import Pagination from '@/components/productList/Pagination';
import useProductListQuery from '@/hooks/queries/useProductListQuery';

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState(searchParams.get('main_cat') || '');
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.get('brand')?.split(',').filter(Boolean) || [],
  );
  const [priceMin, setPriceMin] = useState(searchParams.get('min_price') || '');
  const [priceMax, setPriceMax] = useState(searchParams.get('max_price') || '');
  const [currentSort, setCurrentSort] = useState(searchParams.get('sort') || 'popular');
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);

  const queryParams = {
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


  useEffect(() => {
    const params: Record<string, string> = {};
    if (activeTab) params.main_cat = activeTab;
    if (selectedBrands.length > 0) params.brand = selectedBrands.join(',');
    if (priceMin) params.min_price = priceMin;
    if (priceMax) params.max_price = priceMax;
    if (currentSort) params.sort = currentSort;
    if (currentPage > 1) params.page = String(currentPage);

    setSearchParams(params);
  }, [activeTab, selectedBrands, priceMin, priceMax, currentSort, currentPage]);

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

  const handleWishlist = (productId: number, isAdded: boolean) => {
    console.log(`상품 ${productId} 위시리스트 ${isAdded ? '추가' : '제거'}`);
  };

  const tabs = [
    { id: 'all', label: '전체' },
    { id: 'notebook', label: '노트북' },
    { id: 'desktop', label: '데스크톱' },
    { id: 'monitor', label: '모니터' },
  ];

  const brandOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'samsung', label: 'Samsung' },
    { value: 'lg', label: 'LG' },
    { value: 'dell', label: 'Dell' },
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

  const products = data || [];
  const pagination = data?.pagination || { current_page: 1, total_pages: 1, count: 0, size: 20 };

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-20 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-lg border border-[#E5E7EB] bg-white p-5.25">
          <div className="mb-4 flex items-start gap-4">
            <h3 className="min-w-20 py-1 pr-6 text-sm font-bold text-[#111827]">카테고리</h3>
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
          </div>

          <div className="mb-4 h-px border-t border-[#F3F4F6]" />

          <div className="mb-4">
            <CheckboxFilter
              label="제조사"
              options={brandOptions}
              selectedOptions={selectedBrands}
              onToggle={handleBrandToggle}
            />
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
          {products.map((product) => (
            <ProductCard
              key={product.product_code}
              product={{
                id: product.product_code,
                name: product.product_name,
                price: product.base_price,
                originalPrice: null,
                discount: null,
                image: product.thumbnail_url,
                freeShipping: true,
                specs: Object.entries(product.specs)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(', '),
                deliveryInfo: [],
                rating: 4.5,
                reviewCount: 0,
                salesCount: product.mall_price?.length || 0,
                registeredDate: '2024-01-01',
                coupon: 0,
                eleventhPrice:
                  product.mall_price?.find((m) => m.mall_name === '11번가')?.price || 0,
                timonPrice: product.mall_price?.find((m) => m.mall_name === 'G마켓')?.price || 0,
              }}
              onWishlist={handleWishlist}
            />
          ))}
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
