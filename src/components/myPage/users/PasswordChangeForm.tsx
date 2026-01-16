import { useState } from 'react';
import PasswordInput from './PasswordInput';
import PasswordStrength from './PasswordStrength';
import WarningMessage from './WarningMessage';
import SubmitButton from './SubmitButton';

interface PasswordChangeFormProps {
  onSubmit: (data: { currentPassword: string; newPassword: string }) => void;
  onCancel?: () => void;
}

const PasswordChangeForm = ({ onSubmit, onCancel }: PasswordChangeFormProps) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong' | ''>('');

  // 비밀번호 강도 체크
  const checkPasswordStrength = (password: string): 'weak' | 'medium' | 'strong' | '' => {
    if (password.length === 0) return '';
    if (password.length < 8) return 'weak';

    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteria = [hasNumber, hasLetter, hasSpecial].filter(Boolean).length;

    if (criteria >= 3 && password.length >= 12) return 'strong';
    if (criteria >= 2 && password.length >= 8) return 'medium';
    return 'weak';
  };

  // 새 비밀번호 변경 핸들러
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    setPasswordStrength(checkPasswordStrength(value));

    // 에러 초기화
    if (errors.newPassword) {
      setErrors({ ...errors, newPassword: '' });
    }
  };

  // 비밀번호 확인 변경 핸들러
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);

    // 에러 초기화
    if (errors.confirmPassword) {
      setErrors({ ...errors, confirmPassword: '' });
    }
  };

  // 유효성 검사
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!currentPassword) {
      newErrors.currentPassword = '기존 비밀번호를 입력해주세요.';
    }

    if (!newPassword) {
      newErrors.newPassword = '새 비밀번호를 입력해주세요.';
    } else if (newPassword.length < 8) {
      newErrors.newPassword = '비밀번호는 8자 이상이어야 합니다.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = '새 비밀번호를 다시 입력해주세요.';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    if (currentPassword && newPassword && currentPassword === newPassword) {
      newErrors.newPassword = '기존 비밀번호와 동일합니다. 다른 비밀번호를 사용해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 제출 핸들러
  const handleSubmit = () => {
    if (validate()) {
      onSubmit({
        currentPassword,
        newPassword,
      });
    }
  };

  const isFormValid =
    currentPassword && newPassword && confirmPassword && newPassword === confirmPassword;

  return (
    <div className="max-w-2xl">
      <WarningMessage>
        아이디와 같은 비밀번호나 주민등록번호, 생일, 학번, 전화번호 등 개인정보와 관련된 숫자나
        연속된 숫자, 동일 반복된 숫자 등 다른 사람이 쉽게 알아 낼 수 있는 비밀번호는 사용하지
        않도록 주의하여 주시기 바랍니다.
      </WarningMessage>

      <PasswordInput
        label="기존 비밀번호"
        placeholder="현재 사용 중인 비밀번호를 입력해주세요"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        error={errors.currentPassword}
        autoComplete="current-password"
      />

      <PasswordInput
        label="새 비밀번호"
        placeholder="새 비밀번호 입력"
        value={newPassword}
        onChange={handleNewPasswordChange}
        error={errors.newPassword}
        helperText="비밀번호는 공백없는 8~16자의 영문/숫자 등 두 가지 이상의 조합으로 입력해주세요."
        autoComplete="new-password"
      />

      {newPassword && <PasswordStrength strength={passwordStrength} />}

      <PasswordInput
        label="새 비밀번호 확인"
        placeholder="새 비밀번호 다시 입력"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        error={errors.confirmPassword}
        helperText="비밀번호 확인을 위해 한 번 더 입력해 주시기 바랍니다."
        autoComplete="new-password"
      />

      <div className="mt-8">
        <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
          비밀번호 수정
        </SubmitButton>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
