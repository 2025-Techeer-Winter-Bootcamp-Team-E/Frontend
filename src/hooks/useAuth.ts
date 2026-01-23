import { PATH } from '@/routes/path';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem('use_id');
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');

  const isAuthenticated = !!(userId && accessToken && refreshToken);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATH.LOGIN);
    }
  }, [isAuthenticated, navigate]);

  return { userId, accessToken, isAuthenticated };
};

export default useAuth;
