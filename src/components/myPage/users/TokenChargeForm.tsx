import { useState } from 'react';
import { CreditCard, Building2 } from 'lucide-react';
import TokenCard from './TokenCard';
import PaymentMethodCard from './PaymentMethodCard';
import SectionHeader from './SectionHeader';
import TotalAmount from './TotalAmount';
import ChargeButton from './ChargeButton';
import InfoMessage from './InfoMessage';
import kakaoImage from '@/assets/kakao.png';
import naverImage from '@/assets/naver.png';
import useTokenBalanceQuery from '@/hooks/queries/useTokenBalanceQuery';
import useTokenChargeMutation from '@/hooks/mutations/useTokenChargeMutation';

const TokenChargeForm = () => {
  const [selectedTokenAmount, setSelectedTokenAmount] = useState<number | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const { data: currentToken } = useTokenBalanceQuery();
  const { mutate: chargeToken, isPending } = useTokenChargeMutation();

  const tokenOptions = [
    { amount: 100, price: 1100, isRecommended: false, isPopular: false },
    { amount: 500, price: 5500, isRecommended: false, isPopular: false },
    { amount: 1000, price: 11000, isRecommended: false, isPopular: true },
    { amount: 5000, price: 55000, isRecommended: false, isPopular: false },
    { amount: 10000, price: 110000, isRecommended: true, isPopular: false },
  ];

  const paymentMethods = [
    {
      id: 'card',
      label: '신용/체크카드',
      icon: CreditCard,
      iconBgColor: 'bg-gray-100',
      iconColor: 'text-gray-600',
    },
    {
      id: 'bank',
      label: '무통장입금',
      icon: Building2,
      iconBgColor: 'bg-gray-100',
      iconColor: 'text-gray-600',
    },
    {
      id: 'kakao',
      label: '카카오페이',
      iconBgColor: 'bg-[#FEE500]',
      imageSrc: kakaoImage,
    },
    {
      id: 'naver',
      label: '네이버페이',
      iconBgColor: 'bg-[#03C75A]',
      imageSrc: naverImage,
    },
  ];

  const handleCharge = () => {
    if (!selectedTokenAmount || !selectedPaymentMethod) return;

    chargeToken(
      {
        recharge_token: selectedTokenAmount,
      },
      {
        onSuccess: () => {
          alert('토큰 충전이 완료되었습니다!');
          setSelectedTokenAmount(null);
          setSelectedPaymentMethod(null);
        },
      },
    );
  };

  const selectedOption = tokenOptions.find((opt) => opt.amount === selectedTokenAmount);
  const isFormValid = selectedTokenAmount !== null && selectedPaymentMethod !== null;

  return (
    <div className="mt-8">
      {/* 내 토큰 잔액 섹션 - Glassmorphism 스타일 */}
      <div className="mb-10 rounded-2xl border border-gray-100 bg-[#f5f5f7] p-6">
        <div className="mb-1 text-xs font-semibold tracking-wider text-[#86868b] uppercase">
          My Balance
        </div>
        <div className="text-4xl font-semibold tracking-tight text-[#1d1d1f]">
          {currentToken?.current_tokens ?? 0}{' '}
          <span className="text-xl font-medium text-[#86868b]">TK</span>
        </div>
      </div>

      <div className="mb-10">
        <SectionHeader title="충전 금액 선택" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {tokenOptions.map((option) => (
            <TokenCard
              key={option.amount}
              amount={option.amount}
              price={option.price}
              isPopular={option.isPopular}
              isRecommended={option.isRecommended}
              isSelected={selectedTokenAmount === option.amount}
              onClick={() => setSelectedTokenAmount(option.amount)}
            />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <SectionHeader title="결제 수단 선택" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              {...method}
              // 브랜드 컬러 강제 중화 (애플 감성 유지)
              iconBgColor={
                method.id === 'kakao' || method.id === 'naver' ? 'bg-gray-50' : method.iconBgColor
              }
              isSelected={selectedPaymentMethod === method.id}
              onClick={() => setSelectedPaymentMethod(method.id)}
            />
          ))}
        </div>
      </div>

      <TotalAmount amount={selectedOption ? selectedOption.price : 0} />

      <div className="mt-8">
        <ChargeButton onClick={handleCharge} disabled={!isFormValid || isPending} />
        <InfoMessage>충전 시 이용약관 및 유료서비스 이용약관 동의로 간주됩니다.</InfoMessage>
      </div>
    </div>
  );
};

export default TokenChargeForm;
