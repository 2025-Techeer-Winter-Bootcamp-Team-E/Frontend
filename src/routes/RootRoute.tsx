import GlobalLayout from '@/components/layout/GlobalLayout';
import MyReviewList from '@/components/myPage/reviews/MyReviewList';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/MyPage';
import SignupPage from '@/pages/SignupPage';
import { PATH } from '@/routes/path';
import { Navigate, Route, Routes } from 'react-router-dom';
import CardItemList from '@/components/myPage/CardItemList';
import MyTimerGrid from '@/components/myPage/timer/MyTimerGrid';
import WithdrawalPage from '@/components/myPage/users/WithdrawalPage';

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path={PATH.ROOT} element={<MainPage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.SIGNUP} element={<SignupPage />} />
        <Route path={PATH.MY_PAGE} element={<MyPage />}>
          <Route index element={<Navigate to={PATH.WISHLIST} replace />} />
          <Route path={PATH.WISHLIST} element={<CardItemList />} />
          <Route path={PATH.RECENT} element={<CardItemList />} />
          <Route path={PATH.TIMER} element={<MyTimerGrid />} />
          <Route path={PATH.MYREVIEW} element={<MyReviewList />} />
          <Route path={PATH.WITHDRAW} element={<WithdrawalPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RootRoute;
