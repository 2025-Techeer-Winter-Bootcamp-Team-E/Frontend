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
  const amountColor = isDiscount ? 'text-[#86868b]' : 'text-[#1d1d1f]';
  const labelColor = isTotal ? 'text-[#1d1d1f]' : 'text-[#86868b]';

  const labelClass = isTotal ? 'font-semibold text-[16px]' : 'font-medium text-[14px]';
  const amountClass = isTotal
    ? 'text-[24px] font-bold tracking-tighter'
    : 'text-[15px] font-semibold tracking-tight';

  return (
    <div
      className={`flex items-baseline justify-between ${isTotal ? 'mt-4 border-t border-[#f5f5f7] pt-5' : 'py-1.5'}`}
    >
      <span className={`${labelColor} ${labelClass} tracking-tight`}>{label}</span>
      <span className={`${amountColor} ${amountClass}`}>
        {isDiscount && amount > 0 ? '− ' : ''}
        {amount.toLocaleString()}
        <span className={`${isTotal ? 'ml-1 text-[16px]' : 'ml-0.5 text-[12px]'} font-medium`}>
          {' '}
          TK
        </span>
      </span>
    </div>
  );
};

export default PriceSummaryRow;
