import React, { useState } from 'react';
import {
  QuestionContext,
  QuestionHeader,
  OptionButton,
  CustomInput,
  SkipButton,
} from '@/components/shoppingResearch';
import { Edit3 } from 'lucide-react';
import shoppingResearchData from '@/mocks/data/shoppingResearch.json';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/routes/path';

const ShoppingResearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  const [customInputs, setCustomInputs] = useState<Record<number, string>>({});

  const questions = shoppingResearchData.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleOptionSelect = (optionId: number) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId,
    });

    // 다음 질문으로 이동 또는 완료
    if (isLastQuestion) {
      handleComplete();
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
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
    // 모든 답변을 수집하고 결과 페이지로 이동
    console.log('Answers:', answers);
    console.log('Custom Inputs:', customInputs);
    // TODO: API 연동 후 결과 페이지로 이동
    navigate(PATH.SHOPPING_RESEARCH_RESULT);
  };

  const handleCustomInput = (value: string) => {
    setCustomInputs({
      ...customInputs,
      [currentQuestion.id]: value,
    });
  };

  const selectedOptionId = answers[currentQuestion.id] as number | undefined;

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(245, 247, 248, 1) 0%, rgba(245, 247, 248, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      <div className="mx-auto max-w-[1024px] px-8 py-12">
        {/* 질문 컨텍스트 */}
        <div className="mb-12">
          <QuestionContext
            context={shoppingResearchData.context.currentSearch}
            mode={shoppingResearchData.context.mode}
          />
        </div>

        {/* 메인 질문 영역 */}
        <div className="mx-auto max-w-[768px]">
          {/* 질문 헤더 */}
          <div className="mb-12">
            <QuestionHeader title={currentQuestion.title} subtitle={currentQuestion.subtitle} />
          </div>

          {/* 옵션 버튼 그리드 */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                isSelected={selectedOptionId === option.id}
                onClick={() => handleOptionSelect(option.id)}
                icon={Edit3}
              />
            ))}
          </div>

          {/* 커스텀 입력 */}
          <div className="mb-6">
            <CustomInput
              placeholder={currentQuestion.customOption.placeholder}
              value={customInputs[currentQuestion.id] || ''}
              onChange={handleCustomInput}
            />
          </div>

          {/* 건너뛰기 버튼 */}
          <div className="pt-4 text-center">
            <SkipButton text={currentQuestion.skipText} onClick={handleSkip} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingResearchPage;
