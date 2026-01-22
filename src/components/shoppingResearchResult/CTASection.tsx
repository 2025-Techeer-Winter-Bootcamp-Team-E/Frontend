import React from 'react';
import { RefreshCw } from 'lucide-react';

interface CTASectionProps {
  buttonText: string;
  onRetry?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ buttonText, onRetry }) => {
  return (
    <div className="mt-12 flex flex-col items-center gap-12 border-t border-[#f5f5f7] pt-16">
      <button
        onClick={onRetry}
        className="flex items-center gap-3 rounded-full bg-[#1d1d1f] px-12 py-4 font-bold text-white shadow-md transition-all hover:bg-black active:scale-95"
      >
        <RefreshCw className="h-4 w-4" strokeWidth={3} />
        <span className="text-[17px] tracking-tight">{buttonText}</span>
      </button>
    </div>
  );
};

export default CTASection;
