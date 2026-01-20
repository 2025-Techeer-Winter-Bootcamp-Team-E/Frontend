import type { LLMRecommendationEntity } from '@/types/searchType';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: LLMRecommendationEntity;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (product.product_detail_url) {
      // 외부 URL인 경우
      window.open(product.product_detail_url, '_blank');
    } else {
      // 내부 상세 페이지로 이동
      navigate(`/product/${product.product_id}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer overflow-hidden rounded-2xl border border-[#f3f4f6] bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex">
        {/* 제품 이미지 */}
        <div className="flex h-59.75 w-[191.59px] shrink-0 items-center justify-center border-r border-[#f3f4f6] bg-[#f9fafb] px-4 py-4">
          <div className="relative h-full w-full">
            <img
              src={product.product_image_url}
              alt={product.product_name}
              className="absolute inset-0 top-[11.69%] h-[76.61%] w-full object-contain"
              onError={(e) => {
                // 이미지 로드 실패 시 기본 이미지 표시
                e.currentTarget.src = '/placeholder-product.png';
              }}
            />
          </div>
        </div>

        {/* 제품 정보 */}
        <div className="flex h-59.75 flex-1 flex-col justify-between p-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-start justify-between">
              <p className="text-xs leading-4 font-bold tracking-[0.6px] text-[#0d9dda] uppercase">
                추천상품
              </p>
              <span className="rounded bg-[#eff6ff] px-2 py-0.5 text-[10px] font-bold text-[#0d9dda]">
                AI 추천
              </span>
            </div>
            <h3 className="line-clamp-2 text-lg leading-7 font-bold text-[#111827]">
              {product.product_name}
            </h3>
            <p className="mt-1 text-xl leading-7 font-black text-[#0d9dda]">
              {product.price.toLocaleString()}원
            </p>

            {/* 스펙 정보 추가 */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(product.specs)
                  .slice(0, 3)
                  .map(([key, value]) => (
                    <span
                      key={key}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {key}: {value}
                    </span>
                  ))}
              </div>
            )}
          </div>

          <div className="rounded-xl border-l-4 border-[#0d9dda] bg-[#f9fafb] py-4 pr-4 pl-5">
            <p className="mb-1 text-xs leading-4 font-bold text-[#6b7280]">AI 추천 이유</p>
            <p className="line-clamp-2 text-sm leading-5 font-light text-[#111827]">
              {product.recommendation_reason}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
