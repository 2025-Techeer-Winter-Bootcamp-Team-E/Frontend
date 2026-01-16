import { SIDEBAR } from '@/constants/sidebar';
import { NavLink } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    // 전체를 감싸는 하나의 박스
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      {Object.entries(SIDEBAR).map(([category, items], index) => (
        <div
          key={category}
          // 첫 번째 카테고리가 아니면 상단에 구분선 추가
          className={index !== 0 ? 'border-t border-gray-100' : ''}
        >
          {/* 카테고리 제목 영역 */}
          <div className="mt-2 px-4 py-3">
            <h3 className="text-xs font-medium tracking-wider text-gray-400 uppercase">
              {category}
            </h3>
          </div>

          {/* 메뉴 아이템 리스트 */}
          <nav className="px-2 pb-3">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `mb-1 flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-all ${
                    isActive
                      ? 'bg-cyan-50 font-semibold text-cyan-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
