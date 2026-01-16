import React from 'react';
import { Lightbulb } from 'lucide-react';

interface StatusBannerProps {
  text: string;
  mode: string;
}

const StatusBanner: React.FC<StatusBannerProps> = ({ text, mode }) => {
  return (
    <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-[17px] py-4 flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="scale-y-[-1]">
          <Lightbulb className="w-6 h-7 text-[#0d9dda]" />
        </div>
        <p className="text-base font-medium text-[#374151] leading-[24px]">
          <span className="font-medium">AI 분석 완료: </span>
          <span className="font-bold text-[#111827]">"{text}"</span>
        </p>
      </div>
      <div className="bg-white border border-[#e5e7eb] rounded-full px-[13px] py-[5px] flex items-center gap-2">
        <div className="bg-[#22c55e] rounded-full w-2 h-2" />
        <span className="text-[11.8px] text-[#6b7280] font-normal leading-[16px]">
          {mode}
        </span>
      </div>
    </div>
  );
};

export default StatusBanner;
