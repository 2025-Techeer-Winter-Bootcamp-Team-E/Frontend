import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const OPTIONS = ['통합 검색', 'LLM 검색', '쇼핑 리서치'] as const;
type Option = (typeof OPTIONS)[number];

const TYPING_PHRASES = [
  '편집용 고사양 노트북 추천해줘',
  '예산 150만원의 가성비 PC가 필요해',
  '조용한 사무실용 기계식 키보드 찾아줘',
];

const MainSearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>('쇼핑 리서치');

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let timeout: number;
    const currentPhrase = TYPING_PHRASES[phraseIndex];

    if (isTyping && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (isTyping && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    } else if (!isTyping && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (!isTyping && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsTyping(true);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, phraseIndex]);

  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="relative flex flex-col gap-6 rounded-4xl border border-gray-200 bg-white px-10 py-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-200 hover:shadow-[0_16px_50px_rgba(0,0,0,0.16)]">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <span>{selectedOption}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 z-20 mt-2 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              {OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelectedOption(option);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                    selectedOption === option
                      ? 'bg-gray-50 font-medium text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
        <textarea
          placeholder={`${displayedText}|`}
          className="h-36 w-full resize-none bg-transparent py-6 text-4xl font-medium text-gray-900 outline-none placeholder:text-gray-800"
        />
        <button
          type="button"
          className="self-end rounded-full bg-indigo-700 px-8 py-4 text-base font-medium text-white transition-all hover:bg-gray-900 active:scale-[0.97]"
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default MainSearchBar;
