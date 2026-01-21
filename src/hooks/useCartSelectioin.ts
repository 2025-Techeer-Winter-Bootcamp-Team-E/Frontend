import { useMemo, useState } from 'react';

export const useCartSelection = (itemIds: number[]) => {
  const [selectedItems, setSelectedItems] = useState<number[]>(() => itemIds);

  const validSelectedItems = useMemo(
    () => selectedItems.filter((id) => itemIds.includes(id)),
    [selectedItems, itemIds],
  );

  const toggleItem = (id: number) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };

  const toggleAll = () => {
    setSelectedItems(validSelectedItems.length === itemIds.length ? [] : itemIds);
  };

  const removeItem = (id: number) => {
    setSelectedItems((prev) => prev.filter((v) => v !== id));
  };

  return {
    selectedItems: validSelectedItems,
    toggleItem,
    toggleAll,
    removeItem,
    allSelected: validSelectedItems.length === itemIds.length && itemIds.length > 0,
  };
};
