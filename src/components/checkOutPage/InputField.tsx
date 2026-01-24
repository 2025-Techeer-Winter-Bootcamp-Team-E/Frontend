const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}) => {
  return (
    <div className="mb-6">
      <label className="mb-2 ml-1 block text-[12px] font-bold tracking-[0.02em] text-[#86868b] uppercase">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-transparent bg-[#f5f5f7] px-4 py-3.5 text-[15px] font-medium text-[#1d1d1f] transition-all duration-300 ease-in-out placeholder:text-[#d2d2d7] focus:border-[#d2d2d7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.02)] focus:outline-none"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)]" />
      </div>
    </div>
  );
};

export default InputField;
