import { Check } from 'lucide-react';

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
      className={`relative rounded-lg border-2 p-4 transition-all hover:shadow-md ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      {isSelected && (
        <div className="absolute top-3 right-3">
          <Check className="h-5 w-5 text-blue-500" />
        </div>
      )}
      <div className="mb-1 text-sm text-gray-600">{amount.toLocaleString()} TK</div>
      <div className="text-lg font-bold text-gray-900">{price.toLocaleString()}원</div>
    </button>
  );
};

export default TokenCard;
