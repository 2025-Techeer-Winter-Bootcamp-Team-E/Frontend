import PriceSummaryRow from '@/components/cartPage/PriceSummaryRow';

// 가격 요약 카드 컴포넌트
const PriceSummaryCard = ({
  summary,
  selectedItemsCount,
  onCheckout,
}: {
  summary: {
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
    availableTokens: number;
  };
  selectedItemsCount: number;
  onCheckout: () => void;
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
          <button
            onClick={onCheckout}
            disabled={selectedItemsCount === 0}
            className={`w-full rounded-xl py-4 text-lg font-black text-white shadow-lg transition-colors ${
              selectedItemsCount === 0
                ? 'cursor-not-allowed bg-gray-300'
                : 'bg-[#0D9DDA] hover:bg-[#0b8bc4]'
            }`}
          >
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
export default PriceSummaryCard;
