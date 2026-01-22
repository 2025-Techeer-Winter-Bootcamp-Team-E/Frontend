import SidebarMenu from '@/components/myPage/SidebarMenu';
import UserProfile from '@/components/myPage/UserProfile';
import { Outlet } from 'react-router-dom';

const MyPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {' '}
      {/* 애플 표준 배경색 */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="mb-12 px-2">
          <h1 className="text-[34px] font-bold tracking-tight text-[#1d1d1f]">마이페이지</h1>
          <p className="mt-2 text-[17px] tracking-tight text-[#86868b]">
            나의 활동과 설정을 관리하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="space-y-8 lg:col-span-1">
            <UserProfile />
            <SidebarMenu />
          </div>
          <div className="lg:col-span-3">
            {/* 우측 콘텐츠 영역: 컨테이너에 미세한 그림자와 블러 적용 */}
            <div className="min-h-[640px] rounded-[32px] border border-black/[0.05] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
