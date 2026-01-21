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
    <div
      className={`flex items-baseline justify-between ${highlight ? 'mt-4 border-t border-[#f5f5f7] pt-5' : 'py-2'}`}
    >
      <span
        className={`text-[14px] ${highlight ? 'font-semibold text-[#1d1d1f]' : 'font-medium text-[#86868b]'}`}
      >
        {label}
      </span>
      <span
        className={`tracking-tight ${highlight ? 'text-[24px] font-bold text-[#1d1d1f]' : isDiscount ? 'text-[#86868b]' : 'font-semibold text-[#1d1d1f]'}`}
      >
        {isDiscount && amount > 0 ? '− ' : ''}
        {amount.toLocaleString()}
        <span className={`${highlight ? 'ml-1 text-[16px]' : 'ml-0.5 text-[12px]'} font-medium`}>
          {' '}
          TK
        </span>
      </span>
    </div>
  );
};
export default PriceSummaryRow;
