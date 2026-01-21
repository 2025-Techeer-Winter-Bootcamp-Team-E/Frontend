interface TokenCardProps {
  amount: number;
  price: number;
  isPopular?: boolean;
  isRecommended?: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const TokenCard = ({ amount, price, isSelected, onClick }: TokenCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-full rounded-2xl border p-5 text-left transition-all duration-400 ${
        isSelected
          ? 'border-gray-900 bg-gray-50/50'
          : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium tracking-wide text-gray-400 uppercase">
          {amount.toLocaleString()} TK
        </span>
        <span className="text-xl font-semibold tracking-tight text-gray-900">
          {price.toLocaleString()}원
        </span>
      </div>
      {isSelected && <div className="absolute top-5 right-5 h-2 w-2 rounded-full bg-gray-900" />}
    </button>
  );
};

export default TokenCard;
