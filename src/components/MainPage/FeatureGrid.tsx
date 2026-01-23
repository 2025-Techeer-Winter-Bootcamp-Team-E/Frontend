import React from 'react';
import { CreditCard, Wallet, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: CreditCard,
    step: 'STEP 01',
    title: '포인트 관리',
    desc: 'COMPARE 전용 토큰으로 주문을 간편하게 생성합니다.',
  },
  {
    icon: Wallet,
    step: 'STEP 02',
    title: '판매자 승인',
    desc: '재고 확인 후 즉시 주문이 처리되어 결제됩니다.',
  },
  {
    icon: TrendingUp,
    step: 'STEP 03',
    title: '배송 트래킹',
    desc: '실시간으로 업데이트되는 트래킹 정보를 제공합니다.',
  },
  {
    icon: Award,
    step: 'STEP 04',
    title: '정산 완료',
    desc: '구매 확정 시 안전하게 정산이 종료됩니다.',
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Unified Transaction.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            결제부터 배송, 정산까지. <br />
            하나의 플랫폼에서 완성되는 완벽한 흐름.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-4xl bg-[#F5F5F7] p-8 transition-all duration-300 hover:bg-[#E8E8ED]"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                  <feature.icon className="h-6 w-6 text-gray-900" />
                </div>
                <div className="mb-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
                  {feature.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed font-medium text-gray-500">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
