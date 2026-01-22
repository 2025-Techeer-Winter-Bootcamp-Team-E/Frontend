import { Link } from 'react-router-dom';
import { PATH } from '@/routes/path';

interface SubCategory {
  id: string;
  name: string;
}

interface Props {
  mainCategoryId: string;
  subCategories: SubCategory[];
  onClose: () => void; // 닫기 요청 함수 추가
}

const SubCategoryDropdown = ({ mainCategoryId, subCategories, onClose }: Props) => {
  return (
    <div className="animate-in fade-in slide-in-from-top-4 absolute inset-x-0 top-[48px] z-50 w-full duration-300">
      <div className="border-b border-black/[0.05] bg-white/85 shadow-[0_40px_80px_rgba(0,0,0,0.06)] backdrop-blur-[32px]">
        <div className="mx-auto max-w-[980px] px-12 py-12">
          <ul className="grid grid-cols-4 gap-x-16 gap-y-4">
            {subCategories.map((sub) => (
              <li key={sub.id}>
                <Link
                  to={`${PATH.PRODUCT_LIST}?main_cat=${mainCategoryId}&sub_cat=${sub.id}`}
                  onClick={onClose}
                  className="group block py-1"
                >
                  <span className="text-[17px] font-semibold tracking-tight transition-colors group-hover:text-[#86868b]">
                    {sub.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-screen w-full bg-black/[0.1] backdrop-blur-[2px]" onClick={onClose} />
    </div>
  );
};

export default SubCategoryDropdown;
