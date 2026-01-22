import type { MallPrices, ProductSpecs } from '@/types/searchType';
import { Star, Truck } from 'lucide-react';

interface ProductCardProps {
  product: {
    product_code: number;
    product_name: string;
    brand: string;
    specs: ProductSpecs;
    base_price: number;
    category: string;
    thumbnail_url: string;
    mall_price: MallPrices[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  // 쇼핑몰별 가격 추출 헬퍼 함수
  const getMallPrice = (mallName: string) => {
    return product.mall_price.find((m) => m.mall_name === mallName)?.price || 0;
  };

  // 스펙을 문자열로 변환
  const specsText = Object.entries(product.specs)
    .map(([key, value]) => `${key}: ${value}`)
    .join(' · ');

  // 쇼핑몰별 가격
  const coupangPrice = getMallPrice('쿠팡') || product.base_price;
  const eleventhPrice = getMallPrice('11번가');
  const gmarketPrice = getMallPrice('G마켓');

  return (
    <div className="group flex gap-8 rounded-[24px] border border-black/[0.05] bg-white p-6 transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
      {/* 상품 이미지 영역 */}
      <div className="relative h-[180px] w-[180px] flex-shrink-0">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[18px] bg-[#f5f5f7]">
          {product.thumbnail_url ? (
            <img
              src={product.thumbnail_url}
              alt={product.product_name}
              className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="text-[#d2d2d7]">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* 상품 정보 영역 */}
      <div className="flex flex-1 flex-col py-1">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[19px] leading-tight font-semibold tracking-tight text-[#1d1d1f]">
              {product.product_name}
            </h3>
            <span className="flex-shrink-0 rounded-full bg-[#f5f5f7] px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-[#86868b]">
              {product.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[21px] font-bold tracking-tight text-[#1d1d1f]">
              {product.base_price.toLocaleString()}원
            </span>
            <div className="flex items-center gap-1 rounded-md bg-[#f5f5f7] px-1.5 py-0.5">
              <Truck className="h-3 w-3 text-[#86868b]" />
              <span className="text-[11px] font-medium text-[#86868b]">무료배송</span>
            </div>
          </div>

          <div className="text-[12px] font-medium tracking-tight text-[#86868b]">
            {product.brand} · {product.category}
          </div>

          <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-[#515154]">
            {specsText}
          </p>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <Star className="h-3.5 w-3.5 fill-[#1d1d1f] text-[#1d1d1f]" />
              <span className="text-[13px] font-bold text-[#1d1d1f]">4.5</span>
              <span className="text-[13px] text-[#86868b]">(0)</span>
            </div>
            <div className="h-2.5 w-[1px] bg-[#d2d2d7]" />
            <span className="text-[13px] text-[#86868b]">{product.mall_price.length}개 쇼핑몰</span>
          </div>
        </div>
      </div>

      {/* 가격 비교 (우측 섹션) */}
      <div className="flex w-[220px] flex-shrink-0 flex-col justify-center border-l border-[#f5f5f7] pl-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-bold text-[#1d1d1f]">쿠팡</span>
            <span className="text-[15px] font-bold text-[#ff3b30]">
              {coupangPrice.toLocaleString()}원
            </span>
          </div>
          {eleventhPrice > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-medium text-[#515154]">11번가</span>
              <span className="text-[14px] font-semibold text-[#1d1d1f]">
                {eleventhPrice.toLocaleString()}원
              </span>
            </div>
          )}
          {gmarketPrice > 0 && (
            <div className="flex items-center justify-between opacity-60">
              <span className="text-[12px] font-medium text-[#515154]">G마켓</span>
              <span className="text-[14px] font-medium text-[#1d1d1f]">
                {gmarketPrice.toLocaleString()}원
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
