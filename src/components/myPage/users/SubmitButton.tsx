interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const SubmitButton = ({ onClick, disabled = false, children }: SubmitButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-lg py-3 font-medium text-white transition-colors ${
        disabled
          ? 'cursor-not-allowed bg-gray-300'
          : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
      }`}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
