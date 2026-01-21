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
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
        {/* 헤더 섹션: 숫자 배지를 무채색 실버 톤으로 변경 */}
        <div className="mb-12 flex items-baseline gap-4">
          <h1 className="text-[40px] font-semibold tracking-tight text-[#1d1d1f]">장바구니</h1>
          <span className="text-[20px] font-medium text-[#86868b]">{cartItems.length}개 상품</span>
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-row">
          {/* 상품 리스트 영역 */}
          <div className="w-full lg:flex-1">
            <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-black/[0.02] bg-white px-6 py-4 shadow-sm">
              <Checkbox
                checked={allSelected}
                onChange={toggleAll}
                label={`전체 선택 (${selectedItems.length}/${cartItems.length})`}
              />
            </div>

            <div className="space-y-4">
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

          {/* 우측 결제 요약 카드 (상단 고정) */}
          <div className="w-full lg:sticky lg:top-12 lg:w-[380px]">
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
