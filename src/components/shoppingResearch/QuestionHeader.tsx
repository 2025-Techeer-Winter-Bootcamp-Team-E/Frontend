import React from 'react';

interface QuestionHeaderProps {
  title: string;
  subtitle: string;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-[30px] font-bold text-[#111827] leading-[36px] text-center">
        {title}
      </h1>
      <p className="text-base font-light text-[#6b7280] leading-[24px] text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default QuestionHeader;
