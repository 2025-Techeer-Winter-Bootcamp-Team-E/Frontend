import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from './Pagination';
import CardItem from './CardItem';
import { PATH } from '@/routes/path';

import wishListData from '@/data/wishlistItems.json';
import recentData from '@/data/recentItems.json';

const CardItemList = () => {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const isWishlist = pathname.includes(PATH.WISHLIST);
  const title = isWishlist ? '위시 상품' : '최근 본 상품';
  const emptyMessage = isWishlist ? '위시리스트가 비어 있습니다.' : '최근 본 상품이 없습니다.';

  const [listItems, setListItems] = useState(isWishlist ? wishListData : recentData);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemoveItem = (id: string) => {
    setListItems((prev) => prev.filter((item) => item.id !== id));
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(listItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = listItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1 className="px-2 pb-4 text-xl font-bold text-gray-900">{title}</h1>

      <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="p-6">
          {currentItems.length > 0 ? (
            <div className="space-y-4">
              {currentItems.map((item) => (
                <CardItem key={item.id} item={item} onRemove={handleRemoveItem} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-400">{emptyMessage}</p>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItemList;
