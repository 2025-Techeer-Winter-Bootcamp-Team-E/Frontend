import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '@/routes/path';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  loading: boolean;
}

const LoginForm = ({ onSubmit, loading }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="min-vh-100 flex items-center justify-center bg-[#F5F5F7] px-4 py-32">
      <div className="w-full max-w-100">
        <h1 className="text-center text-[32px] font-semibold tracking-tight text-[#1d1d1f]">
          로그인
        </h1>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="space-y-2">
            <label className="ml-1 block text-[13px] font-medium text-[#86868b]">이메일</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#d2d2d7] px-4 py-3.5"
            />
          </div>

          <div className="space-y-2">
            <label className="ml-1 block text-[13px] font-medium text-[#86868b]">비밀번호</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-[#d2d2d7] px-4 py-3.5"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-xl bg-[#0066cc] py-3.5 text-white disabled:bg-[#d2d2d7]"
          >
            로그인
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-[14px] text-[#86868b]">
            아직 회원이 아니신가요?
            <Link to={PATH.SIGNUP} className="ml-1 font-medium text-[#0066cc]">
              지금 만들기 〉
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
