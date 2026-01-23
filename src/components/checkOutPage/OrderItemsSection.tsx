import { Package } from 'lucide-react';
import OrderItem from '@/components/checkOutPage/OrderItem';
import SectionHeader from '@/components/checkOutPage/SectionHeader';
import type { BuyItemEntity } from '@/types/ordersType';

const OrderItemsSection = ({ items }: { items: BuyItemEntity[] }) => {
  return (
    <div className="mb-8 overflow-hidden rounded-[2.5rem] border border-black/2 bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
      <div className="mb-8">
        <SectionHeader icon={Package} title={`주문 상품 (${items.length})`} />
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderItemsSection;
