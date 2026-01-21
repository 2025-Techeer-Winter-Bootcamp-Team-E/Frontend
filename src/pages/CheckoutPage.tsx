import { useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ShippingInfoSection from '@/components/checkOutPage/ShippingInfoSection';
import OrderItemsSection from '@/components/checkOutPage/OrderItemsSection';
import PaymentMethodSection from '@/components/checkOutPage/PaymentMethodSection';
import PaymentSummary from '@/components/checkOutPage/PaymentSumary';
import useCartQuery from '@/hooks/queries/useCartQuery';
import useTokenBalanceQuery from '@/hooks/queries/useTokenBalanceQuery';
import useCheckoutMutation from '@/hooks/mutations/useCheckoutMutation';
import useOrderCheckoutMutation from '@/hooks/mutations/useOrderCheckoutMutation';
import { PATH } from '@/routes/path';
import type { BuyItemEntity } from '@/types/ordersType';
import { useCheckoutItems } from '@/hooks/useCheckoutItems';
import { useOrderSummary } from '@/hooks/useOrderSummary';

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { data: cartData = [] } = useCartQuery();
  const { data: tokenData } = useTokenBalanceQuery();

  const checkoutMutation = useCheckoutMutation();
  const orderCheckoutMutation = useOrderCheckoutMutation();

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

  const mode = (state?.mode as 'cart' | 'direct') ?? 'cart';
  const directItem = state?.directItem as BuyItemEntity | undefined;
  const selectedItemIds = state?.selectedItems as number[] | undefined;

  const orderItems = useCheckoutItems({
    cartData,
    mode,
    directItem,
    selectedItemIds,
  });

  const summary = useOrderSummary(orderItems);

  const availableTokens = tokenData?.current_tokens ?? 0;

  const handleCheckout = useCallback(() => {
    if (!agreed) {
      alert('약관에 동의해주세요.');
      return;
    }

    if (!formData.recipient || !formData.phone || !formData.address) {
      alert('배송지 정보를 모두 입력해주세요.');
      return;
    }

    const onSuccess = () => {
      alert('결제가 완료되었습니다.');
      navigate(PATH.ROOT);
    };

    const onError = (error: unknown) => {
      alert('결제 중 오류가 발생했습니다.');
      console.error(error);
    };

    if (mode === 'direct' && directItem) {
      orderCheckoutMutation.mutate(
        {
          product_code: directItem.product_code,
          quantity: directItem.quantity,
          total_price: summary.total,
        },
        { onSuccess, onError },
      );
      return;
    }

    checkoutMutation.mutate(
      {
        items: orderItems.map((item) => ({
          cart_item_id: item.id,
          quantity: item.quantity,
        })),
        total_price: summary.total,
      },
      { onSuccess, onError },
    );
  }, [
    agreed,
    formData,
    mode,
    directItem,
    orderItems,
    summary.total,
    navigate,
    checkoutMutation,
    orderCheckoutMutation,
  ]);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <h1 className="mb-8 text-[30px] font-black text-[#111827]">주문/결제</h1>
        <div className="flex items-start gap-8">
          <div className="flex-1">
            <ShippingInfoSection formData={formData} setFormData={setFormData} />
            <OrderItemsSection items={orderItems} />
            <PaymentMethodSection availableTokens={availableTokens} totalAmount={summary.total} />
          </div>
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
