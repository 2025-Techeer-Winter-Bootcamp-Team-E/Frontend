import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useSearchRecentQuery from '@/hooks/queries/useSearchRecentQuery';
import useSearchPopularQuery from '@/hooks/queries/useSearchPopularQuery';
import useAutocompleteQuery from '@/hooks/queries/useAutocompleteQuery';
import useDebounce from '@/hooks/useDebounce';
import useSearchRecentDeleteMutation from '@/hooks/mutations/useSearchRecentDeleteMutation';
import useShoppingResearchMutation from '@/hooks/mutations/useShoppingResearchMutation';
import { PATH } from '@/routes/path';
import { SEARCH_TYPES, type SearchModeId, type SearchType } from '@/constants/searchMode';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialType?: SearchModeId;
};

const SearchModal = ({ isOpen, onClose, initialType = 'llm' }: SearchModalProps) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [selectedType, setSelectedType] = useState<SearchType>(
    SEARCH_TYPES.find((type) => type.id === initialType) || SEARCH_TYPES[0],
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const debouncedKeyword = useDebounce(keyword, 300);

  const { data: recentData } = useSearchRecentQuery(isOpen);
  const recentSearches = recentData?.recent_terms || [];

  const { data: popularData } = useSearchPopularQuery(isOpen);
  const popularSearches = popularData?.popular_terms.map((item) => item.term) || [];

  const { data: autoCompleteData } = useAutocompleteQuery(debouncedKeyword);
  const suggestions = autoCompleteData?.suggestions || [];
  const showAutocomplete = keyword.trim().length > 0 && suggestions.length > 0;

  const { mutate: deleteRecent } = useSearchRecentDeleteMutation();
  const shoppingResearchMutation = useShoppingResearchMutation();

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setKeyword('');
        setIsDropdownOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (initialType) {
      const type = SEARCH_TYPES.find((t) => t.id === initialType);
      if (type) setSelectedType(type);
    }
  }, [initialType]);

  const handleSearch = (
    query: string = keyword,
    searchType: SearchType['id'] = selectedType.id,
  ) => {
    if (!query.trim()) return;

    switch (searchType) {
      case 'llm':
        navigate(`${PATH.LLM_SEARCH_RESULT}?q=${encodeURIComponent(query)}`);
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

  const handleQuickSearch = (term: string) => {
    setKeyword(term);
    handleSearch(term);
  };

  const modalContent = (
    <div
      className={`fixed inset-0 z-9999 transition-all duration-500 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-[#f5f5f7]/80 backdrop-blur-2xl" onClick={onClose} />
      <div
        className={`relative mx-auto max-w-3xl pt-[10vh] transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6">
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.1)] ring-1 ring-black/5 backdrop-blur-md">
            <div className="flex items-center gap-4 border-b border-black/5 px-6 py-5">
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
                placeholder="검색어를 입력하세요"
                className="flex-1 bg-transparent text-[19px] font-medium tracking-tight text-[#1d1d1f] outline-none placeholder:text-[#d2d2d7]"
              />

              <button onClick={onClose} className="rounded-full p-1 hover:bg-black/5">
                <X className="h-5 w-5 text-[#86868b]" />
              </button>
            </div>
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
                              onClick={() => handleQuickSearch(item.term)}
                              className="flex-1 text-left text-[14px] font-medium text-[#1d1d1f]"
                            >
                              {item.term}
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteRecent(item.id);
                              }}
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
                  <div>
                    <p className="mb-4 px-3 text-[11px] font-bold tracking-wider text-[#86868b] uppercase">
                      Trending Now
                    </p>
                    <div className="space-y-1">
                      {popularSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickSearch(search)}
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

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(modalContent, modalRoot);
};

export default SearchModal;
