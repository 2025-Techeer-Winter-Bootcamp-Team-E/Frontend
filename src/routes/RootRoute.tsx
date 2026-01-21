import GlobalLayout from '@/components/layout/GlobalLayout';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/MyPage';
import SignupPage from '@/pages/SignupPage';
import ShoppingCartPage from '@/pages/CartPage';
import CheckoutPage from '@/pages/CheckoutPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import LLMSearchResultPage from '@/pages/LLMSearchResultPage';
import ShoppingResearchPage from '@/pages/ShoppingResearchPage';
import ShoppingResearchResultPage from '@/pages/ShoppingResearchResultPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import TokenChargePage from '@/components/myPage/users/TokenChargePage';
import MyTimerGrid from '@/components/myPage/timer/MyTimerGrid';
import { ROUTE_PATH } from '@/routes/path';
import useScrollToTop from '@/hooks/useScrollTop';

const RootRoute = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path={ROUTE_PATH.ROOT} element={<MainPage />} />
        <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_PATH.SIGNUP} element={<SignupPage />} />
        <Route path={ROUTE_PATH.CART} element={<ShoppingCartPage />} />
        <Route path={ROUTE_PATH.CHECKOUT} element={<CheckoutPage />} />

        <Route path={ROUTE_PATH.PRODUCT_DETAIL} element={<ProductDetailPage />} />

        <Route path={ROUTE_PATH.LLM_SEARCH_RESULT} element={<LLMSearchResultPage />} />
        <Route path={ROUTE_PATH.SHOPPING_RESEARCH} element={<ShoppingResearchPage />} />
        <Route
          path={ROUTE_PATH.SHOPPING_RESEARCH_RESULT}
          element={<ShoppingResearchResultPage />}
        />

        <Route path={ROUTE_PATH.MY_PAGE} element={<MyPage />}>
          <Route index element={<Navigate to={ROUTE_PATH.TIMER} replace />} />
          <Route path={ROUTE_PATH.TIMER} element={<MyTimerGrid />} />
          <Route path={ROUTE_PATH.TOKEN} element={<TokenChargePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RootRoute;
