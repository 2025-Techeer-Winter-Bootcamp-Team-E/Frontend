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
  iconColor = '#0d9dda',
  highlightColor = '#0d9dda',
}) => {
  return (
    <div className="bg-white border border-[#f3f4f6] rounded-2xl p-[25px] shadow-sm flex gap-4 flex-1">
      <div className={`bg-[#f5f7f8] rounded-xl px-3 py-[10px] flex-shrink-0`}>
        <div className="scale-y-[-1]">
          <Icon className="w-6 h-7" style={{ color: iconColor }} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1 flex-1">
        <h3 className="text-base font-bold text-[#111827] leading-[24px]">{title}</h3>
        <p className="text-sm font-light text-[#6b7280] leading-[20px] pb-2">{description}</p>
        <p className="text-sm font-bold leading-[20px]" style={{ color: highlightColor }}>
          {highlight}
        </p>
      </div>
    </div>
  );
};

export default SituationCard;
