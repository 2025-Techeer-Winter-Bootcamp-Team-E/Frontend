import type { BuyItemEntity, CartCheckoutItem } from '@/types/ordersType';
import { useMemo } from 'react';

export const useOrderSummary = (orderItems: (BuyItemEntity | CartCheckoutItem)[]) => {
  return useMemo(() => {
    if (!orderItems || orderItems.length === 0) {
      return { total: 0 };
    }

    const total = orderItems.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return sum + price * quantity;
    }, 0);

    return { total };
  }, [orderItems]);
};
