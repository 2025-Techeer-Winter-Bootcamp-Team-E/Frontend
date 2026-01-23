import React from 'react';

interface SituationCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight: string;
  iconColor?: string;
  highlightColor?: string;
}

const SituationCard: React.FC<SituationCardProps> = ({
  icon: Icon,
  title,
  description,
  highlight,
  iconColor = '#1d1d1f',
  highlightColor = '#0066cc',
}) => {
  return (
    <div className="flex flex-1 gap-5 rounded-3xl border border-[#d2d2d7]/40 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
      <div className="shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#f5f5f7]">
          <Icon className="h-6 w-6" style={{ color: iconColor }} strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h3 className="mb-1 text-[17px] font-bold tracking-tight text-[#1d1d1f]">{title}</h3>
        <p className="mb-2 text-[14px] leading-snug font-medium text-[#86868b]">{description}</p>
        <p className="text-[14px] font-bold tracking-tight" style={{ color: highlightColor }}>
          {highlight}
        </p>
      </div>
    </div>
  );
};
export default SituationCard;
