type FormInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div className="space-y-1.5">
    <label className="ml-1 text-[13px] font-medium text-[#86868b]">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-xl border bg-white px-4 py-3.5 text-[17px] text-[#1d1d1f] transition-all placeholder:text-[#d2d2d7] focus:ring-1 focus:outline-none ${
        error
          ? 'border-[#ff3b30] focus:ring-[#ff3b30]'
          : 'border-[#d2d2d7] focus:border-[#0066cc] focus:ring-[#0066cc]'
      }`}
    />
    {error && <p className="ml-1 text-[12px] font-medium text-[#ff3b30]">{error}</p>}
  </div>
);
export default FormInput;
