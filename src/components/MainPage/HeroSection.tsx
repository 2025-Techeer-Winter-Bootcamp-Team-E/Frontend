import MainSearchBar from '@/components/mainPage/MainSearchBar';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-5xl font-bold md:text-6xl">
          가장 똑똑한 <span className="text-cyan-500">PC 쇼핑</span>
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          복잡한 사양 비교부터 결제 프로세스까지,
          <br />
          인공지능과 토큰 시스템이 결합된 차세대 쇼핑 경험
        </p>

        <MainSearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
