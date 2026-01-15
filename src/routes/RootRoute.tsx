import GlobalLayout from '@/components/layout/GlobalLayout';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import SignupPage from '@/pages/SignupPage';
import { PATH } from '@/routes/path';
import { Route, Routes } from 'react-router-dom';

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path={PATH.ROOT} element={<MainPage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.SIGNUP} element={<SignupPage />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
