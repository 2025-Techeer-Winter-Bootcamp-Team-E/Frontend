import { ChevronLeft } from 'lucide-react';
import { QuestionHeader, CustomInput } from '@/components/shoppingResearch';
import ProgressDots from '@/components/shoppingResearch/ProgressDots';
import QuickSelectOptions from '@/components/shoppingResearch/QuickSelectOptions';
import ActionButton from '@/components/shoppingResearch/ActionButton';
import type { ResearchQuestionEntity } from '@/types/searchType';

interface QuestionFlowProps {
  questions: ResearchQuestionEntity[];
  currentQuestionIndex: number;
  answers: Record<number, string>;
  onAnswerChange: (questionId: number, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const QuestionFlow = ({
  questions,
  currentQuestionIndex,
  answers,
  onAnswerChange,
  onNext,
  onBack,
}: QuestionFlowProps) => {
  // 안전성 검사: questions가 비어있거나 인덱스가 범위를 벗어난 경우
  if (!questions || questions.length === 0) {
    return (
      <div className="mt-10 overflow-hidden rounded-4xl border border-black/3 bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] md:p-16">
        <div className="text-center text-gray-500">질문이 없습니다.</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  
  // currentQuestion이 없는 경우 (인덱스 범위 초과)
  if (!currentQuestion) {
    return (
      <div className="mt-10 overflow-hidden rounded-4xl border border-black/3 bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] md:p-16">
        <div className="text-center text-gray-500">질문을 찾을 수 없습니다.</div>
      </div>
    );
  }

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentAnswer = answers[currentQuestion.question_id] || '';

  return (
    <div className="mt-10 overflow-hidden rounded-4xl border border-black/3 bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] md:p-16">
      <div className="mb-14 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-1.5 text-[15px] font-semibold text-[#86868b] transition-colors hover:text-[#1d1d1f]"
        >
          <ChevronLeft className="h-4.5 w-4.5" />
          이전
        </button>
        <ProgressDots total={questions.length} current={currentQuestionIndex} />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
        <QuestionHeader
          title={currentQuestion.question}
          subtitle={`Question ${currentQuestionIndex + 1} of ${questions.length}`}
        />

        <div className="mt-14 space-y-12">
          <CustomInput
            placeholder="답변을 입력하세요"
            value={currentAnswer}
            onChange={(value) => onAnswerChange(currentQuestion.question_id, value)}
          />

          {currentQuestion.options && currentQuestion.options.length > 0 && (
            <QuickSelectOptions
              options={currentQuestion.options}
              selectedOption={currentAnswer}
              onSelect={(option) => onAnswerChange(currentQuestion.question_id, option)}
            />
          )}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <ActionButton
            isLastQuestion={isLastQuestion}
            disabled={!currentAnswer.trim()}
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionFlow;
