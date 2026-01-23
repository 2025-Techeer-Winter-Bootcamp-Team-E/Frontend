import { postCartItem } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { CartItemEntity, CartItemPostReqDto } from '@/types/ordersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Context = {
  previousCart?: CartItemEntity[];
};

const useCartItemPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCartItem,
    onMutate: async (variables: CartItemPostReqDto): Promise<Context> => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY.CART });
      const previousCart = queryClient.getQueryData<CartItemEntity[]>(QUERY_KEY.CART);

      queryClient.setQueryData<CartItemEntity[]>(QUERY_KEY.CART, (cart) => {
        if (!cart) return cart;

        return cart.map((item) =>
          item.product_code === variables.product_code
            ? { ...item, quantity: variables.quantity }
            : item,
        );
      });

      return { previousCart };
    },

    onError: (_error, _variables, context) => {
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
