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
      <div className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-black/5 bg-white p-6 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <button
          onClick={handleDelete}
          className="absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#86868b] opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 hover:bg-[#ff3b30] hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative mb-6 flex h-48 items-center justify-center rounded-3xl bg-[#F5F5F7] p-6 transition-transform duration-700 group-hover:scale-[1.02]">
          {timer.thumbnail_url ? (
            <img
              src={timer.thumbnail_url}
              alt={timer.product_name}
              className="h-full object-contain mix-blend-multiply"
            />
          ) : (
            <span className="text-[13px] font-medium text-[#d2d2d7]">No Image</span>
          )}
        </div>

        <div className="mb-5 space-y-2">
          <h3 className="line-clamp-2 min-h-11 text-[17px] leading-tight font-semibold tracking-tight text-[#1d1d1f]">
            {timer.product_name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-[24px] font-bold tracking-tighter text-[#1d1d1f]">
              {timer.predicted_price.toLocaleString()}원
            </span>
            <span className="text-[12px] font-semibold tracking-tight text-[#86868b]">
              목표 {timer.target_price.toLocaleString()}원
            </span>
          </div>
        </div>
        <div className="mb-6 rounded-[20px] bg-[#F5F5F7] p-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-widest text-[#86868b] uppercase">
              Score
            </span>
            <span className="text-[15px] font-bold text-[#0066cc]">
              {timer.recommendation_score}%
            </span>
          </div>
          <p className="line-clamp-2 text-[13px] leading-relaxed text-[#424245]">
            {timer.reason_message}
          </p>
        </div>

        <div className="mt-auto flex gap-3">
          <button
            onClick={handleOpenEditModal}
            className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#d2d2d7] bg-white text-[#1d1d1f] transition-all hover:bg-[#F5F5F7]"
          >
            <Pencil className="h-5 w-5" />
          </button>
          <button
            onClick={handleGoToProduct}
            className="flex-1 rounded-2xl bg-[#1d1d1f] px-4 py-3 text-[15px] font-semibold text-white transition-all hover:bg-[#424245] active:scale-[0.97]"
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
