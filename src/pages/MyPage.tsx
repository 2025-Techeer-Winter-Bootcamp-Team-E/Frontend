import SidebarMenu from '@/components/myPage/SidebarMenu';
import UserProfile from '@/components/myPage/UserProfile';
import { Outlet } from 'react-router-dom';

const MyPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] selection:bg-[#0066cc]/10">
      <div className="mx-auto max-w-300 px-8 py-20">
        <header className="mb-16 max-w-150">
          <h1 className="text-[40px] font-bold tracking-tight text-[#1d1d1f]">마이페이지</h1>
          <p className="mt-3 text-[19px] leading-relaxed tracking-tight text-[#86868b]">
            계정 활동을 확인하고 선호하는 설정을 맞춤화하세요.
          </p>
        </header>

        <div className="flex flex-col gap-12 lg:flex-row">
          <aside className="w-full space-y-6 lg:w-70 lg:shrink-0">
            <UserProfile />
            <SidebarMenu />
          </aside>
          <main className="flex-1">
            <div className="min-h-175 overflow-hidden rounded-4xl border border-black/4 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.02)] transition-all">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default MyPage;
