import TokenChargeForm from './TokenChargeForm';

const TokenChargePage = () => {
  const handleTokenCharge = (chargeData: {
    tokenAmount: number;
    price: number;
    paymentMethod: string;
  }) => {
    console.log('토큰 충전 정보:', chargeData);
    alert(`${chargeData.tokenAmount} TK를 ${chargeData.price.toLocaleString()}원에 충전합니다.`);
  };

  return (
    <div className="rounded-lg bg-white p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">토큰 충전</h2>

      <TokenChargeForm onCharge={handleTokenCharge} />
    </div>
  );
};

export default TokenChargePage;
