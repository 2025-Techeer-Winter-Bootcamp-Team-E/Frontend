interface ChargeButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const ChargeButton = ({ onClick, disabled = false }: ChargeButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      // 버튼: 더 둥근 곡률과 시스템 블루 강조
      className={`w-full rounded-[18px] py-4 text-[17px] font-semibold transition-all duration-300 ${
        disabled
          ? 'cursor-not-allowed bg-[#F5F5F7] text-[#d2d2d7]'
          : 'bg-[#0066cc] text-white hover:bg-[#0077ed] active:scale-[0.98]'
      }`}
    >
      충전하기
    </button>
  );
};

export default ChargeButton;
