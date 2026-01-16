import { useState } from 'react';
import WithdrawalReasonSection from './WithdrawalReasonSection';
import VerificationSection from './VerificationSection';
import ActionButton from './ActionButton';
import userProfileData from '@/data/userProfile.json';

const WithdrawalPage = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [password, setPassword] = useState('');
  const [verificationType, setVerificationType] = useState<'phone' | 'email'>('email');
  const [emailDomain, setEmailDomain] = useState('');

  const handleWithdraw = () => {
    console.log('탈퇴 처리');
    alert('회원탈퇴가 처리되었습니다.');
  };

  const handleCancel = () => {
    console.log('취소');
    // 취소 로직 (예: 이전 페이지로 이동)
  };

  return (
    <div className="mx-auto max-w-4xl bg-white">
      <div className="p-8">
        {/* 페이지 제목 */}
        <h1 className="mb-8 text-2xl font-bold text-gray-900">회원탈퇴</h1>

        <WithdrawalReasonSection
          selectedReason={selectedReason}
          onReasonChange={setSelectedReason}
          otherReason={otherReason}
          onOtherReasonChange={setOtherReason}
        />

        <VerificationSection
          userId={userProfileData.username}
          password={password}
          onPasswordChange={setPassword}
          verificationType={verificationType}
          onVerificationTypeChange={setVerificationType}
          emailDomain={emailDomain}
          onEmailDomainChange={setEmailDomain}
        />

        {/* 버튼 영역 */}
        <div className="mt-8 flex justify-center gap-3">
          <ActionButton variant="primary" onClick={handleWithdraw}>
            탈퇴하기
          </ActionButton>
          <ActionButton variant="secondary" onClick={handleCancel}>
            취소하기
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalPage;
