import { useMemo } from 'react';
import type { BuyItemEntity, CartItemEntity } from '@/types/ordersType';

export const useCartItems = (data?: CartItemEntity[]) => {
  return useMemo<BuyItemEntity[]>(() => {
    if (!data) return [];

    return data.map((item) => ({
      id: item.cart_item_id,
      product_code: item.product_code,
      name: item.product_name,
      image: item.product_resentative_image_url,
      quantity: item.quantity,
      price: item.price,
    }));
  }, [data]);
};
