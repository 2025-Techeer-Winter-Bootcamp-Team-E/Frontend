import TokenChargeForm from './TokenChargeForm';

const TokenChargePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f7] px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-white p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1d1d1f]">토큰 충전</h2>
        <TokenChargeForm />
      </div>
    </div>
  );
};

export default TokenChargePage;
