import { useState } from 'react';
import { Share2, Heart, ShoppingCart } from 'lucide-react';

interface ImageGalleryProps {
  images: (string | null)[];
  productName: string;
  onShare?: () => void;
  onWishlist?: (isAdded: boolean) => void;
  onAddToCart?: () => void;
}

const ImageGallery = ({
  images,
  productName,
  onShare,
  onWishlist,
  onAddToCart,
}: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onWishlist?.(!isWishlisted);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* 메인 이미지 */}
      <div className="relative">
        <div className="w-full aspect-square bg-[#F9FAFB] border border-[#F3F4F6] rounded-lg flex items-center justify-center overflow-hidden">
          {images[selectedImage] ? (
            <img
              src={images[selectedImage]!}
              alt={productName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-[#E5E7EB] text-6xl font-bold">
              {productName.charAt(0)}
            </div>
          )}
        </div>

        {/* 액션 버튼들 */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={onShare}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Share2 className="w-5 h-5 text-[#6B7280]" />
          </button>
          <button
            onClick={handleWishlist}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-[#6B7280]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* 장바구니 버튼 */}
      <button
        onClick={onAddToCart}
        className="w-full py-4 bg-[#0D9DDA] text-white font-bold rounded-lg hover:bg-[#0B8BC7] transition-colors flex items-center justify-center gap-2 shadow-lg"
      >
        <ShoppingCart className="w-5 h-5" />
        장바구니 담기
      </button>
    </div>
  );
};

export default ImageGallery;
