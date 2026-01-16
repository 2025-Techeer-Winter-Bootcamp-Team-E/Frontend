import React from 'react';
import { Sparkles, Package, ShoppingCart, HeadphonesIcon } from 'lucide-react';

interface CTASectionProps {
  cta: {
    title: string;
    subtitle: string;
    highlight: string;
    buttonText: string;
  };
  features: Array<{
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  }>;
}

const CTASection: React.FC<CTASectionProps> = ({ cta, features }) => {
  return (
    <div
      className="border border-[#dbeafe] rounded-3xl p-[57px] text-center relative overflow-hidden shadow-[0px_25px_50px_-12px_rgba(59,130,246,0.1)]"
      style={{
        backgroundImage:
          'linear-gradient(134.95deg, rgba(255, 255, 255, 1) 0%, rgba(224, 242, 254, 1) 100%)',
      }}
    >
      {/* 배경 블러 효과 */}
      <div className="absolute bg-[rgba(13,157,218,0.1)] blur-[40px] rounded-full w-80 h-80 -right-16 -top-16" />
      <div className="absolute bg-[rgba(13,157,218,0.05)] blur-[40px] rounded-full w-80 h-80 -bottom-16 -left-16" />

      <div className="relative z-10 flex flex-col items-center">
        {/* 아이콘 */}
        <div className="mb-8 h-[112px] pb-8">
          <div className="bg-white rounded-3xl shadow-[0px_0px_0px_1px_#eff6ff,0px_20px_25px_-5px_rgba(59,130,246,0.1),0px_8px_10px_-6px_rgba(59,130,246,0.1)] w-20 h-20 flex items-center justify-center">
            <div className="scale-y-[-1]">
              <Sparkles className="w-12 h-[58px] text-[#0d9dda]" />
            </div>
          </div>
        </div>

        {/* 제목 */}
        <h2 className="text-4xl font-black text-[#111827] mb-5 tracking-[-0.9px] leading-[40px]">
          {cta.title}
        </h2>

        {/* 부제목 */}
        <div className="mb-12 text-xl leading-[28px] text-[#6b7280] font-light max-w-2xl">
          <p className="mb-0">{cta.subtitle}</p>
          <p>
            <span className="font-black text-[#0d9dda] underline">{cta.highlight}</span>
            <span className="font-light text-[#6b7280]">을 찾아보세요.</span>
          </p>
        </div>

        {/* 버튼 */}
        <button className="bg-[#0d9dda] text-white font-bold px-12 py-5 rounded-full shadow-[0px_0px_15px_0px_rgba(13,157,218,0.4)] hover:bg-[#0b8bc4] transition-colors mb-12 flex items-center gap-4">
          <span className="text-xl leading-[28px]">{cta.buttonText}</span>
          <div className="scale-y-[-1] pl-4">
            <Sparkles className="w-[24.02px] h-[28px]" />
          </div>
        </button>

        {/* 기능 리스트 */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#6b7280]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="scale-y-[-1] pr-2">
                  <Icon className="w-5 h-6" />
                </div>
                <span className="font-bold text-sm leading-[20px]">{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
