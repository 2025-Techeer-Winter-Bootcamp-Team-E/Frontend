import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchCartItem } from '@/api/orders';

const useCartItemPatchMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ cartItemId, quantity }: { cartItemId: number; quantity: number }) =>
      patchCartItem(cartItemId, { quantity }),
    onSuccess: () => {
      // 장바구니 목록을 최신 상태로 갱신합니다.
      // 주의: 실제 장바구니 조회 쿼리 키(예: ['cart'] 또는 ['cartItems'])와 일치해야 합니다.
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export default useCartItemPatchMutation;
