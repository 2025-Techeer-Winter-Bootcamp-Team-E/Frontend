interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  maxLength?: number;
}

const TextArea = ({ value, onChange, placeholder, maxLength = 1000 }: TextAreaProps) => {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="h-40 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute bottom-3 right-3 text-xs text-gray-400">
        {value.length} / {maxLength.toLocaleString()}
      </div>
    </div>
  );
};

export default TextArea;
