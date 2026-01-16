import React from 'react';
import { FileText } from 'lucide-react';

interface AnalysisSummaryProps {
  title: string;
  content: string;
}

const AnalysisSummary: React.FC<AnalysisSummaryProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="scale-y-[-1]">
          <FileText className="w-6 h-7 text-[#0d9dda]" />
        </div>
        <h2 className="text-xl font-bold text-[#111827] leading-[28px]">{title}</h2>
      </div>
      <div className="bg-white border border-[#f3f4f6] rounded-2xl p-[33px] shadow-sm">
        <div className="text-base font-light text-[#111827] leading-[26px]">
          {content.split('\n').map((line, index) => {
            // 강조된 텍스트 처리
            const highlightPatterns = ['QHD 해상도 환경에서의 쾌적한 게이밍', '약 150만원의 예산'];
            let processedLine = line;
            highlightPatterns.forEach((pattern) => {
              processedLine = processedLine.replace(
                new RegExp(`(${pattern})`, 'g'),
                '<span class="font-bold text-[#0d9dda]">$1</span>'
              );
            });
            return (
              <p
                key={index}
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: processedLine }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnalysisSummary;
