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
    <label className="group flex cursor-pointer items-center gap-3">
      <div className="relative">
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-200 ${
            checked
              ? 'border-[#1d1d1f] bg-[#1d1d1f]'
              : 'border-[#d2d2d7] bg-white group-hover:border-[#86868b]'
          }`}
        >
          {checked && (
            <svg
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      {label && (
        <span className="text-[14px] font-medium tracking-tight text-[#1d1d1f]">{label}</span>
      )}
    </label>
  );
};
export default Checkbox;
