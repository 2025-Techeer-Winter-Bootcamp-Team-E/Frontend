import PriceSummaryRow from '@/components/checkOutPage/PriceSummaryRow';

const PaymentSummary = ({
  summary,
  agreed,
  onAgreeChange,
  onCheckout,
  isLoading = false,
}: {
  summary: {
    subtotal: number;
    discount: number;
    bonus: number;
    total: number;
  };
  agreed: boolean;
  onAgreeChange: (value: boolean) => void;
  onCheckout: () => void;
  isLoading?: boolean;
}) => {
  // '보너스 혜택'은 현재 정책상 0으로 고정하고,
  // '결제 예정 금액'이 이를 올바르게 반영하도록 직접 계산합니다.
  const finalBonus = 0;
  const finalTotal = summary.subtotal - summary.discount - finalBonus;

  return (
    <div className="sticky top-12 flex flex-col gap-4">
      <div className="overflow-hidden rounded-4xl border border-black/2 bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
        <h3 className="mb-6 text-[17px] font-bold tracking-tight text-[#1d1d1f]">최종 결제 금액</h3>

        <div className="space-y-1">
          <PriceSummaryRow label="상품 금액" amount={summary.subtotal} />
          <PriceSummaryRow label="할인 금액" amount={summary.discount} isDiscount />
          <PriceSummaryRow label="보너스 혜택" amount={finalBonus} isDiscount />
          <PriceSummaryRow label="결제 예정 금액" amount={finalTotal} highlight />
        </div>

        <div className="mt-8">
          <label className="group mb-6 flex cursor-pointer items-start gap-3">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => onAgreeChange(e.target.checked)}
                disabled={isLoading}
                className="sr-only"
              />
              <div
                className={`flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-all ${
                  agreed
                    ? 'border-[#1d1d1f] bg-[#1d1d1f]'
                    : 'border-[#d2d2d7] bg-white group-hover:border-[#86868b]'
                }`}
              >
                {agreed && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
              </div>
            </div>
            <span className="text-[12px] leading-relaxed font-medium text-[#86868b]">
              주문 내용을 확인하였으며, 결제 약관에 동의합니다.
            </span>
          </label>

          <button
            onClick={onCheckout}
            disabled={!agreed || isLoading}
            className={`w-full rounded-2xl py-4 text-[16px] font-semibold text-white transition-all duration-300 ${
              agreed && !isLoading
                ? 'bg-[#1d1d1f] shadow-lg shadow-black/10 hover:bg-[#424245]'
                : 'cursor-not-allowed bg-[#d2d2d7]'
            }`}
          >
            {isLoading ? '처리 중...' : `${finalTotal.toLocaleString()} TK 결제하기`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
