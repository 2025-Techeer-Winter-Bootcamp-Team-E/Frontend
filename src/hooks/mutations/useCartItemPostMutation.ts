import { postCartItem } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { CartItemPostReqDto } from '@/types/ordersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCartItemPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CartItemPostReqDto) => postCartItem(body),

    onSuccess: () => {
      // 상품 추가 성공 시, 장바구니 목록을 다시 불러와 최신 상태를 반영합니다.
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.CART });
    },

    onError: (error) => {
      console.error('장바구니 상품 추가 실패:', error);
      alert('상품을 장바구니에 추가하는 데 실패했습니다.');
    },
  });
};

export default useCartItemPostMutation;
