interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox = ({ id, checked, onChange, label }: CheckboxProps) => {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 border-gray-300 text-blue-500 focus:ring-blue-500"
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;
