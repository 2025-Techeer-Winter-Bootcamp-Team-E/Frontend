import { patchCartItemQuantity } from '@/api/orders';
import { QUERY_KEY } from '@/constants/queryKey';
import type { CartItemEntity } from '@/types/ordersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type CartItemUpdateVariables = {
  cart_item_id: number;
  quantity: number;
};

const useCartItemUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ cart_item_id, quantity }: CartItemUpdateVariables) =>
      patchCartItemQuantity(cart_item_id, { quantity }),

    onMutate: async (variables: CartItemUpdateVariables) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY.CART });

      const previousCart = queryClient.getQueryData<CartItemEntity[]>(QUERY_KEY.CART);

      queryClient.setQueryData<CartItemEntity[]>(QUERY_KEY.CART, (old) => {
        if (!old) return [];

        if (variables.quantity === 0) {
          return old.filter((item) => item.cart_item_id !== variables.cart_item_id);
        }

        return old.map((item) =>
          item.cart_item_id === variables.cart_item_id
            ? {
                ...item,
                quantity: variables.quantity,
                total_price: item.price * variables.quantity,
              }
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

export default useCartItemUpdateMutation;
