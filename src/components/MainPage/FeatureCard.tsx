import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, step, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon card */}
      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-[32px] border border-gray-100 bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50">
          <Icon className="h-6 w-6 text-cyan-500" />
        </div>
      </div>

      {/* Step label */}
      <div className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500">
        {step}
      </div>

      {/* Title & description */}
      <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
