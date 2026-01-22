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
      <div className="flex w-full items-center gap-4 rounded-[18px] border border-[#d2d2d7]/50 bg-white px-6 py-5 transition-all duration-300 focus-within:border-[#0066cc] focus-within:ring-[4px] focus-within:ring-[#0066cc]/10">
        <div className="flex shrink-0 items-center justify-center text-[#86868b] transition-colors duration-300 group-focus-within:text-[#0066cc]">
          <Edit3 className="h-5 w-5" strokeWidth={1.5} />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-[19px] font-semibold tracking-tight text-[#1d1d1f] outline-none placeholder:font-medium placeholder:text-[#d2d2d7]"
        />

        {value && <div className="flex h-1.5 w-1.5 rounded-full bg-[#0066cc] opacity-80" />}
      </div>
    </div>
  );
};

export default CustomInput;
