import type { BuyItemEntity, CartItemEntity } from '@/types/ordersType';
import { useMemo } from 'react';

export const useCheckoutItems = ({
  cartData,
  mode,
  directItem,
  selectedItemIds,
}: {
  cartData: CartItemEntity[];
  mode: 'cart' | 'direct';
  directItem?: BuyItemEntity;
  selectedItemIds?: number[];
}): BuyItemEntity[] => {
  return useMemo(() => {
    if (mode === 'direct' && directItem) {
      return [directItem];
    }

    const items: BuyItemEntity[] = cartData.map((item) => ({
      id: item.cart_item_id,
      product_code: item.product_code,
      name: item.product_name,
      image: item.product_resentative_image_url,
      quantity: item.quantity,
      price: item.price,
    }));

    if (!selectedItemIds?.length) return items;

    return items.filter((item) => selectedItemIds.includes(item.id));
  }, [cartData, mode, directItem, selectedItemIds]);
};
