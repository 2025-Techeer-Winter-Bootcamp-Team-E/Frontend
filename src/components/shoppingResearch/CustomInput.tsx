import React from 'react';
import { Edit3 } from 'lucide-react';

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className="group relative w-full">
      {/* 입력창 본체 */}
      <div className="flex w-full items-center gap-4 rounded-[20px] border-2 border-gray-100 bg-white px-6 py-5 transition-all duration-300 focus-within:border-indigo-500 focus-within:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.2)]">
        {/* 아이콘 영역: Focus 시 컬러 변경 및 미세한 움직임 */}
        <div className="flex shrink-0 items-center justify-center text-gray-400 transition-colors duration-300 group-focus-within:text-indigo-600">
          <Edit3 className="h-5 w-5 transition-transform duration-300 group-focus-within:rotate-[-10deg]" />
        </div>

        {/* 실제 Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-lg leading-none font-bold text-gray-900 outline-none placeholder:font-medium placeholder:text-gray-300"
        />

        {/* 입력 중일 때 우측에 나타나는 장식 (선택 사항) */}
        {value && <div className="flex h-2 w-2 animate-pulse rounded-full bg-indigo-500" />}
      </div>

      {/* 포커스 시 바닥에 살짝 생기는 네온 라인 효과 (디테일) */}
      <div className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-indigo-500/30 blur-sm transition-all duration-500 group-focus-within:w-[80%]" />
    </div>
  );
};

export default CustomInput;
