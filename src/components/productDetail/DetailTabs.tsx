interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface DetailTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const DetailTabs = ({ tabs, activeTab, onTabChange }: DetailTabsProps) => {
  return (
    <div className="sticky top-0 z-50 border-b border-[#d2d2d7]/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 sm:px-20">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative py-4 text-sm tracking-tight transition-all ${
                activeTab === tab.id
                  ? 'font-semibold text-[#1d1d1f] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#1d1d1f]'
                  : 'font-medium text-[#86868b] hover:text-[#1d1d1f]'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-1 text-[11px] font-normal opacity-60">{tab.count}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailTabs;
