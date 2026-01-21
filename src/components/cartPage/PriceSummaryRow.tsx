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

export default PriceSummaryRow;
