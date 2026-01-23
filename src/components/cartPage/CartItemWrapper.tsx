import CartItemComponent from '@/components/cartPage/CartItemComponent';
import useCartItemPostMutation from '@/hooks/mutations/useCartItemPostMutation';
import useCartItemDeleteMutation from '@/hooks/mutations/useCartItemDeleteMutation';
import type { BuyItemEntity } from '@/types/ordersType';

interface Props {
  item: BuyItemEntity;
  isSelected: boolean;
  onToggle: () => void;
  onRemoveSuccess: () => void;
}

const CartItemWrapper = ({ item, isSelected, onToggle, onRemoveSuccess }: Props) => {
  const updateMutation = useCartItemPostMutation();
  const deleteMutation = useCartItemDeleteMutation();

  const handleQuantityChange = (quantity: number) => {
    if (quantity < 1) return;

    updateMutation.mutate({
      product_code: item.product_code,
      quantity,
    });
  };

  const handleRemove = () => {
    if (!confirm('상품을 장바구니에서 삭제하시겠습니까?')) return;

    deleteMutation.mutate(item.id);
    onRemoveSuccess();
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
