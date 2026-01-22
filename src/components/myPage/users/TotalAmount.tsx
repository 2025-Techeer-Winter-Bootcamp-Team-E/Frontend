interface TotalAmountProps {
  amount: number;
}

const TotalAmount = ({ amount }: TotalAmountProps) => {
  return (
    // 보더: 실선 대신 아주 연한 블랙 투명도 사용
    <div className="flex items-center justify-between border-t border-black/[0.05] pt-10 pb-4">
      <span className="text-[17px] font-medium tracking-tight text-[#86868b]">최종 결제 금액</span>
      <div className="flex items-baseline text-right">
        {/* 금액: Tabular numbers를 적용하여 숫자가 바뀌어도 너비가 일정하게 유지 */}
        <span className="text-[40px] font-bold tracking-tighter text-[#1d1d1f] tabular-nums">
          {amount.toLocaleString()}
        </span>
        <span className="ml-1.5 text-[20px] font-semibold text-[#1d1d1f]">원</span>
      </div>
    </div>
  );
};

export default TotalAmount;
