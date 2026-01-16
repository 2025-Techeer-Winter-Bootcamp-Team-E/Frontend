import { useState, useEffect, useRef } from 'react';
import productData from '@/data/productData.json';
import {
  Breadcrumb,
  ImageGallery,
  ProductInfo,
  PriceTrendCard,
  PriceTrendGraph,
  PriceComparisonTable,
  SpecTable,
  ReviewSection,
  DetailTabs,
} from '@/components/productDetail';

const ProductDetailPage = () => {
  const [activeTab, setActiveTab] = useState('comparison');
  const [reviewTab, setReviewTab] = useState<'compare' | 'external'>('compare');
  const product = productData.product;

  const comparisonRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const breadcrumbItems = [
    { label: '홈' },
    { label: 'PC부품' },
    { label: '그래픽카드' },
    { label: product.brand },
  ];

  const tabs = [
    { id: 'comparison', label: '가격비교', count: product.priceComparisons.length },
    { id: 'specs', label: '상세정보' },
    { id: 'reviews', label: '구매 후기', count: product.totalReviews },
  ];

  const handleShare = () => {
    console.log('공유하기');
  };

  const handleWishlist = (isAdded: boolean) => {
    console.log('위시리스트:', isAdded ? '추가' : '제거');
  };

  const handleAddToCart = () => {
    console.log('장바구니 담기');
    alert('장바구니에 담겼습니다!');
  };

  // 가격 추이 계산
  const lowestPrice = Math.min(...product.priceTrend);
  const currentPrice = product.price;
  const priceDiff = currentPrice - lowestPrice;

  // 탭 클릭 시 해당 섹션으로 스크롤
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      comparison: comparisonRef,
      specs: specsRef,
      reviews: reviewsRef,
    };

    const targetRef = refs[tabId];
    if (targetRef?.current) {
      const offset = 100; // 탭바 높이 + 여유 공간
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // 스크롤 위치에 따라 활성 탭 변경
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // 탭바 높이 + 여유 공간

      const comparisonTop = comparisonRef.current?.offsetTop || 0;
      const specsTop = specsRef.current?.offsetTop || 0;
      const reviewsTop = reviewsRef.current?.offsetTop || 0;

      // 각 섹션의 중간 지점을 기준으로 활성 탭 결정
      if (scrollPosition >= reviewsTop - 100) {
        setActiveTab('reviews');
      } else if (scrollPosition >= specsTop - 100) {
        setActiveTab('specs');
      } else if (scrollPosition >= comparisonTop - 100) {
        setActiveTab('comparison');
      }
    };

    // 초기 실행
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#F5F7F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-20 py-6">
        {/* 브레드크럼 */}
        <Breadcrumb items={breadcrumbItems} />

        {/* 상품 메인 정보 */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-[33px] mb-12">
          <div className="grid grid-cols-2 gap-10">
            {/* 왼쪽: 이미지 갤러리 */}
            <ImageGallery
              images={product.images}
              productName={product.name}
              onShare={handleShare}
              onWishlist={handleWishlist}
              onAddToCart={handleAddToCart}
            />

            {/* 오른쪽: 상품 정보 */}
            <div className="flex flex-col gap-6">
              <ProductInfo
                brand={product.brand}
                name={product.name}
                rating={product.averageRating}
                reviewCount={842}
                registeredDate="2024.01"
                quickSpecs={product.quickSpecs}
              />

              {/* 가격 추이 카드 및 그래프 */}
              <div className="flex gap-6">
                <PriceTrendCard
                  priceDiff={priceDiff}
                  timeUntilRebound="04:22:15"
                  progressPercentage={75}
                />
                <PriceTrendGraph
                  trend={product.priceTrend}
                  currentPrice={currentPrice}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <DetailTabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabClick} />

        {/* 탭 콘텐츠 - 일렬로 배치 */}
        <div className="mt-6 space-y-12">
          {/* 가격비교 섹션 */}
          <div id="comparison" ref={comparisonRef} className="scroll-mt-24">
            <PriceComparisonTable
              comparisons={product.priceComparisons}
              totalSites={42}
            />
          </div>

          {/* 상세정보 섹션 */}
          <div id="specs" ref={specsRef} className="scroll-mt-24">
            <SpecTable specs={product.detailedSpecs} />
          </div>

          {/* 구매후기 섹션 */}
          <div id="reviews" ref={reviewsRef} className="scroll-mt-24">
            <ReviewSection
              reviews={product.reviews}
              averageRating={product.averageRating}
              totalReviews={product.totalReviews}
              photoReviews={product.photoReviews}
              activeTab={reviewTab}
              onTabChange={setReviewTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
