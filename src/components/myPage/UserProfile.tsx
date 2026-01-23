import { Mail } from 'lucide-react';
import useUserProfile from '@/hooks/queries/useUserProfile';

const UserProfile = () => {
  const { data } = useUserProfile();
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#F5F5F7] blur-3xl" />
      <div className="text-center">
        <h2 className="text-[22px] font-bold tracking-tight text-[#1d1d1f]">{data?.nickname}</h2>
        <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[13px] font-medium text-[#86868b]">
          <Mail className="h-3.5 w-3.5 opacity-60" />
          <span className="tracking-tight tabular-nums">{data?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
