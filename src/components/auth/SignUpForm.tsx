import { useState } from 'react';

type FormInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100 focus:outline-none"
    />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

type EmailVerificationProps = {
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EmailVerification: React.FC<EmailVerificationProps> = ({ email, onEmailChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">이메일 주소</label>
    <div className="mt-1 flex gap-2">
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="이메일 주소를 입력해주세요"
        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100 focus:outline-none"
      />
      <button
        type="button"
        className="shrink-0 rounded-lg border border-cyan-500 px-3 py-2 text-sm font-medium text-cyan-500 hover:bg-cyan-50"
      >
        인증요청
      </button>
    </div>
  </div>
);

type AgreementsState = {
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
      const allRequiredOn = next.age14 && next.service && next.privacy;
      next.all = allRequiredOn && next.marketing;
    } else {
      next.age14 = !agreements.all;
      next.service = !agreements.all;
      next.privacy = !agreements.all;
      next.marketing = !agreements.all;
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
      <label className="flex items-center justify-between gap-2">
        <span>[필수] 만 14세 이상입니다.</span>
        <input
          type="checkbox"
          checked={agreements.age14}
          onChange={() => toggle('age14')}
          className="h-4 w-4"
        />
      </label>
      <label className="flex items-center justify-between gap-2">
        <span>[필수] 이용약관 동의</span>
        <input
          type="checkbox"
          checked={agreements.service}
          onChange={() => toggle('service')}
          className="h-4 w-4"
        />
      </label>
      <label className="flex items-center justify-between gap-2">
        <span>[필수] 개인정보 수집 및 이용 동의</span>
        <input
          type="checkbox"
          checked={agreements.privacy}
          onChange={() => toggle('privacy')}
          className="h-4 w-4"
        />
      </label>
      <label className="flex items-center justify-between gap-2">
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

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [agreements, setAgreements] = useState({
    all: false,
    age14: false,
    service: false,
    privacy: false,
    marketing: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      username: '',
      password: '',
      passwordConfirm: '',
    };

    if (!formData.username) {
      newErrors.username = '아이디를 입력해주세요.';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 8) {
      newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!agreements.age14 || !agreements.service || !agreements.privacy) {
      alert('필수 약관에 동의해주세요.');
      return;
    }

    console.log('회원가입 데이터:', { formData, agreements });
    // API 호출 로직
  };

  return (
    <div className="flex justify-center bg-gray-50 px-4 py-20">
      <div className="w-full max-w-xl px-4">
        <h1 className="mb-8 text-center text-2xl font-semibold text-gray-900">회원가입</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 아이디 */}
          <FormInput
            label="아이디"
            placeholder="영문,숫자 아이디, 최대 20자"
            value={formData.username}
            onChange={handleInputChange('username')}
            error={errors.username}
          />

          {/* 비밀번호 */}
          <FormInput
            label="비밀번호"
            type="password"
            placeholder="숫자, 영문, 특수문자 포함 최소 8자 이상"
            value={formData.password}
            onChange={handleInputChange('password')}
            error={errors.password}
          />

          {/* 비밀번호 확인 */}
          <FormInput
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호 한번 더 입력"
            value={formData.passwordConfirm}
            onChange={handleInputChange('passwordConfirm')}
            error={errors.passwordConfirm}
          />

          {/* 이메일 주소 */}
          <EmailVerification email={formData.email} onEmailChange={handleInputChange('email')} />

          {/* 약관 동의 */}
          <AgreementSection agreements={agreements} onAgreementsChange={setAgreements} />

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-4 text-lg font-semibold text-white transition-colors hover:bg-cyan-600"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
