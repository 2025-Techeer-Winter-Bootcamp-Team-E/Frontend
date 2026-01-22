import { PATH } from '@/routes/path';
import { Link } from 'react-router-dom';

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
        <Link
          key={item}
          to={`${PATH.PRODUCT_LIST}?main_cat=${encodeURIComponent(item)}`}
          className="relative text-[12px] font-normal tracking-tight text-[#1d1d1f]/80 transition-all duration-300 hover:text-[#1d1d1f]"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default Category;
