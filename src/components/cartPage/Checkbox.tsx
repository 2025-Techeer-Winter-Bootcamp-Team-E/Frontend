const Checkbox = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label?: string;
}) => {
  return (
    <label className="group flex cursor-pointer items-center gap-2">
      <div className="relative">
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
        <div
          className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${
            checked
              ? 'border-[#0D9DDA] bg-[#0D9DDA]'
              : 'border-gray-300 bg-white group-hover:border-gray-400'
          }`}
        >
          {checked && (
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      {label && <span className="text-sm font-medium text-[#111827]">{label}</span>}
    </label>
  );
};

export default Checkbox;
