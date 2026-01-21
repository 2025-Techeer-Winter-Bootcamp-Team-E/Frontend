import { Share2, ShoppingCart, Minus, Plus, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProductsCodeResDto } from '@/types/productsType';
import useCartItemPostMutation from '@/hooks/mutations/useCartItemPostMutation';
import { PATH } from '@/routes/path';

const ImageGallery = ({ data }: { data?: ProductsCodeResDto }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { mutate: addCartItem } = useCartItemPostMutation();

  if (!data) return null;

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addCartItem(
      {
        product_code: data.product_code,
        quantity,
      },
      {
        onSuccess: () => {
          alert('장바구니에 추가되었습니다.');
        },
      },
    );
  };

  const handleBuyNow = () => {
    navigate(PATH.CHECKOUT, {
      state: {
        mode: 'direct',
        directItem: {
          product_id: data.product_code,
          name: data.product_name,
          image: data.thumbnail_url,
          quantity: quantity,
          price: data.base_price,
        },
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border border-[#F3F4F6] bg-[#F9FAFB]">
          <img
            src={data.thumbnail_url}
            alt={data.product_name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute right-4 bottom-4 flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50">
            <Share2 className="h-5 w-5 text-[#6B7280]" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-[#E5E7EB] px-4 py-3">
        <span className="font-medium text-gray-700">수량</span>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecrease}
            className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-gray-100"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-6 text-center font-semibold">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#0D9DDA] bg-white py-4 font-bold text-[#0D9DDA] transition-colors hover:bg-[#F0F9FF]"
        >
          <ShoppingCart className="h-5 w-5" />
          장바구니
        </button>
        <button
          onClick={handleBuyNow}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0D9DDA] py-4 font-bold text-white shadow-lg transition-colors hover:bg-[#0B8BC7]"
        >
          <CreditCard className="h-5 w-5" />
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
