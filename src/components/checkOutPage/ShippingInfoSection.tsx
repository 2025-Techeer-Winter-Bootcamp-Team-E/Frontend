import { Package } from 'lucide-react';
import AddressSearch from '@/components/checkOutPage/AdressSearch';
import DeliveryRequestField from '@/components/checkOutPage/DeliveryRequestField';
import InputField from '@/components/checkOutPage/InputField';
import SectionHeader from '@/components/checkOutPage/SectionHeader';

declare global {
  interface Window {
    daum: {
      Postcode: new (options: {
        oncomplete: (data: { zonecode: string; address: string }) => void;
        width?: string;
        height?: string;
      }) => {
        open: () => void;
      };
    };
  }
}

type ShippingFormData = {
  recipient: string;
  phone: string;
  postalCode: string;
  address: string;
  detailAddress: string;
  deliveryRequest: string;
  deliveryRequestCustom: string;
};

type ShippingInfoSectionProps = {
  formData: ShippingFormData;
  setFormData: React.Dispatch<React.SetStateAction<ShippingFormData>>;
};

const ShippingInfoSection = ({ formData, setFormData }: ShippingInfoSectionProps) => {
  const handlePostalSearch = () => {
    if (!window.daum) {
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
        setFormData((prev) => ({
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
    <div className="mb-6 rounded-[2.5rem] border border-black/[0.02] bg-white p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
      <SectionHeader icon={Package} title="배송지 정보" />

      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="수령인"
          value={formData.recipient}
          onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
          placeholder="이름"
        />
        <InputField
          label="연락처"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="010-0000-0000"
        />
      </div>

      <div className="mt-2">
        <AddressSearch
          postalCode={formData.postalCode}
          address={formData.address}
          detailAddress={formData.detailAddress}
          onPostalCodeChange={(value) => setFormData({ ...formData, postalCode: value })}
          onAddressChange={(value) => setFormData({ ...formData, address: value })}
          onDetailAddressChange={(value) => setFormData({ ...formData, detailAddress: value })}
          onSearch={handlePostalSearch}
        />
      </div>

      <div className="mt-4">
        <DeliveryRequestField
          value={formData.deliveryRequest}
          customValue={formData.deliveryRequestCustom}
          onChange={(value) => setFormData({ ...formData, deliveryRequest: value })}
          onCustomChange={(value) => setFormData({ ...formData, deliveryRequestCustom: value })}
        />
      </div>
    </div>
  );
};

export default ShippingInfoSection;
