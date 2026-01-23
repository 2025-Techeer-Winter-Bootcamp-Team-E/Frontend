import { Minus, Plus, X } from 'lucide-react';
import Checkbox from '@/components/cartPage/Checkbox';
import type { BuyItemEntity } from '@/types/ordersType';
import useCartItemUpdateMutation from '@/hooks/mutations/useCartItemUpdateMutation';
import useCartItemDeleteMutation from '@/hooks/mutations/useCartItemDeleteMutation';

type CartItemWrapperProps = {
  item: BuyItemEntity;
  isSelected: boolean;
  onToggle: () => void;
  onRemoveSuccess: () => void;
};

const CartItemWrapper = ({ item, isSelected, onToggle, onRemoveSuccess }: CartItemWrapperProps) => {
  // '수량 변경'을 위한 PATCH 뮤테이션 훅
  const { mutate: updateQuantity } = useCartItemUpdateMutation();
  // '항목 삭제'를 위한 DELETE 뮤테이션 훅
  const { mutate: deleteItem } = useCartItemDeleteMutation();

  const handleIncrease = () => {
    updateQuantity({
      cart_item_id: item.id, // item.id가 cart_item_id 입니다.
      quantity: item.quantity + 1,
    });
  };

  const handleDecrease = () => {
    // 수량이 0이 되면 백엔드에서 삭제 처리됩니다.
    if (item.quantity <= 0) return;
    updateQuantity({
      cart_item_id: item.id,
      quantity: item.quantity - 1,
    });
  };

  const handleRemove = () => {
    if (confirm('이 상품을 장바구니에서 삭제하시겠습니까?')) {
      deleteItem(item.id, {
        onSuccess: () => {
          // API 요청 성공 후, 부모 컴포넌트의 상태 업데이트 콜백을 호출합니다.
          onRemoveSuccess();
        },
      });
    }
  };

  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
      <Checkbox checked={isSelected} onChange={onToggle} />
      <div className="aspect-square w-24 shrink-0 overflow-hidden rounded-xl bg-[#f5f5f7]">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-[#1d1d1f]">{item.name}</p>
        <p className="text-sm text-[#86868b]">{item.price.toLocaleString()}원</p>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-[#f5f5f7] p-1 shadow-sm">
        <button
          onClick={handleDecrease}
          className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors hover:bg-white"
        >
          <Minus className="h-3 w-3" />
        </button>
        <span className="min-w-6 text-center text-sm font-bold tracking-tight text-[#1d1d1f]">
          {item.quantity}
        </span>
        <button
          onClick={handleIncrease}
          className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors hover:bg-white"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
      <div className="w-24 text-right font-bold text-[#1d1d1f]">
        {(item.price * item.quantity).toLocaleString()}원
      </div>
      <button
        onClick={handleRemove}
        className="text-[#86868b] transition-colors hover:text-[#1d1d1f]"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItemWrapper;
