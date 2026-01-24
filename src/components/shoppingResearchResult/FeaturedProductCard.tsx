import { Target, Sparkles, TrendingUp } from 'lucide-react';
import type { ShoppingResearchResultEntity } from '@/types/searchType';
import { Link } from 'react-router-dom';
import { PATH } from '@/routes/path';

interface FeaturedProductCardProps {
  product?: ShoppingResearchResultEntity;
}

const FeaturedProductCard = ({ product }: FeaturedProductCardProps) => {
  if (!product) return null;

  const matchPercentage = Math.round((product.similarity_score ?? 0) * 100);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 px-1">
        <Target className="h-5 w-5 text-[#1d1d1f]" strokeWidth={2.5} />
        <h2 className="text-[22px] font-bold tracking-tight text-[#1d1d1f]">최적 상품 추천</h2>
      </div>
      <div className="relative overflow-hidden rounded-[28px] border border-[#d2d2d7]/40 bg-white p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
        <div className="absolute top-6 right-6 flex gap-2">
          <div className="rounded-full bg-linear-to-r from-[#0066cc] to-[#0077ed] px-4 py-1.5 text-[12px] font-bold text-white shadow-lg">
            MATCH {matchPercentage}%
          </div>
          <div className="rounded-full bg-[#F5F5F7] px-3 py-1.5 text-[11px] font-bold text-[#1d1d1f] ring-1 ring-black/5">
            TOP PICK
          </div>
        </div>
        <div className="flex flex-col gap-12 lg:flex-row">
          <Link
            to={PATH.PRODUCT_DETAIL(product.product_code)}
            className="flex h-70 w-full shrink-0 items-center justify-center rounded-[20px] bg-[#FBFBFB] ring-1 ring-black/2 lg:w-100"
          >
            <img
              src={product.product_image_url}
              alt={product.product_name}
              className="h-3/4 w-3/4 object-contain mix-blend-multiply"
            />
          </Link>
          <div className="flex flex-1 flex-col justify-between py-2">
            <div>
              <h3 className="mb-4 text-[32px] leading-tight font-bold tracking-tight text-[#1d1d1f]">
                {product.product_name}
              </h3>
              <div className="flex items-baseline gap-3">
                <span className="text-[28px] font-bold tracking-tighter text-[#1d1d1f]">
                  {product.price.toLocaleString()}원
                </span>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-6 border-t border-[#f5f5f7] pt-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#1d1d1f]" />
                <p className="text-[15px] font-bold text-[#1d1d1f]">AI 추천 이유</p>
              </div>
              <p className="text-[15px] leading-relaxed font-medium text-[#424245]">
                {product.recommendation_reason}
              </p>
              <div className="flex items-center gap-2 pt-4">
                <TrendingUp className="h-4 w-4 text-[#1d1d1f]" />
                <p className="text-[15px] font-bold text-[#1d1d1f]">사용자 리뷰 요약</p>
              </div>
              <p className="text-[15px] leading-relaxed font-medium text-[#424245]">
                {product.ai_review_summary}
              </p>
              {product.product_specs && Object.keys(product.product_specs).length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-[#F5F5F7] p-5">
                  {Object.entries(product.product_specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold tracking-wide text-[#86868b] uppercase">
                        {key}
                      </span>
                      <span className="text-[14px] font-semibold text-[#1d1d1f]">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
