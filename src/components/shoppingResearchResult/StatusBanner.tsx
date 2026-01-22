import { Lightbulb } from 'lucide-react';

const StatusBanner: React.FC<{ text: string; mode: string }> = ({ text, mode }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-[22px] border border-[#d2d2d7]/30 bg-white/80 px-7 py-5 shadow-sm backdrop-blur-xl">
      <div className="flex items-center gap-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f7]">
          <Lightbulb className="h-5 w-5 text-[#1d1d1f]" strokeWidth={1.8} />
        </div>
        <div>
          <p className="mb-0.5 text-[11px] font-bold tracking-[0.1em] text-[#86868b] uppercase">
            {mode}
          </p>
          <p className="text-[17px] font-medium tracking-tight text-[#1d1d1f]">
            AI 분석 완료 <span className="mx-1 text-[#d2d2d7]">|</span>{' '}
            <span className="font-bold">“{text}”</span>
          </p>
        </div>
      </div>
      <div className="hidden items-center gap-2.5 rounded-full bg-[#f5f5f7] px-4 py-1.5 ring-1 ring-black/[0.03] sm:flex">
        <div className="h-1.5 w-1.5 rounded-full bg-[#34c759]" /> {/* 애플 시스템 그린 */}
        <span className="text-[11px] font-bold tracking-wider text-[#1d1d1f] uppercase">
          Engine Ready
        </span>
      </div>
    </div>
  );
};
export default StatusBanner;
