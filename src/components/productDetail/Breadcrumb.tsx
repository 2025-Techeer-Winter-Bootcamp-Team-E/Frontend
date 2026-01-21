import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="mb-8 flex items-center gap-2 text-[13px] tracking-tight text-[#86868b]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="h-3 w-3 text-[#d2d2d7]" strokeWidth={2.5} />}
          <span
            className={`transition-colors ${
              index === items.length - 1
                ? 'font-semibold text-[#1d1d1f]'
                : 'cursor-pointer font-medium text-[#86868b] hover:text-[#1d1d1f]'
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
