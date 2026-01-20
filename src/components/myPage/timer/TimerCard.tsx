import { X, ShoppingCart, Pencil } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface TimerCardProps {
  image?: string;
  title: string;
  price: number;
  originalPrice?: number | null;
  discount?: string | number | null;
  progress?: {
    current: number;
    total: number;
  } | null;
  progressVariant?: 'teal' | 'orange';
  progressText?: string;
}

const TimerCard = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  progress,
  progressVariant = 'teal',
  progressText,
}: TimerCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* X 버튼 - 이미지 위쪽에 배치 */}
      <div className="mb-2 flex justify-end">
        <button className="flex items-center justify-center transition-colors hover:text-gray-600">
          <X className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      {/* 이미지 영역 */}
      <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded bg-gray-50">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-300">
            <span className="text-sm">이미지 없음</span>
          </div>
        )}
      </div>

      {/* 제목 */}
      <h3 className="line-clamp-2 min-h-7 text-sm text-gray-800">{title}</h3>
      {/* 가격 정보 */}
      <div className="mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">{price.toLocaleString()}원</span>
          {discount && (
            <span className="text-sm text-red-500">
              {typeof discount === 'number' ? `${discount}%` : discount}
            </span>
          )}
        </div>
        {originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            {originalPrice.toLocaleString()}원
          </span>
        )}
      </div>

      {/* 진행 상태 */}
      {progress && (
        <div className="mb-2">
          <ProgressBar
            current={progress.current}
            total={progress.total}
            variant={progressVariant}
            progressText={progressText}
          />
        </div>
      )}

      {/* 하단 버튼 영역 */}
      <div className="mt-auto flex gap-2">
        <button className="rounded border border-gray-300 p-2 transition-colors hover:bg-gray-50">
          <Pencil className="h-5 w-5 text-gray-400" />
        </button>
        <button className="rounded border border-gray-300 p-2 transition-colors hover:bg-gray-50">
          <ShoppingCart className="h-5 w-5 text-gray-400" />
        </button>
        <button className="flex-1 rounded border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
          상세 보기
        </button>
      </div>
    </div>
  );
};

export default TimerCard;
