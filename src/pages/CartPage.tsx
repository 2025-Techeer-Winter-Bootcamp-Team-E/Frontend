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
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-275 px-6 py-20 md:px-10">
        <div className="mb-4 flex items-baseline gap-3">
          <h1 className="text-[36px] font-bold tracking-tight text-[#1d1d1f]">장바구니</h1>
          <span className="text-[19px] font-medium text-[#86868b] tabular-nums">
            {cartItems.length}
          </span>
        </div>

        <div className="flex flex-col items-start gap-10 lg:flex-row">
          <div className="w-full lg:flex-1">
            <div className="mb-4 flex items-center px-4 py-2">
              <Checkbox
                checked={allSelected}
                onChange={toggleAll}
                label={`전체 선택 (${selectedItems.length}/${cartItems.length})`}
              />
            </div>
            <div className="space-y-3">
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
          </div>
          <div className="w-full lg:sticky lg:top-10 lg:w-90">
            <PriceSummaryCard
              availableTokens={availableTokens}
              summary={summary}
              selectedItemsCount={selectedItems.length}
              onCheckout={() => {
                if (selectedItems.length === 0) return alert('상품을 선택해주세요.');
                navigate(PATH.CHECKOUT, { state: { mode: 'cart', selectedItems } });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
