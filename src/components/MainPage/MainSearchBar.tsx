import { useState, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useShoppingResearchMutation from '@/hooks/mutations/useShoppingResearchMutation';
import { PATH } from '@/routes/path';

const OPTIONS = ['통합 검색', 'LLM 검색', '쇼핑 리서치'] as const;
type Option = (typeof OPTIONS)[number];

const OPTION_TO_TYPE = {
  '통합 검색': 'unified',
  'LLM 검색': 'llm',
  '쇼핑 리서치': 'shopping-research',
} as const;

const TYPING_PHRASES = [
  '편집용 고사양 노트북 추천해줘',
  '예산 150만원의 가성비 PC가 필요해',
  '조용한 사무실용 기계식 키보드 찾아줘',
];

const MainSearchBar = () => {
  const navigate = useNavigate();
  const shoppingResearchMutation = useShoppingResearchMutation();

  const [query, setQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>('쇼핑 리서치');

  /** 타이핑 애니메이션 (기존 유지) */
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let timeout: number;
    const currentPhrase = TYPING_PHRASES[phraseIndex];

    if (isTyping && charIndex < currentPhrase.length) {
      timeout = window.setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (isTyping && charIndex === currentPhrase.length) {
      timeout = window.setTimeout(() => setIsTyping(false), 2000);
    } else if (!isTyping && charIndex > 0) {
      timeout = window.setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (!isTyping && charIndex === 0) {
      timeout = window.setTimeout(() => {
        setIsTyping(true);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, phraseIndex]);

  /** 🔥 핵심: 검색 실행 */
  const handleSearch = () => {
    if (!query.trim()) return;

    const searchType = OPTION_TO_TYPE[selectedOption];

    // ✅ 통합 검색: 상품 리스트 페이지로 이동
    if (searchType === 'unified') {
      navigate(`${PATH.PRODUCT_LIST}?q=${encodeURIComponent(query)}`);
      return;
    }

    // LLM 검색
    if (searchType === 'llm') {
      navigate(`${PATH.LLM_SEARCH_RESULT}?q=${encodeURIComponent(query)}`);
      return;
    }

    // 쇼핑 리서치
    if (searchType === 'shopping-research') {
      shoppingResearchMutation.mutate(
        { user_query: query },
        {
          onSuccess: (data) => {
            navigate(PATH.SHOPPING_RESEARCH, {
              state: {
                userQuery: query,
                questions: data.questions,
                searchId: data.search_id,
              },
            });
          },
          onError: (err) => {
            console.error('쇼핑 리서치 실패', err);
          },
        },
      );
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative flex flex-col gap-4 rounded-[32px] bg-white/80 p-4 shadow-xl backdrop-blur-xl">
        {/* 옵션 선택 */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold"
          >
            {selectedOption}
            <ChevronDown
              className={`h-3 w-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute mt-2 w-40 rounded-xl bg-white shadow-lg"
              >
                {OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedOption(option);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-3 text-left text-xs hover:bg-gray-50"
                  >
                    {option}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 입력 */}
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSearch();
            }
          }}
          placeholder={`${displayedText}|`}
          className="h-36 resize-none bg-transparent text-3xl outline-none"
        />

        <button
          onClick={handleSearch}
          disabled={!query.trim()}
          className="flex h-12 w-12 items-center justify-center self-end rounded-full bg-black text-white transition-opacity disabled:opacity-50"
        >
          <Search />
        </button>
      </div>
    </div>
  );
};

export default MainSearchBar;
