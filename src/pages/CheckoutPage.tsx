import { useState, useEffect } from 'react';
import { Package, ChevronDown, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import cartData from '@/mocks/data/cart.json';

// 이미지 URL (Figma에서 가져온 이미지)
const imgCpu = 'https://www.figma.com/api/mcp/asset/3d7f7b01-be4e-4564-ba20-a43138863d94';
const imgGpu = 'https://www.figma.com/api/mcp/asset/05117ee6-bf33-411a-ae97-8f2ce01d81a8';
const imgRam = 'https://www.figma.com/api/mcp/asset/a7cb4e5c-563c-478b-b25a-ab5c957b3742';
const imgCheck = 'https://www.figma.com/api/mcp/asset/56383f84-fb8d-4e32-8bad-5e7ca0af445e';
const imgIcon = 'https://www.figma.com/api/mcp/asset/72d7f098-2c36-4524-89a8-962d2f836d0e';
const imgIcon1 = 'https://www.figma.com/api/mcp/asset/f1044adb-a8d0-4b4d-ab80-d5055639d15b';
const imgIcon2 = 'https://www.figma.com/api/mcp/asset/39e7aa25-f57a-40b8-bc9c-f74b0d926774';
const imgIcon3 = 'https://www.figma.com/api/mcp/asset/3fd16674-4f44-47f4-9469-b4a2e8d52a43';
const imgIcon4 = 'https://www.figma.com/api/mcp/asset/20b44c1a-40b0-4d31-bcf0-c862ff70e5bf';
const imgIcon5 = 'https://www.figma.com/api/mcp/asset/94c19181-a7ef-4859-80d7-074990783cb2';

interface CartItem {
  id: number;
  brand: string;
  name: string;
  image: string | null;
  reward: string;
  price: number;
  originalPrice: number | null;
  quantity: number;
}

// 다음 주소 API 타입 선언
declare global {
  interface Window {
    daum: {
      Postcode: new (options: {
        oncomplete: (data: {
          zonecode: string;
          address: string;
          addressEnglish: string;
          addressType: string;
          bname: string;
          buildingName: string;
        }) => void;
        width?: string;
        height?: string;
      }) => {
        open: () => void;
      };
    };
  }
}

// 섹션 헤더 컴포넌트
const SectionHeader = ({
  icon: Icon,
  title,
  actionText,
  onAction,
}: {
  icon: any;
  title: string;
  actionText?: string;
  onAction?: () => void;
}) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="h-6 w-6 text-[#0D9DDA]" />
        <h2 className="text-xl font-bold text-[#111827]">{title}</h2>
      </div>
      {actionText && (
        <button
          onClick={onAction}
          className="text-sm font-medium text-[#0D9DDA] transition-colors hover:text-[#0b8bc4]"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

// 입력 필드 컴포넌트
const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}) => {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-bold text-[#111827]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm font-light text-[#111827] placeholder:text-[#6B7280] focus:border-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 focus:outline-none"
      />
    </div>
  );
};

// 주소 검색 컴포넌트
const AddressSearch = ({
  postalCode,
  address,
  detailAddress,
  onPostalCodeChange,
  onAddressChange,
  onDetailAddressChange,
  onSearch,
}: {
  postalCode: string;
  address: string;
  detailAddress: string;
  onPostalCodeChange: (value: string) => void;
  onAddressChange: (value: string) => void;
  onDetailAddressChange: (value: string) => void;
  onSearch: () => void;
}) => {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-bold text-[#111827]">주소</label>
      <div className="mb-2 flex gap-2">
        <input
          type="text"
          value={postalCode}
          onChange={(e) => onPostalCodeChange(e.target.value)}
          placeholder="06234"
          readOnly
          className="w-32 rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] px-4 py-3 text-sm font-light text-[#6B7280] focus:outline-none"
        />
        <button
          onClick={onSearch}
          className="rounded-lg border border-[#E5E7EB] bg-[#E5E7EB] px-4 py-3 text-sm font-medium text-[#111827] transition-colors hover:bg-[#D1D5DB]"
        >
          주소검색
        </button>
      </div>
      <input
        type="text"
        value={address}
        onChange={(e) => onAddressChange(e.target.value)}
        placeholder="서울특별시 강남구 테헤란로 123"
        readOnly
        className="mb-2 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm font-light text-[#111827] placeholder:text-[#6B7280] focus:border-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 focus:outline-none"
      />
      <input
        type="text"
        value={detailAddress}
        onChange={(e) => onDetailAddressChange(e.target.value)}
        placeholder="4층 401호"
        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm font-light text-[#111827] placeholder:text-[#6B7280] focus:border-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 focus:outline-none"
      />
    </div>
  );
};

// 배송 요청사항 컴포넌트
const DeliveryRequestField = ({
  value,
  customValue,
  onChange,
  onCustomChange,
}: {
  value: string;
  customValue: string;
  onChange: (value: string) => void;
  onCustomChange: (value: string) => void;
}) => {
  const options = [
    { value: '', label: '배송 시 요청 사항을 선택하세요' },
    { value: 'contact', label: '배송 전 미리 연락바랍니다.' },
    { value: 'door', label: '문앞에 놓아주세요' },
    { value: 'security', label: '경비실에 맡겨주세요' },
    { value: 'phone', label: '배송 전 연락주세요' },
    { value: 'direct', label: '직접 받겠습니다' },
    { value: 'custom', label: '직접 입력' },
  ];

  const isCustom = value === 'custom';

  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-bold text-[#111827]">배송 요청사항</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-[42px] w-full appearance-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 pr-10 text-sm font-light text-[#111827] focus:border-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 focus:outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-[#6B7280]" />
      </div>
      {isCustom && (
        <input
          type="text"
          value={customValue}
          onChange={(e) => onCustomChange(e.target.value)}
          placeholder="배송 요청사항을 입력하세요"
          className="mt-2 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm font-light text-[#111827] placeholder:text-[#6B7280] focus:border-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 focus:outline-none"
        />
      )}
    </div>
  );
};

// 배송지 정보 섹션
const ShippingInfoSection = ({
  formData,
  setFormData,
}: {
  formData: {
    recipient: string;
    phone: string;
    postalCode: string;
    address: string;
    detailAddress: string;
    deliveryRequest: string;
    deliveryRequestCustom: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const handlePostalSearch = () => {
    if (!window.daum) {
      // 다음 주소 API 스크립트 로드
      const script = document.createElement('script');
      script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
      script.onload = () => {
        openPostcode();
      };
      document.body.appendChild(script);
    } else {
      openPostcode();
    }
  };

  const openPostcode = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setFormData((prev: any) => ({
          ...prev,
          postalCode: data.zonecode,
          address: data.address,
        }));
      },
      width: '100%',
      height: '100%',
    }).open();
  };

  return (
    <div className="mb-8 rounded-2xl border border-[#F3F4F6] bg-white p-8 shadow-sm">
      <SectionHeader icon={Package} title="배송지 정보" actionText="배송지 목록" />

      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="수령인"
          value={formData.recipient}
          onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
          placeholder="홍길동"
        />
        <InputField
          label="연락처"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="010-1234-5678"
        />
      </div>

      <AddressSearch
        postalCode={formData.postalCode}
        address={formData.address}
        detailAddress={formData.detailAddress}
        onPostalCodeChange={(value) => setFormData({ ...formData, postalCode: value })}
        onAddressChange={(value) => setFormData({ ...formData, address: value })}
        onDetailAddressChange={(value) => setFormData({ ...formData, detailAddress: value })}
        onSearch={handlePostalSearch}
      />

      <DeliveryRequestField
        value={formData.deliveryRequest}
        customValue={formData.deliveryRequestCustom}
        onChange={(value) => setFormData({ ...formData, deliveryRequest: value })}
        onCustomChange={(value) => setFormData({ ...formData, deliveryRequestCustom: value })}
      />
    </div>
  );
};

// 주문 상품 아이템 컴포넌트
const OrderItem = ({ item }: { item: CartItem }) => {
  const getImage = () => {
    if (item.image) return item.image;
    // 브랜드별 기본 이미지
    if (item.brand === 'INTEL') return imgCpu;
    if (item.brand === 'ASUS') return imgGpu;
    if (item.brand === 'SAMSUNG') return imgRam;
    return '/placeholder.png';
  };

  const shippingText = item.reward.includes('무료배송')
    ? '무료배송'
    : item.reward.includes('TK')
      ? `배송비 ${item.reward.match(/\d+/)?.[0]} TK`
      : item.reward;

  return (
    <div className="flex items-center gap-4 border-b border-[#F9FAFB] pt-0 pb-6 last:border-0">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-[#F3F4F6] bg-[#F9FAFB]">
        <img src={getImage()} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-sm font-bold text-[#111827]">{item.name}</h3>
        <p className="text-xs font-light text-[#6B7280]">
          수량 {item.quantity}개 / {shippingText}
        </p>
      </div>
      <div className="text-right">
        <p className="text-base font-bold text-[#111827]">
          {(item.price * item.quantity).toLocaleString()} TK
        </p>
      </div>
    </div>
  );
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

// 결제 방법 섹션
const PaymentMethodSection = ({
  availableTokens,
  totalAmount,
}: {
  availableTokens: number;
  totalAmount: number;
}) => {
  const remainingBalance = availableTokens - totalAmount;

  return (
    <div className="mb-8 rounded-2xl border-2 border-[#0D9DDA] bg-[rgba(239,246,255,0.3)] p-6">
      <div className="mb-6 flex items-center gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D9DDA] shadow-lg">
          <img src={imgIcon3} alt="token" className="h-9 w-8 rotate-180" />
        </div>
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="text-lg font-black text-[#0D9DDA]">내 토큰 결제 (My Token Payment)</h3>
            <span className="rounded-full bg-[rgba(13,157,218,0.1)] px-2.5 py-0.5 text-xs font-bold text-[#0D9DDA]">
              추천
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium text-[#6B7280]">
              보유 잔액:{' '}
              <span className="font-bold text-[#111827]">
                {availableTokens.toLocaleString()} TK
              </span>
            </span>
            <span className="h-3 w-px bg-[#D1D5DB]"></span>
            <span className="text-xs font-bold text-[#0D9DDA]">
              결제 후 잔액: {remainingBalance.toLocaleString()} TK
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <img src={imgIcon4} alt="check" className="h-9 w-8 rotate-180" />
        </div>
      </div>

      <div className="border-t border-[#DBEAFE] pt-4">
        <button className="flex items-center gap-1.5 rounded-lg border border-[#0D9DDA] bg-white px-4 py-2 text-sm font-bold text-[#0D9DDA] shadow-sm transition-colors hover:bg-[#0D9DDA]/5">
          토큰 충전하기
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-5">
        <div className="space-y-1 text-xs leading-[19.5px] font-light text-[#6B7280]">
          <p>• 토큰 전용 결제 시스템은 외부 쇼핑몰 이동 없이 즉시 결제가 가능합니다.</p>
          <p>• 보유하신 토큰이 부족할 경우 충전 후 이용해 주시기 바랍니다.</p>
          <p>• 결제 완료 후 마이페이지에서 주문 및 디지털 보증서를 확인하실 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
};

// 가격 요약 행 컴포넌트
const PriceSummaryRow = ({
  label,
  amount,
  highlight = false,
  isDiscount = false,
}: {
  label: string;
  amount: number;
  highlight?: boolean;
  isDiscount?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className={`text-sm ${highlight ? 'font-bold' : 'font-light text-[#6B7280]'}`}>
        {label}
      </span>
      <span
        className={`font-bold ${
          highlight
            ? 'text-2xl font-black text-[#0D9DDA]'
            : isDiscount
              ? 'text-[#EF4444]'
              : 'text-[#111827]'
        }`}
      >
        {isDiscount && amount > 0 ? '-' : ''}
        {amount.toLocaleString()} TK
      </span>
    </div>
  );
};

// 결제 요약 사이드바
const PaymentSummary = ({
  summary,
  agreed,
  onAgreeChange,
  onCheckout,
}: {
  summary: {
    subtotal: number;
    discount: number;
    shipping: number;
    bonus: number;
    total: number;
  };
  agreed: boolean;
  onAgreeChange: (value: boolean) => void;
  onCheckout: () => void;
}) => {
  return (
    <div className="sticky top-4 flex flex-col gap-4">
      <div className="overflow-hidden rounded-2xl border border-[#F3F4F6] bg-white shadow-sm">
        {/* 헤더 */}
        <div className="border-b border-[#F9FAFB] px-6 py-6">
          <h3 className="text-lg font-bold text-[#111827]">최종 결제 금액</h3>
        </div>

        {/* 가격 정보 */}
        <div className="space-y-4 px-6 py-6">
          <PriceSummaryRow label="총 상품금액" amount={summary.subtotal} />
          <PriceSummaryRow label="상품 할인" amount={summary.discount} isDiscount />
          <PriceSummaryRow label="배송비" amount={summary.shipping} />
          <PriceSummaryRow label="토큰 보너스 적립" amount={summary.bonus} />
        </div>

        {/* 최종 결제 금액 */}
        <div className="border-t border-[#F9FAFB] px-6 pt-4 pb-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-base font-bold text-[#111827]">결제 예정 금액</span>
            <span className="text-2xl font-black text-[#0D9DDA]">
              {summary.total.toLocaleString()} TK
            </span>
          </div>

          {/* 동의 체크박스 */}
          <label className="mb-6 flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => onAgreeChange(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-[#E5E7EB] text-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20"
            />
            <span className="text-xs leading-[15px] font-light text-[#6B7280]">
              주문 내역을 확인하였으며, 전용 토큰 결제 시스템 이용 약관에
              <br />
              동의합니다.
            </span>
          </label>

          {/* 결제 버튼 */}
          <button
            onClick={onCheckout}
            disabled={!agreed}
            className={`w-full rounded-xl py-4 text-lg font-black text-white shadow-lg transition-colors ${
              agreed ? 'bg-[#0D9DDA] hover:bg-[#0b8bc4]' : 'cursor-not-allowed bg-gray-300'
            }`}
          >
            {summary.total.toLocaleString()} TK 결제하기
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="bg-[#F9FAFB] px-4 py-4">
          <p className="text-center text-[11px] leading-[17.88px] font-light text-[#6B7280]">
            ComPare 토큰 결제는 안전한 블록체인 기반 시스템을 사용하여 실시간으로
            <br />
            처리됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

// 메인 주문/결제 페이지
const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    recipient: '홍길동',
    phone: '010-1234-5678',
    postalCode: '06234',
    address: '서울특별시 강남구 테헤란로 123',
    detailAddress: '4층 401호',
    deliveryRequest: '',
    deliveryRequestCustom: '',
  });

  // 장바구니에서 전달된 선택된 아이템들 (없으면 전체 선택)
  const selectedItemIds =
    (location.state?.selectedItems as number[]) || cartData.map((item) => item.id);
  const orderItems = (cartData as CartItem[]).filter((item) => selectedItemIds.includes(item.id));

  // 가격 계산
  const calculateSummary = () => {
    const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = orderItems.reduce((sum, item) => {
      if (item.originalPrice) {
        return sum + (item.originalPrice - item.price) * item.quantity;
      }
      return sum;
    }, 0);
    const shipping = orderItems.some((item) => item.reward.includes('TK')) ? 3000 : 0;
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
    console.log('결제 진행', { formData, orderItems, summary });
    alert('결제가 완료되었습니다.');
    navigate('/');
  };

  // 다음 주소 API 스크립트 로드
  useEffect(() => {
    if (!window.daum) {
      const script = document.createElement('script');
      script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <h1 className="mb-8 text-[30px] leading-[36px] font-black text-[#111827]">주문/결제</h1>

        <div className="flex items-start gap-8">
          {/* 왼쪽: 폼 섹션 */}
          <div className="min-w-0 flex-1">
            <ShippingInfoSection formData={formData} setFormData={setFormData} />
            <OrderItemsSection items={orderItems} />
            <PaymentMethodSection availableTokens={availableTokens} totalAmount={summary.total} />
          </div>

          {/* 오른쪽: 결제 요약 */}
          <div className="w-[384px] flex-shrink-0">
            <PaymentSummary
              summary={summary}
              agreed={agreed}
              onAgreeChange={setAgreed}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
