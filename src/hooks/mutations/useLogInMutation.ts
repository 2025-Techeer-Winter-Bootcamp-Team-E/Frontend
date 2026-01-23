import { postUsersLogin } from '@/api/users';
import { QUERY_KEY } from '@/constants/queryKey';
import type { UserLoginReqDto, UsersLoginResDto } from '@/types/usersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useLogInMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<UsersLoginResDto, Error, UserLoginReqDto>({
    mutationFn: postUsersLogin,
    onSuccess: ({ user_id, access_token, refresh_token }) => {
      localStorage.setItem('user_id', String(user_id));
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      void queryClient.invalidateQueries({ queryKey: QUERY_KEY.USERS });
    },
  });
};

export default useLogInMutation;
