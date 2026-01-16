interface SortOptionsProps {
  currentSort: string;
  onSortChange: (sort: string) => void;
}

const SortOptions = ({ currentSort, onSortChange }: SortOptionsProps) => {
  const sortOptions = [
    { value: 'popular', label: '인기순' },
    { value: 'latest', label: '신상품순' },
    { value: 'low-price', label: '낮은가격순' },
    { value: 'high-price', label: '높은가격순' },
    { value: 'review', label: '상품평순' },
  ];

  return (
    <div className="flex items-center gap-4">
      {sortOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onSortChange(option.value)}
          className={`text-sm transition-colors ${
            currentSort === option.value
              ? 'text-[#111827] font-bold'
              : 'text-[#6B7280] font-light'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SortOptions;
