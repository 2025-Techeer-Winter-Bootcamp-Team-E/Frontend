import { postUsersSignUp } from '@/api/users';
import type { UsersSignUpReqDto, UsersSignUpResDto } from '@/types/usersType';
import { useMutation } from '@tanstack/react-query';

const useSignUpMutation = () => {
  return useMutation<UsersSignUpResDto, Error, UsersSignUpReqDto>({
    mutationFn: postUsersSignUp,
  });
};

export default useSignUpMutation;
