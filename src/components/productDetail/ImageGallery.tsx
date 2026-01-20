import { Share2, ShoppingCart } from 'lucide-react';
import type { ProductsCodeResDto } from '@/types/productsType';

const ImageGallery = ({ data }: { data?: ProductsCodeResDto }) => {
  if (!data) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* 메인 이미지 */}
      <div className="relative">
        <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border border-[#F3F4F6] bg-[#F9FAFB]">
          <img
            src={data?.thumbnail_url}
            alt={data?.product_name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* 액션 버튼들 */}
        <div className="absolute right-4 bottom-4 flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50">
            <Share2 className="h-5 w-5 text-[#6B7280]" />
          </button>
        </div>
      </div>

      {/* 장바구니 버튼 */}
      <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0D9DDA] py-4 font-bold text-white shadow-lg transition-colors hover:bg-[#0B8BC7]">
        <ShoppingCart className="h-5 w-5" />
        장바구니 담기
      </button>
    </div>
  );
};

export default ImageGallery;
