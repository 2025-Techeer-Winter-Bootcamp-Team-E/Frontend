import { SIDEBAR } from '@/constants/sidebar';
import { NavLink } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    /* 툴팁이 삐져나올 수 있도록 overflow-hidden을 제거합니다. */
    <div className="rounded-lg border border-gray-200 bg-white">
      {Object.entries(SIDEBAR).map(([category, items], index) => (
        <div key={category} className={index !== 0 ? 'border-t border-gray-100' : ''}>
          <div className="mt-2 px-4 py-3">
            <h3 className="text-xs font-medium tracking-wider text-gray-400 uppercase">
              {category}
            </h3>
          </div>

          <nav className="space-y-1 px-2 pb-3">
            {items.map((item) => {
              if (!item.enabled) {
                return (
                  /* 1. 글씨 색상은 기존 text-gray-700 유지 */
                  <div
                    key={item.label}
                    className="group relative flex cursor-default items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <span>{item.label}</span>
                  </div>
                );
              }

              return (
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
              );
            })}
          </nav>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
