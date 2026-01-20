import React from 'react';
import { Sparkles } from 'lucide-react';

interface AIAnalysisProps {
  analysis: {
    title: string;
    description: string;
    budget: string;
  };
}

const AIAnalysisSection: React.FC<AIAnalysisProps> = ({ analysis }) => {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-[#f3f4f6] p-8.25 shadow-sm">
      <div className="mb-[15.25px] flex items-center gap-3">
        <div className="scale-y-[-1]">
          <Sparkles className="h-9 w-7.5 text-[#0d9dda]" />
        </div>
        <h2 className="text-xl leading-7 font-bold text-[#111827]">{analysis.title}</h2>
      </div>
      <div className="text-[18px] leading-[29.25px] text-[#374151]">
        <p className="mb-2">
          <span className="font-light">사용자님은 </span>
          <span className="font-bold text-[#0d9dda]">"{analysis.budget}"</span>
          <span className="font-light"> 관련 상품을 검색하셨습니다.</span>
        </p>
        <p className="font-light whitespace-pre-wrap">{analysis.description}</p>
      </div>
    </div>
  );
};

export default AIAnalysisSection;
