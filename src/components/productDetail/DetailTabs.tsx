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
    <div className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-7xl mx-auto px-20">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-8 py-4 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-[#0D9DDA] border-b-2 border-[#0D9DDA] font-bold'
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-2 text-xs text-[#6B7280] font-light">
                  ({tab.count})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailTabs;
