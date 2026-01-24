import { Share2, ShoppingCart, Minus, Plus, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProductDetailResDto } from '@/types/productsType';
import useCartItemPostMutation from '@/hooks/mutations/useCartItemPostMutation';
import { PATH } from '@/routes/path';
import { toast } from 'react-toastify';
import useAuth from '@/hooks/useAuth';

const ImageGallery = ({ data }: { data?: ProductDetailResDto }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { mutate: addCartItem } = useCartItemPostMutation();
  const { isAuthenticated } = useAuth();

  if (!data) return null;

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.info('로그인이 필요한 서비스입니다.');
      navigate(PATH.LOGIN);
      return;
    }

    addCartItem(
      {
        product_code: data.product_code,
        quantity,
      },
      {
        onSuccess: () => {
          toast.success('장바구니에 추가되었습니다.');
          setQuantity(1);
        },
      },
    );
  };

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      navigate(PATH.LOGIN);
      return;
    }
    navigate(PATH.CHECKOUT, {
      state: {
        mode: 'direct',
        directItem: {
          product_code: data.product_code,
          name: data.product_name,
          image: data.thumbnail_url,
          quantity: quantity,
          price: data.price,
        },
      },
    });
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => toast.success('URL이 복사되었습니다!'))
      .catch(() => toast.error('URL 복사에 실패했습니다.'));
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
          <Share2 onClick={handleShare} className="h-4 w-4 text-[#1d1d1f]" />
        </button>
      </div>
      <div className="flex items-center justify-between rounded-2xl bg-[#f5f5f7] px-5 py-4">
        <span className="text-sm font-semibold tracking-tight text-[#1d1d1f]">수량</span>
        <div className="flex items-center gap-4 rounded-xl border border-black/5 bg-white p-1 shadow-sm">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors hover:bg-[#f5f5f7]"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="min-w-6 text-center text-sm font-bold tracking-tight text-[#1d1d1f]">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(1)}
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
