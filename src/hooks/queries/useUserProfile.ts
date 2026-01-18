import { getUserProfile } from '@/api/users';
import { QUERY_KEY } from '@/constants/queryKey';
import type { UsersProfile } from '@/types/usersType';
import { useQuery } from '@tanstack/react-query';

const useUserProfile = () => {
  return useQuery<UsersProfile>({
    queryKey: QUERY_KEY.USERS,
    queryFn: getUserProfile,
  });
};

export default useUserProfile;
