import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
          )}
          <span
            className={
              index === items.length - 1
                ? 'text-[#111827] font-medium'
                : 'text-[#6B7280] font-light'
            }
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
