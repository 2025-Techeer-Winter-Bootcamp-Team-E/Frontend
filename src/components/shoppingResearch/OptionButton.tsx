import React from 'react';

interface OptionButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: React.ComponentType<{ className?: string }>;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  label,
  isSelected,
  onClick,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-[113.13px] py-[26px] rounded-2xl border-2 transition-all duration-200 flex items-center justify-center overflow-hidden ${
        isSelected
          ? 'border-[#0d9dda] bg-white shadow-[0px_0px_0px_2px_rgba(13,157,218,0.2),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]'
          : 'border-transparent bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:border-[#d1d5db]'
      }`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="scale-y-[-1] flex-shrink-0">
            <Icon
              className={`w-[30px] h-9 ${
                isSelected ? 'text-[#0d9dda]' : 'text-[#d1d5db]'
              }`}
            />
          </div>
        )}
        <span className="text-lg font-bold text-[#111827] leading-[28px] text-center whitespace-nowrap">
          {label}
        </span>
      </div>
    </button>
  );
};

export default OptionButton;
