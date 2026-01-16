import { Check } from 'lucide-react';

interface TokenCardProps {
  amount: number;
  price: number;
  isPopular?: boolean;
  isRecommended?: boolean;
  isSelected: boolean;
  onClick: () => void;
  // 배지는 사용하지 않지만 props는 유지 (호환성)
}

const TokenCard = ({
  amount,
  price,
  isPopular = false,
  isRecommended = false,
  isSelected,
  onClick,
}: TokenCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-lg border-2 p-4 transition-all hover:shadow-md ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      {/* 선택 체크 아이콘 */}
      {isSelected && (
        <div className="absolute right-3 top-3">
          <Check className="h-5 w-5 text-blue-500" />
        </div>
      )}

      {/* 토큰 금액 */}
      <div className="mb-1 text-sm text-gray-600">{amount.toLocaleString()} TK</div>

      {/* 가격 */}
      <div className="text-lg font-bold text-gray-900">{price.toLocaleString()}원</div>
    </button>
  );
};

export default TokenCard;
