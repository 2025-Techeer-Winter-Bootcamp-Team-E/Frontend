import type { LucideIcon } from 'lucide-react';

// 섹션 헤더 컴포넌트
const SectionHeader = ({
  icon: Icon,
  title,
  actionText,
  onAction,
}: {
  icon: LucideIcon;
  title: string;
  actionText?: string;
  onAction?: () => void;
}) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="h-6 w-6 text-[#0D9DDA]" />
        <h2 className="text-xl font-bold text-[#111827]">{title}</h2>
      </div>
      {actionText && (
        <button
          onClick={onAction}
          className="text-sm font-medium text-[#0D9DDA] transition-colors hover:text-[#0b8bc4]"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
