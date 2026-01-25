import { CreditCard, Building2 } from 'lucide-react';
import TokenCard from './TokenCard';
import PaymentMethodCard from './PaymentMethodCard';
import TotalAmount from './TotalAmount';
import ChargeButton from './ChargeButton';
import kakaoImage from '@/assets/kakao.png';
import naverImage from '@/assets/naver.png';

const tokenOptions = [
  { amount: 1000, price: 1000, isRecommended: false, isPopular: false },
  { amount: 5000, price: 5000, isRecommended: false, isPopular: false },
  { amount: 10000, price: 10000, isRecommended: false, isPopular: true },
  { amount: 50000, price: 50000, isRecommended: false, isPopular: false },
  { amount: 100000, price: 100000, isRecommended: true, isPopular: false },
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

interface TokenChargeFormProps {
  selectedTokenAmount: number | null;
  selectedPaymentMethod: string | null;
  onSelectToken: (amount: number | null) => void;
  onSelectPaymentMethod: (method: string | null) => void;
  onCharge: () => void;
}

const TokenChargeForm = ({
  selectedTokenAmount,
  selectedPaymentMethod,
  onSelectToken,
  onSelectPaymentMethod,
  onCharge,
}: TokenChargeFormProps) => {
  const selectedOption = tokenOptions.find((opt) => opt.amount === selectedTokenAmount);
  const isFormValid = selectedTokenAmount !== null && selectedPaymentMethod !== null;

  return (
    <div>
      <div className="mb-10">
        <h3 className="mb-5 text-lg font-semibold tracking-tight text-[#1d1d1f]">충전 금액 선택</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {tokenOptions.map((option) => (
            <TokenCard
              key={option.amount}
              amount={option.amount}
              price={option.price}
              isPopular={option.isPopular}
              isRecommended={option.isRecommended}
              isSelected={selectedTokenAmount === option.amount}
              onClick={() => onSelectToken(option.amount)}
            />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="mb-5 text-lg font-semibold tracking-tight text-[#1d1d1f]">결제 수단 선택</h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              {...method}
              iconBgColor={
                method.id === 'kakao' || method.id === 'naver' ? 'bg-gray-50' : method.iconBgColor
              }
              isSelected={selectedPaymentMethod === method.id}
              onClick={() => onSelectPaymentMethod(method.id)}
            />
          ))}
        </div>
      </div>
      <TotalAmount amount={selectedOption ? selectedOption.price : 0} />
      <div className="mt-8">
        <ChargeButton onClick={onCharge} disabled={!isFormValid} />
        <p className="mt-4 text-center text-[0.75rem] leading-relaxed font-medium tracking-tight text-gray-400">
          충전 시 이용약관 및 유료서비스 이용약관 동의로 간주됩니다.
        </p>
      </div>
    </div>
  );
};

export default TokenChargeForm;
