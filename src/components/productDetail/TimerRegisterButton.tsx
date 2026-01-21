import { Plus } from 'lucide-react';

const TimerRegisterButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0D9DDA] py-4 font-bold text-white shadow-lg transition-colors hover:bg-[#0B8BC7]"
    >
      <Plus className="h-5 w-5" />
      타이머 등록
    </button>
  );
};

export default TimerRegisterButton;
