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
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const productCode = Number(id);

  const { data: productInfo } = useProductInfoQuery(productCode);
  const { data: timerInfo } = useTimerGetQuery(productCode);
  const postTimerMutate = useTimerPostMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisonRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitTimer = (data: { product_id: number; target_price: number }) => {
    postTimerMutate.mutate(data, {
      onSuccess: () => {
        setIsModalOpen(false);
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F7F8]">
      <div className="mx-auto max-w-7xl px-20 py-6">
        <div className="mb-12 rounded-xl border border-[#E5E7EB] bg-white p-8.25 shadow-sm">
          <div className="grid grid-cols-2 gap-10">
            <ImageGallery data={productInfo} />
            <div className="flex flex-col gap-6">
              <ProductInfo productInfo={productInfo} />
              {timerInfo ? (
                <div className="flex gap-6">
                  <PriceTrendCard timerInfo={timerInfo} />
                  <PriceTrendGraph productCode={productCode} />
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <PriceTrendGraph productCode={productCode} />
                  <TimerRegisterButton onClick={handleOpenModal} />
                </div>
              )}
            </div>
          </div>
        </div>
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

      <TimerModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitTimer}
        productId={productCode}
        mode="create"
      />
    </div>
  );
};

export default ProductDetailPage;
