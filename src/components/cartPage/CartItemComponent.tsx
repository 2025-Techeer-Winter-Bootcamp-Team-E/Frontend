import Checkbox from '@/components/cartPage/Checkbox';
import QuantityControl from '@/components/cartPage/QuantityControl';
import type { BuyItemEntity } from '@/types/ordersType';

const CartItemComponent = ({
  item,
  isSelected,
  onToggle,
  onQuantityChange,
  onRemove,
}: {
  item: BuyItemEntity;
  isSelected: boolean;
  onToggle: () => void;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
}) => {
  return (
    <div className="mb-4 rounded-3xl border border-[#d2d2d7]/50 bg-white p-6 transition-colors hover:bg-[#fafafa]">
      <div className="flex gap-5">
        <div className="shrink-0 self-center">
          <Checkbox checked={isSelected} onChange={onToggle} />
        </div>

        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[18px] bg-[#f5f5f7] ring-1 ring-black/3">
          <img
            src={item.image || '/placeholder.png'}
            alt={item.name}
            className="h-full w-full object-contain p-3 mix-blend-multiply"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="truncate text-[17px] font-bold tracking-tight text-[#1d1d1f]">
              {item.name}
            </h3>
            <button
              onClick={onRemove}
              className="rounded-full p-1 text-[#d2d2d7] transition-all hover:bg-[#F5F5F7] hover:text-[#1d1d1f]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <QuantityControl
              quantity={item.quantity}
              onIncrease={() => onQuantityChange(item.quantity + 1)}
              onDecrease={() => onQuantityChange(item.quantity - 1)}
            />
            <div className="flex items-baseline gap-1 text-[20px] font-bold tracking-tight text-[#1d1d1f]">
              <span className="tabular-nums">{(item.price * item.quantity).toLocaleString()}</span>
              <span className="text-[13px] font-medium text-[#86868b]">TK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
