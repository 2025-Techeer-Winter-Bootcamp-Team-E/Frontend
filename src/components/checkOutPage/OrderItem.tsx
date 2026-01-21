import type { BuyItemEntity } from '@/types/ordersType';

const OrderItem = ({ item }: { item: BuyItemEntity }) => {
  return (
    <div className="flex items-center gap-4 border-b border-[#F9FAFB] pt-0 pb-6 last:border-0">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-[#F3F4F6] bg-[#F9FAFB]">
        <img
          src={item.image || '/placeholder.png'}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-sm font-bold text-[#111827]">{item.name}</h3>
        <p className="text-xs font-light text-[#6B7280]">수량 {item.quantity}개</p>
      </div>
      <div className="text-right">
        <p className="text-base font-bold text-[#111827]">
          {(item.price * item.quantity).toLocaleString()} TK
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
