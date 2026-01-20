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
    <div className="flex justify-center bg-gray-50 px-4 py-20">
      <div className="w-full max-w-md px-4">
        <h1 className="text-center text-2xl font-semibold text-gray-900">로그인</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              이메일
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해 주세요"
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해 주세요"
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-200 focus:outline-none disabled:opacity-50"
          >
            로그인
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <span>아직 회원이 아니신가요? </span>
          <Link to={PATH.SIGNUP} className="font-medium text-cyan-500 hover:underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
