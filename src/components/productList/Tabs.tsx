interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="flex items-center gap-1 rounded-xl bg-[#f5f5f7] p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`rounded-[10px] px-5 py-1.5 text-[13px] transition-all duration-200 ${
            activeTab === tab.id
              ? 'bg-white font-bold text-[#1d1d1f] shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
              : 'font-medium text-[#86868b] hover:text-[#1d1d1f]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
