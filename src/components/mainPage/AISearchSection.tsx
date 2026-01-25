import React from 'react';
import { Search } from 'lucide-react';

const AISearchSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="flex flex-col gap-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            단순 검색을 넘어, <br />
            <span className="text-gray-400">대화로 완성하는 최적의 상품</span>
          </h2>
        </div>
        <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-[40px] bg-[#F5F5F7] p-10 transition-transform hover:-translate-y-1 md:col-span-2 lg:p-14">
            <div className="max-w-md">
              <p className="text-lg leading-relaxed text-gray-500">
                몇 가지 질문만으로
                <br />
                상황에 딱 맞는 상품을 찾아드려요.
              </p>
            </div>
            <div className="mt-12 overflow-hidden rounded-2xl border border-white bg-white/50 p-2 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-3 px-4 py-3">
                <Search className="h-5 w-5 text-indigo-500" />
                <span className="text-sm font-medium text-gray-400">
                  영상 편집용 가성비 모니터 조합 알려줘...
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-4xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <h4 className="mb-2 text-lg font-bold text-gray-900">가격 비교</h4>
              <p className="text-sm leading-relaxed text-gray-500">
                여러 쇼핑몰의 가격을 비교해
                <br />
                가장 합리적인 선택을 도와드려요.{' '}
              </p>
            </div>

            <div className="rounded-4xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <h4 className="mb-2 text-lg font-bold text-gray-900">스펙 비교</h4>
              <p className="text-sm leading-relaxed text-gray-500">
                비슷한 제품들의 스펙 차이를 보여줘요.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 rounded-4xl border border-gray-100 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md md:col-span-3 md:flex-row md:items-center lg:p-10">
            <div className="flex items-center gap-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900">AI 통합 리뷰</h4>
                <p className="mt-1 text-sm text-gray-500">
                  많은 리뷰를 읽지 않아도 핵심만 빠르게 파악할 수 있어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISearchSection;
