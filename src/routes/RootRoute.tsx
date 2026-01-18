import GlobalLayout from '@/components/layout/GlobalLayout';
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
import TokenChargePage from '@/components/myPage/users/TokenChargePage';
import MyTimerGrid from '@/components/myPage/timer/MyTimerGrid';

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
          <Route index element={<Navigate to={PATH.TIMER} replace />} />
          <Route path={PATH.TIMER} element={<MyTimerGrid />} />
          <Route path={PATH.TOKEN} element={<TokenChargePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RootRoute;
