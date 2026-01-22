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
      className="group cursor-pointer overflow-hidden rounded-[32px] border border-[#d2d2d7]/50 bg-white transition-all duration-500 hover:border-[#d2d2d7] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)]"
    >
      <div className="flex flex-col md:flex-row">
        {/* 이미지 섹션: 배경색을 미세하게 조정 */}
        <div className="relative h-64 w-full shrink-0 bg-[#FBFBFB] p-10 md:w-80">
          <img
            src={product.product_image_url}
            alt={product.product_name}
            className="h-full w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-6 left-6 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-tight text-[#1d1d1f] shadow-sm ring-1 ring-black/[0.03] backdrop-blur-md">
            BEST PICK
          </div>
        </div>

        {/* 정보 섹션 */}
        <div className="flex flex-1 flex-col justify-between p-10">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#86868b] uppercase">
                Recommendation
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#d2d2d7] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0066cc]" />
            </div>
            <h3 className="mb-2 line-clamp-2 text-[22px] leading-tight font-bold tracking-tight text-[#1d1d1f]">
              {product.product_name}
            </h3>
            <p className="text-[26px] font-bold tracking-tighter text-[#1d1d1f] tabular-nums">
              {product.price.toLocaleString()}
              <span className="ml-1 text-[17px] font-medium text-[#86868b]">원</span>
            </p>

            {/* 스펙 태그: 채도를 낮춘 그레이 톤 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {product.specs &&
                Object.entries(product.specs)
                  .slice(0, 3)
                  .map(([key, value]) => (
                    <span
                      key={key}
                      className="rounded-full bg-[#F5F5F7] px-4 py-1.5 text-[13px] font-medium text-[#424245] ring-1 ring-black/[0.02]"
                    >
                      {value}
                    </span>
                  ))}
            </div>
          </div>

          {/* AI 추천 이유: 배경 면적을 넓히고 텍스트 가독성 향상 */}
          <div className="mt-10 rounded-[22px] bg-[#F5F5F7]/70 p-6 ring-1 ring-black/[0.02]">
            <p className="mb-1.5 text-[11px] font-bold tracking-widest text-[#86868b] uppercase">
              AI Analysis
            </p>
            <p className="line-clamp-2 text-[15px] leading-relaxed font-medium text-[#424245]">
              {product.recommendation_reason}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
