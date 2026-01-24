import { ArrowRight } from 'lucide-react';

interface ActionButtonProps {
  isLastQuestion: boolean;
  disabled: boolean;
  onClick: () => void;
}

const ActionButton = ({ isLastQuestion, disabled, onClick }: ActionButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`group flex w-full items-center justify-center gap-2 rounded-[18px] py-4.5 text-[17px] font-bold transition-all md:w-60 ${
      disabled
        ? 'cursor-not-allowed bg-[#F5F5F7] text-[#d2d2d7]'
        : 'bg-[#1d1d1f] text-white hover:bg-[#000000] active:scale-[0.98]'
    }`}
  >
    {isLastQuestion ? '결과 보기' : '다음'}
    {!disabled && (
      <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
    )}
  </button>
);

export default ActionButton;
