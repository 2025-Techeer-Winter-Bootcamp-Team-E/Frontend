import googleIcon from '@/assets/google.png';
import kakaoIcon from '@/assets/kakao.png';
import naverIcon from '@/assets/naver.png';
import { PATH } from '@/routes/path';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              placeholder="비밀번호를 입력해 주세요"
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-200 focus:outline-none"
          >
            로그인
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50 focus:ring-2 focus:ring-cyan-200 focus:outline-none"
            aria-label="Google로 로그인"
          >
            <img src={googleIcon} alt="" className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#FEE500] bg-[#FEE500] shadow-sm transition hover:brightness-95 focus:ring-2 focus:ring-cyan-200 focus:outline-none"
            aria-label="카카오로 로그인"
          >
            <img src={kakaoIcon} alt="" className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#03C75A] bg-[#03C75A] shadow-sm transition hover:brightness-95 focus:ring-2 focus:ring-cyan-200 focus:outline-none"
            aria-label="네이버로 로그인"
          >
            <img src={naverIcon} alt="" className="h-6 w-6" />
          </button>
        </div>

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
