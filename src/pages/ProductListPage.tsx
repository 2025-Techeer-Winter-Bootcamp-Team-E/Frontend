import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import productsData from '@/data/productsData.json';
import Tabs from '@/components/productList/Tabs';
import CheckboxFilter from '@/components/productList/CheckboxFilter';
import PriceRangeFilter from '@/components/productList/PriceRangeFilter';
import SortOptions from '@/components/productList/SortOptions';
import ProductCard from '@/components/productList/ProductCard';
import Pagination from '@/components/productList/Pagination';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  discount: number | null;
  image: string | null;
  freeShipping: boolean;
  specs: string;
  deliveryInfo: string[];
  rating: number;
  reviewCount: number;
  salesCount: number;
  registeredDate: string;
  coupon: number;
  eleventhPrice: number;
  timonPrice: number;
}

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'category';
  const searchQuery = searchParams.get('q') || '';

  const [activeTab, setActiveTab] = useState(category);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [currentSort, setCurrentSort] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [
    { id: 'category', label: '전체' },
    { id: 'bluetooth', label: '블루투스 헤드폰' },
    { id: 'wired', label: '게이밍 헤드셋' },
    { id: 'earbuds', label: '이어폰' },
  ];

  const brandOptions = [
    { value: 'sony', label: 'SONY' },
    { value: 'bose', label: 'BOSE' },
    { value: 'apple', label: 'Apple' },
    { value: 'samsung', label: 'Samsung' },
  ];

  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handlePriceApply = () => {
    console.log('가격 필터 적용:', priceMin, priceMax);
  };

  const handleWishlist = (productId: number, isAdded: boolean) => {
    console.log(`상품 ${productId} 위시리스트 ${isAdded ? '추가' : '제거'}`);
  };

  // 필터링 및 정렬 로직
  let filteredProducts = [...productsData.products];

  // 검색어 필터링
  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  // 카테고리 필터링
  if (activeTab !== 'category') {
    // 실제로는 카테고리별 필터링 로직이 필요하지만, 예시로는 전체 표시
    // filteredProducts = filteredProducts.filter(...)
  }

  // 브랜드 필터링
  if (selectedBrands.length > 0) {
    // 실제로는 브랜드별 필터링 로직이 필요
    // filteredProducts = filteredProducts.filter(...)
  }

  // 가격 필터링
  if (priceMin) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= parseInt(priceMin),
    );
  }
  if (priceMax) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseInt(priceMax),
    );
  }

  // 정렬
  switch (currentSort) {
    case 'popular':
      filteredProducts.sort((a, b) => b.salesCount - a.salesCount);
      break;
    case 'latest':
      filteredProducts.sort(
        (a, b) =>
          new Date(b.registeredDate).getTime() -
          new Date(a.registeredDate).getTime(),
      );
      break;
    case 'low-price':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'high-price':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'review':
      filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
  }

  // 페이지네이션
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-20 py-10">
      <div className="mx-auto max-w-[1280px]">
        {/* 필터 섹션 */}
        <div className="mb-10 rounded-lg border border-[#E5E7EB] bg-white p-[21px]">
          {/* 카테고리 */}
          <div className="mb-4 flex gap-4 items-start">
            <h3 className="min-w-[80px] text-sm font-bold text-[#111827] py-1 pr-6">
              카테고리
            </h3>
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* 구분선 */}
          <div className="mb-4 h-px border-t border-[#F3F4F6]" />

          {/* 제조사 필터 */}
          <div className="mb-4">
            <CheckboxFilter
              label="제조사"
              options={brandOptions}
              selectedOptions={selectedBrands}
              onToggle={handleBrandToggle}
            />
          </div>

          {/* 구분선 */}
          <div className="mb-4 h-px border-t border-[#F3F4F6]" />

          {/* 가격대 필터 */}
          <PriceRangeFilter
            min={priceMin}
            max={priceMax}
            onMinChange={setPriceMin}
            onMaxChange={setPriceMax}
            onApply={handlePriceApply}
          />
        </div>

        {/* 결과 카운트 및 정렬 */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-light text-[#6B7280]">
            총 <span className="font-bold text-[#111827]">{filteredProducts.length}</span>개의
            상품이 있습니다.
          </p>
          <SortOptions currentSort={currentSort} onSortChange={setCurrentSort} />
        </div>

        {/* 상품 리스트 */}
        <div className="mb-8 flex flex-col gap-4">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product as Product}
              onWishlist={handleWishlist}
            />
          ))}
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
