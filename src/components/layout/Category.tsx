import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY } from '@/constants/category';
import { PATH } from '@/routes/path';
import SubCategoryDropdown from './SubCategoryDropdown';

const Category = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <nav className="static hidden items-center justify-center space-x-12 md:flex">
      {CATEGORY.map((item) => (
        <div
          key={item.id}
          className="flex h-12 items-center"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Link
            to={`${PATH.PRODUCT_LIST}/?main_cat=${item.id}`}
            onClick={() => setHoveredId(null)}
            className={`relative text-[12px] font-medium tracking-tight transition-all duration-300 ${
              hoveredId === item.id ? 'text-[#1d1d1f]' : 'text-[#1d1d1f]/60'
            }`}
          >
            {item.name}
            <span
              className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#1d1d1f] transition-all duration-300 ${
                hoveredId === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`}
            />
          </Link>

          {hoveredId === item.id && item.subCategories?.length > 0 && (
            <SubCategoryDropdown
              mainCategoryId={item.id}
              subCategories={item.subCategories}
              onClose={() => setHoveredId(null)}
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Category;
