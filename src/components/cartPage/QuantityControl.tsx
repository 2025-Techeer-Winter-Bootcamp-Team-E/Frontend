import { Minus, Plus } from 'lucide-react';

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
    <div className="flex items-center gap-1 rounded-full bg-[#f5f5f7] p-1 shadow-inner">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-sm transition-all hover:bg-gray-50 disabled:opacity-30 disabled:shadow-none"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-10 text-center text-[14px] font-bold text-[#1d1d1f]">{quantity}</span>
      <button
        onClick={onIncrease}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-sm transition-all hover:bg-gray-50"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};
export default QuantityControl;
