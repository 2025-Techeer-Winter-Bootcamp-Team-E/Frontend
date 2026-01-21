import type { ProductsCodeResDto } from '@/types/productsType';

interface ProductInfoProps {
  productInfo?: ProductsCodeResDto;
}

const ProductInfo = ({ productInfo }: ProductInfoProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <span className="inline-block rounded bg-[#DBEAFE] px-2 py-0.5 text-xs font-bold text-[#0D9DDA]">
          {productInfo?.brand}
        </span>
      </div>
      <h1 className="mb-2 text-[30px] leading-9 font-bold whitespace-pre-wrap text-[#111827]">
        {productInfo?.product_name}
      </h1>
      <div className="mb-6">
        <div className="grid grid-cols-3 gap-4">
          {productInfo &&
            Object.entries(productInfo.specs).map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 rounded-lg border border-[#F3F4F6] bg-[#F9FAFB] p-4.25"
              >
                <span className="text-center text-[11px] leading-[16.5px] font-light tracking-[-0.275px] text-[#6B7280] uppercase">
                  {label}
                </span>
                <span className="text-center text-sm leading-5 font-bold whitespace-pre-wrap text-[#111827]">
                  {value}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
