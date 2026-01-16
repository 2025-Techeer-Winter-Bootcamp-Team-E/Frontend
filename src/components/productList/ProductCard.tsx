import { useState } from 'react';
import { Heart, Star, Truck } from 'lucide-react';

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

interface ProductCardProps {
  product: Product;
  onWishlist: (productId: number, isAdded: boolean) => void;
}

const ProductCard = ({ product, onWishlist }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    onWishlist(product.id, !isWishlisted);
  };

  return (
    <div className="flex gap-6 rounded-lg border border-[#E5E7EB] bg-white p-[25px]">
      {/* 상품 이미지 */}
      <div className="relative h-[171px] w-[192px] flex-shrink-0">
        <div className="flex h-[160px] w-[160px] items-center justify-center overflow-hidden rounded-lg bg-[#F3F4F6]">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="text-gray-300">
              <svg className="h-[72px] w-[60px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
          )}
        </div>
        {/* 위시리스트 버튼 */}
        <button
          onClick={handleWishlistToggle}
          className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-50"
        >
          <Heart
            className={`h-7 w-6 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>
      </div>

      {/* 상품 정보 */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-1 pb-3">
          {/* 상품명과 브랜드 카탈로그 배지 */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="min-w-[280px] text-lg font-bold text-[#111827]">
              {product.name}
            </h3>
            <div className="rounded bg-[#F5F7F8] px-2 py-1">
              <span className="text-xs font-bold text-[#16A34A]">브랜드 카탈로그</span>
            </div>
          </div>

          {/* 가격 및 배송 정보 */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#111827]">
              {product.price.toLocaleString()}원
            </span>
            {product.freeShipping && (
              <div className="flex items-center gap-1">
                <Truck className="h-4 w-4 text-[#6B7280]" />
                <span className="text-xs font-light text-[#6B7280]">무료배송</span>
              </div>
            )}
            <div className="rounded border border-[#D1D5DB] px-2 py-1">
              <span className="text-xs font-light text-[#6B7280]">
                판매몰 {product.salesCount}
              </span>
            </div>
          </div>

          {/* 카테고리 경로 */}
          <div className="text-xs font-light text-[#6B7280]">
            음향가전 &gt; 헤드폰 &gt; 무선 &gt; 블루투스헤드폰/헤드셋
          </div>

          {/* 스펙 정보 */}
          <div className="h-[39px] overflow-hidden text-xs font-light leading-[19.5px] text-[#4B5563]">
            {product.specs}
          </div>

          {/* 평점 및 기타 정보 */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-4 fill-[#EAB308] text-[#EAB308]" />
              <span className="text-xs font-bold text-[#EAB308]">
                {product.rating} ({product.reviewCount.toLocaleString()})
              </span>
            </div>
            <div className="h-3 w-px bg-[#D1D5DB]" />
            <span className="text-xs font-light text-[#6B7280]">찜 {product.salesCount}</span>
            <div className="h-3 w-px bg-[#D1D5DB]" />
            <span className="text-xs font-light text-[#6B7280]">
              등록일 {product.registeredDate}
            </span>
          </div>
        </div>
      </div>

      {/* 가격 비교 정보 */}
      <div className="h-[171px] w-[256px] flex-shrink-0 border-l border-[#F3F4F6] pl-6 flex flex-col justify-center">
        <div className="flex flex-col gap-2">
          {/* 쿠팡 */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#2563EB]">쿠팡</span>
            <span className="text-sm font-bold text-[#EF4444]">
              {product.price.toLocaleString()}원
            </span>
          </div>
          {/* 11번가 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-light text-[#4B5563]">11번가</span>
              <div className="rounded bg-[#DCFCE7] px-1 py-0.5">
                <span className="text-[10px] font-bold text-[#15803D]">N pay+</span>
              </div>
            </div>
            <span className="text-sm font-light text-[#4B5563]">
              {product.eleventhPrice.toLocaleString()}원
            </span>
          </div>
          {/* G마켓 */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-light text-[#4B5563]">G마켓</span>
            <span className="text-sm font-light text-[#4B5563]">
              {product.timonPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
