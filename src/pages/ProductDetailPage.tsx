import { useRef } from 'react';
import {
  ImageGallery,
  ProductInfo,
  PriceTrendGraph,
  PriceComparisonTable,
  SpecTable,
  ReviewSection,
} from '@/components/productDetail';
import useProductInfoQuery from '@/hooks/queries/useProductInfoQuery';

const ProductDetailPage = () => {
  const { data: productInfo } = useProductInfoQuery(1);

  const comparisonRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#F5F7F8]">
      <div className="mx-auto max-w-7xl px-20 py-6">
        {/* 상품 메인 정보 */}
        <div className="mb-12 rounded-xl border border-[#E5E7EB] bg-white p-8.25 shadow-sm">
          <div className="grid grid-cols-2 gap-10">
            {/* 왼쪽: 이미지 갤러리 */}
            <ImageGallery data={productInfo} />

            {/* 오른쪽: 상품 정보 */}
            <div className="flex flex-col gap-6">
              <ProductInfo productInfo={productInfo} />

              {/* 가격 추이 카드 및 그래프 */}
              <div className="flex gap-6">
                {/* <PriceTrendCard 
                /> */}
                <PriceTrendGraph productCode={1} />
              </div>
            </div>
          </div>
        </div>

        {/* 탭 콘텐츠 - 일렬로 배치 */}
        <div className="mt-6 space-y-12">
          <div id="comparison" ref={comparisonRef} className="scroll-mt-24">
            <PriceComparisonTable />
          </div>

          {/* 상세정보 섹션 */}
          <div id="specs" ref={specsRef} className="scroll-mt-24">
            <SpecTable productInfo={productInfo} />
          </div>

          {/* 구매후기 섹션 */}
          <div id="reviews" ref={reviewsRef} className="scroll-mt-24">
            <ReviewSection productCode={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
