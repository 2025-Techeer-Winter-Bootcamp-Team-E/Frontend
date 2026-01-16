import React from 'react';
import { RefreshCw } from 'lucide-react';

interface CTASectionProps {
  buttonText: string;
  inputPrompt: string;
  onRetry?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ buttonText, inputPrompt, onRetry }) => {
  return (
    <div className="border-t border-[#f3f4f6] pt-[33px] flex flex-col gap-8 items-center">
      <button
        onClick={onRetry}
        className="bg-[#0d9dda] text-white font-bold px-10 py-[14px] rounded-full shadow-lg hover:bg-[#0b8bc4] transition-colors flex items-center gap-2"
      >
        <div className="scale-y-[-1]">
          <RefreshCw className="w-6 h-7" />
        </div>
        <span className="text-base leading-[24px]">{buttonText}</span>
      </button>

      <div className="max-w-[768px] w-full flex flex-col gap-3">
        <p className="text-xs font-medium text-[#6b7280] uppercase tracking-[1.2px] text-center leading-[16px]">
          Input Prompt
        </p>
        <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl p-[17px]">
          <p className="text-sm font-normal text-[#4b5563] leading-[20px] whitespace-pre-wrap">
            {inputPrompt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
