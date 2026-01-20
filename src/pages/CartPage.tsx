import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/routes/path';
import Checkbox from '@/components/cartPage/Checkbox';
import CartItemComponent from '@/components/cartPage/CartItemComponent';
import PriceSummaryCard from '@/components/cartPage/PriceSummaryCard';
import useCartQuery from '@/hooks/queries/useCartQuery';
import useCartItemPostMutation from '@/hooks/mutations/useCartItemPostMutation';
import useCartItemDeleteMutation from '@/hooks/mutations/useCartItemDeleteMutation';

type CartItem = {
  id: number;
  product_id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

const CartPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useCartQuery();

  const cartItems = useMemo(() => {
    if (!data) return [];

    return data.map((item) => ({
      id: item.cart_item_id,
      product_id: item.product_code,
      name: item.product_name,
      image: item.product_resentative_image_url,
      quantity: item.quantity,
      price: item.price,
    }));
  }, [data]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // cartItems가 로드되면 전체 선택 (useState lazy initialization 사용)
  const [isInitialized, setIsInitialized] = useState(false);

  if (!isInitialized && cartItems.length > 0) {
    setSelectedItems(cartItems.map((item) => item.id));
    setIsInitialized(true);
  }

  // cartItems가 변경되면 유효한 선택만 유지
  const validSelectedItems = useMemo(() => {
    const currentIds = cartItems.map((item) => item.id);
    return selectedItems.filter((id) => currentIds.includes(id));
  }, [cartItems, selectedItems]);

  const handleSelectAll = () => {
    if (validSelectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const handleToggleItem = (id: number) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };

  const handleRemoveItem = (cartItemId: number) => {
    setSelectedItems((prev) => prev.filter((id) => id !== cartItemId));
  };

  const calculateSummary = () => {
    const selectedCartItems = cartItems.filter((item) => validSelectedItems.includes(item.id));
    const subtotal = selectedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = selectedCartItems.length > 0 ? 3000 : 0;

    return {
      subtotal,
      discount: 0,
      shipping,
      total: subtotal + shipping,
      availableTokens: 5420000,
    };
  };

  const summary = calculateSummary();
  const allSelected = validSelectedItems.length === cartItems.length && cartItems.length > 0;

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="flex items-center justify-center py-20">
          <p className="text-[#6B7280]">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-8 py-12">
      <div className="mb-8 flex items-center gap-2">
        <h1 className="text-[30px] leading-9 font-black text-[#111827]">장바구니</h1>
        <span className="rounded-full bg-[rgba(13,157,218,0.1)] px-3 py-1 text-sm font-bold text-[#0D9DDA]">
          {cartItems.length}
        </span>
      </div>

      <div className="flex items-start gap-8">
        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-center justify-between rounded-xl border border-[#F3F4F6] bg-white px-4 py-4">
            <Checkbox
              checked={allSelected}
              onChange={handleSelectAll}
              label={`전체선택 (${validSelectedItems.length}/${cartItems.length})`}
            />
          </div>

          {cartItems.length === 0 ? (
            <div className="rounded-2xl border border-[#F3F4F6] bg-white p-12 text-center">
              <p className="text-[#6B7280]">장바구니가 비어있습니다.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItemWrapper
                key={item.id}
                item={item}
                isSelected={validSelectedItems.includes(item.id)}
                onToggle={() => handleToggleItem(item.id)}
                onRemoveSuccess={() => handleRemoveItem(item.id)}
              />
            ))
          )}
        </div>

        <div className="w-[384px] shrink-0">
          <PriceSummaryCard
            summary={summary}
            selectedItemsCount={validSelectedItems.length}
            onCheckout={() => {
              if (validSelectedItems.length === 0) {
                alert('결제할 상품을 선택해주세요.');
                return;
              }
              navigate(PATH.CHECKOUT, {
                state: { selectedItems: validSelectedItems },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

// 각 아이템별로 mutation hook을 사용하는 래퍼 컴포넌트
const CartItemWrapper = ({
  item,
  isSelected,
  onToggle,
  onRemoveSuccess,
}: {
  item: CartItem;
  isSelected: boolean;
  onToggle: () => void;
  onRemoveSuccess: () => void;
}) => {
  const updateItemMutation = useCartItemPostMutation();
  const deleteItemMutation = useCartItemDeleteMutation(item.id);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;

    updateItemMutation.mutate({
      product_code: item.product_id,
      quantity: newQuantity,
    });
  };

  const handleRemove = () => {
    if (confirm('해당 상품을 장바구니에서 삭제하시겠습니까?')) {
      deleteItemMutation.mutate();
      onRemoveSuccess();
    }
  };

  return (
    <CartItemComponent
      item={item}
      isSelected={isSelected}
      onToggle={onToggle}
      onQuantityChange={handleQuantityChange}
      onRemove={handleRemove}
    />
  );
};

export default CartPage;
