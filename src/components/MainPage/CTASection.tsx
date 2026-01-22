import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="bg-black py-32 text-center text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 text-5xl font-semibold tracking-tight md:text-7xl">
            가치의 증명.
            <br />
            <span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
              지금 시작하세요.
            </span>
          </h2>
          <p className="mb-12 text-xl font-medium text-gray-400">
            COMPARE의 프리미엄 AI 분석과 함께
            <br />
            웰컴 토큰 혜택을 즉시 확인해보세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
