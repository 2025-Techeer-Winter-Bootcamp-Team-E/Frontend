import { Lightbulb } from 'lucide-react';

const StatusBanner: React.FC<{ text: string; mode: string }> = ({ text, mode }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl border border-indigo-100 bg-white px-6 py-5 shadow-sm shadow-indigo-100/50">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
          <Lightbulb className="h-5 w-5 text-indigo-600" />
        </div>
        <div>
          <p className="text-xs font-bold tracking-wider text-indigo-400 uppercase">{mode}</p>
          <p className="text-lg font-medium text-gray-900">
            AI 분석 완료: <span className="font-black">"{text}"</span>
          </p>
        </div>
      </div>
      <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 sm:flex">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        <span className="text-xs font-bold text-emerald-600 uppercase">Engine Ready</span>
      </div>
    </div>
  );
};
export default StatusBanner;
