import type { BuyItemEntity, CartItemEntity, CartCheckoutItem } from '@/types/ordersType';
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
}): (BuyItemEntity | CartCheckoutItem)[] => {
  return useMemo(() => {
    if (mode === 'direct' && directItem) {
      return [directItem];
    }

    const items: CartCheckoutItem[] = cartData.map((item) => ({
      cart_item_id: item.cart_item_id,
      product_code: item.product_code,
      name: item.product_name,
      image: item.product_representative_image_url,
      quantity: item.quantity,
      price: item.price,
    }));

    // 선택된 아이템만 필터링 (cart_item_id 기준)
    if (!selectedItemIds?.length) return items;

    return items.filter((item) => selectedItemIds.includes(item.cart_item_id));
  }, [cartData, mode, directItem, selectedItemIds]);
};
