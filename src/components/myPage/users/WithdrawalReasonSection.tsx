import InfoRow from './InfoRow';
import Checkbox from './Checkbox';

interface WithdrawalReasonSectionProps {
  selectedReason: string;
  onReasonChange: (reasonId: string) => void;
  otherReason: string;
  onOtherReasonChange: (value: string) => void;
}

const WithdrawalReasonSection = ({
  selectedReason,
  onReasonChange,
  otherReason,
  onOtherReasonChange,
}: WithdrawalReasonSectionProps) => {
  const reasons = [
    { id: 'quality', label: '상품품질 불만' },
    { id: 'service', label: '이용빈도 낮음' },
    { id: 'privacy', label: '개인정보유출 우려' },
    { id: 'delivery', label: '배송지연' },
    { id: 'exchange', label: '교환/환불/품질 불만' },
    { id: 'as', label: 'A/S 불만' },
  ];

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-base font-semibold text-gray-900">탈퇴사유 확인</h3>

      <InfoRow label="탈퇴사유">
        <div className="grid grid-cols-3 gap-3">
          {reasons.map((reason) => (
            <Checkbox
              key={reason.id}
              id={reason.id}
              checked={selectedReason === reason.id}
              onChange={() => onReasonChange(reason.id)}
              label={reason.label}
            />
          ))}
        </div>
      </InfoRow>

      <InfoRow label="기타">
        <textarea
          value={otherReason}
          onChange={(e) => onOtherReasonChange(e.target.value)}
          placeholder="탈퇴 사유를 구체적으로 적어주시면 서비스 개선에 큰 도움이 됩니다."
          className="w-full resize-none rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </InfoRow>
    </div>
  );
};

export default WithdrawalReasonSection;
