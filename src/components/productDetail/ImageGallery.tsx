import { Share2, ShoppingCart, Minus, Plus, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProductDetailResDto } from '@/types/productsType';
import useCartItemPostMutation from '@/hooks/mutations/useCartItemPostMutation';
import { PATH } from '@/routes/path';

const ImageGallery = ({ data }: { data?: ProductDetailResDto }) => {
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
          setQuantity(1);
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
          price: data.price,
        },
      },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="group relative">
        <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-4xl bg-[#f5f5f7]">
          <img
            src={data.thumbnail_url}
            alt={data.product_name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
        </div>
        <button className="absolute right-5 bottom-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-md transition-all hover:bg-white">
          <Share2 className="h-4 w-4 text-[#1d1d1f]" />
        </button>
      </div>
      <div className="flex items-center justify-between rounded-2xl bg-[#f5f5f7] px-5 py-4">
        <span className="text-sm font-semibold tracking-tight text-[#1d1d1f]">수량</span>
        <div className="flex items-center gap-4 rounded-xl border border-black/5 bg-white p-1 shadow-sm">
          <button
            onClick={handleDecrease}
            className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors hover:bg-[#f5f5f7]"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="min-w-6 text-center text-sm font-bold tracking-tight text-[#1d1d1f]">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors hover:bg-[#f5f5f7]"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleAddToCart}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#d2d2d7] bg-white py-4 text-[15px] font-semibold text-[#1d1d1f] transition-all hover:bg-[#f5f5f7] active:scale-[0.98]"
        >
          <ShoppingCart className="h-4 w-4" strokeWidth={2.5} />
          장바구니
        </button>
        <button
          onClick={handleBuyNow}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#1d1d1f] py-4 text-[15px] font-semibold text-white shadow-md shadow-black/5 transition-all hover:bg-[#424245] active:scale-[0.98]"
        >
          <CreditCard className="h-4 w-4" strokeWidth={2.5} />
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
