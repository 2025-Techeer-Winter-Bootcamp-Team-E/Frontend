import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { PATH } from '@/routes/path';
import { useNavigate } from 'react-router-dom';
import Category, { CATEGORY_ITEMS } from '@/components/layout/Category';
import SearchModal from '@/components/layout/SearchModal';

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-4">
          <div className="flex cursor-pointer items-center" onClick={() => navigate('/')}>
            <span className="text-2xl font-bold text-cyan-500">COMPAGE</span>
          </div>
          <div className="hidden flex-1 justify-center md:flex">
            <Category />
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              className="rounded-full p-2 hover:bg-gray-100"
              aria-label="검색"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5 cursor-pointer text-gray-600" />
            </button>
            <button
              className="rounded-full p-2 hover:bg-gray-100"
              onClick={() => navigate(PATH.CART)}
              aria-label="장바구니"
            >
              <ShoppingCart className="h-5 w-5 cursor-pointer text-gray-600" />
            </button>
            <button
              className="cursor-pointer rounded-full p-2 hover:bg-gray-100"
              onClick={() => navigate(PATH.MY_PAGE)}
              aria-label="마이페이지"
            >
              <User className="h-5 w-5 text-gray-600" />
            </button>
            <button
              className="rounded-full p-2 hover:bg-gray-100 md:hidden"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
              aria-label="카테고리 메뉴 열기"
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        {isMobileNavOpen && (
          <nav className="border-t border-gray-100 py-3 md:hidden">
            <div className="flex flex-wrap justify-between gap-4 px-2">
              {CATEGORY_ITEMS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-700 hover:text-cyan-500"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
