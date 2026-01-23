import React from 'react';
import { TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const TimerSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-[#F5F5F7] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 flex flex-col gap-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              타이밍이 전부입니다.
              <span className="text-gray-400">AI가 그 순간을 포착합니다.</span>
            </h2>
            <p className="text-xl leading-relaxed font-medium text-gray-500">
              가장 합리적인 구매 시점, '골든 타임'을 놓치지 마세요.
            </p>
          </motion.div>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[48px] border border-gray-100 bg-white shadow-2xl"
          >
            <div className="p-8 md:p-16">
              <div className="mb-12 flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-500">
                    <TrendingDown className="h-4 w-4" />
                    <span>가격 하락 감지</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Current Status</div>
                  <div className="text-xl font-bold text-indigo-600">Golden Time</div>
                </div>
              </div>
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300">
                  <div className="border-b border-gray-100 pb-2">High</div>
                  <div className="border-b border-gray-100 pb-2">Avg</div>
                  <div className="border-b border-gray-100 pb-2">Low</div>
                </div>
                <svg
                  className="absolute inset-0 h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,50 C100,50 150,80 250,80 C350,80 400,40 500,40 C600,40 700,180 800,200 C900,220 1000,220 1200,220"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E0E7FF" />
                      <stop offset="50%" stopColor="#818CF8" />
                      <stop offset="100%" stopColor="#4F46E5" />
                    </linearGradient>
                  </defs>
                </svg>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5, type: 'spring' }}
                  className="absolute right-[20%] bottom-[10%] translate-x-1/2 translate-y-1/2 transform"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-indigo-600"></span>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-lg bg-black px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white shadow-lg">
                      구매 적기
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t from-gray-50/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimerSection;
