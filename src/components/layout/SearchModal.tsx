import { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronDown, Clock, TrendingUp, XCircle } from 'lucide-react';
import useSearchRecentQuery from '@/hooks/queries/useSearchRecentQuery';
import useSearchPopularQuery from '@/hooks/queries/useSearchPopularQuery';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SEARCH_TYPES = [
  { id: 'unified', label: '통합검색' },
  { id: 'llm', label: 'LLM 검색' },
  { id: 'shopping-research', label: '쇼핑리서치' },
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState(SEARCH_TYPES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: recentData } = useSearchRecentQuery();
  const { data: popularData } = useSearchPopularQuery();

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // 최근 검색어, 인기 검색어 매핑
  const recentSearches = recentData?.recent_terms.map((item) => item.term) || [];
  const popularSearches = popularData?.popular_terms.map((item) => item.term) || [];

  const handleSearch = (query: string = searchQuery) => {
    if (!query.trim()) return;
    onClose();
  };

  const handleDeleteRecent = (term: string) => {
    console.log('삭제:', term);
    // 여기서 실제 삭제 API 호출 가능
  };

  return isOpen ? (
    <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white py-8" onClick={(e) => e.stopPropagation()}>
        <div className="mx-auto max-w-4xl px-4 py-4">
          {/* 검색 input + 타입 드롭다운 */}
          <div className="flex items-center gap-3">
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

            <div className="flex flex-1 items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={`${selectedType.label}에서 검색`}
                  className="w-full rounded-lg bg-gray-100 py-2.5 pr-4 pl-12 text-base outline-none placeholder:text-gray-500 focus:bg-gray-200"
                />
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 최근 검색어 */}
          {recentSearches.length > 0 && (
            <div className="mt-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <h3 className="text-sm font-semibold text-gray-700">최근 검색어</h3>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-50"
                  >
                    <button
                      onClick={() => handleSearch(search)}
                      className="flex-1 text-left text-sm text-gray-700"
                    >
                      {search}
                    </button>
                    <button
                      onClick={() => handleDeleteRecent(search)}
                      className="opacity-0 group-hover:opacity-100"
                      aria-label="삭제"
                    >
                      <XCircle className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 인기 검색어 */}
          {popularSearches.length > 0 && (
            <div className="mt-6">
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
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchModal;
