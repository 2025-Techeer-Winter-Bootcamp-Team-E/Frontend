import React from 'react';
import { Target, Sparkles } from 'lucide-react';

interface FeaturedProductCardProps {
  product: {
    badge: string;
    category: string;
    name: string;
    price: string;
    originalPrice: string;
    image: string;
    reasons: {
      title: string;
      items: string[];
    };
  };
}

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="scale-y-[-1]">
          <Target className="w-6 h-7 text-[#0d9dda]" />
        </div>
        <h2 className="text-xl font-bold text-[#111827] leading-[28px]">최적 상품 추천</h2>
      </div>
      <div className="bg-white border-2 border-[rgba(13,157,218,0.2)] rounded-2xl p-[34px] shadow-lg relative overflow-hidden">
        {/* BEST CHOICE 배지 */}
        <div className="absolute right-0 top-0">
          <div className="bg-[#0d9dda] text-white text-xs font-bold px-4 py-[6px] rounded-bl-xl shadow-md">
            {product.badge}
          </div>
        </div>

        <div className="flex gap-8">
          {/* 제품 이미지 */}
          <div className="bg-[#f9fafb] rounded-xl w-[440px] h-[256px] flex items-center justify-center flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* 제품 정보 */}
          <div className="flex-1 flex flex-col justify-between py-[30px]">
            <div className="flex flex-col gap-[4.5px]">
              <p className="text-xs font-bold text-[#0d9dda] uppercase tracking-[0.6px] leading-[16px]">
                {product.category}
              </p>
              <h3 className="text-[30px] font-bold text-[#111827] leading-[36px] whitespace-pre-wrap">
                {product.name}
              </h3>
              <div className="flex items-baseline gap-2 pt-[3.5px]">
                <span className="text-2xl font-black text-[#0d9dda] leading-[32px]">
                  {product.price}
                </span>
                <span className="text-sm font-light text-[#6b7280] leading-[20px] line-through">
                  {product.originalPrice}
                </span>
              </div>
            </div>

            {/* 추천 이유 */}
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center gap-2">
                <div className="scale-y-[-1]">
                  <Sparkles className="w-6 h-7 text-[#0d9dda]" />
                </div>
                <p className="text-sm font-bold text-[#111827] leading-[20px]">
                  {product.reasons.title}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {product.reasons.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-xs font-light text-[#0d9dda] leading-[16px] pt-1">
                      ●
                    </span>
                    <p className="text-sm font-light text-[#6b7280] leading-[20px]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
