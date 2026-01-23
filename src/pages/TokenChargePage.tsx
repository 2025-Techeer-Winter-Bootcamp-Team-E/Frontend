import MyTokenBalance from '@/components/myPage/token/MyTokenBalance';
import TokenChargeForm from '@/components/myPage/token/TokenChargeForm';
import useTokenChargeMutation from '@/hooks/mutations/useTokenChargeMutation';
import useTokenBalanceQuery from '@/hooks/queries/useTokenBalanceQuery';
import { useState } from 'react';

const TokenChargePage = () => {
  const { data: tokenBalance } = useTokenBalanceQuery();
  const currentToken = tokenBalance?.current_tokens ?? 0;

  const { mutate: chargeToken } = useTokenChargeMutation();
  const [selectedTokenAmount, setSelectedTokenAmount] = useState<number | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const handleCharge = () => {
    if (!selectedTokenAmount || !selectedPaymentMethod) return;

    chargeToken(
      { recharge_token: selectedTokenAmount },
      {
        onSuccess: () => {
          alert('토큰 충전이 완료되었습니다!');
          setSelectedTokenAmount(null);
          setSelectedPaymentMethod(null);
        },
      },
    );
  };

  return (
    <div className="mx-auto max-w-200 rounded-4xl border bg-white p-12">
      <MyTokenBalance currentToken={currentToken} />
      <TokenChargeForm
        selectedTokenAmount={selectedTokenAmount}
        selectedPaymentMethod={selectedPaymentMethod}
        onSelectToken={setSelectedTokenAmount}
        onSelectPaymentMethod={setSelectedPaymentMethod}
        onCharge={handleCharge}
      />
    </div>
  );
};

export default TokenChargePage;
