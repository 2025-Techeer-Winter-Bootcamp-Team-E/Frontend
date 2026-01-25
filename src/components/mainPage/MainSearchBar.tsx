import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useShoppingResearchMutation from '@/hooks/mutations/useShoppingResearchMutation';
import { PATH } from '@/routes/path';

const TYPING_PHRASES = [
  '편집용 고사양 노트북 추천해줘',
  '예산 150만원의 가성비 PC가 필요해',
  '조용한 사무실용 기계식 키보드 찾아줘',
];

const MainSearchBar = () => {
  const navigate = useNavigate();
  const shoppingResearchMutation = useShoppingResearchMutation();

  const [query, setQuery] = useState('');
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

  const handleSearch = () => {
    if (!query.trim()) return;

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
        onError: (err) => {
          console.error('쇼핑 리서치 실패', err);
        },
      },
    );
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative flex flex-col gap-4 rounded-4xl bg-white/80 p-4 shadow-xl backdrop-blur-xl">
        <div className="flex w-24 items-center justify-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold">
          쇼핑 리서치
        </div>
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
