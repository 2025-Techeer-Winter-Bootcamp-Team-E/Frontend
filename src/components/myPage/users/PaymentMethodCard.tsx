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
  iconBgColor = 'bg-gray-50', // 저채도 배경
  iconColor = 'text-slate-500', // 차분한 슬레이트
  imageSrc,
}: PaymentMethodCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center gap-3 rounded-[1.25rem] border p-5 transition-all duration-300 ${
        isSelected
          ? 'border-gray-900 bg-gray-50 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]'
          : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50/50'
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${iconBgColor}`}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={label} className="h-6 w-6 object-contain grayscale-[0.2]" />
        ) : Icon ? (
          <Icon className={`h-5 w-5 ${iconColor} stroke-[1.5]`} />
        ) : null}
      </div>
      <span
        className={`text-[0.8rem] font-medium tracking-tight ${isSelected ? 'text-gray-900' : 'text-gray-500'}`}
      >
        {label}
      </span>
    </button>
  );
};

export default PaymentMethodCard;
