import { Star, ChevronRight, Image as ImageIcon } from 'lucide-react';
import ReviewCard from './ReviewCard';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  purchaseOption?: string;
  content: string;
  images: (string | null)[];
  helpful: number;
  comments: number;
}

interface ReviewSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  photoReviews: number;
  activeTab: 'compare' | 'external';
  onTabChange: (tab: 'compare' | 'external') => void;
}

const ReviewSection = ({
  reviews,
  averageRating,
  totalReviews,
  photoReviews,
  activeTab,
  onTabChange,
}: ReviewSectionProps) => {
  return (
    <div>
      {/* 헤더 */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-black text-[#111827]">구매 후기</h2>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-7 h-7 ${
                    i < Math.floor(averageRating)
                      ? 'fill-[#FACC15] text-[#FACC15]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-black text-[#111827]">
              {averageRating}
            </span>
          </div>
          <p className="text-sm text-[#6B7280] font-light">
            전체 {totalReviews.toLocaleString()}개의 통합 리뷰
          </p>
        </div>
        <button className="bg-[#111827] text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors">
          리뷰 작성하기
        </button>
      </div>

      {/* 탭 */}
      <div className="flex border-b border-[#E5E7EB] mb-6">
        <button
          onClick={() => onTabChange('compare')}
          className={`px-8 py-4 text-sm font-medium transition-colors border-b-2 ${
            activeTab === 'compare'
              ? 'border-[#0D9DDA] text-[#0D9DDA] font-bold'
              : 'border-transparent text-[#6B7280]'
          }`}
        >
          COMPARE 사이트 리뷰 (342)
        </button>
        <button
          onClick={() => onTabChange('external')}
          className={`px-8 py-4 text-sm font-medium transition-colors border-b-2 ${
            activeTab === 'external'
              ? 'border-[#0D9DDA] text-[#0D9DDA] font-bold'
              : 'border-transparent text-[#6B7280]'
          }`}
        >
          외부 쇼핑몰 통합 리뷰 (903)
        </button>
      </div>

      {/* AI 분석 섹션 */}
      <div className="bg-[rgba(239,246,255,0.5)] border border-[rgba(219,234,254,0.5)] rounded-2xl p-8 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 bg-[#0D9DDA] rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <p className="text-base font-bold text-[#0D9DDA]">
            AI가 분석한 한 줄 평: "압도적인 가성비와 저소음으로 QHD 게이밍의 정석"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {/* 긍정 키워드 */}
          <div>
            <h4 className="text-sm font-bold text-[#1F2937] mb-4">
              사용자 긍정 키워드 요약
            </h4>
            <div className="text-sm text-[#4B5563] font-light leading-[22.75px]">
              <p className="mb-2">
                <span className="font-bold">성능 및 쿨링:</span> 대다수의 사용자가
                "전작 대비 발열 제어가 매우 훌륭하며, 풀로드 시에도 팬 소음이
                정숙하다"고 평가했습니다.
              </p>
              <p>
                <span className="font-bold">사이즈 및 호환성:</span> EAGLE 라인업의
                슬림한 디자인과 적당한 가로 길이(261mm) 덕분에 미니 타워 케이스
                사용자들에게 인기가 높습니다.
              </p>
            </div>
          </div>

          {/* 만족도 */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-[#6B7280] font-light">
                  발열 제어 만족도
                </span>
                <span className="text-xs font-bold text-[#0D9DDA]">98%</span>
              </div>
              <div className="h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0D9DDA] rounded-full"
                  style={{ width: '98%' }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-[#6B7280] font-light">
                  소음 정숙성 만족도
                </span>
                <span className="text-xs font-bold text-[#0D9DDA]">94%</span>
              </div>
              <div className="h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0D9DDA] rounded-full"
                  style={{ width: '94%' }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-[#6B7280] font-light">
                  가격 대비 가치
                </span>
                <span className="text-xs font-bold text-[#0D9DDA]">91%</span>
              </div>
              <div className="h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0D9DDA] rounded-full"
                  style={{ width: '91%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 포토 리뷰 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-[#111827]">
            포토/동영상 리뷰{' '}
            <span className="text-[#0D9DDA]">{photoReviews}</span>
          </h4>
          <button className="flex items-center gap-1 text-xs text-[#6B7280] font-light hover:text-[#111827]">
            전체보기 <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-[#E5E7EB] rounded-lg flex items-center justify-center"
            >
              {i === 6 ? (
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-white">+116</span>
                  </div>
                </div>
              ) : (
                <ImageIcon className="w-7 h-7 text-[#9CA3AF]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 리뷰 목록 */}
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <button className="w-10 h-10 border border-[#E5E7EB] rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <ChevronRight className="w-5 h-5 text-[#9CA3AF] rotate-180" />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              page === 1
                ? 'bg-[#0D9DDA] text-white font-bold'
                : 'border border-[#E5E7EB] text-[#4B5563] font-light hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-10 h-10 border border-[#E5E7EB] rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <ChevronRight className="w-5 h-5 text-[#9CA3AF]" />
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
