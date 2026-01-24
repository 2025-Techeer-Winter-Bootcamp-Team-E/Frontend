import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/routes/path';
import useAuth from './useAuth';

const useRequireAuth = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userId, accessToken, refreshToken } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATH.LOGIN);
    }
  }, [isAuthenticated, navigate]);

  return { userId, accessToken, refreshToken, isAuthenticated };
};

export default useRequireAuth;