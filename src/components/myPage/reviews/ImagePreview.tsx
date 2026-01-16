import { X } from 'lucide-react';

interface ImagePreviewProps {
  src: string;
  onRemove: () => void;
}

const ImagePreview = ({ src, onRemove }: ImagePreviewProps) => {
  return (
    <div className="group relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
      <img src={src} alt="리뷰 이미지" className="h-full w-full object-cover" />
      <button
        onClick={onRemove}
        className="absolute right-1 top-1 rounded-full bg-black bg-opacity-50 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ImagePreview;
