import { postUsersSignUp } from '@/api/users';
import type { UserSignUpReqDto, UserSignUpResDto } from '@/types/usersType';
import { useMutation } from '@tanstack/react-query';

const useSignUpMutation = () =>
  useMutation<UserSignUpResDto, Error, UserSignUpReqDto>({
    mutationFn: postUsersSignUp,
  });

export default useSignUpMutation;
