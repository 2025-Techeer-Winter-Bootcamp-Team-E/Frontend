import { useState } from 'react';
import { createPortal } from 'react-dom';
import StarRating from './StarRating';
import ImagePreview from './ImagePreview';
import ImageUploadButton from './ImageUploadButton';
import ProductInfo from './ProductInfo';
import TextArea from './TextArea';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

interface ProductInfoType {
  image?: string;
  name: string;
  badge?: string;
}

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { rating: number; content: string; images: string[] }) => void;
  mode?: 'create' | 'edit';
  initialData?: {
    rating?: number;
    content?: string;
    images?: string[];
  } | null;
  productInfo: ProductInfoType;
}

const ReviewModal = ({
  onClose,
  onSubmit,
  mode = 'create',
  initialData = null,
  productInfo,
}: ReviewModalProps) => {
  const [rating, setRating] = useState(initialData?.rating || 0);
  const [content, setContent] = useState(initialData?.content || '');
  const [images, setImages] = useState<string[]>(initialData?.images || []);

  const maxImages = 5;

  // 이미지 업로드 핸들러
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const remainingSlots = maxImages - images.length;
    const filesToAdd = fileArray.slice(0, remainingSlots);

    const newImageUrls = filesToAdd.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImageUrls]);

    // input 초기화
    e.target.value = '';
  };

  // 이미지 제거 핸들러
  const handleImageRemove = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    // URL.revokeObjectURL을 사용하여 메모리 정리
    URL.revokeObjectURL(images[index]);
    setImages(newImages);
  };

  // 제출 핸들러
  const handleSubmit = () => {
    if (rating === 0 || content.trim() === '') {
      alert('별점과 리뷰 내용을 모두 입력해주세요.');
      return;
    }

    onSubmit({
      rating,
      content,
      images,
    });
  };

  // 초기화 및 닫기
  const handleClose = () => {
    // 업로드된 이미지 URL 정리
    images.forEach((url) => {
      if (url.startsWith('blob:')) {
        URL.revokeObjectURL(url);
      }
    });
    setRating(0);
    setContent('');
    setImages([]);
    onClose();
  };

  // 백드롭 클릭 핸들러
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const isFormValid = rating > 0 && content.trim().length > 0;

  const modalContent = (
    <>
      {/* 백드롭 */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={handleBackdropClick} />

      {/* 모달 */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
          <div className="p-6">
            {/* 헤더 */}
            <ModalHeader
              title={mode === 'create' ? '리뷰 수정/등록 모달' : '리뷰 수정'}
              onClose={handleClose}
            />

            {/* 제목 */}
            <h3 className="mb-6 text-2xl font-bold text-gray-900">리뷰 수정/등록</h3>

            {/* 제품 정보 */}
            <ProductInfo
              productImage={productInfo?.image}
              productName={productInfo?.name || '인텔 코어i7-14세대 14700K (랩터레이크 S 리프레시)'}
              badge={productInfo?.badge}
            />

            {/* 별점 */}
            <div className="mb-6">
              <h4 className="mb-3 text-sm font-medium text-gray-700">상품은 만족스러우셨나요?</h4>
              <StarRating rating={rating} onRatingChange={setRating} size="large" />
            </div>

            {/* 리뷰 내용 */}
            <div className="mb-6">
              <h4 className="mb-3 text-sm font-medium text-gray-700">리뷰 상세 내용</h4>
              <TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="제품의 장점과 아쉬운 점을 자유롭게 작성해주세요."
                maxLength={1000}
              />
            </div>

            {/* 사진 등록 */}
            <div className="mb-6">
              <h4 className="mb-3 text-sm font-medium text-gray-700">
                사진 등록 (최대 {maxImages}장)
              </h4>
              <div className="flex flex-wrap gap-3">
                {/* 업로드된 이미지들 */}
                {images.map((image, index) => (
                  <ImagePreview key={index} src={image} onRemove={() => handleImageRemove(index)} />
                ))}

                {/* 업로드 버튼 */}
                {images.length < maxImages && (
                  <label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <ImageUploadButton disabled={images.length >= maxImages} onClick={() => {}} />
                  </label>
                )}
              </div>
            </div>

            {/* 푸터 버튼 */}
            <ModalFooter
              onCancel={handleClose}
              onSubmit={handleSubmit}
              submitText="수정/등록"
              disabled={!isFormValid}
            />
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default ReviewModal;
