import React from 'react';
import { MessageSquare } from 'lucide-react';

interface QuestionContextProps {
  context: string;
  mode: string;
}

const QuestionContext: React.FC<QuestionContextProps> = ({ context, mode }) => {
  return (
    <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl px-[25px] py-[23px] flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="scale-y-[-1]">
          <MessageSquare className="w-6 h-7 text-[#0d9dda]" />
        </div>
        <p className="text-base font-medium text-[#374151] leading-[24px]">
          <span className="font-medium">현재 탐색 중: </span>
          <span className="font-bold text-[#111827]">"{context}"</span>
        </p>
      </div>
      <span className="text-[11.4px] text-[#6b7280] font-normal uppercase tracking-[0.6px] leading-[16px]">
        {mode}
      </span>
    </div>
  );
};

export default QuestionContext;
