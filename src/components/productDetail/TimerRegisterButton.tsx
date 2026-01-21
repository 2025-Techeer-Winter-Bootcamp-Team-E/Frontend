import { Plus } from 'lucide-react';

const TimerRegisterButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1d1d1f] py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#424245] active:scale-[0.98]"
    >
      <Plus className="h-4 w-4" strokeWidth={3} />
      타이머 등록
    </button>
  );
};

export default TimerRegisterButton;
