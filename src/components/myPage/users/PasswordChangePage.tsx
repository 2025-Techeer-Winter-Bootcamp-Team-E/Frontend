import PasswordChangeForm from './PasswordChangeForm';

const PasswordChangePage = () => {
  const handlePasswordChange = (data: { currentPassword: string; newPassword: string }) => {
    console.log('비밀번호 변경:', data);
    alert('비밀번호가 성공적으로 변경되었습니다.');
  };

  const handleCancel = () => {
    console.log('취소');
  };

  return (
    <div className="rounded-lg bg-white p-8">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">비밀번호 수정</h2>

      <PasswordChangeForm onSubmit={handlePasswordChange} onCancel={handleCancel} />
    </div>
  );
};

export default PasswordChangePage;
