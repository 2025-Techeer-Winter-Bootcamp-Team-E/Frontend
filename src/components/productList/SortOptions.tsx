interface SortOptionsProps {
  currentSort: string;
  onSortChange: (sort: string) => void;
}

const SortOptions = ({ currentSort, onSortChange }: SortOptionsProps) => {
  const sortOptions = [
    { value: 'popular', label: '인기순' },
    { value: 'price_low', label: '낮은가격순' },
    { value: 'price_high', label: '높은가격순' },
  ];

  return (
    <div className="flex items-center gap-6">
      {sortOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onSortChange(option.value)}
          className={`relative text-[13px] tracking-tight transition-all ${
            currentSort === option.value
              ? 'font-bold text-[#1d1d1f]'
              : 'font-medium text-[#86868b] hover:text-[#1d1d1f]'
          }`}
        >
          {option.label}
          {currentSort === option.value && (
            <div className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#1d1d1f]" />
          )}
        </button>
      ))}
    </div>
  );
};
export default SortOptions;
