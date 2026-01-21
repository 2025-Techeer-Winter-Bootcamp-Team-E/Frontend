import React from 'react';
import { TrendingDown, BellRing } from 'lucide-react';
import timerImage from '@/assets/timer-section.png';

const TimerSection: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-cyan-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-cyan-500 uppercase">
                MARKET DYNAMICS
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">적정구매 타이머</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              부품 시장의 수급 상황과 신제품 출시 주기를 AI가 24시간 실시간 모니터링합니다. 가장
              합리적인 골든 타임에 도달했을 때 구매 타이머가 활성화됩니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex h-30 w-40 flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50">
                  <TrendingDown className="h-5 w-5 text-cyan-500" />
                </div>
                <div className="text-xs font-semibold tracking-tight text-gray-900">하락 예측</div>
              </div>

              <div className="flex h-30 w-40 flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50">
                  <BellRing className="h-5 w-5 text-cyan-500" />
                </div>
                <div className="text-xs font-semibold tracking-tight text-gray-900">즉시 알림</div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <img
              src={timerImage}
              alt="Golden Time Timer Illustration"
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimerSection;
