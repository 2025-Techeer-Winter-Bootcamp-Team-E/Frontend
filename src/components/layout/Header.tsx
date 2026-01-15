import React, { useState } from 'react';
import { ClockArrowDown, Menu, ShoppingCart, User } from 'lucide-react';
import Category, { CATEGORY_ITEMS } from '@/components/layout/Category';

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-cyan-500">COMPAGE</span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <ClockArrowDown className="h-5 w-5 text-gray-600" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </button>
            {/* Mobile menu toggle */}
            <button
              className="rounded-full p-2 hover:bg-gray-100 md:hidden"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
              aria-label="카테고리 메뉴 열기"
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        {/* Desktop category nav */}
        <Category />
        {/* Mobile category nav */}
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
      </div>
    </header>
  );
};

export default Header;
