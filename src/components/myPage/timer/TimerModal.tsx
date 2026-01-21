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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 오버레이: 더 투명하고 블러 처리된 애플 감성 */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl" onClick={onClose} />

      <div className="relative z-10 w-full max-w-[440px] overflow-hidden rounded-[32px] border border-gray-100 bg-white p-10 shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-black tracking-tight text-gray-900">
            {mode === 'create' ? '타이머 설정' : '가격 수정'}
          </h2>
          <button onClick={onClose} className="rounded-full bg-gray-50 p-2 text-gray-400 hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Target Price</label>
            <div className="relative border-b-2 border-gray-900 py-2">
              <input
                type="text"
                value={formatPrice(targetPrice)}
                onChange={handlePriceChange}
                placeholder="0"
                className="w-full bg-transparent pr-8 text-4xl font-black outline-none placeholder:text-gray-100"
              />
              <span className="absolute bottom-4 right-0 text-xl font-bold text-gray-900">원</span>
            </div>
            <p className="text-xs font-medium leading-relaxed text-gray-400">
              {mode === 'create' 
                ? '설정하신 목표가에 도달하면 푸시 알림을 보내드립니다.' 
                : '수정된 가격으로 분석이 다시 시작됩니다.'}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-2xl py-4 text-sm font-bold text-gray-500 transition-colors hover:bg-gray-50"
            >
              닫기
            </button>
            <button
              type="submit"
              className="flex-1 rounded-2xl bg-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-indigo-700 active:scale-95"
            >
              {mode === 'create' ? '시작하기' : '변경사항 저장'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TimerModal