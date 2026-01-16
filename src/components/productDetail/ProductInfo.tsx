import { Star, Info } from 'lucide-react';

interface ProductInfoProps {
  brand: string;
  name: string;
  rating: number;
  reviewCount: number;
  registeredDate: string;
  quickSpecs: Array<{ label: string; value: string }>;
}

const ProductInfo = ({
  brand,
  name,
  rating,
  reviewCount,
  registeredDate,
  quickSpecs,
}: ProductInfoProps) => {
  return (
    <div className="flex flex-col">
      {/* 브랜드 배지 */}
      <div className="mb-2">
        <span className="inline-block px-2 py-0.5 bg-[#DBEAFE] text-[#0D9DDA] text-xs font-bold rounded">
          {brand}
        </span>
      </div>

      {/* 제품명 */}
      <h1 className="text-[30px] font-bold text-[#111827] mb-2 leading-[36px] whitespace-pre-wrap">
        {name}
      </h1>

      {/* 평점 및 출시일 */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 fill-[#FACC15] text-[#FACC15]" />
          <span className="text-sm text-[#6B7280] font-light">
            {rating} ({reviewCount})
          </span>
        </div>
        <div className="w-px h-3 bg-[#D1D5DB]" />
        <span className="text-sm text-[#6B7280] font-light">
          출시일: {registeredDate}
        </span>
      </div>

      {/* 주요 스펙 */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-6 h-6 text-[#0D9DDA]" />
          <h3 className="text-base font-bold text-[#111827]">주요 스펙</h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {quickSpecs.map((spec, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] border border-[#F3F4F6] rounded-lg p-[17px] flex flex-col items-center gap-1"
            >
              <span className="text-[11px] text-[#6B7280] font-light uppercase tracking-[-0.275px] text-center leading-[16.5px]">
                {spec.label}
              </span>
              <span className="text-sm font-bold text-[#111827] text-center leading-[20px] whitespace-pre-wrap">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
