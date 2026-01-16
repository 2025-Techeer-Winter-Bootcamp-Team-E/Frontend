interface Spec {
  label: string;
  value: string;
}

interface SpecTableProps {
  specs: Spec[];
}

const SpecTable = ({ specs }: SpecTableProps) => {
  return (
    <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
      <div className="p-6 border-b border-[#E5E7EB]">
        <h3 className="text-lg font-bold text-[#111827]">상세 정보</h3>
      </div>

      <div className="grid grid-cols-2">
        {specs.map((spec, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 border-b border-l ${
              index % 2 === 0 ? 'bg-white' : 'bg-white'
            } border-[#F3F4F6] ${
              index < 2 ? 'border-t-0' : ''
            }`}
          >
            <div className="col-span-1 px-4 py-4 text-xs font-bold text-[#6B7280] uppercase tracking-[0.6px] border-r border-[#F3F4F6]">
              {spec.label}
            </div>
            <div className="col-span-2 px-4 py-4 text-sm font-medium text-[#111827]">
              {spec.value}
            </div>
          </div>
        ))}
      </div>

      {/* 제조사 공식 제품 상세 페이지 영역 */}
      <div className="bg-[#F9FAFB] border-t border-[#F3F4F6] min-h-[600px] flex flex-col items-center justify-center p-12 relative">
        <div className="text-center mb-4">
          <div className="w-24 h-24 bg-[#E5E7EB] rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-12 h-12 text-[#9CA3AF]"
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
          <p className="text-sm text-[#9CA3AF] font-medium mb-2">
            제조사 공식 제품 상세 페이지 영역
          </p>
          <p className="text-xs text-[#D1D5DB] leading-4">
            실제 서비스에서는 여기에 제품의 고화질 홍보 이미지와
            <br />
            상세 특징 설명 이미지가 로드됩니다.
          </p>
        </div>

        {/* 펼쳐보기 버튼 */}
        <button className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white border border-[#E5E7EB] rounded-full px-12 py-4 shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <span className="text-sm font-bold text-[#111827]">
            상세 이미지 펼쳐보기
          </span>
          <svg
            className="w-6 h-6 text-[#111827]"
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
      </div>
    </div>
  );
};

export default SpecTable;
