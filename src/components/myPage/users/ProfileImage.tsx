import { User } from 'lucide-react';

interface ProfileImageProps {
  src?: string;
  alt?: string;
}

const ProfileImage = ({ src, alt = '프로필' }: ProfileImageProps) => {
  return (
    <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-200">
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <User className="h-10 w-10 text-gray-400" />
      )}
    </div>
  );
};

export default ProfileImage;
