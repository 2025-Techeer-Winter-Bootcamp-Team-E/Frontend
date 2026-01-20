import { Minus, Plus } from 'lucide-react';

// 수량 조절 컴포넌트
const QuantityControl = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
}: {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
}) => {
  return (
    <div className="flex h-9.5 items-center rounded-lg border border-[#E5E7EB]">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="border-r border-[#E5E7EB] px-3 py-1 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Minus className="h-4 w-4 text-[#6B7280]" />
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-10 border-x-0 border-[#E5E7EB] bg-transparent py-1 text-center text-sm font-bold text-[#111827]"
      />
      <button
        onClick={onIncrease}
        className="border-l border-[#E5E7EB] px-3 py-1 transition-colors hover:bg-gray-100"
      >
        <Plus className="h-4 w-4 text-[#6B7280]" />
      </button>
    </div>
  );
};
export default QuantityControl;
