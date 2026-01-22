import { useState } from 'react';
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
      product_code: productId,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 오버레이: 더 투명하고 밝은 느낌 */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl" onClick={onClose} />

      <div className="relative z-10 w-full max-w-[420px] rounded-[36px] border border-black/[0.05] bg-white p-10 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
        <div className="mb-10 text-center">
          <h2 className="text-[28px] font-bold tracking-tight text-[#1d1d1f]">
            {mode === 'create' ? '타이머 설정' : '가격 수정'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-4 text-center">
            <label className="text-[12px] font-bold tracking-[0.1em] text-[#86868b] uppercase">
              Target Price
            </label>
            <div className="flex items-center justify-center gap-1">
              <input
                type="text"
                autoFocus
                value={formatPrice(targetPrice)}
                onChange={handlePriceChange}
                placeholder="0"
                className="w-full bg-transparent text-center text-[48px] font-bold tracking-tighter text-[#1d1d1f] outline-none placeholder:text-[#F5F5F7]"
              />
              <span className="text-[24px] font-bold text-[#1d1d1f]">원</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="w-full rounded-[18px] bg-[#0066cc] py-4 text-[17px] font-semibold text-white transition-all hover:bg-[#0077ed] active:scale-[0.98]"
            >
              {mode === 'create' ? '타이머 시작' : '저장하기'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 text-[15px] font-medium text-[#86868b] hover:text-[#1d1d1f]"
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TimerModal;
