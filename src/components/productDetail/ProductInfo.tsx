import type { ProductsCodeResDto } from '@/types/productsType';

interface ProductInfoProps {
  productInfo?: ProductsCodeResDto;
}

const ProductInfo = ({ productInfo }: ProductInfoProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <span className="inline-block rounded-full bg-[#f5f5f7] px-3 py-1 text-[11px] font-bold tracking-wider text-[#86868b] uppercase">
          {productInfo?.brand}
        </span>
      </div>

      <h1 className="mb-8 text-[40px] leading-[1.1] font-semibold tracking-tight text-[#1d1d1f]">
        {productInfo?.product_name}
      </h1>

      <div className="grid grid-cols-3 gap-3">
        {productInfo &&
          Object.entries(productInfo.specs)
            .slice(0, 3)
            .map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-2xl border border-[#d2d2d7]/30 bg-[#f5f5f7]/30 p-4 transition-all hover:bg-white hover:shadow-sm"
              >
                <span className="mb-1 text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                  {label}
                </span>
                <span className="text-center text-[13px] font-semibold tracking-tight text-[#1d1d1f]">
                  {value}
                </span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductInfo;
