import type { TimersIdGetResDto } from '@/types/timerType';

interface PriceTrendCardProps {
  timerInfo: TimersIdGetResDto;
}

const PriceTrendCard = ({ timerInfo }: PriceTrendCardProps) => {
  const priceDiff = timerInfo.predicted_price - timerInfo.target_price;

  return (
    <div className="flex flex-1 flex-col justify-between rounded-4xl border border-[#d2d2d7]/40 bg-[#f5f5f7]/50 p-7 backdrop-blur-sm">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h4 className="text-[15px] font-semibold tracking-tight text-[#1d1d1f]">
            AI 분석 리포트
          </h4>
          <div className="rounded-full bg-[#1d1d1f] px-3 py-1">
            <span className="text-[11px] font-bold text-white">
              SCORE {timerInfo.recommendation_score}
            </span>
          </div>
        </div>

        <div className="mb-8 text-center">
          <p className="mb-4 text-[14px] leading-relaxed font-medium text-[#424245]">
            {timerInfo.reason_message}
          </p>
          <div className="inline-flex items-baseline gap-1.5 rounded-2xl bg-white px-4 py-2 shadow-sm">
            <span className="text-[11px] font-bold tracking-wider text-[#86868b] uppercase">
              Gap
            </span>
            <span
              className={`text-xl font-bold tracking-tight ${priceDiff > 0 ? 'text-[#1d1d1f]' : 'text-[#0066cc]'}`}
            >
              {priceDiff > 0 ? '+' : ''}
              {priceDiff.toLocaleString()}원
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: '신뢰도', val: timerInfo.confidence_score },
            { label: '추천도', val: timerInfo.recommendation_score },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-[1.25rem] border border-black/3 bg-white p-3.5 shadow-sm"
            >
              <div className="mb-2 flex items-center justify-between text-[11px] font-bold">
                <span className="text-[#86868b]">{item.label}</span>
                <span className="text-[#1d1d1f]">{item.val}%</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-[#f5f5f7]">
                <div
                  className="h-full bg-[#1d1d1f] transition-all duration-1000"
                  style={{ width: `${item.val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-3 border-t border-[#d2d2d7]/50 pt-5">
        <div className="flex items-center justify-between text-[13px]">
          <span className="font-medium text-[#86868b]">목표 가격</span>
          <span className="font-semibold text-[#1d1d1f]">
            {timerInfo.target_price.toLocaleString()}원
          </span>
        </div>
        <div className="flex items-center justify-between text-[13px]">
          <span className="font-semibold text-[#86868b]">예측 가격</span>
          <span className="font-bold text-[#1d1d1f] underline decoration-[#d2d2d7] underline-offset-4">
            {timerInfo.predicted_price.toLocaleString()}원
          </span>
        </div>
      </div>
    </div>
  );
};
export default PriceTrendCard;
