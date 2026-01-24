import { MessageSquare } from 'lucide-react';

const QuestionContext = ({ context, mode }: { context: string; mode: string }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-[14px] border border-black/3 bg-[#f5f5f7]/60 px-5 py-3.5 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
          <MessageSquare className="h-3.5 w-3.5 text-[#1d1d1f]" />
        </div>
        <p className="text-[14px] font-medium tracking-tight text-[#86868b]">
          탐색 키워드 <span className="ml-1 font-bold text-[#1d1d1f]">“{context}”</span>
        </p>
      </div>
      <span className="text-[10px] font-bold tracking-[0.05em] text-[#86868b] uppercase">
        {mode}
      </span>
    </div>
  );
};

export default QuestionContext;
