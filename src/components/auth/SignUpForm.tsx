import { useState } from 'react';
import FormInput from '@/components/auth/FormInput';
import AgreementSection, { type AgreementsState } from '@/components/auth/AgreementSection';

type SignupFormData = {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  name: string;
  phone: string;
};

type FormErrors = {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  name: string;
  phone: string;
};

type SignupFormProps = {
  onSubmit: (data: {
    email: string;
    password: string;
    nickname: string;
    name: string;
    phone: string;
  }) => void;
  loading?: boolean;
};

const SignupForm = ({ onSubmit, loading }: SignupFormProps) => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    name: '',
    phone: '',
  });

  const [agreements, setAgreements] = useState<AgreementsState>({
    all: false,
    age14: false,
    service: false,
    privacy: false,
    marketing: false,
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    name: '',
    phone: '',
  });

  const handleInputChange =
    (field: keyof SignupFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      }
    };

  const validateForm = () => {
    const newErrors: FormErrors = {
      email: '',
      password: '',
      passwordConfirm: '',
      nickname: '',
      name: '',
      phone: '',
    };

    if (!formData.email) newErrors.email = '이메일을 입력해주세요.';
    if (!formData.nickname) newErrors.nickname = '닉네임을 입력해주세요.';
    if (!formData.name) newErrors.name = '이름을 입력해주세요.';
    if (!formData.phone) newErrors.phone = '전화번호를 입력해주세요.';

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 8) {
      newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!agreements.age14 || !agreements.service || !agreements.privacy) {
      alert('필수 약관에 동의해주세요.');
      return;
    }

    onSubmit({
      email: formData.email,
      password: formData.password,
      nickname: formData.nickname,
      name: formData.name,
      phone: formData.phone,
    });
  };

  return (

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <FormInput
              label="이메일"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={errors.email}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="닉네임"
                value={formData.nickname}
                onChange={handleInputChange('nickname')}
                error={errors.nickname}
              />
              <FormInput
                label="이름"
                value={formData.name}
                onChange={handleInputChange('name')}
                error={errors.name}
              />
            </div>

            <FormInput
              label="전화번호"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              error={errors.phone}
            />

            <FormInput
              label="비밀번호"
              type="password"
              value={formData.password}
              onChange={handleInputChange('password')}
              error={errors.password}
            />

            <FormInput
              label="비밀번호 확인"
              type="password"
              value={formData.passwordConfirm}
              onChange={handleInputChange('passwordConfirm')}
              error={errors.passwordConfirm}
            />
          </div>

          <AgreementSection agreements={agreements} onAgreementsChange={setAgreements} />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#0066cc] py-4 font-semibold text-white disabled:opacity-50"
          >
            {loading ? '가입 중...' : '동의 및 가입하기'}
          </button>
        </form>

  );
};

export default SignupForm;
