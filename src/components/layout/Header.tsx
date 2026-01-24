import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/routes/path';
import Category from '@/components/layout/Category';
import SearchModal from '@/components/layout/SearchModal';
import { CATEGORY } from '@/constants/category';
import useAuth from '@/hooks/useAuth';

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProtectedClick = (path: string) => {
    if (!isAuthenticated) {
      navigate(PATH.LOGIN);
    } else {
      navigate(path);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-sm backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-300 px-6 lg:px-12">
        <div className="flex h-12 items-center justify-between">
          <div
            className="flex cursor-pointer items-center transition-opacity hover:opacity-60"
            onClick={() => navigate('/')}
          >
            <span className="text-[19px] font-semibold tracking-tight text-[#1d1d1f]">CORE.AI</span>
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <Category />
          </div>

          <div className="flex items-center gap-5">
            <button
              className="opacity-80 transition-opacity hover:opacity-100"
              onClick={() => setIsSearchOpen(true)}
              aria-label="검색"
            >
              <Search className="h-4.25 w-4.25 text-[#1d1d1f]" strokeWidth={2.2} />
            </button>

            <button
              className="opacity-80 transition-opacity hover:opacity-100"
              onClick={() => handleProtectedClick(PATH.CART)}
              aria-label="장바구니"
            >
              <ShoppingCart className="h-4.25 w-4.25 text-[#1d1d1f]" strokeWidth={2.2} />
            </button>

            <button
              className="opacity-80 transition-opacity hover:opacity-100"
              onClick={() => handleProtectedClick(PATH.MY_PAGE)}
              aria-label="마이페이지"
            >
              <User className="h-4.25 w-4.25 text-[#1d1d1f]" strokeWidth={2.2} />
            </button>

            <button
              className="rounded-full p-2.5 hover:bg-gray-100 md:hidden"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              {isMobileNavOpen ? (
                <X className="h-5 w-5 text-gray-900" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {isMobileNavOpen && (
          <nav className="animate-in fade-in slide-in-from-top-4 border-t border-gray-50 py-6 md:hidden">
            <div className="grid grid-cols-2 gap-y-4 px-2">
              {CATEGORY.map((item) => (
                <a
                  key={item.id}
                  href={`${PATH.PRODUCT_LIST}?main_cat=${item.name}`}
                  className="text-[15px] font-medium text-gray-600 active:text-indigo-600"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;
