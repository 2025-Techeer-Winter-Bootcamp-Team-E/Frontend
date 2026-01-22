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
    <div className="flex items-center gap-4 py-2">
      <h3 className="min-w-[80px] pr-6 text-[13px] font-semibold tracking-tight text-[#1d1d1f]">
        가격대
      </h3>
      <div className="flex items-center gap-3">
        <div className="transition-focus-within flex items-center rounded-lg border border-[#d2d2d7] bg-white/50 px-3 py-1.5 focus-within:border-[#1d1d1f] focus-within:ring-1 focus-within:ring-[#1d1d1f]">
          <input
            type="number"
            value={min}
            onChange={(e) => onMinChange(e.target.value)}
            placeholder="최소"
            className="w-[80px] bg-transparent text-right text-[13px] font-medium text-[#1d1d1f] outline-none placeholder:text-[#86868b]"
          />
          <span className="ml-1 text-[13px] text-[#86868b]">원</span>
        </div>

        <span className="font-light text-[#d2d2d7]">~</span>

        <div className="transition-focus-within flex items-center rounded-lg border border-[#d2d2d7] bg-white/50 px-3 py-1.5 focus-within:border-[#1d1d1f] focus-within:ring-1 focus-within:ring-[#1d1d1f]">
          <input
            type="number"
            value={max}
            onChange={(e) => onMaxChange(e.target.value)}
            placeholder="최대"
            className="w-[80px] bg-transparent text-right text-[13px] font-medium text-[#1d1d1f] outline-none placeholder:text-[#86868b]"
          />
          <span className="ml-1 text-[13px] text-[#86868b]">원</span>
        </div>

        <button
          onClick={onApply}
          className="ml-2 rounded-full bg-[#1d1d1f] px-5 py-1.5 text-[12px] font-bold text-white transition-all hover:bg-[#424245] active:scale-95"
        >
          적용
        </button>
      </div>
    </div>
  );
};
export default PriceRangeFilter;
