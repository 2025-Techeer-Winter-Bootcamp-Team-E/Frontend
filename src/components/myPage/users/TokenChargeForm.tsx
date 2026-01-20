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

  // 토큰 옵션
  const tokenOptions = [
    { amount: 100, price: 1100, isRecommended: false, isPopular: false },
    { amount: 500, price: 5500, isRecommended: false, isPopular: false },
    { amount: 1000, price: 11000, isRecommended: false, isPopular: true },
    { amount: 5000, price: 55000, isRecommended: false, isPopular: false },
    { amount: 10000, price: 110000, isRecommended: true, isPopular: false },
  ];

  // 결제 수단 옵션
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

  // 🔥 충전 핸들러 (mutation 연결)
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
    <div className="max-w-4xl">
      <p className="mb-6 text-sm text-gray-600">
        AI 구매 가이드 및 상세 가격 분석을 위한 토큰을 충전하세요.
      </p>

      {/* 현재 잔액 */}
      <div className="mb-8 rounded-lg bg-gray-50 p-4">
        <div className="mb-1 text-sm text-gray-600">내 토큰 잔액</div>
        <div className="text-3xl font-bold text-gray-900">
          {currentToken?.current_tokens ?? 0} <span className="text-xl">TK</span>
        </div>
      </div>

      {/* 충전 금액 선택 */}
      <div className="mb-8">
        <SectionHeader title="충전 금액 선택" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
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

      {/* 결제 수단 선택 */}
      <div className="mb-8">
        <SectionHeader title="결제 수단 선택" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              icon={method.icon}
              label={method.label}
              iconBgColor={method.iconBgColor}
              iconColor={method.iconColor}
              imageSrc={method.imageSrc}
              isSelected={selectedPaymentMethod === method.id}
              onClick={() => setSelectedPaymentMethod(method.id)}
            />
          ))}
        </div>
      </div>

      {/* 총 결제 금액 */}
      <TotalAmount amount={selectedOption ? selectedOption.price : 0} />

      {/* 충전 버튼 */}
      <div className="mt-6">
        <ChargeButton onClick={handleCharge} disabled={!isFormValid || isPending} />
        <InfoMessage>
          충전 시 이용약관 및 유료서비스 이용약관에 동의하는 것으로 간주합니다.
        </InfoMessage>
      </div>
    </div>
  );
};

export default TokenChargeForm;
