import Checkbox from '@/components/cartPage/Checkbox';
import QuantityControl from '@/components/cartPage/QuantityControl';

type CartItem = {
  id: number;
  product_id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

const CartItemComponent = ({
  item,
  isSelected,
  onToggle,
  onQuantityChange,
  onRemove,
}: {
  item: CartItem;
  isSelected: boolean;
  onToggle: () => void;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
}) => {
  const handleIncrease = () => {
    onQuantityChange(item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.quantity - 1);
    }
  };

  return (
    <div className="mb-4 rounded-2xl border border-[#F3F4F6] bg-white p-6">
      <div className="flex gap-4">
        <div className="shrink-0 pt-1">
          <Checkbox checked={isSelected} onChange={onToggle} />
        </div>

        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-[#F3F4F6] bg-[#F9FAFB]">
          <img
            src={item.image || '/placeholder.png'}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="mt-1 text-base font-bold text-[#111827]">{item.name}</h3>
            </div>

            <button
              onClick={onRemove}
              className="p-2 text-gray-400 transition-colors hover:text-gray-600"
              aria-label="상품 삭제"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <QuantityControl
              quantity={item.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />

            <div className="text-right">
              <div className="text-xl font-black text-[#111827]">
                {(item.price * item.quantity).toLocaleString()} TK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;