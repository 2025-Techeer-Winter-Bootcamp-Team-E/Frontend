const useAuth = () => {
  const userId = localStorage.getItem('user_id');
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');

  const isAuthenticated = !!(userId && accessToken && refreshToken);

  return { userId, accessToken, refreshToken, isAuthenticated };
};

export default useAuth;
