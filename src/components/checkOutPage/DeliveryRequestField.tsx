import { ChevronDown } from 'lucide-react';

const DeliveryRequestField = ({
  value,
  customValue,
  onChange,
  onCustomChange,
}: {
  value: string;
  customValue: string;
  onChange: (value: string) => void;
  onCustomChange: (value: string) => void;
}) => {
  const options = [
    { value: '', label: '배송 시 요청 사항을 선택하세요' },
    { value: 'contact', label: '배송 전 미리 연락바랍니다.' },
    { value: 'door', label: '문앞에 놓아주세요' },
    { value: 'security', label: '경비실에 맡겨주세요' },
    { value: 'phone', label: '배송 전 연락주세요' },
    { value: 'direct', label: '직접 받겠습니다' },
    { value: 'custom', label: '직접 입력' },
  ];

  const isCustom = value === 'custom';

  return (
<div className="mb-6">
      <label className="mb-2 block text-[13px] font-semibold tracking-tight text-[#86868b] ml-1">배송 요청사항</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full appearance-none rounded-xl border border-[#d2d2d7] bg-white px-4 pr-10 text-[15px] font-medium text-[#1d1d1f] transition-all focus:border-[#1d1d1f] focus:ring-4 focus:ring-black/[0.03] focus:outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-[#6B7280]" />
      </div>
      {isCustom && (
        <input
          type="text"
          value={customValue}
          onChange={(e) => onCustomChange(e.target.value)}
          placeholder="배송 요청사항을 입력하세요"
          className="mt-2 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm font-light text-[#111827] placeholder:text-[#6B7280] focus:border-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 focus:outline-none"
        />
      )}
    </div>
  );
};
export default DeliveryRequestField;
