import SidebarMenu from '@/components/myPage/SidebarMenu';
import UserProfile from '@/components/myPage/UserProfile';
import { Outlet } from 'react-router-dom';

const MyPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] selection:bg-[#0066cc]/10">
      <div className="mx-auto max-w-[1200px] px-8 py-20">
        {/* 헤더 섹션: 좌측 정렬로 통일감 부여 */}
        <header className="mb-16 max-w-[600px]">
          <h1 className="text-[40px] font-bold tracking-tight text-[#1d1d1f]">마이페이지</h1>
          <p className="mt-3 text-[19px] leading-relaxed tracking-tight text-[#86868b]">
            계정 활동을 확인하고 선호하는 설정을 맞춤화하세요.
          </p>
        </header>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* 좌측 사이드 바: 프로필과 메뉴를 하나의 논리적 그룹으로 묶음 */}
          <aside className="w-full space-y-6 lg:w-[280px] lg:flex-shrink-0">
            <UserProfile />
            <SidebarMenu />
          </aside>

          {/* 우측 콘텐츠: '캔버스' 느낌의 넓은 영역 */}
          <main className="flex-1">
            <div className="min-h-[700px] overflow-hidden rounded-[32px] border border-black/[0.04] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.02)] transition-all">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default MyPage;
