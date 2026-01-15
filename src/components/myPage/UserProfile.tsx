import { User } from 'lucide-react';
import userProfileData from '@/data/userProfile.json';

const UserProfile = () => {
  const profile = userProfileData;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
      <div className="mb-6 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
          <User className="h-10 w-10 text-gray-400" />
        </div>
      </div>
      <h2 className="mb-2 text-2xl font-bold text-gray-900">{profile.name}</h2>
      <p className="text-sm text-gray-500">{profile.username}</p>
    </div>
  );
};

export default UserProfile;
