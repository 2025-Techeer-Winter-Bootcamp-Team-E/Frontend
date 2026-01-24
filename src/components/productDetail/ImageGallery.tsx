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
    // --- 바로 구매 데이터 디버깅 ---
    // 1. API에서 받은 전체 상품 데이터를 콘솔에서 확인하여 실제 가격 필드명을 찾습니다.
    console.log('상품 상세 정보 (data):', data);

    // 2. 가격 값을 안전하게 숫자로 변환하는 헬퍼 함수
    const getNumericPrice = (priceValue: unknown): number => {
      if (typeof priceValue === 'number') return priceValue;
      if (typeof priceValue === 'string') {
        const num = parseInt(priceValue.replace(/[^0-9]/g, ''), 10);
        return isNaN(num) ? 0 : num;
      }
      return 0;
    };

    // 3. 장바구니 로직처럼 여러 가격 필드를 순서대로 확인하여 유효한 값을 찾습니다.
    // (예: data.price -> data.danawa_price -> data.base_price 순으로 확인)
    const price =
      getNumericPrice((data as any).price) ||
      getNumericPrice((data as any).danawa_price) ||
      getNumericPrice(data.base_price) ||
      0;

    console.log('최종 변환된 가격 (price):', price);

    navigate(PATH.CHECKOUT, {
      state: {
        mode: 'direct',
        directItem: {
          product_id: data.product_code,
          name: data.product_name,
          image: data.thumbnail_url,
          quantity: quantity,
          price: price,
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
