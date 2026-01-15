import { useState } from 'react';
import WishlistItem from './WishlistItem';
import Pagination from './Pagination';
import wishListItemData from '@/data/wishlistItems.json';

const WishlistList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlistItems, setWishlistItems] = useState(wishListItemData);

  const handleRemoveItem = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(wishlistItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = wishlistItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1 className="px-2 pb-4 text-xl font-bold text-gray-900">위시 상품</h1>
      <div className="rounded-xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-6 px-6 py-5">
          {currentItems.length > 0 ? (
            <div className="space-y-4">
              {currentItems.map((item) => (
                <WishlistItem key={item.id} item={item} onRemove={handleRemoveItem} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-400">위시리스트가 비어 있습니다.</p>
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

export default WishlistList;
