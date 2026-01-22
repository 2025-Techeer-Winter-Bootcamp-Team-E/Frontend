import { SIDEBAR } from '@/constants/sidebar';
import { NavLink } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <div className="overflow-hidden rounded-[24px] border border-black/[0.05] bg-white/60 p-2 backdrop-blur-md">
      <nav className="flex flex-col gap-1">
        {SIDEBAR.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center justify-between rounded-[14px] px-4 py-3 text-[15px] transition-all duration-200 ${
                isActive
                  ? 'bg-black/[0.06] font-semibold text-[#1d1d1f]' // 채도 낮은 그레이로 활성화 표시
                  : 'text-[#86868b] hover:bg-black/[0.03] hover:text-[#1d1d1f]'
              }`
            }
          >
            <span>{item.label}</span>
            {/* 우측 인디케이터: 인디고 대신 시스템 블루 사용 */}
            <div
              className={`h-1 w-1 scale-0 rounded-full bg-[#0066cc] transition-transform duration-300 group-[.active]:scale-100`}
            />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SidebarMenu;
