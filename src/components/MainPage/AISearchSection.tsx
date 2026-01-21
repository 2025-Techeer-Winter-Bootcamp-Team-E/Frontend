import React from 'react';
import { Sparkles, BarChart3, Zap, ShieldCheck, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const AISearchSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 헤더 섹션: 중앙 집중 레이아웃 */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 py-1.5 text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            <Sparkles className="h-3 w-3 text-indigo-500" />
            <span>AI-Driven Architecture</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
          >
            단순 검색을 넘어, <br />
            <span className="text-gray-400">의도를 해석합니다.</span>
          </motion.h2>
        </div>

        {/* 그리드 레이아웃: 이미지 대신 텍스트 기반의 세련된 카드 배치 */}
        <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* 메인 카드 (좌측 2칸 차지) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col justify-between rounded-[40px] bg-[#F5F5F7] p-10 md:col-span-2 lg:p-14"
          >
            <div className="max-w-md">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 lg:text-3xl">
                대규모 언어 모델이 제안하는 <br />
                최적의 쇼핑 전략
              </h3>
              <p className="text-lg leading-relaxed text-gray-500">
                단순 키워드 매칭은 이제 그만하세요. AI가 실시간 시장 가격, 재고 상황, 유저 리뷰를
                통합 분석하여 가장 논리적인 구매 가이드를 생성합니다.
              </p>
            </div>

            {/* 가상 검색창 시각화 (미니멀) */}
            <div className="mt-12 overflow-hidden rounded-2xl border border-white bg-white/50 p-2 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-3 px-4 py-3">
                <Search className="h-5 w-5 text-indigo-500" />
                <span className="text-sm font-medium text-gray-400">
                  영상 편집용 가성비 모니터 조합 알려줘...
                </span>
              </div>
            </div>
          </motion.div>

          {/* 우측 작은 카드들 */}
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                <BarChart3 className="h-5 w-5 text-indigo-600" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-900">실시간 데이터 분석</h4>
              <p className="text-sm leading-relaxed text-gray-500">
                전국 판매처의 가격 데이터를 1분 단위로 수집합니다.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                <Zap className="h-5 w-5 text-purple-600" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-900">즉각적인 솔루션</h4>
              <p className="text-sm leading-relaxed text-gray-500">
                복잡한 견적도 단 3초 만에 완벽한 보고서로 출력합니다.
              </p>
            </motion.div>
          </div>

          {/* 하단 긴 카드 (전체 가로) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-gray-100 bg-white p-8 md:col-span-3 md:flex-row md:items-center lg:p-10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">신뢰할 수 있는 소스</h4>
                <p className="mt-1 text-sm text-gray-500">
                  모든 분석 데이터는 검증된 공식 총판 및 파트너사의 정보만을 기반으로 합니다.
                </p>
              </div>
            </div>
            <button className="rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-black active:scale-95">
              AI 리서치 시작하기
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISearchSection;
