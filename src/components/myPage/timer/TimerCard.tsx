import { X, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { TimersEntity } from '@/types/timerType';
import useTimerDeleteMutation from '@/hooks/mutations/useTimerDeleteMutation';
import useTimerPatchMutation from '@/hooks/mutations/useTimerPatchMutation';
import TimerModal from './TimerModal';
import { PATH } from '@/routes/path';

interface TimerCardProps {
  timer: TimersEntity;
}

const TimerCard = ({ timer }: TimerCardProps) => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const deleteTimerMutation = useTimerDeleteMutation();
  const patchTimerMutation = useTimerPatchMutation();

  const handleDelete = () => {
    if (!confirm('이 타이머를 삭제하시겠습니까?')) return;
    deleteTimerMutation.mutate(timer.timer_id);
  };

  const handleSubmitEdit = (data: { product_id: number; target_price: number }) => {
    patchTimerMutation.mutate(
      {
        timer_id: timer.timer_id,
        body: { target_price: data.target_price },
      },
      {
        onSuccess: () => {
          setIsEditModalOpen(false);
          alert('목표가격이 수정되었습니다.');
        },
        onError: () => {
          alert('목표가격 수정에 실패했습니다.');
        },
      },
    );
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleGoToProduct = () => {
    navigate(PATH.PRODUCT_DETAIL(timer.product_code));
  };

  return (
    <>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:ring-1 hover:ring-gray-200">
        {/* 상단 액션: 삭제 버튼을 더 깔끔하게 */}
        <button
          onClick={handleDelete}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 opacity-0 transition-all group-hover:opacity-100 hover:bg-red-50 hover:text-red-500"
        >
          <X className="h-4 w-4" />
        </button>

        {/* 제품 이미지: 화이트 스페이스 강조 */}
        <div className="relative mb-6 flex h-44 items-center justify-center rounded-[20px] bg-[#fbfbfd] p-4 transition-transform duration-500 group-hover:scale-105">
          {timer.thumbnail_url ? (
            <img
              src={timer.thumbnail_url}
              alt={timer.product_name}
              className="h-full object-contain"
            />
          ) : (
            <span className="text-xs font-medium text-gray-300">No Image</span>
          )}
        </div>

        {/* 텍스트 위계: font-black과 medium의 조화 */}
        <div className="mb-4 space-y-1">
          <h3 className="line-clamp-2 min-h-[40px] text-sm leading-snug font-semibold text-gray-900 group-hover:text-indigo-600">
            {timer.product_name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black tracking-tight text-gray-900">
              {timer.predicted_price.toLocaleString()}원
            </span>
            <span className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">
              Target: {timer.target_price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* AI 분석 영역: 블루 톤의 정갈한 박스 */}
        <div className="mb-5 rounded-[18px] bg-indigo-50/40 p-4 ring-1 ring-indigo-50">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-black tracking-widest text-indigo-500 uppercase">
              Score
            </span>
            <span className="text-sm font-black text-indigo-700">
              {timer.recommendation_score}%
            </span>
          </div>
          <p className="line-clamp-2 text-xs leading-relaxed font-medium text-gray-600">
            {timer.reason_message}
          </p>
        </div>

        {/* 하단 버튼: 애플 스타일의 라운드 & 보더 */}
        <div className="mt-auto flex gap-2">
          <button
            onClick={handleOpenEditModal}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-400 transition-all hover:border-gray-900 hover:text-gray-900"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={handleGoToProduct}
            className="flex-1 rounded-xl bg-gray-900 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-indigo-600 active:scale-[0.98]"
          >
            상세 보기
          </button>
        </div>
      </div>
      <TimerModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onSubmit={handleSubmitEdit}
        productId={timer.product_code}
        initialData={{ target_price: timer.target_price }}
        mode="edit"
      />
    </>
  );
};

export default TimerCard;
