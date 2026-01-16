import GlobalLayout from '@/components/layout/GlobalLayout';
import MyReviewList from '@/components/myPage/reviews/MyReviewList';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/MyPage';
import SignupPage from '@/pages/SignupPage';
import ShoppingCartPage from '@/pages/ShoppingCartPage';
import CheckoutPage from '@/pages/CheckoutPage';
import ProductListPage from '@/pages/ProductListPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import LLMSearchResultPage from '@/pages/LLMSearchResultPage';
import ShoppingResearchPage from '@/pages/ShoppingResearchPage';
import ShoppingResearchResultPage from '@/pages/ShoppingResearchResultPage';
import { PATH } from '@/routes/path';
import { Navigate, Route, Routes } from 'react-router-dom';
import CardItemList from '@/components/myPage/CardItemList';
import MyTimerGrid from '@/components/myPage/timer/MyTimerGrid';
import WithdrawalPage from '@/components/myPage/users/WithdrawalPage';
import PasswordChangePage from '@/components/myPage/users/PasswordChangePage';
import TokenChargePage from '@/components/myPage/users/TokenChargePage';

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path={PATH.ROOT} element={<MainPage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.SIGNUP} element={<SignupPage />} />
        <Route path={PATH.CART} element={<ShoppingCartPage />} />
        <Route path={PATH.CHECKOUT} element={<CheckoutPage />} />
        <Route path={PATH.PRODUCT_LIST} element={<ProductListPage />} />
        <Route path={PATH.PRODUCT_DETAIL} element={<ProductDetailPage />} />
        <Route path={PATH.LLM_SEARCH_RESULT} element={<LLMSearchResultPage />} />
        <Route path={PATH.SHOPPING_RESEARCH} element={<ShoppingResearchPage />} />
        <Route path={PATH.SHOPPING_RESEARCH_RESULT} element={<ShoppingResearchResultPage />} />
        <Route path={PATH.MY_PAGE} element={<MyPage />}>
          <Route index element={<Navigate to={PATH.WISHLIST} replace />} />
          <Route path={PATH.WISHLIST} element={<CardItemList />} />
          <Route path={PATH.RECENT} element={<CardItemList />} />
          <Route path={PATH.TIMER} element={<MyTimerGrid />} />
          <Route path={PATH.TOKEN} element={<TokenChargePage />} />
          <Route path={PATH.MYREVIEW} element={<MyReviewList />} />
          <Route path={PATH.INFO} element={<PasswordChangePage />} />
          <Route path={PATH.WITHDRAW} element={<WithdrawalPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RootRoute;
