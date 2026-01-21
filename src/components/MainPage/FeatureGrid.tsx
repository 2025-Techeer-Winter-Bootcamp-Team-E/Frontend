import React from 'react';
import { CreditCard, Wallet, TrendingUp, Award } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: CreditCard,
      step: 'STEP 01',
      title: '포인트 관리',
      description: 'COMPARE 전용 토큰으로 주문을 간편하고 안전하게 생성합니다.',
    },
    {
      icon: Wallet,
      step: 'STEP 02',
      title: '판매자 승인',
      description: '재고 확인 후 즉시 주문이 처리되어 결제 진행까지 연결됩니다.',
    },
    {
      icon: TrendingUp,
      step: 'STEP 03',
      title: '배송 트래킹',
      description: '실시간으로 업데이트되는 해외 배송 트래킹 정보를 제공합니다.',
    },
    {
      icon: Award,
      step: 'STEP 04',
      title: '정산 완료',
      description: '구매 확정 시 안전하게 정산이 종료되도록 전체 프로세스를 관리합니다.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-xs font-semibold tracking-[0.2em] text-cyan-500 uppercase">
              UNIFIED TRANSACTION
            </span>
            <span className="h-px w-6 bg-cyan-200" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">통합 결제 시스템</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            COMPARE 전용 토큰을 통해 전 세계 판매자와 투명하게 거래하세요. 결제부터 배송 트래킹,
            정산까지 모든 과정을 하나의 통합 플랫폼에서 안전하게 관리할 수 있습니다.
          </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute top-16 right-0 left-0 hidden h-px border-t border-dashed border-cyan-200 md:block" />
          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                step={feature.step}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
