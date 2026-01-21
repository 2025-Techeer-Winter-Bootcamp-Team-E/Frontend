import { User, Mail } from 'lucide-react';
import useUserProfile from '@/hooks/queries/useUserProfile';

const UserProfile = () => {
  const { data } = useUserProfile();

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
      {/* 배경 장식: 보라색 대신 은은한 회색/블루 톤으로 변경 */}
      <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-slate-100/50 blur-2xl" />

      <div className="relative mb-6 flex justify-center">
        {/* 아이콘 컨테이너: 애플 스타일의 부드러운 스쿼클(Squircle)과 미세한 테두리 */}
        <div className="flex h-24 w-24 items-center justify-center rounded-[28%] bg-gradient-to-b from-gray-50 to-gray-100 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.05)]">
          <div className="flex h-20 w-20 items-center justify-center rounded-[26%] bg-white shadow-sm">
            <User className="h-10 w-10 stroke-[1.5] text-slate-400" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {data?.nickname || '사용자'}
        </h2>
        <div className="mt-2 flex items-center justify-center gap-1.5 text-[0.85rem] font-medium text-slate-400/80">
          <Mail className="h-3.5 w-3.5" />
          <span className="tracking-tight tabular-nums">{data?.email || 'example@apple.com'}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
