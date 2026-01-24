import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import useLogInMutation from '@/hooks/mutations/useLogInMutation';
import { PATH } from '@/routes/path';

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogInMutation();

  const handleLogin = (email: string, password: string) => {
    login(
      { email, password },
      {
        onSuccess: () => {
          navigate(PATH.ROOT);
        },
      },
    );
  };

  return <LoginForm onSubmit={handleLogin} loading={isPending} />;
};

export default LoginPage;
