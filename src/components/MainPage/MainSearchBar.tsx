import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const MainSearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'통합 검색' | 'LLM 검색' | '쇼핑 리서치'>(
    '통합 검색',
  );

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative rounded-full border border-gray-200 bg-white shadow-lg">
        <div className="flex items-center overflow-hidden rounded-full">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-6 py-4 text-sm text-[#4A4A4A] transition-colors hover:text-[#1A1A1A]"
            >
              <span>{selectedOption}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          <div className="h-6 w-px bg-[#E0E0E0]" aria-hidden="true" />
          <div className="flex flex-1 items-center gap-3 px-6">
            <Search className="h-5 w-5 shrink-0 text-[#4A4A4A]" />
            <input
              type="text"
              placeholder="모델명 혹은 '영상 편집용 200만원대 견적'을 입력하세요"
              className="flex-1 py-4 text-sm outline-none placeholder:text-[#A0A0A0]"
            />
          </div>
          <button className="m-1 rounded-full bg-cyan-500 px-8 py-4 font-medium text-white transition-colors hover:bg-cyan-600">
            검색
          </button>
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 z-20 mt-2 w-40 overflow-hidden rounded-xl border border-[#E0E0E0] bg-white shadow-lg">
            {(['통합 검색', 'LLM 검색', '쇼핑 리서치'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setSelectedOption(option);
                  setIsDropdownOpen(false);
                }}
                className={`flex w-full items-center px-4 py-3 text-left text-sm transition-colors ${
                  selectedOption === option
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
  );
};

export default MainSearchBar;
