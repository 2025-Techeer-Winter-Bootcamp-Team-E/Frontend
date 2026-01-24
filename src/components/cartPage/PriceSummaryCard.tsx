const PriceSummaryCard = ({
  total,
  selectedItemsCount,
  onCheckout,
  availableTokens,
}: {
  total: number;
  selectedItemsCount: number;
  onCheckout: () => void;
  availableTokens: number;
}) => {
  return (
    <div className="sticky top-12 flex flex-col gap-6">
      <div className="overflow-hidden rounded-[2.5rem] border border-black/2 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
        <div className="px-8 py-8">
          <h3 className="mb-8 text-[19px] font-semibold tracking-tight text-[#1d1d1f]">
            결제 내역
          </h3>
          <div className="mt-8 border-t border-[#f5f5f7] pt-8">
            <div className="mb-8 flex items-baseline justify-between">
              <span className="text-base font-semibold text-[#1d1d1f]">최종 결제 금액</span>
              <span className="text-3xl font-bold tracking-tighter text-[#1d1d1f]">
                {total.toLocaleString()} <span className="text-lg font-medium">TK</span>
              </span>
            </div>
            <div className="mb-6 flex items-center justify-between rounded-2xl bg-[#f5f5f7] p-4">
              <span className="text-[13px] font-medium text-[#86868b]">보유 토큰</span>
              <span className="text-[13px] font-bold text-[#1d1d1f]">
                {availableTokens.toLocaleString()} TK
              </span>
            </div>
            <button
              onClick={onCheckout}
              disabled={selectedItemsCount === 0}
              className={`w-full rounded-2xl py-4 text-[16px] font-semibold text-white transition-all duration-300 ${
                selectedItemsCount === 0
                  ? 'cursor-not-allowed bg-[#d2d2d7]'
                  : 'bg-[#1d1d1f] shadow-xl shadow-black/5 hover:bg-[#424245] active:scale-[0.98]'
              }`}
            >
              결제하기
            </button>
          </div>
        </div>
        <div className="border-t border-[#f5f5f7] bg-[#f5f5f7]/50 px-8 py-6">
          <p className="text-center text-[12px] leading-relaxed font-medium text-[#86868b]">
            전용 토큰(TK)으로 외부 결제창 없이 <br /> 즉시 안전하게 결제됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PriceSummaryCard;
