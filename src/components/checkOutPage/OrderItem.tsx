import type { BuyItemEntity } from '@/types/ordersType';

const OrderItem = ({ item }: { item: BuyItemEntity }) => {
  return (
    <div className="flex items-center gap-5 border-b border-[#f5f5f7] py-6 last:border-0">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[1.25rem] border border-black/[0.02] bg-[#f5f5f7]">
        <img
          src={item.image || '/placeholder.png'}
          alt={item.name}
          className="h-full w-full object-contain p-2" // 애플 특유의 여백 있는 상품 이미지
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 truncate text-[15px] font-semibold tracking-tight text-[#1d1d1f]">
          {item.name}
        </h3>
        <p className="text-[13px] font-medium text-[#86868b]">수량 {item.quantity}개</p>
      </div>
      <div className="text-right">
        <p className="text-[16px] font-bold tracking-tight text-[#1d1d1f]">
          {(item.price * item.quantity).toLocaleString()}{' '}
          <span className="text-[12px] font-medium">TK</span>
        </p>
      </div>
    </div>
  );
};
export default OrderItem;
