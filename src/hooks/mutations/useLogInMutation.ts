import { postUsersLogin } from '@/api/users';
import { QUERY_KEY } from '@/constants/queryKey';
import type { UsersLoginReqDto, UsersLoginResDto } from '@/types/usersType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useLogInMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UsersLoginResDto, Error, UsersLoginReqDto>({
    mutationFn: (body: UsersLoginReqDto) => postUsersLogin(body),
    onSuccess: (data) => {
      localStorage.setItem('user_id', String(data.user_id));
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);

      void queryClient.invalidateQueries({
        queryKey: QUERY_KEY.USERS,
      });
    },
  });
};

export default useLogInMutation;
