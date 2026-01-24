import SignupForm from '@/components/auth/SignUpForm';
import useSignUpMutation from '@/hooks/mutations/useSignUpMutation';
import { PATH } from '@/routes/path';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useSignUpMutation();

  const handleSignup = (data: {
    email: string;
    password: string;
    nickname: string;
    name: string;
    phone: string;
  }) => {
    mutate(data, {
      onSuccess: () => {
        navigate(PATH.LOGIN);
      },
      onError: () => {
        alert('회원가입에 실패했습니다.');
      },
    });
  };

  return (
    <div className="flex min-h-screen justify-center bg-[#F5F5F7] px-4 py-24">
      <div className="w-full max-w-110">
        <h1 className="mb-10 text-center text-[32px] font-semibold text-[#1d1d1f]">회원가입</h1>
        <SignupForm onSubmit={handleSignup} loading={isPending} />
      </div>
    </div>
  );
};

export default SignupPage;
