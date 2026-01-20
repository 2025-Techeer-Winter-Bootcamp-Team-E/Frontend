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

  const deleteTimerMutation = useTimerDeleteMutation(timer.timer_id);
  const patchTimerMutation = useTimerPatchMutation(timer.timer_id);

  const handleDelete = () => {
    if (!confirm('이 타이머를 삭제하시겠습니까?')) return;
    deleteTimerMutation.mutate();
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSubmitEdit = (data: { product_id: number; target_price: number }) => {
    patchTimerMutation.mutate(
      { target_price: data.target_price },
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

  const handleGoToProduct = () => {
    navigate(PATH.PRODUCT_DETAIL(timer.product_code));
  };

  return (
    <>
      <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        {/* X 버튼 */}
        <div className="mb-2 flex justify-end">
          <button
            onClick={handleDelete}
            className="flex items-center justify-center transition-colors hover:text-gray-600"
            aria-label="타이머 삭제"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* 이미지 영역 */}
        <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded bg-gray-50">
          {timer.thumbnail_url ? (
            <img
              src={timer.thumbnail_url}
              alt={timer.product_name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-300">
              <span className="text-sm">이미지 없음</span>
            </div>
          )}
        </div>

        {/* 제목 */}
        <h3 className="line-clamp-2 min-h-7 text-sm text-gray-800">{timer.product_name}</h3>

        {/* 가격 정보 */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {timer.predicted_price.toLocaleString()}원
            </span>
          </div>
          <span className="text-sm text-gray-400">
            목표가: {timer.target_price.toLocaleString()}원
          </span>
        </div>

        {/* AI 추천 상태 - 서버 데이터 기반 */}
        <div className="mb-2 min-h-20 rounded-lg border border-blue-100 bg-blue-50 p-3">
          {/* 추천도 표시 */}
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-blue-700">구매 추천도</span>
            <span className="text-xs font-bold text-blue-900">{timer.recommendation_score}%</span>
          </div>

          {/* 서버 메시지 */}
          <p className="mb-2 line-clamp-2 text-xs text-blue-800">{timer.reason_message}</p>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="mt-auto flex gap-2">
          <button
            onClick={handleOpenEditModal}
            className="rounded border border-gray-300 p-2 transition-colors hover:bg-gray-50"
            aria-label="타이머 수정"
          >
            <Pencil className="h-5 w-5 text-gray-400" />
          </button>

          <button
            onClick={handleGoToProduct}
            className="flex-1 rounded border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            상세 보기
          </button>
        </div>
      </div>

      {/* 수정 모달 */}
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
