import React, { useEffect, useState } from 'react';
import { Target, Sparkles, TrendingUp, Award } from 'lucide-react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import useShoppingResultMutation from '@/hooks/mutations/useShoppingResultMutation';
import { PATH } from '@/routes/path';

interface Product {
  similarity_score: number;
  product_image_url: string;
  product_name: string;
  product_code: number;
  recommendation_reason: string;
  price: number;
  performance_score: number;
  product_specs: {
    cpu: string;
    ram: string;
    weight: string;
  };
  ai_review_summary: string;
  product_detail_url: string;
  optimal_product_info: {
    match_rank: number;
    is_lowest_price: boolean;
  };
}

interface ResultData {
  user_query: string;
  product: Product[];
}

const ShoppingResearchResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as any;
  const [searchParams] = useSearchParams();

  const queryFromUrl = searchParams.get('q') || '';
  const { user_query, survey_contents, search_id } = state || {};

  const [results, setResults] = useState<ResultData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const mutation = useShoppingResultMutation();

  useEffect(() => {
    if (!user_query || !survey_contents || !search_id) {
      console.error('필수 데이터 누락:', { user_query, survey_contents, search_id });
      setIsLoading(false);
      return;
    }

    console.log('API 호출 파라미터:', { search_id, user_query, survey_contents });

    mutation.mutate(
      { search_id, user_query, survey_contents },
      {
        onSuccess: (response) => {
          console.log('=== API 응답 (axiosInstance로 이미 data 추출됨) ===', response);

          // ✅ axiosInstance가 이미 response.data를 리턴하므로
          // response 자체가 백엔드의 data 객체임
          // { user_query: "...", product: [...] } 형태

          if (response?.product && Array.isArray(response.product)) {
            console.log('상품 데이터 정상:', response.product.length, '개');
            setResults(response as ResultData);
          } else {
            console.error('예상치 못한 응답 구조:', response);
          }

          setIsLoading(false);
        },
        onError: (error) => {
          console.error('결과 조회 실패:', error);
          setIsLoading(false);
        },
      },
    );
  }, []); // ⚠️ 빈 배열로 한 번만 실행

  const handleRetry = () => {
    navigate(`${PATH.SHOPPING_RESEARCH}?q=${encodeURIComponent(queryFromUrl || user_query)}`);
  };

  // 디버깅용 로그
  console.log('현재 상태:', { isLoading, results, hasProducts: results?.product?.length });

  // ✅ 로딩 상태
  if (isLoading) {
    return (
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #f5f7f8 0%, #f5f7f8 100%), linear-gradient(90deg, #fff 0%, #fff 100%)',
        }}
      >
        <div className="mx-auto max-w-7xl px-8 py-8">
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="text-center">
              <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-[#e5e7eb] border-t-[#0d9dda]" />
              <p className="text-gray-600">AI가 최적의 상품을 분석하는 중...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✅ 데이터 없음 상태
  if (!results || !results.product || results.product.length === 0) {
    return (
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #f5f7f8 0%, #f5f7f8 100%), linear-gradient(90deg, #fff 0%, #fff 100%)',
        }}
      >
        <div className="mx-auto max-w-7xl px-8 py-8">
          <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
            <p className="text-gray-600">검색 결과를 찾을 수 없습니다.</p>
            <p className="text-sm text-gray-500">
              디버그: results={JSON.stringify(results ? 'exists' : 'null')}, product=
              {results?.product?.length || 0}
            </p>
            <button
              onClick={handleRetry}
              className="rounded-full bg-[#0d9dda] px-6 py-3 font-bold text-white transition-colors hover:bg-[#0c8bc4]"
            >
              다시 검색하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  const products = results.product;
  const topProduct = products[0];

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(90deg, #f5f7f8 0%, #f5f7f8 100%), linear-gradient(90deg, #fff 0%, #fff 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl space-y-8 px-8 py-8">
        {/* 검색 쿼리 배너 */}
        <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-[#0d9dda]" />
              <p className="text-base font-medium text-[#374151]">
                <span className="font-medium">검색 결과: </span>
                <span className="font-bold text-[#111827]">"{results.user_query}"</span>
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[#22c55e]" />
              <span className="text-xs font-normal text-[#6b7280]">
                {products.length}개 상품 분석 완료
              </span>
            </div>
          </div>
        </div>

        {/* 최적 상품 카드 */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Award className="h-7 w-6 text-[#0d9dda]" />
            <h2 className="text-xl leading-[28px] font-bold text-[#111827]">AI 추천 최적 상품</h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl border-2 border-[rgba(13,157,218,0.2)] bg-white p-8 shadow-lg">
            {/* BEST CHOICE 배지 */}
            <div className="absolute top-0 right-0">
              <div className="rounded-bl-xl bg-[#0d9dda] px-4 py-2 text-xs font-bold text-white shadow-md">
                BEST CHOICE
              </div>
            </div>

            <div className="flex gap-8">
              {/* 제품 이미지 */}
              <div className="flex h-64 w-[440px] flex-shrink-0 items-center justify-center rounded-xl bg-[#f9fafb]">
                <img
                  src={topProduct.product_image_url}
                  alt={topProduct.product_name}
                  className="h-full w-full object-contain p-4"
                  onError={(e) => {
                    // ✅ 이미지 로드 실패 시 회색 배경만 표시
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    if (img.parentElement) {
                      img.parentElement.innerHTML = `
                        <div class="flex h-full w-full items-center justify-center text-gray-400">
                          <svg class="h-24 w-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* 제품 정보 */}
              <div className="flex flex-1 flex-col justify-between py-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#0d9dda] px-3 py-1 text-xs font-bold text-white">
                      매칭률 {(topProduct.similarity_score * 100).toFixed(0)}%
                    </span>
                    {topProduct.optimal_product_info.is_lowest_price && (
                      <span className="rounded-full bg-[#22c55e] px-3 py-1 text-xs font-bold text-white">
                        최저가
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl leading-[36px] font-bold text-[#111827]">
                    {topProduct.product_name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl leading-[32px] font-black text-[#0d9dda]">
                      {topProduct.price.toLocaleString()}원
                    </span>
                  </div>
                </div>

                {/* 추천 이유 */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-1 h-5 w-5 flex-shrink-0 text-[#0d9dda]" />
                    <div>
                      <p className="text-sm font-bold text-[#111827]">추천 이유</p>
                      <p className="mt-1 text-sm leading-[20px] font-light text-[#6b7280]">
                        {topProduct.recommendation_reason}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-[#0d9dda]" />
                    <div>
                      <p className="text-sm font-bold text-[#111827]">사용자 리뷰</p>
                      <p className="mt-1 text-sm leading-[20px] font-light text-[#6b7280]">
                        {topProduct.ai_review_summary}
                      </p>
                    </div>
                  </div>

                  <a
                    href={topProduct.product_detail_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0d9dda] px-6 py-3 font-bold text-white transition-colors hover:bg-[#0c8bc4]"
                  >
                    상품 상세보기
                  </a>
                </div>
              </div>
            </div>

            {/* 스펙 정보 */}
            <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-[#f9fafb] p-4">
              <div className="text-center">
                <p className="text-xs font-medium text-[#6b7280]">프로세서</p>
                <p className="mt-1 text-sm font-bold text-[#111827]">
                  {topProduct.product_specs.cpu}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-[#6b7280]">메모리</p>
                <p className="mt-1 text-sm font-bold text-[#111827]">
                  {topProduct.product_specs.ram}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-[#6b7280]">무게</p>
                <p className="mt-1 text-sm font-bold text-[#111827]">
                  {topProduct.product_specs.weight}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 다른 추천 상품들 */}
        {products.length > 1 && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Target className="h-6 w-6 text-[#0d9dda]" />
              <h2 className="text-xl leading-[28px] font-bold text-[#111827]">
                다른 추천 상품 ({products.length - 1}개)
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {products.slice(1).map((product, index) => (
                <div
                  key={product.product_code}
                  className="overflow-hidden rounded-2xl border border-[#f3f4f6] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex gap-4">
                    {/* 순위 배지 */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f3f4f6] text-lg font-bold text-[#0d9dda]">
                      {index + 2}
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-[#f3f4f6] px-2 py-1 text-xs font-medium text-[#6b7280]">
                          매칭률 {(product.similarity_score * 100).toFixed(0)}%
                        </span>
                        {product.optimal_product_info.is_lowest_price && (
                          <span className="rounded-full bg-[#22c55e] px-2 py-1 text-xs font-bold text-white">
                            최저가
                          </span>
                        )}
                      </div>
                      <h3 className="mb-1 text-lg font-bold text-[#111827]">
                        {product.product_name}
                      </h3>
                      <p className="mb-2 text-xl font-black text-[#0d9dda]">
                        {product.price.toLocaleString()}원
                      </p>
                      <p className="mb-3 text-sm font-light text-[#6b7280]">
                        {product.recommendation_reason}
                      </p>
                      <div className="mb-3 flex gap-2 text-xs text-[#6b7280]">
                        <span>{product.product_specs.cpu}</span>
                        <span>•</span>
                        <span>{product.product_specs.ram}</span>
                        <span>•</span>
                        <span>{product.product_specs.weight}</span>
                      </div>
                      <a
                        href={product.product_detail_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-[#0d9dda] hover:underline"
                      >
                        상품 보기 →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 재검색 버튼 */}
        <div className="flex items-center justify-center border-t border-[#f3f4f6] pt-8">
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 rounded-full bg-[#0d9dda] px-10 py-4 font-bold text-white shadow-lg transition-colors hover:bg-[#0c8bc4]"
          >
            <Target className="h-6 w-6" />
            <span>다른 조건으로 다시 검색하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingResearchResultPage;
