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
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-bold text-[#111827]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm font-light text-[#111827] placeholder:text-[#6B7280] focus:border-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 focus:outline-none"
      />
    </div>
  );
};
export default InputField;
