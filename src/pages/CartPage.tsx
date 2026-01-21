import { useNavigate } from 'react-router-dom';
import { PATH } from '@/routes/path';
import Checkbox from '@/components/cartPage/Checkbox';
import PriceSummaryCard from '@/components/cartPage/PriceSummaryCard';
import useCartQuery from '@/hooks/queries/useCartQuery';
import { useCartItems } from '@/hooks/useCartItems';
import { useCartSelection } from '@/hooks/useCartSelectioin';
import { useCartSummary } from '@/hooks/useCartSummary';
import CartItemWrapper from '@/components/cartPage/CartItemWrapper';
import useTokenBalanceQuery from '@/hooks/queries/useTokenBalanceQuery';

const CartPage = () => {
  const navigate = useNavigate();
  const { data } = useCartQuery();

  const cartItems = useCartItems(data);
  const itemIds = cartItems.map((item) => item.id);

  const { selectedItems, toggleItem, toggleAll, removeItem, allSelected } =
    useCartSelection(itemIds);

  const summary = useCartSummary(cartItems, selectedItems);

  const { data: tokenData } = useTokenBalanceQuery();
  const availableTokens = tokenData?.current_tokens ?? 0;

  return (
    <div className="mx-auto max-w-7xl px-8 py-12">
      <div className="mb-8 flex items-center gap-2">
        <h1 className="text-[30px] font-black text-[#111827]">장바구니</h1>
        <span className="rounded-full bg-[rgba(13,157,218,0.1)] px-3 py-1 text-sm font-bold text-[#0D9DDA]">
          {cartItems.length}
        </span>
      </div>

      <div className="flex items-start gap-8">
        <div className="flex-1">
          <div className="mb-4 rounded-xl border bg-white px-4 py-4">
            <Checkbox
              checked={allSelected}
              onChange={toggleAll}
              label={`전체선택 (${selectedItems.length}/${cartItems.length})`}
            />
          </div>

          {cartItems.map((item) => (
            <CartItemWrapper
              key={item.id}
              item={item}
              isSelected={selectedItems.includes(item.id)}
              onToggle={() => toggleItem(item.id)}
              onRemoveSuccess={() => removeItem(item.id)}
            />
          ))}
        </div>

        <div className="w-[384px]">
          <PriceSummaryCard
            availableTokens={availableTokens}
            summary={summary}
            selectedItemsCount={selectedItems.length}
            onCheckout={() => {
              if (selectedItems.length === 0) return alert('상품을 선택해주세요.');

              navigate(PATH.CHECKOUT, {
                state: { mode: 'cart', selectedItems },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
