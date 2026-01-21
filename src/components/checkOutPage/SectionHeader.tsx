import type { LucideIcon } from 'lucide-react';

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
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f5f7] text-[#1d1d1f]">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-[20px] font-bold tracking-tight text-[#1d1d1f]">{title}</h2>
      </div>
      {actionText && (
        <button
          onClick={onAction}
          className="text-[14px] font-semibold text-[#0066cc] hover:underline"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
