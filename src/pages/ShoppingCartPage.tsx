import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import cartData from '@/data/cart.json';

// 이미지 URL (Figma에서 가져온 이미지)
const imgCheck = 'https://www.figma.com/api/mcp/asset/c33b0c9b-46e1-48dc-b76c-d07e7f398c32';
const imgDelete = 'https://www.figma.com/api/mcp/asset/59632db6-e7fe-446e-a330-764c564c6f0f';

// 체크박스 컴포넌트
const Checkbox = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label?: string;
}) => {
  return (
    <label className="group flex cursor-pointer items-center gap-2">
      <div className="relative">
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
        <div
          className={`flex h-[22px] w-[22px] items-center justify-center rounded border transition-colors ${
            checked
              ? 'border-[#0D9DDA] bg-[#0D9DDA]'
              : 'border-gray-300 bg-white group-hover:border-gray-400'
          }`}
        >
          {checked && <img src={imgCheck} alt="check" className="h-5 w-5" />}
        </div>
      </div>
      {label && <span className="text-sm font-medium text-[#111827]">{label}</span>}
    </label>
  );
};

// 수량 조절 컴포넌트
const QuantityControl = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
}: {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
}) => {
  return (
    <div className="flex h-[38px] items-center rounded-lg border border-[#E5E7EB]">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="border-r border-[#E5E7EB] px-3 py-1 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Minus className="h-4 w-4 text-[#6B7280]" />
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-10 border-x-0 border-[#E5E7EB] bg-transparent py-1 text-center text-sm font-bold text-[#111827]"
      />
      <button
        onClick={onIncrease}
        className="border-l border-[#E5E7EB] px-3 py-1 transition-colors hover:bg-gray-100"
      >
        <Plus className="h-4 w-4 text-[#6B7280]" />
      </button>
    </div>
  );
};

// 장바구니 아이템 타입
interface CartItem {
  id: number;
  brand: string;
  name: string;
  image: string | null;
  reward: string;
  price: number;
  originalPrice: number | null;
  quantity: number;
}

// 장바구니 아이템 컴포넌트
const CartItemComponent = ({
  item,
  isSelected,
  onToggle,
  onQuantityChange,
  onRemove,
}: {
  item: CartItem;
  isSelected: boolean;
  onToggle: () => void;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
}) => {
  const handleIncrease = () => {
    onQuantityChange(item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.quantity - 1);
    }
  };

  return (
    <div className="mb-4 rounded-2xl border border-[#F3F4F6] bg-white p-6">
      <div className="flex gap-4">
        {/* 체크박스 */}
        <div className="flex-shrink-0 pt-1">
          <Checkbox checked={isSelected} onChange={onToggle} />
        </div>

        {/* 상품 이미지 */}
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-[#F3F4F6] bg-[#F9FAFB]">
          <img
            src={item.image || '/placeholder.png'}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* 상품 정보 */}
        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex-1">
              <span className="text-xs font-bold text-[#0D9DDA] uppercase">{item.brand}</span>
              <h3 className="mt-1 text-base font-bold text-[#111827]">{item.name}</h3>
              <p className="mt-1 text-sm font-light text-[#6B7280]">배송: {item.reward}</p>
            </div>

            {/* 삭제 버튼 */}
            <button
              onClick={onRemove}
              className="p-2 text-gray-400 transition-colors hover:text-gray-600"
            >
              <img src={imgDelete} alt="delete" className="h-6 w-6 rotate-180" />
            </button>
          </div>

          {/* 수량 조절 및 가격 */}
          <div className="flex items-center justify-between">
            <QuantityControl
              quantity={item.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />

            <div className="text-right">
              <div className="text-xl font-black text-[#111827]">
                {(item.price * item.quantity).toLocaleString()} TK
              </div>
              {item.originalPrice && item.originalPrice > item.price && (
                <div className="text-xs font-light text-[#6B7280] line-through">
                  {(item.originalPrice * item.quantity).toLocaleString()} TK
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 가격 요약 행 컴포넌트
const PriceSummaryRow = ({
  label,
  amount,
  isDiscount = false,
  isTotal = false,
}: {
  label: string;
  amount: number;
  isDiscount?: boolean;
  isTotal?: boolean;
}) => {
  const amountColor = isDiscount ? 'text-[#EF4444]' : isTotal ? 'text-[#0D9DDA]' : 'text-[#111827]';

  const labelClass = isTotal ? 'font-bold' : 'font-light';
  const amountClass = isTotal ? 'text-2xl font-black' : 'font-bold';

  return (
    <div className="flex items-center justify-between py-2">
      <span className={`text-sm text-[#6B7280] ${labelClass}`}>{label}</span>
      <span className={`${amountColor} ${amountClass}`}>
        {isDiscount && amount > 0 ? '-' : ''}
        {amount.toLocaleString()} TK
      </span>
    </div>
  );
};

// 가격 요약 카드 컴포넌트
const PriceSummaryCard = ({
  summary,
}: {
  summary: {
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
    availableTokens: number;
  };
}) => {
  return (
    <div className="sticky top-0 flex flex-col gap-4">
      <div className="overflow-hidden rounded-2xl border border-[#F3F4F6] bg-white shadow-sm">
        {/* 헤더 */}
        <div className="border-b border-[#F9FAFB] px-6 py-6">
          <h3 className="text-lg font-bold text-[#111827]">결제 상세 내역</h3>
        </div>

        {/* 가격 정보 */}
        <div className="space-y-4 px-6 py-6">
          <PriceSummaryRow label="총 상품금액" amount={summary.subtotal} />
          <PriceSummaryRow label="상품 할인" amount={summary.discount} isDiscount />
          <PriceSummaryRow label="총 배송비" amount={summary.shipping} />
        </div>

        {/* 최종 결제 금액 */}
        <div className="border-t border-[#F9FAFB] px-6 pt-6 pb-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-base font-bold text-[#111827]">최종 결제 금액</span>
            <span className="text-2xl font-black text-[#0D9DDA]">
              {summary.total.toLocaleString()} TK
            </span>
          </div>

          {/* 사용 가능 토큰 */}
          <div className="mb-6 rounded-lg border border-[#F3F4F6] bg-[#F9FAFB] p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-light text-[#6B7280]">사용 가능 토큰</span>
              <span className="font-bold text-[#111827]">
                {summary.availableTokens.toLocaleString()} TK
              </span>
            </div>
          </div>

          {/* 결제 버튼 */}
          <button className="w-full rounded-xl bg-[#0D9DDA] py-4 text-lg font-black text-white shadow-lg transition-colors hover:bg-[#0b8bc4]">
            {summary.total.toLocaleString()} TK 결제하기
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="bg-[#F9FAFB] px-4 py-4">
          <p className="text-center text-[11px] leading-[17.88px] font-light text-[#6B7280]">
            모든 결제는 ComPare 전용 토큰(TK)으로만 이루어지며, 외부 쇼핑몰로 이동
            <br />
            없이 즉시 결제가 완료됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

// 메인 장바구니 컴포넌트
const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(cartData as CartItem[]);

  const [selectedItems, setSelectedItems] = useState<number[]>(cartData.map((item) => item.id));

  // 전체 선택/해제
  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  // 개별 선택/해제
  const handleToggleItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // 수량 변경
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)),
    );
  };

  // 아이템 제거
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  };

  // 선택 항목 삭제
  const handleRemoveSelected = () => {
    if (selectedItems.length === 0) return;
    if (window.confirm(`선택한 ${selectedItems.length}개 상품을 삭제하시겠습니까?`)) {
      setCartItems(cartItems.filter((item) => !selectedItems.includes(item.id)));
      setSelectedItems([]);
    }
  };

  // 가격 계산
  const calculateSummary = () => {
    const selectedCartItems = cartItems.filter((item) => selectedItems.includes(item.id));

    const subtotal = selectedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const discount = selectedCartItems.reduce((sum, item) => {
      if (item.originalPrice) {
        return sum + (item.originalPrice - item.price) * item.quantity;
      }
      return sum;
    }, 0);

    const shipping = 3000;
    const total = subtotal - discount + shipping;

    return {
      subtotal,
      discount,
      shipping,
      total,
      availableTokens: 5420000,
    };
  };

  const summary = calculateSummary();
  const allSelected = selectedItems.length === cartItems.length && cartItems.length > 0;

  return (
    <div className="mx-auto max-w-7xl px-8 py-12">
      {/* 헤더 */}
      <div className="mb-8 flex items-center gap-2">
        <h1 className="text-[30px] leading-[36px] font-black text-[#111827]">장바구니</h1>
        <span className="rounded-full bg-[rgba(13,157,218,0.1)] px-3 py-1 text-sm font-bold text-[#0D9DDA]">
          {cartItems.length}
        </span>
      </div>

      <div className="flex items-start gap-8">
        {/* 장바구니 아이템 리스트 */}
        <div className="min-w-0 flex-1">
          {/* 전체 선택 */}
          <div className="mb-4 flex items-center justify-between rounded-xl border border-[#F3F4F6] bg-white px-4 py-4">
            <Checkbox
              checked={allSelected}
              onChange={handleSelectAll}
              label={`전체선택 (${selectedItems.length}/${cartItems.length})`}
            />
            <button
              onClick={handleRemoveSelected}
              disabled={selectedItems.length === 0}
              className="text-sm font-light text-[#6B7280] transition-colors hover:text-[#111827] disabled:cursor-not-allowed disabled:opacity-40"
            >
              선택삭제
            </button>
          </div>

          {/* 아이템 목록 */}
          {cartItems.length === 0 ? (
            <div className="rounded-2xl border border-[#F3F4F6] bg-white p-12 text-center">
              <p className="text-[#6B7280]">장바구니가 비어있습니다.</p>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <CartItemComponent
                  key={item.id}
                  item={item}
                  isSelected={selectedItems.includes(item.id)}
                  onToggle={() => handleToggleItem(item.id)}
                  onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                  onRemove={() => handleRemoveItem(item.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* 가격 요약 */}
        <div className="w-[384px] flex-shrink-0">
          <PriceSummaryCard summary={summary} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
