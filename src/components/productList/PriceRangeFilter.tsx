import { useState, useEffect } from 'react';

interface PriceRangeFilterProps {
  initialMin: string;
  initialMax: string;
  onApply: (min: string, max: string) => void;
}

const PriceRangeFilter = ({ initialMin, initialMax, onApply }: PriceRangeFilterProps) => {
  // 입력 중인 값을 관리하는 로컬 상태
  const [tempMin, setTempMin] = useState(initialMin);
  const [tempMax, setTempMax] = useState(initialMax);

  // 외부(URL)에서 값이 바뀌면 내부 입력창도 동기화
  useEffect(() => {
    setTempMin(initialMin);
    setTempMax(initialMax);
  }, [initialMin, initialMax]);

  return (
    <div className="flex items-center gap-4 py-2">
      <h3 className="min-w-[80px] pr-6 text-[13px] font-semibold text-[#1d1d1f]">가격대</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-lg border border-[#d2d2d7] bg-white px-3 py-1.5 focus-within:border-[#1d1d1f]">
          <input
            type="number"
            value={tempMin}
            onChange={(e) => setTempMin(e.target.value)}
            placeholder="최소"
            className="w-[80px] text-right text-[13px] outline-none"
          />
          <span className="ml-1 text-[13px] text-[#86868b]">원</span>
        </div>
        <span className="text-[#d2d2d7]">~</span>
        <div className="flex items-center rounded-lg border border-[#d2d2d7] bg-white px-3 py-1.5 focus-within:border-[#1d1d1f]">
          <input
            type="number"
            value={tempMax}
            onChange={(e) => setTempMax(e.target.value)}
            placeholder="최대"
            className="w-[80px] text-right text-[13px] outline-none"
          />
          <span className="ml-1 text-[13px] text-[#86868b]">원</span>
        </div>
        <button
          onClick={() => onApply(tempMin, tempMax)}
          className="ml-2 rounded-full bg-[#1d1d1f] px-5 py-1.5 text-[12px] font-bold text-white hover:bg-[#424245]"
        >
          적용
        </button>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
