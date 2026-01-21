export const CATEGORY_ITEMS = [
  '디스플레이',
  '프로세서',
  '그래픽카드',
  '메모리',
  '스토리지',
  '파워서플라이',
  '케이스',
];

const Category = () => {
  return (
    <nav className="hidden items-center justify-center space-x-8 md:flex">
      {CATEGORY_ITEMS.map((item) => (
        <a
          key={item}
          href="#"
          className="relative text-[12px] font-normal tracking-tight text-[#1d1d1f]/80 transition-all duration-300 hover:text-[#1d1d1f]"
        >
          {/* 애플 스타일 핵심:
              1. 폰트 크기를 줄이고(12px) 자간을 조밀하게(tracking-tight).
              2. 기본 상태는 약간의 투명도(opacity 80%)를 부여.
              3. 호버 시 색상이 아닌 투명도가 선명해지는 방식.
              4. 화려한 언더라인 애니메이션 제거 (미니멀리즘 유지).
          */}
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Category;
