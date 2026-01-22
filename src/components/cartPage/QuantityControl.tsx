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
    <div className="flex items-center rounded-lg border border-[#d2d2d7] bg-white p-0.5">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="flex h-7 w-8 items-center justify-center rounded-[5px] text-[#0066cc] transition-all hover:bg-[#F5F5F7] disabled:text-[#d2d2d7]"
      >
        <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
      </button>
      <span className="w-8 text-center text-[13px] font-semibold text-[#1d1d1f] tabular-nums">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="flex h-7 w-8 items-center justify-center rounded-[5px] text-[#0066cc] transition-all hover:bg-[#F5F5F7]"
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
      </button>
    </div>
  );
};
export default QuantityControl;
