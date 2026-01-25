import type { ResearchQuestionOptionEntity } from '@/types/searchType';

interface QuickSelectOptionsProps {
  options: ResearchQuestionOptionEntity[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const QuickSelectOptions = ({ options, selectedOption, onSelect }: QuickSelectOptionsProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-[11px] font-bold tracking-[0.12em] text-[#d2d2d7] uppercase">
        Quick Select
      </p>
      <div className="flex flex-wrap justify-center gap-2.5">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.label)}
            className={`rounded-full px-5 py-2.5 text-[14px] font-medium transition-all duration-300 ${
              selectedOption === option.label
                ? 'bg-[#1d1d1f] text-white'
                : 'bg-[#F5F5F7] text-[#424245] hover:bg-[#e8e8ed]'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickSelectOptions;
