import React, { useState, useEffect } from 'react';
import { QuestionContext, QuestionHeader, CustomInput } from '@/components/shoppingResearch';
import useShoppingResearchMutation from '@/hooks/mutations/useShoppingResearchMutation';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
    if (questions.length > 0) return;
    if (!userQuery) return;

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
    if (isLastQuestion) {
      handleComplete();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSkip = () => {
    if (isLastQuestion) {
      handleComplete();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleComplete = () => {
    const surveyContents = questions.map((q) => ({
      question_id: q.question_id,
      question: q.question,
      answer: answers[q.question_id] || '',
    }));

    navigate(`${PATH.SHOPPING_RESEARCH_RESULT}?q=${encodeURIComponent(userQuery)}`, {
      state: {
        user_query: userQuery,
        survey_contents: surveyContents,
        search_id: searchId,
      },
    });
  };

  if (questions.length === 0) {
    return (
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #f5f7f8 0%, #f5f7f8 100%), linear-gradient(90deg, #fff 0%, #fff 100%)',
        }}
      >
        <div className="mx-auto max-w-5xl px-8 py-12">
          <div className="flex items-center justify-center">
            <p className="text-gray-600">질문을 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(90deg, #f5f7f8 0%, #f5f7f8 100%), linear-gradient(90deg, #fff 0%, #fff 100%)',
      }}
    >
      <div className="mx-auto max-w-5xl px-8 py-12">
        <QuestionContext context={userQuery} mode="쇼핑 리서치" />

        <div className="mx-auto mt-12 max-w-3xl">
          {/* 질문 헤더 */}
          <QuestionHeader
            title={currentQuestion.question}
            subtitle={`질문 ${currentQuestionIndex + 1} / ${questions.length}`}
          />

          {/* 입력 영역 */}
          <div className="mt-8 space-y-6">
            <CustomInput
              placeholder={currentQuestion.customOption?.placeholder || '답변을 입력해주세요'}
              value={currentAnswer}
              onChange={handleAnswerChange}
            />

            {/* 예시 옵션들 (선택적으로 클릭하면 입력창에 채워짐) */}
            {currentQuestion.options && currentQuestion.options.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#6b7280]">추천 답변</p>
                <div className="flex flex-wrap gap-2">
                  {currentQuestion.options.map((option: any) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswerChange(option.label)}
                      className="rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm text-[#374151] transition-all hover:border-[#0d9dda] hover:text-[#0d9dda]"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 버튼 영역 */}
          <div className="mt-12 flex justify-end">
            <button
              onClick={handleNext}
              disabled={!currentAnswer.trim()}
              className={`flex items-center gap-2 rounded-full px-8 py-3 font-bold transition-all ${
                currentAnswer.trim()
                  ? 'bg-[#0d9dda] text-white shadow-lg hover:bg-[#0c8bc4]'
                  : 'cursor-not-allowed bg-[#e5e7eb] text-[#9ca3af]'
              }`}
            >
              {isLastQuestion ? '완료' : '다음'}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* 진행 상태 표시 */}
          <div className="mt-8">
            <div className="flex gap-1">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    index <= currentQuestionIndex ? 'bg-[#0d9dda]' : 'bg-[#e5e7eb]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingResearchPage;
