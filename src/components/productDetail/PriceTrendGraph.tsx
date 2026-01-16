import { useState } from 'react';

interface PriceTrendGraphProps {
  trend: number[];
  currentPrice: number;
}

const PriceTrendGraph = ({ trend, currentPrice }: PriceTrendGraphProps) => {
  const [priceType, setPriceType] = useState<'cash' | 'card'>('card');

  const maxPrice = Math.max(...trend);
  const minPrice = Math.min(...trend);
  const priceRange = maxPrice - minPrice;

  return (
    <div className="bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl p-5 flex-1">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-[#111827]">
          최저가 추이 (최근 3개월)
        </h4>
        <div className="flex gap-2">
          <button
            onClick={() => setPriceType('cash')}
            className={`px-2 py-1 rounded-full text-[10px] font-light transition-colors ${
              priceType === 'cash'
                ? 'bg-white border border-[#E5E7EB] text-[#6B7280]'
                : 'bg-white border border-[#E5E7EB] text-[#6B7280]'
            }`}
          >
            현금가
          </button>
          <button
            onClick={() => setPriceType('card')}
            className={`px-2 py-1 rounded-full text-[10px] font-bold transition-colors ${
              priceType === 'card'
                ? 'bg-[rgba(13,157,218,0.1)] border border-[rgba(13,157,218,0.2)] text-[#0D9DDA]'
                : 'bg-white border border-[#E5E7EB] text-[#6B7280]'
            }`}
          >
            카드가
          </button>
        </div>
      </div>

      {/* 그래프 영역 */}
      <div className="h-[88px] relative mb-2">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* 그리드 라인 */}
          <line x1="0" y1="20" x2="100" y2="20" stroke="#E5E7EB" strokeWidth="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#E5E7EB" strokeWidth="0.5" />
          <line x1="0" y1="80" x2="100" y2="80" stroke="#E5E7EB" strokeWidth="0.5" />

          {/* 가격 추이 라인 */}
          <polyline
            points={trend
              .map((price, index) => {
                const x = (index / (trend.length - 1)) * 100;
                const normalizedPrice = ((price - minPrice) / priceRange) * 60 + 20;
                const y = 100 - normalizedPrice;
                return `${x},${y}`;
              })
              .join(' ')}
            fill="none"
            stroke="#0D9DDA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* 현재 가격 포인트 */}
          {(() => {
            const lastIndex = trend.length - 1;
            const x = (lastIndex / (trend.length - 1)) * 100;
            const normalizedPrice = ((currentPrice - minPrice) / priceRange) * 60 + 20;
            const y = 100 - normalizedPrice;
            return (
              <circle
                cx={x}
                cy={y}
                r="2.5"
                fill="#0D9DDA"
              />
            );
          })()}
        </svg>
      </div>

      {/* 하단 라벨 */}
      <div className="flex items-center justify-between text-[10px]">
        <span className="text-[#9CA3AF] font-medium">3개월 전</span>
        <span className="text-[#0D9DDA] font-bold">
          현재 ({currentPrice.toLocaleString()}원)
        </span>
      </div>

      {/* 실시간 최저가 */}
      <div className="mt-4 pt-4 border-t border-[#F3F4F6]">
        <div className="flex items-end">
          <div>
            <p className="text-[10px] text-[#6B7280] font-light mb-1">
              실시간 최저가
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-[#EF4444] leading-[28px]">
                {minPrice.toLocaleString()}
              </span>
              <span className="text-xs text-[#111827] font-light">원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTrendGraph;
