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
    <div className="flex justify-center bg-gray-50 px-4 py-20">
      <div className="w-full max-w-xl">
        <h1 className="mb-8 text-center text-2xl font-semibold">회원가입</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="이메일"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={errors.email}
          />

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
            placeholder="최소 8자 이상"
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

          <AgreementSection agreements={agreements} onAgreementsChange={setAgreements} />

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-4 text-lg font-semibold text-white hover:bg-cyan-600"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
