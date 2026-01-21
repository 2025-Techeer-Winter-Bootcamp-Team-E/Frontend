import SidebarMenu from '@/components/myPage/SidebarMenu';
import UserProfile from '@/components/myPage/UserProfile';
import { Outlet } from 'react-router-dom';

const MyPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfe]">
      {' '}
      {/* 더 맑은 느낌의 배경색 */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 px-2">
          <h1 className="text-3xl font-black text-gray-900">마이페이지</h1>
          <p className="mt-2 text-gray-500">나의 활동과 설정을 관리하세요.</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-1">
            <UserProfile />
            <SidebarMenu />
          </div>
          <div className="lg:col-span-3">
            {/* 우측 콘텐츠 영역을 감싸는 컨테이너 디자인 (필요 시) */}
            <div className="min-h-[600px] rounded-[32px] border border-gray-100 shadow-sm">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
