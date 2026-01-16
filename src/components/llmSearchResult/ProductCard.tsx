import React from 'react';

interface Product {
  id: number;
  category: string;
  name: string;
  price: string;
  badge: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-[#f3f4f6] rounded-2xl overflow-hidden shadow-sm">
      <div className="flex">
        {/* 제품 이미지 */}
        <div className="bg-[#f9fafb] border-r border-[#f3f4f6] w-[191.59px] h-[239px] flex items-center justify-center px-4 py-4 flex-shrink-0">
          <div className="w-full h-full relative">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-[76.61%] top-[11.69%] object-contain"
            />
          </div>
        </div>

        {/* 제품 정보 */}
        <div className="flex-1 h-[239px] p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-start justify-between">
              <p className="text-xs font-bold text-[#0d9dda] uppercase tracking-[0.6px] leading-[16px]">
                {product.category}
              </p>
              <span className="bg-[#eff6ff] text-[#0d9dda] text-[10px] font-bold px-2 py-0.5 rounded">
                {product.badge}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#111827] leading-[28px] whitespace-pre-wrap">
              {product.name}
            </h3>
            <p className="text-xl font-black text-[#0d9dda] leading-[28px] mt-1 whitespace-pre-wrap">
              {product.price}
            </p>
          </div>

          <div className="bg-[#f9fafb] border-l-4 border-[#0d9dda] rounded-xl pl-5 pr-4 py-4">
            <p className="text-xs font-bold text-[#6b7280] mb-1 leading-[16px]">AI 추천 이유</p>
            <p className="text-sm font-light text-[#111827] leading-[20px]">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
