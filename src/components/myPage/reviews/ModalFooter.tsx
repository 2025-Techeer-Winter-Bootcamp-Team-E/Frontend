interface ModalFooterProps {
  onCancel: () => void;
  onSubmit: () => void;
  submitText?: string;
  disabled?: boolean;
}

const ModalFooter = ({ onCancel, onSubmit, submitText = '수정/등록', disabled = false }: ModalFooterProps) => {
  return (
    <div className="mt-6 flex gap-3">
      <button
        onClick={onCancel}
        className="flex-1 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
      >
        취소
      </button>
      <button
        onClick={onSubmit}
        disabled={disabled}
        className={`flex-1 rounded-lg py-3 font-medium transition-colors ${
          disabled
            ? 'cursor-not-allowed bg-gray-300 text-gray-500'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {submitText}
      </button>
    </div>
  );
};

export default ModalFooter;
