import { SIDEBAR } from '@/constants/sidebar';
import { NavLink } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-2">
      <nav className="space-y-1">
        {SIDEBAR.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-sm transition-all ${
                isActive
                  ? 'bg-cyan-50 font-semibold text-cyan-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SidebarMenu;
