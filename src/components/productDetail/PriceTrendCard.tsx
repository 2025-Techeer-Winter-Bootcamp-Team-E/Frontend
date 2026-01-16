import { AlertCircle } from 'lucide-react';

interface PriceTrendCardProps {
  priceDiff: number;
  timeUntilRebound?: string;
  progressPercentage?: number;
}

const PriceTrendCard = ({
  priceDiff,
  timeUntilRebound,
  progressPercentage = 75,
}: PriceTrendCardProps) => {
  return (
    <div className="bg-[rgba(239,246,255,0.5)] border border-[#DBEAFE] rounded-xl p-5 flex-1 flex flex-col justify-between">
      <div>
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0D9DDA] rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-sm font-bold text-[#111827]">AI 구매 적기 알림</h4>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-[#F5F7F8] border border-[#FEE2E2] rounded relative">
            <div className="relative w-1.5 h-1.5">
              <div className="absolute inset-0 bg-[#F87171] rounded-full opacity-75" />
              <div className="absolute inset-0 bg-[#EF4444] rounded-full" />
            </div>
            <span className="text-[10px] font-bold text-[#DC2626] ml-1">
              실시간 업데이트
            </span>
          </div>
        </div>

        {/* 메시지 */}
        <div className="text-center py-2">
          <p className="text-xs text-[#6B7280] font-light mb-1">
            현재 가격 하락세 유지 중
          </p>
          <p className="text-[30px] font-black text-[#0D9DDA] leading-[36px] tracking-[-0.75px] mb-1">
            지금 구매하세요!
          </p>
          <p className="text-[11px] text-[#6B7280] font-light">
            최근 30일 내 최저가 대비{' '}
            <span className="font-bold text-[#EF4444]">
              -{Math.abs(priceDiff).toLocaleString()}원
            </span>{' '}
            저렴합니다.
          </p>
        </div>
      </div>

      {/* 타이머 및 진행바 */}
      {timeUntilRebound && (
        <div className="pt-4 border-t border-[#DBEAFE]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#6B7280] font-light">
              예상 가격 반등까지
            </span>
            <span className="text-xs font-bold text-[#EF4444] font-['Inter']">
              {timeUntilRebound}
            </span>
          </div>
          <div className="h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0D9DDA] rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceTrendCard;
