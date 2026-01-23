import React from 'react';
import { Sparkles } from 'lucide-react';

interface AIAnalysisProps {
  analysis: {
    description: string;
    keyword: string;
  };
}

const AIAnalysisSection: React.FC<AIAnalysisProps> = ({ analysis }) => {
  return (
    <div className="group rounded-4xl border border-[#d2d2d7]/30 bg-white p-10 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F7]">
          <Sparkles className="h-5 w-5 text-[#1d1d1f]" />
        </div>
        <h2 className="text-[21px] font-bold tracking-tight text-[#1d1d1f]">AI 컨설팅 분석</h2>
      </div>

      <div className="space-y-6">
        <p className="text-[17px] leading-relaxed">
          <span className="font-medium text-[#86868b]">검색어 : </span>
          <span className="font-bold text-[#1d1d1f]">“{analysis.keyword}”</span>
        </p>
        <div className="h-px w-full bg-[#F5F5F7]" />
        <p className="text-[17px] leading-[1.6] font-medium whitespace-pre-wrap text-[#424245]">
          {analysis.description}
        </p>
      </div>
    </div>
  );
};

export default AIAnalysisSection;
