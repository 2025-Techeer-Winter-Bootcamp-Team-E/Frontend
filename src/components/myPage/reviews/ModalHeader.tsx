import { X } from 'lucide-react';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <button onClick={onClose} className="text-gray-400 transition-colors hover:text-gray-600">
        <X className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ModalHeader;
