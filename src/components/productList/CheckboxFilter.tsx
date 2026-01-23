interface FilterOption {
  value: string;
  label: string;
}

interface CheckboxFilterProps {
  label: string;
  options: FilterOption[];
  selectedOptions: string[];
  onToggle: (value: string) => void;
}

const CheckboxFilter = ({ label, options, selectedOptions, onToggle }: CheckboxFilterProps) => {
  return (
    <div className="flex items-start gap-4 py-2">
      <h3 className="min-w-20 py-1 pr-6 text-[13px] font-semibold tracking-tight text-[#1d1d1f]">
        {label}
      </h3>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {options.map((option) => (
          <label key={option.value} className="group flex cursor-pointer items-center gap-2.5">
            <div className="relative flex h-4 w-4 items-center justify-center">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.value)}
                onChange={() => onToggle(option.value)}
                className="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-[#d2d2d7] bg-white transition-all checked:border-[#1d1d1f] checked:bg-[#1d1d1f]"
              />
              <svg
                className="pointer-events-none absolute h-2.5 w-2.5 stroke-white opacity-0 transition-opacity peer-checked:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <span className="text-[13px] font-medium tracking-tight text-[#515154] transition-colors group-hover:text-[#1d1d1f]">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilter;
