import React from 'react';
import { Edit3 } from 'lucide-react';

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex w-full items-center gap-3 rounded-2xl border-2 border-[#e5e7eb] bg-white px-6 py-4 transition-all focus-within:border-[#0d9dda] focus-within:shadow-[0px_0px_0px_3px_rgba(13,157,218,0.1)]">
      <div className="scale-y-[-1]">
        <Edit3 className="h-6 w-5 text-[#0d9dda]" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-base leading-6 font-medium text-[#111827] outline-none placeholder:text-[#9ca3af]"
      />
    </div>
  );
};

export default CustomInput;
