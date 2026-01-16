interface SelectDropdownProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

const SelectDropdown = ({ value, onChange, placeholder = '선택해 주세요' }: SelectDropdownProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">{placeholder}</option>
      <option value="gmail.com">gmail.com</option>
      <option value="naver.com">naver.com</option>
      <option value="daum.net">daum.net</option>
    </select>
  );
};

export default SelectDropdown;
