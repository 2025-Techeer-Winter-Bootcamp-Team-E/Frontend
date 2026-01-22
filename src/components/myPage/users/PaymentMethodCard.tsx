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
  imageSrc,
}: PaymentMethodCardProps) => {
  return (
    <button
      onClick={onClick}
      // 카드: 선택 시 굵은 보더 대신 배경색과 얇은 링으로 강조
      className={`relative flex flex-col items-center gap-3 rounded-[22px] border p-5 transition-all duration-200 ${
        isSelected
          ? 'border-transparent bg-white shadow-sm ring-2 ring-[#0066cc]'
          : 'border-[#d2d2d7]/50 bg-white hover:bg-[#F5F5F7]'
      }`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#F5F5F7]`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={label}
            className="h-6 w-6 object-contain opacity-70 grayscale-[0.8] group-hover:grayscale-0"
          />
        ) : Icon ? (
          <Icon className={`h-5 w-5 stroke-[1.5] text-[#86868b]`} />
        ) : null}
      </div>
      <span
        className={`text-[13px] font-medium tracking-tight ${isSelected ? 'text-[#1d1d1f]' : 'text-[#86868b]'}`}
      >
        {label}
      </span>
    </button>
  );
};
export default PaymentMethodCard;
