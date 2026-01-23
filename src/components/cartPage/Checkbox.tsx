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
          className={`flex h-5.5 w-5.5 items-center justify-center rounded-md border transition-all duration-200 ${
            checked
              ? 'border-[#0066cc] bg-[#0066cc]'
              : 'border-[#d2d2d7] bg-white group-hover:border-[#86868b]'
          }`}
        >
          {checked && (
            <svg
              className="h-3.5 w-3.5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      {label && (
        <span className="text-[15px] font-medium tracking-tight text-[#1d1d1f]">{label}</span>
      )}
    </label>
  );
};
export default Checkbox;
