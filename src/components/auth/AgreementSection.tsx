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
    <div className="space-y-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
      <button
        type="button"
        onClick={() => toggle('all')}
        className="flex w-full items-center justify-between"
      >
        <span className="font-medium">약관 전체 동의</span>
        <input type="checkbox" checked={agreements.all} readOnly className="h-4 w-4" />
      </button>
      <div className="h-px bg-gray-200" />
      <label className="flex items-center justify-between">
        <span>[필수] 만 14세 이상입니다.</span>
        <input
          type="checkbox"
          checked={agreements.age14}
          onChange={() => toggle('age14')}
          className="h-4 w-4"
        />
      </label>
      <label className="flex items-center justify-between">
        <span>[필수] 이용약관 동의</span>
        <input
          type="checkbox"
          checked={agreements.service}
          onChange={() => toggle('service')}
          className="h-4 w-4"
        />
      </label>
      <label className="flex items-center justify-between">
        <span>[필수] 개인정보 수집 및 이용 동의</span>
        <input
          type="checkbox"
          checked={agreements.privacy}
          onChange={() => toggle('privacy')}
          className="h-4 w-4"
        />
      </label>
      <label className="flex items-center justify-between">
        <span>[선택] 마케팅 정보 수신 동의</span>
        <input
          type="checkbox"
          checked={agreements.marketing}
          onChange={() => toggle('marketing')}
          className="h-4 w-4"
        />
      </label>
    </div>
  );
};
export default AgreementSection;
