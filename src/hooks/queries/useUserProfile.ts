import { getUserProfile } from '@/api/users';
import { QUERY_KEY } from '@/constants/queryKey';
import type { UserProfileResDto } from '@/types/usersType';
import { useQuery } from '@tanstack/react-query';

const useUserProfile = () => {
  return useQuery<UserProfileResDto>({
    queryKey: QUERY_KEY.USERS,
    queryFn: getUserProfile,
  });
};

export default useUserProfile;
