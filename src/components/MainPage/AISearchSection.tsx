import React from 'react';
import { Sparkles } from 'lucide-react';
import aiSearchImage from '@/assets/ai-search-section.png';

const AISearchSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex flex-1 justify-center">
            <img
              src={aiSearchImage}
              alt="AI Search Research Illustration"
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 inline-block text-xs font-semibold tracking-wide text-cyan-600 uppercase">
              INTELLIGENCE ANALYSIS
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">AI Search Research</h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              단순한 키워드 매칭을 넘어 사용자의 의도를 정밀하게 분석합니다. 대규모 언어 모델이
              실시간 시장 데이터를 학습하여 최적의 부품 조합과 가성비 보고서를 생성합니다.
            </p>
            <div className="inline-flex items-start gap-4 rounded-2xl border border-white bg-white/60 p-5 shadow-sm backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                <Sparkles className="h-5 w-5 text-cyan-500" />
              </div>
              <div>
                <div className="mb-1 text-sm font-semibold text-gray-900">복합 맥락 이해</div>
                <p className="text-sm leading-relaxed text-gray-600">
                  용도, 예산, 미래 확장성까지 동시에 고려한 정밀 맞춤형 솔루션
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISearchSection;
