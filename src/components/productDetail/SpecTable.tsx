import type { ProductsCodeResDto } from '@/types/productsType';

interface SpecTableProps {
  productInfo?: ProductsCodeResDto;
}

const SpecTable = ({ productInfo }: SpecTableProps) => {
  const specs = productInfo ? Object.entries(productInfo.specs) : [];
  return (
    <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
      <div className="border-b border-[#E5E7EB] p-6">
        <h3 className="text-lg font-bold text-[#111827]">상세 정보</h3>
      </div>

      {/* 스펙 테이블 */}
      <div className="grid grid-cols-2">
        {specs.map(([label, value]) => (
          <div key={label} className={`grid grid-cols-3 border-b border-l border-[#F3F4F6]`}>
            <div className="col-span-1 border-r border-[#F3F4F6] px-4 py-4 text-xs font-bold tracking-[0.6px] text-[#6B7280] uppercase">
              {label}
            </div>
            <div className="col-span-2 px-4 py-4 text-sm font-medium text-[#111827]">{value}</div>
          </div>
        ))}
      </div>

      {/* 제조사 공식 제품 상세 페이지 영역 */}
      <div className="relative flex min-h-150 flex-col items-center justify-center border-t border-[#F3F4F6] bg-[#F9FAFB] p-12">
        {productInfo?.product_image_url_list?.length ? (
          <div className="flex w-full max-w-[800px] flex-col gap-6">
            {productInfo.product_image_url_list.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`${productInfo.product_name} 상세 이미지 ${index + 1}`}
                className="w-full rounded-lg border border-[#E5E7EB] bg-white object-contain"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="mb-4 text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-[#E5E7EB]">
                <svg
                  className="h-12 w-12 text-[#9CA3AF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="mb-2 text-sm font-medium text-[#9CA3AF]">
                제조사 공식 제품 상세 페이지 영역
              </p>
              <p className="text-xs leading-4 text-[#D1D5DB]">
                실제 서비스에서는 여기에 제품의 고화질 홍보 이미지와
                <br />
                상세 특징 설명 이미지가 로드됩니다.
              </p>
            </div>
          </>
        )}

        {/* 펼쳐보기 버튼 (이미지 있을 때만) */}
        {productInfo?.product_image_url_list?.length && (
          <button className="sticky bottom-12 mt-12 flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-12 py-4 shadow-lg transition-colors hover:bg-gray-50">
            <span className="text-sm font-bold text-[#111827]">상세 이미지 펼쳐보기</span>
            <svg
              className="h-6 w-6 text-[#111827]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SpecTable;
