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
  return (
    <div className="sticky top-4 flex flex-col gap-4">
      <div className="overflow-hidden rounded-2xl border border-[#F3F4F6] bg-white shadow-sm">
        <div className="border-b border-[#F9FAFB] px-6 py-6">
          <h3 className="text-lg font-bold text-[#111827]">최종 결제 금액</h3>
        </div>
        <div className="border-t border-[#F9FAFB] px-6 pt-4 pb-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-base font-bold text-[#111827]">결제 예정 금액</span>
            <span className="text-2xl font-black text-[#0D9DDA]">
              {summary.total.toLocaleString()} TK
            </span>
          </div>
          <label className="mb-6 flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => onAgreeChange(e.target.checked)}
              disabled={isLoading}
              className="mt-0.5 h-4 w-4 rounded border-[#E5E7EB] text-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 disabled:opacity-50"
            />
            <span className="text-xs leading-3.75 font-light text-[#6B7280]">
              주문 내역을 확인하였으며, 전용 토큰 결제 시스템 이용 약관에
              <br />
              동의합니다.
            </span>
          </label>
          <button
            onClick={onCheckout}
            disabled={!agreed || isLoading}
            className={`w-full rounded-xl py-4 text-lg font-black text-white shadow-lg transition-colors ${
              agreed && !isLoading
                ? 'bg-[#0D9DDA] hover:bg-[#0b8bc4]'
                : 'cursor-not-allowed bg-gray-300'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                결제 진행 중...
              </span>
            ) : (
              `${summary.total.toLocaleString()} TK 결제하기`
            )}
          </button>
        </div>
        <div className="bg-[#F9FAFB] px-4 py-4">
          <p className="text-center text-[11px] leading-[17.88px] font-light text-[#6B7280]">
            ComPare 토큰 결제는 안전한 블록체인 기반 시스템을 사용하여 실시간으로
            <br />
            처리됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
