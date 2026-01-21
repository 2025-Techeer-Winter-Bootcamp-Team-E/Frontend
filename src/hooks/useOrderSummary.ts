import type { BuyItemEntity } from '@/types/ordersType';
import { useMemo } from 'react';

export const useOrderSummary = (orderItems: BuyItemEntity[]) => {
  return useMemo(() => {
    const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      subtotal,
      discount: 0,
      bonus: Math.floor(subtotal * 0.01),
      total: subtotal,
    };
  }, [orderItems]);
};
