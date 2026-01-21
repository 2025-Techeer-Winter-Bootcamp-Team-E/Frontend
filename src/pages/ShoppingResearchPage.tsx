import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Loader2 } from 'lucide-react';
import { QuestionContext, QuestionHeader, CustomInput } from '@/components/shoppingResearch';
import useShoppingResearchMutation from '@/hooks/mutations/useShoppingResearchMutation';
import { PATH } from '@/routes/path';

const ShoppingResearchPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as any;
  const [searchParams] = useSearchParams();

  const queryFromUrl = searchParams.get('q') || '';
  const [userQuery, setUserQuery] = useState(state?.userQuery || queryFromUrl);
  const [questions, setQuestions] = useState<any[]>(state?.questions || []);
  const [searchId, setSearchId] = useState<string>(state?.searchId || '');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const mutation = useShoppingResearchMutation();

  useEffect(() => {
    if (questions.length > 0 || !userQuery) return;
    mutation.mutate(
      { user_query: userQuery },
      {
        onSuccess: (data) => {
          setQuestions(data.questions);
          setSearchId(data.search_id);
        },
      },
    );
  }, [userQuery]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentAnswer = answers[currentQuestion?.question_id] || '';

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.question_id]: value });
  };

  const handleNext = () => {
    if (isLastQuestion) handleComplete();
    else setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex((prev) => prev - 1);
    else navigate(-1);
  };

  const handleComplete = () => {
    const surveyContents = questions.map((q) => ({
      question_id: q.question_id,
      question: q.question,
      answer: answers[q.question_id] || '',
    }));

    navigate(`${PATH.SHOPPING_RESEARCH_RESULT}?q=${encodeURIComponent(userQuery)}`, {
      state: { user_query: userQuery, survey_contents: surveyContents, search_id: searchId },
    });
  };

  // 로딩 화면
  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F9FB]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="text-lg font-bold tracking-tight text-gray-900">
            AI가 질문을 생성하고 있습니다...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <QuestionContext context={userQuery} mode="AI 분석 엔진 가동 중" />

        <div className="mt-12 overflow-hidden rounded-[40px] bg-white p-8 shadow-2xl ring-1 shadow-gray-200/50 ring-gray-100 md:p-16">
          {/* 뒤로가기 & 진행도 */}
          <div className="mb-12 flex items-center justify-between">
            <button
              onClick={handleBack}
              className="group flex items-center gap-2 text-sm font-bold text-gray-400 transition-colors hover:text-gray-900"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              이전으로
            </button>
            <div className="flex gap-1.5">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-8 rounded-full transition-all duration-500 ${
                    index <= currentQuestionIndex ? 'bg-indigo-600' : 'bg-gray-100'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 메인 질문 */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <QuestionHeader
              title={currentQuestion.question}
              subtitle={`Question ${currentQuestionIndex + 1} of ${questions.length}`}
            />

            <div className="mt-12 space-y-10">
              <CustomInput
                placeholder={
                  currentQuestion.customOption?.placeholder || '이곳에 답변을 입력하세요'
                }
                value={currentAnswer}
                onChange={handleAnswerChange}
              />

              {/* 답변 추천 옵션 (Pill 스타일) */}
              {currentQuestion.options && currentQuestion.options.length > 0 && (
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xs font-black tracking-widest text-gray-300 uppercase">
                    Quick Select
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {currentQuestion.options.map((option: any) => (
                      <button
                        key={option.id}
                        onClick={() => handleAnswerChange(option.label)}
                        className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                          currentAnswer === option.label
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 하단 액션 버튼 */}
            <div className="mt-16 flex flex-col items-center gap-4">
              <button
                onClick={handleNext}
                disabled={!currentAnswer.trim()}
                className={`group flex w-full items-center justify-center gap-2 rounded-2xl py-5 text-lg font-bold transition-all md:w-64 ${
                  currentAnswer.trim()
                    ? 'bg-gray-900 text-white shadow-xl hover:scale-105 hover:bg-indigo-600 active:scale-95'
                    : 'cursor-not-allowed bg-gray-100 text-gray-300'
                }`}
              >
                {isLastQuestion ? '분석 결과 보기' : '다음 단계로'}
                {!mutation.isPending && (
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                )}
              </button>
              <p className="text-xs font-medium text-gray-400">
                엔터(Enter) 키를 눌러서 다음으로 이동할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingResearchPage;
