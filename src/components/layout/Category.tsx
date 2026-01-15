export const CATEGORY_ITEMS = [
  '카테고리',
  '카테고리',
  '카테고리',
  '카테고리',
  '카테고리',
  '카테고리',
  '카테고리',
];

const Category = () => {
  return (
    <nav className="hidden items-center justify-center space-x-8 px-8 py-4 md:flex">
      {CATEGORY_ITEMS.map((item) => (
        <a key={item} href="#" className="text-sm text-gray-700 hover:text-cyan-500">
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Category;
