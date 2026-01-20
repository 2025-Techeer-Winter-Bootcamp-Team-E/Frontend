import { useState } from 'react';
import { X } from 'lucide-react';
import type { TimerPostReqDto } from '@/types/timerType';

interface TimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TimerPostReqDto) => void;
  productId: number;
  initialData?: {
    target_price: number;
  };
  mode: 'create' | 'edit';
}

const TimerModal = ({
  isOpen,
  onClose,
  onSubmit,
  productId,
  initialData,
  mode,
}: TimerModalProps) => {
  const [targetPrice, setTargetPrice] = useState<string>(
    initialData?.target_price.toString() || '',
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const price = parseInt(targetPrice.replace(/,/g, ''), 10);

    if (isNaN(price) || price <= 0) {
      alert('올바른 가격을 입력해주세요.');
      return;
    }

    onSubmit({
      product_id: productId,
      target_price: price,
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setTargetPrice(value);
  };

  const formatPrice = (value: string) => {
    if (!value) return '';
    return parseInt(value, 10).toLocaleString('ko-KR');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* 모달 컨텐츠 */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* 헤더 */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {mode === 'create' ? '적정구매 타이머 등록' : '목표가격 수정'}
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="target-price" className="mb-2 block text-sm font-medium text-gray-700">
              목표 가격
            </label>
            <div className="relative">
              <input
                id="target-price"
                type="text"
                value={formatPrice(targetPrice)}
                onChange={handlePriceChange}
                placeholder="목표 가격을 입력하세요"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-right text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
              <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">원</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              {mode === 'create'
                ? '상품 가격이 목표 가격 이하로 내려가면 알림을 받을 수 있습니다.'
                : '변경된 목표 가격으로 알림을 받게 됩니다.'}
            </p>
          </div>

          {/* 버튼 */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              {mode === 'create' ? '등록하기' : '수정하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TimerModal;
