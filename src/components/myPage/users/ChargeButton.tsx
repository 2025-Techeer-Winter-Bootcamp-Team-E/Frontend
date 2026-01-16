interface ChargeButtonProps {
  onClick: () => void;
  disabled?: boolean;
  amount: number;
}

const ChargeButton = ({ onClick, disabled = false, amount }: ChargeButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-lg py-4 font-medium text-white transition-colors ${
        disabled
          ? 'cursor-not-allowed bg-gray-300'
          : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
      }`}
    >
      충전하기
    </button>
  );
};

export default ChargeButton;
