import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PATH } from '@/routes/path';
import type { LLMRecommendationEntity } from '@/types/searchType';

interface ProductCardProps {
  product: LLMRecommendationEntity;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (product.product_detail_url) window.open(product.product_detail_url, '_blank');
    else navigate(PATH.PRODUCT_DETAIL(product.product_id));
  };

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer overflow-hidden rounded-[24px] bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex flex-col md:flex-row">
        {/* 이미지 섹션 */}
        <div className="relative h-64 w-full shrink-0 bg-[#F9FAFB] p-8 md:w-72">
          <img
            src={product.product_image_url}
            alt={product.product_name}
            className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold text-indigo-600 ring-1 ring-indigo-100 backdrop-blur-sm">
            BEST PICK
          </div>
        </div>

        {/* 정보 섹션 */}
        <div className="flex flex-1 flex-col justify-between p-8">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
                Recommendation
              </span>
              <ArrowUpRight className="h-5 w-5 text-gray-300 transition-colors group-hover:text-indigo-500" />
            </div>
            <h3 className="mb-2 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
              {product.product_name}
            </h3>
            <p className="text-2xl font-black text-gray-900">
              {product.price.toLocaleString()}
              <span className="ml-1 text-sm font-medium text-gray-500">원</span>
            </p>

            {/* 스펙 태그 */}
            <div className="mt-4 flex flex-wrap gap-2">
              {product.specs &&
                Object.entries(product.specs)
                  .slice(0, 3)
                  .map(([key, value]) => (
                    <span
                      key={key}
                      className="rounded-lg bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500"
                    >
                      {value}
                    </span>
                  ))}
            </div>
          </div>

          {/* AI 추천 이유 */}
          <div className="mt-6 rounded-2xl bg-indigo-50/50 p-4 ring-1 ring-indigo-100/50">
            <p className="mb-1 text-[11px] font-bold tracking-tighter text-indigo-400 uppercase">
              AI Analysis
            </p>
            <p className="line-clamp-2 text-[14px] leading-relaxed font-medium text-gray-700">
              {product.recommendation_reason}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
