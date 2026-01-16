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

const CheckboxFilter = ({
  label,
  options,
  selectedOptions,
  onToggle,
}: CheckboxFilterProps) => {
  return (
    <div className="flex gap-4 items-start">
      <h3 className="min-w-[80px] text-sm font-bold text-[#111827] py-1 pr-6">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.value)}
              onChange={() => onToggle(option.value)}
              className="h-4 w-4 rounded border-[#D1D5DB] border bg-white"
            />
            <span className="text-sm text-[#111827] font-light">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilter;
