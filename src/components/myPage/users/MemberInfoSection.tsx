import ProfileImage from './ProfileImage';
import InfoRow from './InfoRow';

interface MemberInfoSectionProps {
  userId: string;
}

const MemberInfoSection = ({ userId }: MemberInfoSectionProps) => {
  return (
    <div className="mb-8">
      <div className="mb-6 flex items-center gap-4">
        <ProfileImage />
        <div>
          <h2 className="text-xl font-bold text-gray-900">회원탈퇴</h2>
        </div>
      </div>

      <div className="bg-white">
        <InfoRow label="회원 유형" value="개인회원" />
        <InfoRow label="회원 등급" value="일반" />
        <InfoRow label="적립 포인트" value="0" />
        <InfoRow label="보유 쿠폰" value="0" />
      </div>
    </div>
  );
};

export default MemberInfoSection;
