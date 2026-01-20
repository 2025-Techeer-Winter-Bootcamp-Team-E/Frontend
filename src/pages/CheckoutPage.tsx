import { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentSummary from '@/components/checkOutPage/PaymentSumary';
import PaymentMethodSection from '@/components/checkOutPage/PaymentMethodSection';
import ShippingInfoSection from '@/components/checkOutPage/ShippingInfoSection';
import OrderItemsSection from '@/components/checkOutPage/OrderItemsSection';
import useCartQuery from '@/hooks/queries/useCartQuery';
import useCheckoutMutation from '@/hooks/mutations/useCheckoutMutation';
import useOrderCheckoutMutation from '@/hooks/mutations/useOrderCheckoutMutation';
import { PATH } from '@/routes/path';

type DirectItem = {
  product_id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: cartData } = useCartQuery();
  const checkoutMutation = useCheckoutMutation(); // 장바구니 결제
  const orderCheckoutMutation = useOrderCheckoutMutation(); // 단일 상품 결제

  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    recipient: '',
    phone: '',
    postalCode: '',
    address: '',
    detailAddress: '',
    deliveryRequest: '',
    deliveryRequestCustom: '',
  });

  // location.state에서 모드와 데이터 추출
  const mode = (location.state?.mode as 'cart' | 'direct') || 'cart';
  const directItem = location.state?.directItem as DirectItem | undefined;
  const selectedItemIds = useMemo(
    () => (location.state?.selectedItems as number[]) || [],
    [location.state?.selectedItems],
  );

  // 장바구니 데이터를 CartItem 형식으로 변환
  const cartItems = useMemo(() => {
    if (!cartData) return [];

    return cartData.map((item) => ({
      id: item.cart_item_id,
      product_id: item.product_code,
      name: item.product_name,
      image: item.product_resentative_image_url,
      quantity: item.quantity,
      price: item.price,
    }));
  }, [cartData]);

  // 주문할 아이템 결정 (모드에 따라)
  const orderItems = useMemo(() => {
    if (mode === 'direct' && directItem) {
      // 직접 구매 모드
      return [
        {
          id: 0, // 직접 구매는 cart_item_id가 없음
          product_id: directItem.product_id,
          name: directItem.name,
          image: directItem.image,
          quantity: directItem.quantity,
          price: directItem.price,
        },
      ];
    }

    // 장바구니 구매 모드
    if (selectedItemIds.length === 0) return cartItems;
    return cartItems.filter((item) => selectedItemIds.includes(item.id));
  }, [mode, directItem, cartItems, selectedItemIds]);

  // 가격 계산
  const calculateSummary = () => {
    const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = 0;
    const shipping = orderItems.length > 0 ? 3000 : 0;
    const bonus = Math.floor(subtotal * 0.01); // 1% 적립
    const total = subtotal - discount + shipping;

    return {
      subtotal,
      discount,
      shipping,
      bonus,
      total,
    };
  };

  const summary = calculateSummary();
  const availableTokens = 5000000;

  const handleCheckout = () => {
    if (!agreed) {
      alert('약관에 동의해주세요.');
      return;
    }

    // 배송지 정보 검증
    if (!formData.recipient || !formData.phone || !formData.address) {
      alert('배송지 정보를 모두 입력해주세요.');
      return;
    }

    if (mode === 'direct' && directItem) {
      // 직접 구매 결제
      const checkoutData = {
        product_id: directItem.product_id,
        quantity: directItem.quantity,
        total_price: summary.total,
      };

      orderCheckoutMutation.mutate(checkoutData, {
        onSuccess: () => {
          alert('결제가 완료되었습니다.');
          navigate(PATH.ROOT);
        },
        onError: (error) => {
          alert('결제 중 오류가 발생했습니다. 다시 시도해주세요.');
          console.error('결제 오류:', error);
        },
      });
    } else {
      // 장바구니 결제
      const checkoutData = {
        items: orderItems.map((item) => ({
          cart_item_id: item.id,
          quantity: item.quantity,
        })),
        total_price: summary.total,
      };

      checkoutMutation.mutate(checkoutData, {
        onSuccess: () => {
          alert('결제가 완료되었습니다.');
          navigate(PATH.ROOT);
        },
        onError: (error) => {
          alert('결제 중 오류가 발생했습니다. 다시 시도해주세요.');
          console.error('결제 오류:', error);
        },
      });
    }
  };

  // 주문 상품이 없으면 에러 표시
  if (orderItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9FAFB]">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="rounded-2xl border border-[#F3F4F6] bg-white p-12 text-center">
            <p className="mb-4 text-[#6B7280]">주문할 상품이 없습니다.</p>
            <button
              onClick={() => navigate(PATH.ROOT)}
              className="rounded-lg bg-[#0D9DDA] px-6 py-3 text-white transition-colors hover:bg-[#0b8bc4]"
            >
              홈으로 이동
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <h1 className="mb-8 text-[30px] leading-9 font-black text-[#111827]">주문/결제</h1>

        <div className="flex items-start gap-8">
          {/* 왼쪽: 폼 섹션 */}
          <div className="min-w-0 flex-1">
            <ShippingInfoSection formData={formData} setFormData={setFormData} />
            <OrderItemsSection items={orderItems} />
            <PaymentMethodSection availableTokens={availableTokens} totalAmount={summary.total} />
          </div>

          {/* 오른쪽: 결제 요약 */}
          <div className="w-[384px] shrink-0">
            <PaymentSummary
              summary={summary}
              agreed={agreed}
              onAgreeChange={setAgreed}
              onCheckout={handleCheckout}
              isLoading={checkoutMutation.isPending || orderCheckoutMutation.isPending}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
