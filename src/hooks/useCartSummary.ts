import { useMemo } from 'react';

type CartItem = {
  cart_item_id: number;
  quantity: number;
  price: number;
};

export const useCartSummary = (items: CartItem[], selectedIds: number[]) => {
  return useMemo(() => {
    const selectedItems = items.filter((item) => selectedIds.includes(item.cart_item_id));
    const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return { total };
  }, [items, selectedIds]);
};
