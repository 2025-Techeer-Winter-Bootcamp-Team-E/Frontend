import { AlertCircle } from 'lucide-react';

interface WarningMessageProps {
  children: React.ReactNode;
}

const WarningMessage = ({ children }: WarningMessageProps) => {
  return (
    <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
      <div className="flex gap-2">
        <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
        <div className="text-sm text-red-800">
          <p className="mb-1 font-medium">주의하세요!</p>
          <p className="text-red-700">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default WarningMessage;
