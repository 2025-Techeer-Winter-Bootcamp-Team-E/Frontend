// 가격 요약 행 컴포넌트
const PriceSummaryRow = ({
  label,
  amount,
  highlight = false,
  isDiscount = false,
}: {
  label: string;
  amount: number;
  highlight?: boolean;
  isDiscount?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className={`text-sm ${highlight ? 'font-bold' : 'font-light text-[#6B7280]'}`}>
        {label}
      </span>
      <span
        className={`font-bold ${
          highlight
            ? 'text-2xl font-black text-[#0D9DDA]'
            : isDiscount
              ? 'text-[#EF4444]'
              : 'text-[#111827]'
        }`}
      >
        {isDiscount && amount > 0 ? '-' : ''}
        {amount.toLocaleString()} TK
      </span>
    </div>
  );
};
export default PriceSummaryRow;
