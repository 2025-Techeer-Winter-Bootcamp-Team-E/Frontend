import React from 'react';
import { MessageSquare } from 'lucide-react';

const QuestionContext: React.FC<{ context: string; mode: string }> = ({ context, mode }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl bg-white/50 px-6 py-4 ring-1 ring-gray-200/50 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50">
          <MessageSquare className="h-4 w-4 text-indigo-600" />
        </div>
        <p className="text-sm font-medium text-gray-500">
          탐색 키워드: <span className="font-bold text-gray-900">"{context}"</span>
        </p>
      </div>
      <span className="text-[10px] font-black tracking-wider text-indigo-400 uppercase">
        {mode}
      </span>
    </div>
  );
};

export default QuestionContext;
