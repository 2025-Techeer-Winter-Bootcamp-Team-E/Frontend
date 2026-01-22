export type AgreementsState = {
  all: boolean;
  age14: boolean;
  service: boolean;
  privacy: boolean;
  marketing: boolean;
};

type AgreementSectionProps = {
  agreements: AgreementsState;
  onAgreementsChange: (next: AgreementsState) => void;
};

const AgreementSection: React.FC<AgreementSectionProps> = ({ agreements, onAgreementsChange }) => {
  const toggle = (key: keyof AgreementsState) => {
    const next = { ...agreements, [key]: !agreements[key] };

    if (key !== 'all') {
      const requiredOn = next.age14 && next.service && next.privacy;
      next.all = requiredOn && next.marketing;
    } else {
      const value = !agreements.all;
      next.age14 = value;
      next.service = value;
      next.privacy = value;
      next.marketing = value;
    }

    onAgreementsChange(next);
  };

  return (
    <div className="mt-8 space-y-0 overflow-hidden rounded-xl border border-[#d2d2d7] bg-white text-[14px]">
      <button
        type="button"
        onClick={() => toggle('all')}
        className="flex w-full items-center justify-between px-4 py-4 transition-colors hover:bg-[#F5F5F7]"
      >
        <span className="font-semibold text-[#1d1d1f]">약관 전체 동의</span>
        <input
          type="checkbox"
          checked={agreements.all}
          readOnly
          className="h-5 w-5 accent-[#0066cc]"
        />
      </button>
      <div className="h-[1px] bg-[#d2d2d7] opacity-50" />

      {['age14', 'service', 'privacy', 'marketing'].map((key) => {
        const labels: Record<string, string> = {
          age14: '[필수] 만 14세 이상입니다.',
          service: '[필수] 이용약관 동의',
          privacy: '[필수] 개인정보 수집 및 이용 동의',
          marketing: '[선택] 마케팅 정보 수신 동의',
        };
        return (
          <label
            key={key}
            className="flex cursor-pointer items-center justify-between border-t border-[#d2d2d7]/30 px-4 py-3.5 transition-colors hover:bg-[#F5F5F7]"
          >
            <span className="text-[#424245]">{labels[key]}</span>
            <input
              type="checkbox"
              checked={agreements[key as keyof AgreementsState]}
              onChange={() => toggle(key as keyof AgreementsState)}
              className="h-5 w-5 accent-[#0066cc]"
            />
          </label>
        );
      })}
    </div>
  );
};
export default AgreementSection;
