import React from 'react';
import { motion } from 'framer-motion';
import MainSearchBar from './MainSearchBar';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F7] pt-33 pb-34">
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 타이포그래피: Jet Black 컬러와 더 좁은 자간 적용 */}
          <h1 className="mb-6 text-[48px] leading-[1.05] font-semibold tracking-tighter text-[#1d1d1f] md:text-[80px]">
            Pro Intelligence.
            <br />
            {/* 채도 높은 그라디언트 제거 -> 텍스트 자체의 무게감 강조 */}
            <span className="text-[#1d1d1f]">For Your Shopping.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }} // 스케일 변화를 미세하게 조정하여 차분하게
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl" // 검색바 너비 제한으로 정갈하게 배치
        >
          <MainSearchBar />
        </motion.div>

        {/* 설명 문구: 텍스트 크기를 약간 줄이고 줄간격과 가독성 최적화 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="mx-auto mt-10 max-w-2xl text-[19px] leading-relaxed font-medium text-[#86868b] md:text-[21px]">
            AI가 설계하는 완전히 새로운 쇼핑 경험. <br className="hidden md:block" />
            <span className="text-[#1d1d1f]/80">데이터에 기반한 압도적인 분석을 만나보세요.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
