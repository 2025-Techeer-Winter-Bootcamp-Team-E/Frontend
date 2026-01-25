import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { QuestionContext } from '@/components/shoppingResearch';
import useShoppingResearchMutation from '@/hooks/mutations/useShoppingResearchMutation';
import { PATH } from '@/routes/path';
import type { ResearchQuestionEntity } from '@/types/searchType';
import QuestionFlow from '@/components/shoppingResearch/QuestionFlow';
import Loading from '@/components/layout/Loading';
import Error from '@/components/layout/Error';

interface LocationState {
  userQuery?: string;
  questions?: ResearchQuestionEntity[];
  searchId?: string;
}

const ShoppingResearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const state = location.state as LocationState | null;
  const queryFromUrl = searchParams.get('q') || '';

  const userQuery = state?.userQuery || queryFromUrl;
  const [questions, setQuestions] = useState<ResearchQuestionEntity[]>(state?.questions || []);
  const [searchId, setSearchId] = useState<string>(state?.searchId || '');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const { mutate, isPending, isError } = useShoppingResearchMutation();

  useEffect(() => {
    if (questions.length > 0 || !userQuery) return;

    mutate(
      { user_query: userQuery },
      {
        onSuccess: (data) => {
          setQuestions(data.questions);
          setSearchId(data.search_id);
        },
      },
    );
  }, [userQuery, questions.length, mutate]);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      handleComplete();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const handleComplete = () => {
    const surveyContents = questions.map((q) => ({
      question_id: q.question_id,
      question: q.question,
      answer: answers[q.question_id] || '',
    }));

    navigate(
      `${PATH.SHOPPING_RESEARCH_RESULT}?q=${encodeURIComponent(userQuery)}&search_id=${searchId}`,
      {
        state: {
          user_query: userQuery,
          survey_contents: surveyContents,
          search_id: searchId,
        },
      },
    );
  };

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <QuestionContext context={userQuery} mode="AI 분석" />
        <QuestionFlow
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          answers={answers}
          onAnswerChange={handleAnswerChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>
    </div>
  );
};

export default ShoppingResearchPage;
