import React from 'react';
import { FileText } from 'lucide-react';

interface AnalysisSummaryProps {
  title?: string;
  content?: string;
}

const AnalysisSummary: React.FC<AnalysisSummaryProps> = ({ title, content }) => {
  // ✅ title이나 content가 없으면 렌더링하지 않음
  if (!title || !content) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="scale-y-[-1]">
          <FileText className="h-7 w-6 text-[#0d9dda]" />
        </div>
        <h2 className="text-xl leading-[28px] font-bold text-[#111827]">{title}</h2>
      </div>
      <div className="rounded-2xl border border-[#f3f4f6] bg-white p-[33px] shadow-sm">
        <div className="text-base leading-[26px] font-light text-[#111827]">
          {content.split('\n').map((line, index) => {
            // 강조된 텍스트 처리
            const highlightPatterns = ['QHD 해상도 환경에서의 쾌적한 게이밍', '약 150만원의 예산'];
            let processedLine = line;
            highlightPatterns.forEach((pattern) => {
              processedLine = processedLine.replace(
                new RegExp(`(${pattern})`, 'g'),
                '<span class="font-bold text-[#0d9dda]">$1</span>',
              );
            });
            return (
              <p key={index} className="mb-0" dangerouslySetInnerHTML={{ __html: processedLine }} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnalysisSummary;
