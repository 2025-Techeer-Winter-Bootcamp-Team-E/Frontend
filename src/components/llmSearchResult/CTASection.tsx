import { Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-[#dbeafe] p-14.25 text-center shadow-[0px_25px_50px_-12px_rgba(59,130,246,0.1)]"
      style={{
        backgroundImage:
          'linear-gradient(134.95deg, rgba(255, 255, 255, 1) 0%, rgba(224, 242, 254, 1) 100%)',
      }}
    >
      <div className="absolute -top-16 -right-16 h-80 w-80 rounded-full bg-[rgba(13,157,218,0.1)] blur-[40px]" />
      <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-[rgba(13,157,218,0.05)] blur-[40px]" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 h-28 pb-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-[0px_0px_0px_1px_#eff6ff,0px_20px_25px_-5px_rgba(59,130,246,0.1),0px_8px_10px_-6px_rgba(59,130,246,0.1)]">
            <div className="scale-y-[-1]">
              <Sparkles className="h-14.5 w-12 text-[#0d9dda]" />
            </div>
          </div>
        </div>
        <h2 className="mb-5 text-4xl leading-10 font-black tracking-[-0.9px] text-[#111827]">
          더 많은 상품을 찾아보세요
        </h2>
        <div className="mb-12 max-w-2xl text-xl leading-7 font-light text-[#6b7280]">
          <p className="mb-0">지금 바로 AI 쇼핑 어시스턴트와 함께</p>
          <p className="mb-0">
            <span className="font-black text-[#0d9dda] underline">맞춤형 상품</span>
            <span className="font-light text-[#6b7280]">을 찾아보세요.</span>
          </p>
        </div>
        <button className="mb-12 flex items-center gap-4 rounded-full bg-[#0d9dda] px-12 py-5 font-bold text-white shadow-[0px_0px_15px_0px_rgba(13,157,218,0.4)] transition-colors hover:bg-[#0b8bc4]">
          <span className="text-xl leading-7">쇼핑 리서치 하러가기</span>
          <div className="scale-y-[-1] pl-4">
            <Sparkles className="h-7 w-[24.02px]" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CTASection;
