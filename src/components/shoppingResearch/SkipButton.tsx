import React from 'react';

interface SkipButtonProps {
  text: string;
  onClick: () => void;
}

const SkipButton: React.FC<SkipButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium text-[#6b7280] leading-[20px] underline hover:text-[#111827] transition-colors"
    >
      {text}
    </button>
  );
};

export default SkipButton;
