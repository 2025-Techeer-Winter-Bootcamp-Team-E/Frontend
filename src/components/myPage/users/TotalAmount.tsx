interface TotalAmountProps {
  amount: number;
}

const TotalAmount = ({ amount }: TotalAmountProps) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-100 pt-8 pb-2">
      <span className="text-sm font-medium text-[#86868b]">최종 결제 금액</span>
      <div className="text-right">
        <span className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
          {amount.toLocaleString()}
        </span>
        <span className="ml-1 text-lg font-medium text-[#1d1d1f]">원</span>
      </div>
    </div>
  );
};

export default TotalAmount;
