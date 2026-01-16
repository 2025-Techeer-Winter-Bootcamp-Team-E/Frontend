interface PriceRangeFilterProps {
  min: string;
  max: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
  onApply: () => void;
}

const PriceRangeFilter = ({
  min,
  max,
  onMinChange,
  onMaxChange,
  onApply,
}: PriceRangeFilterProps) => {
  return (
    <div className="flex gap-4 items-center">
      <h3 className="min-w-[80px] text-sm font-bold text-[#111827] pr-6">
        가격대
      </h3>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={min}
          onChange={(e) => onMinChange(e.target.value)}
          placeholder="0"
          className="w-[128px] h-[30px] rounded border border-[#D1D5DB] px-[9px] py-[7px] text-sm text-right text-[#6B7280] font-light bg-white focus:outline-none"
        />
        <span className="text-sm text-[#6B7280] font-light">원 ~</span>
        <input
          type="number"
          value={max}
          onChange={(e) => onMaxChange(e.target.value)}
          placeholder=""
          className="w-[128px] h-[30px] rounded border border-[#D1D5DB] bg-white focus:outline-none"
        />
        <span className="text-sm text-[#6B7280] font-light">원</span>
        <button
          onClick={onApply}
          className="rounded bg-[#4B5563] px-3 py-1 text-xs font-light text-white transition-colors hover:bg-[#374151]"
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
