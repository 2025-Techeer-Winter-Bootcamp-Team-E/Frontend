import React from 'react';
import { motion } from 'framer-motion';
import MainSearchBar from '@/components/mainPage/MainSearchBar';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F7] pt-33 pb-34">
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="mb-6 text-[48px] leading-[1.05] font-semibold tracking-tighter text-[#1d1d1f] md:text-[80px]">
            Pro Intelligence.
            <br />
            <span className="text-[#1d1d1f]">For Your Shopping.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl"
        >
          <MainSearchBar />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="mx-auto mt-10 max-w-2xl text-[19px] leading-relaxed font-medium text-[#86868b] md:text-[21px]">
            찾던 상품, 그 이상의 발견. <br className="hidden md:block" />
            <span className="text-[#1d1d1f]/80">당신의 키워드에서 최적의 선택을 찾아보세요.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
