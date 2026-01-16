import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChange(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  if (isEditing) {
    return (
      <div className="w-full bg-[#f9fafb] border border-dashed border-[#0d9dda] rounded-full px-[25px] py-[17px] flex items-center gap-2">
        <div className="scale-y-[-1]">
          <Edit3 className="w-5 h-6 text-[#6b7280]" />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-base font-medium text-[#111827] leading-[24px] placeholder:text-[#6b7280]"
          autoFocus
        />
      </div>
    );
  }

  return (
    <button
      className="w-full bg-[#f9fafb] border border-dashed border-[#d1d5db] rounded-full px-[25px] py-[17px] flex items-center justify-center gap-2 hover:border-[#0d9dda] transition-colors"
      onClick={handleClick}
    >
      <div className="scale-y-[-1]">
        <Edit3 className="w-5 h-6 text-[#6b7280]" />
      </div>
      <span className="text-base font-medium text-[#6b7280] leading-[24px]">
        {value || placeholder}
      </span>
    </button>
  );
};

export default CustomInput;
