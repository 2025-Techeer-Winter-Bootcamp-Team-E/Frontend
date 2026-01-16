import type { LucideIcon } from 'lucide-react';

interface PaymentMethodCardProps {
  icon?: LucideIcon;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  iconBgColor?: string;
  iconColor?: string;
  imageSrc?: string;
}

const PaymentMethodCard = ({
  icon: Icon,
  label,
  isSelected,
  onClick,
  iconBgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  imageSrc,
}: PaymentMethodCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border-2 p-4 transition-all hover:shadow-md ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor}`}>
          {imageSrc ? (
            <img src={imageSrc} alt={label} className="h-6 w-6 object-contain" />
          ) : Icon ? (
            <Icon className={`h-6 w-6 ${iconColor}`} />
          ) : null}
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
    </button>
  );
};

export default PaymentMethodCard;
