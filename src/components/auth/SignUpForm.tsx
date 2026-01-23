import type { AgreementsState } from '@/components/auth/AgreementSection';
import AgreementSection from '@/components/auth/AgreementSection';
import FormInput from '@/components/auth/FormInput';
import useSignUpMutation from '@/hooks/mutations/useSignUpMutation';
import { PATH } from '@/routes/path';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const signUpMutation = useSignUpMutation();

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

    signUpMutation.mutate(
      {
        email: formData.email,
        password: formData.password,
        nickname: formData.nickname,
        name: formData.name,
        phone: formData.phone,
      },
      {
        onSuccess: () => {
          navigate(PATH.LOGIN);
        },
        onError: (error) => {
          console.error(error);
          alert(error.message || '회원가입에 실패했습니다.');
        },
      },
    );
  };

  return (
    <div className="flex min-h-screen justify-center bg-[#F5F5F7] px-4 py-24">
      <div className="w-full max-w-110">
        <h1 className="mb-10 text-center text-[32px] font-semibold tracking-tight text-[#1d1d1f]">
          계정 만들기
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <FormInput
              label="이메일"
              type="email"
              placeholder="example@apple.com"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={errors.email}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="닉네임"
                placeholder="닉네임"
                value={formData.nickname}
                onChange={handleInputChange('nickname')}
                error={errors.nickname}
              />
              <FormInput
                label="이름"
                placeholder="이름"
                value={formData.name}
                onChange={handleInputChange('name')}
                error={errors.name}
              />
            </div>

            <FormInput
              label="전화번호"
              type="tel"
              placeholder="010-1234-5678"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              error={errors.phone}
            />

            <FormInput
              label="비밀번호"
              type="password"
              placeholder="8자 이상"
              value={formData.password}
              onChange={handleInputChange('password')}
              error={errors.password}
            />

            <FormInput
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호 확인"
              value={formData.passwordConfirm}
              onChange={handleInputChange('passwordConfirm')}
              error={errors.passwordConfirm}
            />
          </div>

          <AgreementSection agreements={agreements} onAgreementsChange={setAgreements} />

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-[#0066cc] py-4 text-[17px] font-semibold text-white transition-all hover:bg-[#0077ed] focus:outline-none disabled:bg-[#d2d2d7]"
          >
            동의 및 가입하기
          </button>
        </form>

        <p className="mt-8 text-center text-[13px] text-[#86868b]">
          가입 시 서비스의 이용 약관 및 개인정보 처리방침에 동의하게 됩니다.
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
