import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';

const GlobalLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
