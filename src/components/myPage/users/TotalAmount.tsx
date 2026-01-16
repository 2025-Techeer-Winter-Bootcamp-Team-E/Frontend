interface TotalAmountProps {
  amount: number;
}

const TotalAmount = ({ amount }: TotalAmountProps) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 py-4">
      <span className="text-sm font-medium text-gray-600">최종 결제 금액</span>
      <span className="text-2xl font-bold text-blue-500">{amount.toLocaleString()}원</span>
    </div>
  );
};

export default TotalAmount;
