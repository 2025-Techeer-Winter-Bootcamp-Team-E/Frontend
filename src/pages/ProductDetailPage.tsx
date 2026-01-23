import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import useTimerPostMutation from '@/hooks/mutations/useTimerPostMutation';
import TimerModal from '@/components/myPage/timer/TimerModal';
import { Plus } from 'lucide-react';
import useProductTrendQuery from '@/hooks/queries/useProductTrendQuery';
import useProductPricesQuery from '@/hooks/queries/useProductPricesQuery';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const productCode = Number(id);

  const { data: productInfo } = useProductInfoQuery(productCode);
  const { data: timerInfo } = useTimerGetQuery(productCode);
  const postTimerMutate = useTimerPostMutation();

  const { data: productTrend } = useProductTrendQuery(productCode);

  const { data: comparisons } = useProductPricesQuery(productCode);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const comparisonRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => {
    return setIsModalOpen(!isModalOpen);
  };

  const handleSubmitTimer = (data: { product_code: number; target_price: number }) => {
    postTimerMutate.mutate(data, {
      onSuccess: () => setIsModalOpen(false),
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] selection:bg-black/10">
      <div className="mx-auto max-w-300 px-6 py-12">
        <div className="mb-8 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:w-[55%]">
            <ImageGallery data={productInfo} />
          </div>
          <div className="lg:sticky lg:top-12 lg:w-[40%]">
            <ProductInfo productInfo={productInfo} />
            {!timerInfo && (
              <button
                onClick={handleOpenModal}
                className="mt-6 flex w-full items-center justify-center gap-2 text-[13px] font-bold text-[#0066cc] hover:underline"
              >
                <Plus className="h-3.5 w-3.5" />
                최저가 알림 타이머 등록하기
              </button>
            )}
          </div>
        </div>
        <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-black/2 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:divide-x lg:divide-[#f5f5f7]">
            {timerInfo ? (
              <>
                <div className="pr-4 lg:col-span-5">
                  <PriceTrendCard timerInfo={timerInfo} />
                </div>
                <div className="lg:col-span-7 lg:pl-8">
                  {productTrend && <PriceTrendGraph productTrend={productTrend} />}{' '}
                </div>
              </>
            ) : (
              <div className="lg:col-span-12">
                {productTrend && <PriceTrendGraph productTrend={productTrend} />}{' '}
              </div>
            )}
          </div>
        </div>
        <div className="mt-24 space-y-32">
          <section id="comparison" ref={comparisonRef} className="scroll-mt-32">
            <div className="mb-8 px-2">
              <h3 className="text-[28px] font-semibold tracking-tight text-[#1d1d1f]">
                판매처별 최저가
              </h3>
            </div>
            <section id="comparison">
              {comparisons && <PriceComparisonTable comparisons={comparisons} />}
            </section>
          </section>
          <section id="specs" className="scroll-mt-32">
            {productInfo && <SpecTable productInfo={productInfo} />}
          </section>
          <section id="reviews" className="scroll-mt-32 pb-32">
            <ReviewSection key={productCode} productCode={productCode} />
          </section>
        </div>
      </div>
      <TimerModal
        isOpen={isModalOpen}
        onClose={handleOpenModal}
        onSubmit={handleSubmitTimer}
        productId={productCode}
        mode="create"
      />
    </div>
  );
};

export default ProductDetailPage;
