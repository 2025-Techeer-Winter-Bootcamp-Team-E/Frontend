import { User, Mail } from 'lucide-react';
import useUserProfile from '@/hooks/queries/useUserProfile';

const UserProfile = () => {
  const { data } = useUserProfile();

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-black/[0.05] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
      {/* 배경 장식: 더욱 은은하게 */}
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#F5F5F7] blur-3xl" />

      <div className="relative mb-6 flex justify-center">
        {/* 아이콘 컨테이너: 애플의 'Squircle' 느낌을 극대화 */}
        <div className="flex h-24 w-24 items-center justify-center rounded-[28%] bg-[#F5F5F7] shadow-inner">
          <div className="flex h-20 w-20 items-center justify-center rounded-[26%] bg-white shadow-sm ring-1 ring-black/[0.03]">
            <User className="h-10 w-10 stroke-[1.2] text-[#d2d2d7]" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-[22px] font-bold tracking-tight text-[#1d1d1f]">
          {data?.nickname || '사용자'}
        </h2>
        <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[13px] font-medium text-[#86868b]">
          <Mail className="h-3.5 w-3.5 opacity-60" />
          <span className="tracking-tight tabular-nums">{data?.email || 'example@apple.com'}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
