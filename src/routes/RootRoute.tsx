import GlobalLayout from '@/components/layout/GlobalLayout';
import MainPage from '@/pages/MainPage';
import { PATH } from '@/routes/path';
import { Route, Routes } from 'react-router-dom';

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path={PATH.ROOT} element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
