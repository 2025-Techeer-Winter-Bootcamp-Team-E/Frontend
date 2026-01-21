import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useSearchRecentQuery from '@/hooks/queries/useSearchRecentQuery';
import useSearchPopularQuery from '@/hooks/queries/useSearchPopularQuery';
import useAutocompleteQuery from '@/hooks/queries/useAutocompleteQuery';
import useDebounce from '@/hooks/useDebounce';
import useSearchRecentDeleteMutation from '@/hooks/mutations/useSearchRecentDeleteMutation';
import useShoppingResearchMutation from '@/hooks/mutations/useShoppingResearchMutation';
import { PATH } from '@/routes/path';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SearchType = {
  id: 'unified' | 'llm' | 'shopping-research';
  label: string;
};

const SEARCH_TYPES: SearchType[] = [
  { id: 'unified', label: '통합검색' },
  { id: 'llm', label: 'AI 분석 검색' },
  { id: 'shopping-research', label: '쇼핑 리서치' },
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [selectedType, setSelectedType] = useState<SearchType>(SEARCH_TYPES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const debouncedKeyword = useDebounce(keyword, 300);

  // 로직: 첫 번째 코드의 데이터 쿼리 및 뮤테이션 유지
  const { data: recentData } = useSearchRecentQuery(isOpen);
  const { data: popularData } = useSearchPopularQuery(isOpen);
  const { data: autoCompleteData } = useAutocompleteQuery(debouncedKeyword);
  const { mutate: deleteRecent } = useSearchRecentDeleteMutation();
  const shoppingResearchMutation = useShoppingResearchMutation();

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 로직: 모달 오픈 시 포커스 및 스크롤 방지 (첫 번째 코드 방식)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // 로직: 모달 닫힐 때 상태 초기화 지연 (애니메이션 대응)
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setKeyword('');
        setIsDropdownOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const recentSearches = recentData?.recent_terms || [];
  const popularSearches = popularData?.popular_terms.map((item) => item.term) || [];
  const suggestions = autoCompleteData?.suggestions || [];

  // 로직: 첫 번째 코드의 handleSearch 스위치문 유지
  const handleSearch = (query: string = keyword) => {
    if (!query.trim()) return;

    switch (selectedType.id) {
      case 'llm':
        navigate(`${PATH.LLM_SEARCH_RESULT}?q=${encodeURIComponent(query)}`);
        break;
      case 'unified':
        console.log('통합검색:', query);
        break;
      case 'shopping-research':
        shoppingResearchMutation.mutate(
          { user_query: query },
          {
            onSuccess: (data) => {
              navigate(`${PATH.SHOPPING_RESEARCH}?q=${encodeURIComponent(query)}`, {
                state: { userQuery: query, questions: data.questions, searchId: data.search_id },
              });
            },
            onError: (err) => console.error('쇼핑리서치 검색 실패:', err),
          },
        );
        break;
    }
    onClose();
  };

  const showAutocomplete = keyword.trim().length > 0 && suggestions.length > 0;
  const showRecentAndPopular = keyword.trim().length === 0;

  return (
    <div
      className={`fixed inset-0 z-[70] transition-all duration-500 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* 배경 디자인: 애플 스타일 2진 블러 */}
      <div className="absolute inset-0 bg-[#f5f5f7]/80 backdrop-blur-2xl" onClick={onClose} />

      {/* 컨텐츠 디자인: 스포트라이트 스타일 */}
      <div
        className={`relative mx-auto max-w-3xl pt-[10vh] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6">
          <div className="flex flex-col overflow-hidden rounded-[1.5rem] bg-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.1)] ring-1 ring-black/5 backdrop-blur-md">
            {/* 상단 검색바 */}
            <div className="flex items-center gap-4 border-b border-black/[0.05] px-6 py-5">
              <Search className="h-5 w-5 text-[#86868b]" strokeWidth={3} />

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 text-[13px] font-bold text-[#86868b] transition-colors hover:text-[#1d1d1f]"
                >
                  {selectedType.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 z-50 mt-3 w-40 overflow-hidden rounded-2xl bg-white/90 p-1.5 shadow-xl ring-1 ring-black/5 backdrop-blur-lg">
                    {SEARCH_TYPES.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => {
                          setSelectedType(type);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full rounded-xl px-3 py-2 text-left text-[13px] font-medium transition-colors ${
                          selectedType.id === type.id
                            ? 'bg-[#1d1d1f] text-white'
                            : 'text-[#1d1d1f] hover:bg-black/5'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input
                ref={inputRef}
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="검색"
                className="flex-1 bg-transparent text-[19px] font-medium tracking-tight text-[#1d1d1f] outline-none placeholder:text-[#d2d2d7]"
              />
            </div>

            {/* 결과 리스트 영역 */}
            <div className="custom-scrollbar max-h-[60vh] overflow-y-auto px-4 py-6">
              {showAutocomplete ? (
                <div className="space-y-1">
                  <p className="mb-3 px-3 text-[11px] font-bold tracking-wider text-[#86868b] uppercase">
                    Suggestions
                  </p>
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setKeyword(suggestion);
                        handleSearch(suggestion);
                      }}
                      className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 hover:bg-black/5"
                    >
                      <span className="text-[14px] font-medium text-[#1d1d1f]">{suggestion}</span>
                      <ArrowUpRight className="h-4 w-4 text-[#d2d2d7] opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* 최근 검색어 섹션 */}
                  <div>
                    <p className="mb-4 px-3 text-[11px] font-bold tracking-wider text-[#86868b] uppercase">
                      Recent Searches
                    </p>
                    <div className="space-y-1">
                      {recentSearches.length > 0 ? (
                        recentSearches.map((item) => (
                          <div
                            key={item.id}
                            className="group flex items-center justify-between rounded-xl px-3 py-2 hover:bg-black/5"
                          >
                            <button
                              onClick={() => handleSearch(item.term)}
                              className="flex-1 text-left text-[14px] font-medium text-[#1d1d1f]"
                            >
                              {item.term}
                            </button>
                            <button
                              onClick={() => deleteRecent(item.id)}
                              className="opacity-0 transition-opacity group-hover:opacity-100"
                            >
                              <X className="h-3.5 w-3.5 text-[#86868b]" />
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="px-3 text-[13px] text-[#d2d2d7]">최근 검색어가 없습니다.</p>
                      )}
                    </div>
                  </div>

                  {/* 인기 검색어 섹션 */}
                  <div>
                    <p className="mb-4 px-3 text-[11px] font-bold tracking-wider text-[#86868b] uppercase">
                      Trending Now
                    </p>
                    <div className="space-y-1">
                      {popularSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(search)}
                          className="group flex w-full items-center gap-4 rounded-xl px-3 py-2 hover:bg-black/5"
                        >
                          <span className="w-4 text-[13px] font-bold text-[#d2d2d7]">
                            {index + 1}
                          </span>
                          <span className="text-[14px] font-medium text-[#1d1d1f]">{search}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
