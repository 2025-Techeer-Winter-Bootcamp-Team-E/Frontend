import type { TimersIdGetResDto } from '@/types/timerType';
import { Target, TrendingDown, Calendar } from 'lucide-react';

interface PriceTrendCardProps {
  timerInfo: TimersIdGetResDto;
}

const PriceTrendCard = ({ timerInfo }: PriceTrendCardProps) => {
  const priceDiff = timerInfo.predicted_price - timerInfo.target_price;

  // 예측 시간 포맷팅
  const formatPredictedTime = (datetime: string) => {
    const date = new Date(datetime);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffHours < 1) return '방금 전';
    if (diffHours < 24) return `${diffHours}시간 전`;
    return `${Math.floor(diffHours / 24)}일 전`;
  };

  return (
    <div className="flex flex-1 flex-col justify-between rounded-xl border border-[#DBEAFE] bg-[rgba(239,246,255,0.5)] p-5">
      <div>
        {/* 헤더 */}
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-sm font-bold text-[#111827]">AI 구매 적기 알림</h4>
          <div className="rounded-full bg-[#0D9DDA] px-3 py-1">
            <span className="text-xs font-bold text-white">
              추천도 {timerInfo.recommendation_score}%
            </span>
          </div>
        </div>

        {/* 메시지 - 백엔드에서 온 그대로 표시 */}
        <div className="py-3 text-center">
          <p className="mb-3 text-sm leading-relaxed font-medium text-[#111827]">
            {timerInfo.reason_message}
          </p>

          {/* 가격 차이 */}
          <div className="inline-flex items-baseline gap-1">
            <span className="text-xs text-[#6B7280]">목표가 대비</span>
            <span className="text-xl font-bold text-[#0D9DDA]">
              {priceDiff > 0 ? '+' : ''}
              {priceDiff.toLocaleString()}원
            </span>
          </div>
        </div>

        {/* 신뢰도/추천도 */}
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg bg-white/60 p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] text-[#6B7280]">예측 신뢰도</span>
              <span className="text-xs font-bold text-[#111827]">
                {timerInfo.confidence_score}%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]">
              <div
                className="h-full rounded-full bg-[#0D9DDA]"
                style={{ width: `${timerInfo.confidence_score}%` }}
              />
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-white/60 p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] text-[#6B7280]">구매 추천도</span>
              <span className="text-xs font-bold text-[#111827]">
                {timerInfo.recommendation_score}%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]">
              <div
                className="h-full rounded-full bg-[#10B981]"
                style={{ width: `${timerInfo.recommendation_score}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="mt-4 space-y-2 border-t border-[#DBEAFE] pt-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[#6B7280]">
            <Target className="h-3.5 w-3.5" />
            <span>목표가</span>
          </div>
          <span className="font-bold text-[#111827]">
            {timerInfo.target_price.toLocaleString()}원
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[#6B7280]">
            <TrendingDown className="h-3.5 w-3.5" />
            <span>예측가</span>
          </div>
          <span className="font-bold text-[#0D9DDA]">
            {timerInfo.predicted_price.toLocaleString()}원
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[#6B7280]">
            <Calendar className="h-3.5 w-3.5" />
            <span>분석 시점</span>
          </div>
          <span className="font-medium text-[#6B7280]">
            {formatPredictedTime(timerInfo.predicted_at)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceTrendCard;
