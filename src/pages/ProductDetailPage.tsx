import { useRef, useState } from 'react';
import {
  ImageGallery,
  ProductInfo,
  PriceTrendGraph,
  PriceComparisonTable,
  SpecTable,
  ReviewSection,
  PriceTrendCard,
} from '@/components/productDetail';
import useProductInfoQuery from '@/hooks/queries/useProductInfoQuery';
import useTimerGetQuery from '@/hooks/queries/useTimerGetQuery';
import TimerRegisterButton from '@/components/productDetail/TimerRegisterButton';
import useTimerPostMutation from '@/hooks/mutations/useTimerPostMutation';
import TimerModal from '@/components/myPage/timer/TimerModal';

const ProductDetailPage = () => {
  const { data: productInfo } = useProductInfoQuery(1);
  const { data: timerInfo } = useTimerGetQuery(1);
  const postTimerMutate = useTimerPostMutation(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisonRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitTimer = (data: { product_id: number; target_price: number }) => {
    postTimerMutate.mutate(data, {
      onSuccess: () => {
        setIsModalOpen(false); // 등록 성공 시 모달 닫기
      },
    });
  };

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
              {timerInfo ? (
                <div className="flex gap-6">
                  <PriceTrendCard timerInfo={timerInfo}/>
                  <PriceTrendGraph productCode={1} />
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <PriceTrendGraph productCode={1} />
                  <TimerRegisterButton onClick={handleOpenModal} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 탭 콘텐츠 - 일렬로 배치 */}
        <div className="mt-6 space-y-12">
          <div id="comparison" ref={comparisonRef} className="scroll-mt-24">
            <PriceComparisonTable />
          </div>

          <div id="specs" ref={specsRef} className="scroll-mt-24">
            <SpecTable productInfo={productInfo} />
          </div>

          <div id="reviews" ref={reviewsRef} className="scroll-mt-24">
            <ReviewSection productCode={1} />
          </div>
        </div>
      </div>

      {/* 타이머 등록 모달 */}
      <TimerModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitTimer}
        productId={1}
        mode="create"
      />
    </div>
  );
};

export default ProductDetailPage;
