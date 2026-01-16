import { Image as ImageIcon } from 'lucide-react';

interface ImageUploadButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const ImageUploadButton = ({ onClick, disabled = false }: ImageUploadButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed transition-colors ${
        disabled
          ? 'cursor-not-allowed border-gray-200 bg-gray-50'
          : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
      }`}
    >
      <ImageIcon className="h-6 w-6 text-gray-400" />
      <span className="text-xs text-gray-500">사진 추가</span>
    </button>
  );
};

export default ImageUploadButton;
