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
    <div className="group rounded-[32px] bg-white p-10 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
          <Sparkles className="h-5 w-5 text-indigo-600" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-gray-900">AI 컨설팅 분석</h2>
      </div>

      <div className="space-y-4 text-lg leading-relaxed text-gray-600">
        <p>
          <span className="font-medium text-gray-400">검색하신 의도 : </span>
          <span className="font-bold text-gray-900">"{analysis.keyword}"</span>
        </p>
        <div className="h-px w-full bg-gray-50" />
        <p className="leading-8 font-medium whitespace-pre-wrap text-gray-700">
          {analysis.description}
        </p>
      </div>
    </div>
  );
};

export default AIAnalysisSection;
