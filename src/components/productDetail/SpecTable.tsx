import type { ProductsCodeResDto } from '@/types/productsType';
import { ChevronDown } from 'lucide-react';

interface SpecTableProps {
  productInfo?: ProductsCodeResDto;
}

const SpecTable = ({ productInfo }: SpecTableProps) => {
  const specs = productInfo ? Object.entries(productInfo.specs) : [];

  return (
    <div className="rounded-[2.5rem] border border-black/3 bg-white p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] md:p-16">
      <div className="mb-12 border-b border-[#f5f5f7] pb-10">
        <h3 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f]">제품 사양</h3>
      </div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {specs.map(([label, value]) => (
          <div key={label} className="group flex flex-col border-b border-[#f5f5f7] pb-6">
            <span className="mb-2 text-[11px] font-bold tracking-[0.05em] text-[#86868b] uppercase transition-colors group-hover:text-[#1d1d1f]">
              {label}
            </span>
            <span className="text-[16px] leading-snug font-medium tracking-tight text-[#1d1d1f]">
              {value}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-20 flex flex-col items-center overflow-hidden rounded-[2.5rem] bg-[#f5f5f7] px-8 py-20 transition-all duration-500 hover:bg-[#f2f2f4]">
        {!productInfo?.product_image_url_list?.length ? (
          <div className="flex flex-col items-center">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-4xl bg-white shadow-[0_8px_16px_rgba(0,0,0,0.04)]">
              <svg
                className="h-10 w-10 text-[#d2d2d7]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
              >
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-[#1d1d1f]">상세 정보 준비 중</h4>
            <p className="text-sm font-medium text-[#86868b]">
              제조사 제공 데이터를 불러오고 있습니다.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8">
            {/* 실제 이미지가 있을 경우 보여줄 미리보기나 레이아웃 */}
            <button className="group flex items-center gap-3 rounded-full bg-[#1d1d1f] px-10 py-4 text-[15px] font-semibold text-white shadow-xl shadow-black/10 transition-all hover:bg-[#424245] active:scale-95">
              상세 이미지 펼쳐보기
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecTable;
