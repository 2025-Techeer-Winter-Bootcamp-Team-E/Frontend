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
    <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-2xl p-[33px] shadow-sm">
      <div className="flex items-center gap-3 mb-[15.25px]">
        <div className="scale-y-[-1]">
          <Sparkles className="w-[30px] h-[36px] text-[#0d9dda]" />
        </div>
        <h2 className="text-xl font-bold text-[#111827] leading-[28px]">{analysis.title}</h2>
      </div>
      <div className="text-[18px] leading-[29.25px] text-[#374151] font-light">
        <p className="mb-0">
          <span className="font-light">사용자님은 </span>
          <span className="font-bold text-[#0d9dda]">"{analysis.budget}"</span>
          <span className="font-light">
            {' '}
            구동을 위한 견적을 요청하셨습니다. 분석 결과, 최신 고사양 게임의 안정적인 프
          </span>
        </p>
        <p className="mb-0">
          <span className="font-light">레임 확보를 위해 </span>
          <span className="font-bold">RTX 4070 Ti 이상의 그래픽카드</span>
          <span className="font-light">와 </span>
          <span className="font-bold">L3 캐시 용량이 큰 최신 CPU</span>
          <span className="font-light">의 조합이 가장 효율적인 것으로 판단</span>
        </p>
        <p className="font-light">
          됩니다. 예산 대비 최고의 게이밍 퍼포먼스를 낼 수 있는 부품 리스트를 구성해 보았습니다.
        </p>
      </div>
    </div>
  );
};

export default AIAnalysisSection;
