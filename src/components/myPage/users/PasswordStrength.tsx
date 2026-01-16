interface PasswordStrengthProps {
  strength: 'weak' | 'medium' | 'strong' | '';
}

const PasswordStrength = ({ strength }: PasswordStrengthProps) => {
  const getStrengthInfo = (strength: 'weak' | 'medium' | 'strong' | '') => {
    switch (strength) {
      case 'weak':
        return { label: '약함', color: 'bg-red-500', width: 'w-1/3' };
      case 'medium':
        return { label: '보통', color: 'bg-yellow-500', width: 'w-2/3' };
      case 'strong':
        return { label: '강함', color: 'bg-green-500', width: 'w-full' };
      default:
        return { label: '', color: 'bg-gray-200', width: 'w-0' };
    }
  };

  const info = getStrengthInfo(strength);

  if (!strength) return null;

  return (
    <div className="mt-2">
      <div className="mb-1 flex gap-1">
        <div className={`h-1 ${info.width} ${info.color} rounded transition-all`}></div>
        <div className="h-1 flex-1 rounded bg-gray-200"></div>
      </div>
      <p className="text-xs text-gray-600">비밀번호 강도: {info.label}</p>
    </div>
  );
};

export default PasswordStrength;
