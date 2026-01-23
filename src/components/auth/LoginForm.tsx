import useLogInMutation from '@/hooks/mutations/useLogInMutation';
import { PATH } from '@/routes/path';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogInMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(
      { email, password },
      {
        onSuccess: () => {
          navigate(PATH.ROOT);
        },
      },
    );
  };

  return (
    <div className="min-vh-100 flex items-center justify-center bg-[#F5F5F7] px-4 py-32">
      <div className="w-full max-w-100">
        <h1 className="text-center text-[32px] font-semibold tracking-tight text-[#1d1d1f]">
          로그인
        </h1>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="ml-1 block text-[13px] font-medium text-[#86868b]">
              이메일
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3.5 text-[17px] text-[#1d1d1f] transition-all placeholder:text-[#d2d2d7] focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="ml-1 block text-[13px] font-medium text-[#86868b]">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              className="w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3.5 text-[17px] text-[#1d1d1f] transition-all placeholder:text-[#d2d2d7] focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="mt-4 w-full rounded-xl bg-[#0066cc] py-3.5 text-[17px] font-semibold text-white transition-all hover:bg-[#0077ed] focus:outline-none disabled:cursor-not-allowed disabled:bg-[#d2d2d7]"
          >
            {isPending ? '연결 중...' : '로그인'}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-[14px] text-[#86868b]">
            아직 회원이 아니신가요?{' '}
            <Link to={PATH.SIGNUP} className="ml-1 font-medium text-[#0066cc] hover:underline">
              지금 만들기 〉
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
