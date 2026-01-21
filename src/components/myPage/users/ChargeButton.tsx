interface ChargeButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const ChargeButton = ({ onClick, disabled = false }: ChargeButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-2xl py-4 font-semibold text-white transition-all duration-300 ${
        disabled
          ? 'cursor-not-allowed bg-gray-200 text-gray-400'
          : 'bg-[#1d1d1f] hover:bg-[#424245] active:scale-[0.98]'
      }`}
    >
      충전하기
    </button>
  );
};

export default ChargeButton;
