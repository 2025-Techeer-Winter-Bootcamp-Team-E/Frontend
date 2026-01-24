import CartItemComponent from '@/components/cartPage/CartItemComponent';
import useCartItemDeleteMutation from '@/hooks/mutations/useCartItemDeleteMutation';
import useCartItemPatchMutation from '@/hooks/mutations/useCartItemPatchMutation';
import type { CartItemEntity } from '@/types/ordersType';

interface Props {
  item: CartItemEntity;
  isSelected: boolean;
  onToggle: () => void;
  onRemoveSuccess: () => void;
}

const CartItemWrapper = ({ item, isSelected, onToggle, onRemoveSuccess }: Props) => {
  const updateMutation = useCartItemPatchMutation();
  const deleteMutation = useCartItemDeleteMutation();

  const handleQuantityChange = (quantity: number) => {
    if (quantity < 1) return;

    updateMutation.mutate({
      cartItemId: item.cart_item_id,
      quantity,
    });
  };

  const handleRemove = () => {
    if (!confirm('상품을 장바구니에서 삭제하시겠습니까?')) return;

    deleteMutation.mutate(item.cart_item_id, {
      onSuccess: () => {
        onRemoveSuccess();
      },
    });
  };

  return (
    <CartItemComponent
      item={item}
      isSelected={isSelected}
      onToggle={onToggle}
      onQuantityChange={handleQuantityChange}
      onRemove={handleRemove}
    />
  );
};

export default CartItemWrapper;
