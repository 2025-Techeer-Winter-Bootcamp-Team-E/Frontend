import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronDown, TrendingUp, XCircle } from 'lucide-react';
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
  { id: 'llm', label: 'LLM 검색' },
  { id: 'shopping-research', label: '쇼핑리서치' },
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [selectedType, setSelectedType] = useState<SearchType>(SEARCH_TYPES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const debouncedKeyword = useDebounce(keyword, 300);

  const { data: recentData } = useSearchRecentQuery(isOpen);
  const { data: popularData } = useSearchPopularQuery(isOpen);
  const { data: autoCompleteData } = useAutocompleteQuery(debouncedKeyword);
  const { mutate: deleteRecent } = useSearchRecentDeleteMutation();
  const shoppingResearchMutation = useShoppingResearchMutation();

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 모달이 열릴 때 포커스 및 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // 모달이 닫힐 때 상태 초기화 (애니메이션 완료 후 초기화되도록 약간의 지연)
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
                state: {
                  userQuery: query,
                  questions: data.questions,
                  searchId: data.search_id,
                },
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
      className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* 1. 배경 어두워지는 영역 */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* 2. 상단에서 내려오는 검색창 영역 */}
      <div
        className={`relative transform bg-white shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="flex items-center gap-3">
            {/* 검색 타입 드롭다운 */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                {selectedType.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 z-50 mt-2 w-40 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5">
                  {SEARCH_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        setSelectedType(type);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        selectedType.id === type.id
                          ? 'bg-gray-100 font-medium text-gray-900'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 검색 입력창 */}
            <div className="flex flex-1 items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={`${selectedType.label}에서 검색`}
                  className="w-full rounded-lg bg-gray-100 py-2.5 pr-4 pl-12 text-base outline-none placeholder:text-gray-500 focus:bg-gray-200"
                />
                {keyword && (
                  <button
                    onClick={() => setKeyword('')}
                    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 검색 결과 및 추천 영역 (최대 높이 제한 및 스크롤) */}
          <div className="mt-6 max-h-[60vh] overflow-y-auto">
            {showAutocomplete && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Search className="h-4 w-4 text-gray-500" />
                  <h3 className="text-sm font-semibold text-gray-700">추천 검색어</h3>
                </div>
                <div className="space-y-2">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setKeyword(suggestion);
                        handleSearch(suggestion);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-gray-50"
                    >
                      <Search className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{suggestion}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showRecentAndPopular && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* 최근 검색어 */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold text-gray-700">최근 검색어</h3>
                  <div className="space-y-1">
                    {recentSearches.length > 0 ? (
                      recentSearches.map((item) => (
                        <div
                          key={item.id}
                          className="group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-50"
                        >
                          <button
                            onClick={() => handleSearch(item.term)}
                            className="flex-1 text-left text-sm text-gray-700"
                          >
                            {item.term}
                          </button>
                          <button
                            onClick={() => deleteRecent(item.id)}
                            className="opacity-0 transition-opacity group-hover:opacity-100"
                          >
                            <XCircle className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className="px-3 text-xs text-gray-400">최근 검색어가 없습니다.</p>
                    )}
                  </div>
                </div>

                {/* 인기 검색어 */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-gray-500" />
                    <h3 className="text-sm font-semibold text-gray-700">인기 검색어</h3>
                  </div>
                  <div className="space-y-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-gray-50"
                      >
                        <span className="flex h-5 w-5 items-center justify-center text-xs font-bold text-cyan-500">
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-700">{search}</span>
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
  );
};

export default SearchModal;
