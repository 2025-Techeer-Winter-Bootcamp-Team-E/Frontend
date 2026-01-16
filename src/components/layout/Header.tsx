import React, { useState } from 'react';
import { ChevronDown, ClockArrowDown, Menu, Search, ShoppingCart, User } from 'lucide-react';
import { PATH } from '@/routes/path';
import { useLocation, useNavigate } from 'react-router-dom';
import Category, { CATEGORY_ITEMS } from '@/components/layout/Category';

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [selectedSearchOption, setSelectedSearchOption] = useState<
    '통합 검색' | 'LLM 검색' | '쇼핑 리서치'
  >('통합 검색');
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === PATH.ROOT;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-cyan-500">COMPAGE</span>
          </div>

          {/* Desktop search bar (메인 페이지 제외) */}
          {!isMainPage && (
            <div className="hidden flex-1 md:block">
              {/* NOTE: dropdown이 잘리지 않게 overflow-hidden은 내부로 */}
              <div className="relative rounded-full border border-gray-200 bg-gray-50">
                <div className="flex items-center overflow-hidden rounded-full">
                  {/* Left - 드롭다운 */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsSearchDropdownOpen((prev) => !prev)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-[#4A4A4A] transition-colors hover:text-[#1A1A1A]"
                      aria-label="검색 타입 선택"
                    >
                      <span className="whitespace-nowrap">{selectedSearchOption}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isSearchDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  <div className="h-5 w-px bg-[#E0E0E0]" aria-hidden="true" />

                  {/* Center - input */}
                  <div className="flex flex-1 items-center gap-2 px-4">
                    <Search className="h-4 w-4 shrink-0 text-gray-400" />
                    <input
                      type="text"
                      placeholder="상품, 카테고리, 브랜드 등을 검색해 보세요"
                      autoComplete="off"
                      className="flex-1 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {isSearchDropdownOpen && (
                  <div className="absolute top-full left-0 z-20 mt-2 w-[160px] overflow-hidden rounded-xl border border-[#E0E0E0] bg-white shadow-lg">
                    {(['통합 검색', 'LLM 검색', '쇼핑 리서치'] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSelectedSearchOption(option);
                          setIsSearchDropdownOpen(false);
                        }}
                        className={`flex w-full items-center px-4 py-3 text-left text-sm transition-colors ${
                          selectedSearchOption === option
                            ? 'bg-gray-50 text-[#1A1A1A]'
                            : 'text-[#4A4A4A] hover:bg-gray-50 hover:text-[#1A1A1A]'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <ClockArrowDown className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              className="rounded-full p-2 hover:bg-gray-100"
              onClick={() => navigate(PATH.CART)}
              aria-label="장바구니"
            >
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

        {/* Mobile search bar (메인 페이지 제외) */}
        {!isMainPage && (
          <div className="mt-3 md:hidden">
            <div className="relative rounded-full border border-gray-200 bg-gray-50">
              <div className="flex items-center overflow-hidden rounded-full">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsSearchDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-[#4A4A4A] transition-colors hover:text-[#1A1A1A]"
                    aria-label="검색 타입 선택"
                  >
                    <span className="whitespace-nowrap">{selectedSearchOption}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isSearchDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                <div className="h-5 w-px bg-[#E0E0E0]" aria-hidden="true" />

                <div className="flex flex-1 items-center gap-2 px-4">
                  <Search className="h-4 w-4 shrink-0 text-gray-400" />
                  <input
                    type="text"
                    placeholder="검색어를 입력해 주세요"
                    autoComplete="off"
                    className="flex-1 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {isSearchDropdownOpen && (
                <div className="absolute top-full left-0 z-20 mt-2 w-[160px] overflow-hidden rounded-xl border border-[#E0E0E0] bg-white shadow-lg">
                  {(['통합 검색', 'LLM 검색', '쇼핑 리서치'] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedSearchOption(option);
                        setIsSearchDropdownOpen(false);
                      }}
                      className={`flex w-full items-center px-4 py-3 text-left text-sm transition-colors ${
                        selectedSearchOption === option
                          ? 'bg-gray-50 text-[#1A1A1A]'
                          : 'text-[#4A4A4A] hover:bg-gray-50 hover:text-[#1A1A1A]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

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
