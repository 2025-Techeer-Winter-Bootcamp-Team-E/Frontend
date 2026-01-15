import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          당신의 쇼핑 가치를
          <br />
          AI로 증명하세요.
        </h2>
        <p className="text-lg text-gray-700">
          지금 COMPARE에 가입하고 프리미엄 AI 분석과 함께 웰컴 토큰 혜택을 즉시 확인하세요.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
