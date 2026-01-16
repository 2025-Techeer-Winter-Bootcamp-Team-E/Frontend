import InfoRow from './InfoRow';
import Checkbox from './Checkbox';
import SelectDropdown from './SelectDropdown';

interface VerificationSectionProps {
  userId: string;
  password: string;
  onPasswordChange: (value: string) => void;
  verificationType: 'phone' | 'email';
  onVerificationTypeChange: (type: 'phone' | 'email') => void;
  emailDomain: string;
  onEmailDomainChange: (value: string) => void;
}

const VerificationSection = ({
  userId,
  password,
  onPasswordChange,
  verificationType,
  onVerificationTypeChange,
  emailDomain,
  onEmailDomainChange,
}: VerificationSectionProps) => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-base font-semibold text-gray-900">본인확인</h3>

      <InfoRow label="아이디" value={userId} />

      <InfoRow label="비밀번호">
        <input
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          autoComplete="off"
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </InfoRow>

      <InfoRow label="본인확인">
        <div>
          <p className="mb-3 text-xs text-blue-600">
            회원정보에 등록된 휴대전화 또는 이메일 중 하나를 선택하여 입력하여 주세요.
          </p>
          <div className="mb-4 flex gap-6">
            <Checkbox
              id="phone"
              checked={verificationType === 'phone'}
              onChange={() => onVerificationTypeChange('phone')}
              label="휴대전화"
            />
            <Checkbox
              id="email"
              checked={verificationType === 'email'}
              onChange={() => onVerificationTypeChange('email')}
              label="이메일"
            />
          </div>

          {verificationType === 'email' && (
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-500">@</span>
              <div className="flex-1">
                <SelectDropdown value={emailDomain} onChange={(e) => onEmailDomainChange(e.target.value)} />
              </div>
            </div>
          )}
        </div>
      </InfoRow>
    </div>
  );
};

export default VerificationSection;
