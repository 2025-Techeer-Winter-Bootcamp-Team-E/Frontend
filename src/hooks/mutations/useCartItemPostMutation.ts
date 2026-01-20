import { postCartItem } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { CartItemEntity, CartItemPostReqDto } from '@/types/ordersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCartItemPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CartItemPostReqDto) => postCartItem(body),

    onMutate: async (variables: CartItemPostReqDto) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY.CART });

      const previousCart = queryClient.getQueryData<CartItemEntity[]>(QUERY_KEY.CART);

      queryClient.setQueryData<CartItemEntity[]>(QUERY_KEY.CART, (old) => {
        if (!old) return old;

        return old.map((item) =>
          item.product_code === variables.product_code
            ? { ...item, quantity: variables.quantity }
            : item,
        );
      });

      return { previousCart };
    },

    onError: (error, _variables, context) => {
      console.error('장바구니 수량 변경 실패:', error);

      if (context?.previousCart) {
        queryClient.setQueryData(QUERY_KEY.CART, context.previousCart);
      }

      alert('수량 변경에 실패했습니다.');
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.CART });
    },
  });
};

export default useCartItemPostMutation;
