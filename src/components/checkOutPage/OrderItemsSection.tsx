import { Package } from 'lucide-react';
import OrderItem from '@/components/checkOutPage/OrderItem';
import SectionHeader from '@/components/checkOutPage/SectionHeader';

type CartItem = {
  id: number;
  product_id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

// 주문 상품 섹션
const OrderItemsSection = ({ items }: { items: CartItem[] }) => {
  return (
    <div className="mb-8 rounded-2xl border border-[#F3F4F6] bg-white p-8 shadow-sm">
      <SectionHeader icon={Package} title={`주문 상품 (${items.length}건)`} />
      <div className="space-y-6">
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderItemsSection;
