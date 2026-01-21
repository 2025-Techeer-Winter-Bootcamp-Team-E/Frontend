import { useMemo } from 'react';

type CartItem = {
  id: number;
  quantity: number;
  price: number;
};

export const useCartSummary = (items: CartItem[], selectedIds: number[]) => {
  return useMemo(() => {
    const selectedItems = items.filter((item) => selectedIds.includes(item.id));
    const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      subtotal,
      discount: 0,
      total: subtotal,
    };
  }, [items, selectedIds]);
};
