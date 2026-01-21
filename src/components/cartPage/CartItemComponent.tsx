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
    <div className="mb-4 rounded-[2rem] border border-black/[0.03] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
      <div className="flex gap-6">
        <div className="shrink-0 pt-1">
          <Checkbox checked={isSelected} onChange={onToggle} />
        </div>

        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-[#f5f5f7]">
          <img
            src={item.image || '/placeholder.png'}
            alt={item.name}
            className="h-full w-full object-contain p-2"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <h3 className="truncate text-lg leading-tight font-semibold tracking-tight text-[#1d1d1f]">
              {item.name}
            </h3>
            <button
              onClick={onRemove}
              className="p-1 text-[#d2d2d7] transition-colors hover:text-[#86868b]"
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

          <div className="flex items-end justify-between">
            {/* 수량 조절 컴포넌트는 앞서 만든 애플 스타일 스테퍼를 사용한다고 가정 */}
            <QuantityControl
              quantity={item.quantity}
              onIncrease={() => onQuantityChange(item.quantity + 1)}
              onDecrease={() => onQuantityChange(item.quantity - 1)}
            />
            <div className="text-[20px] font-bold tracking-tight text-[#1d1d1f]">
              {(item.price * item.quantity).toLocaleString()}{' '}
              <span className="text-sm font-medium text-[#86868b]">TK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
