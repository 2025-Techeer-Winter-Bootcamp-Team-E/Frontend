import { SIDEBAR } from '@/constants/sidebar';
import { NavLink } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <div className="rounded-[24px] border border-gray-100 bg-white p-3 shadow-lg shadow-gray-200/40">
      <nav className="flex flex-col gap-2">
        {SIDEBAR.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition-all duration-300 ${
                isActive
                  ? 'translate-x-1 bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-200'
                  : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'
              }`
            }
          >
            <span>{item.label}</span>
            <div
              className={`h-1.5 w-1.5 scale-0 rounded-full bg-white transition-transform duration-300 group-[.active]:scale-100`}
            />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SidebarMenu;
