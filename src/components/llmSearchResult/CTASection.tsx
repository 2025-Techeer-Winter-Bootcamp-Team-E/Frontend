import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useShoppingResearchMutation from '@/hooks/mutations/useShoppingResearchMutation';
import { PATH } from '@/routes/path';

const CTASection = ({ keyword }: { keyword?: string }) => {
  const navigate = useNavigate();
  const mutation = useShoppingResearchMutation();

  const handleAction = () => {
    if (!keyword) return navigate(PATH.SHOPPING_RESEARCH);
    mutation.mutate(
      { user_query: keyword },
      {
        onSuccess: (data) =>
          navigate(`${PATH.SHOPPING_RESEARCH}?q=${encodeURIComponent(keyword)}`, {
            state: { userQuery: keyword, questions: data.questions, searchId: data.search_id },
          }),
      },
    );
  };

  return (
    <div className="relative overflow-hidden rounded-[40px] bg-gray-900 p-12 text-center lg:p-20">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">
          <Sparkles className="h-8 w-8 text-indigo-400" />
        </div>

        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          원하는 상품을 <br className="sm:hidden" /> 찾지 못하셨나요?
        </h2>

        <p className="mb-10 max-w-lg text-lg leading-relaxed font-medium text-gray-400">
          AI 쇼핑 어시스턴트가 사용자님의 취향과 예산을 <br />더 깊게 분석하여 최적의 제안을
          해드립니다.
        </p>

        <button
          onClick={handleAction}
          disabled={mutation.isPending}
          className="group flex items-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-bold text-gray-900 transition-all hover:scale-105 hover:bg-indigo-50 active:scale-95 disabled:opacity-50"
        >
          {mutation.isPending ? '분석 중...' : '맞춤형 쇼핑 리서치 시작'}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default CTASection;
