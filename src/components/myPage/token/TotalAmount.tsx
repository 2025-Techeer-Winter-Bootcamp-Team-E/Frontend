interface TotalAmountProps {
  amount: number;
}

const TotalAmount = ({ amount }: TotalAmountProps) => {
  return (
    <div className="flex items-center justify-between border-t border-black/5 pt-10 pb-4">
      <span className="text-[17px] font-medium tracking-tight text-[#86868b]">최종 결제 금액</span>
      <div className="flex items-baseline text-right">
        <span className="text-[40px] font-bold tracking-tighter text-[#1d1d1f] tabular-nums">
          {amount.toLocaleString()}
        </span>
        <span className="ml-1.5 text-[20px] font-semibold text-[#1d1d1f]">원</span>
      </div>
    </div>
  );
};

export default TotalAmount;
