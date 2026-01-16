import { useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

interface PasswordInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  showStrength?: boolean;
  autoComplete?: string;
}

const PasswordInput = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  showStrength = false,
  autoComplete = 'off',
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`w-full rounded-lg border px-4 py-2.5 pr-10 text-sm transition-colors focus:outline-none focus:ring-2 ${
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      {helperText && (
        <p className={`mt-1.5 text-xs ${error ? 'text-red-500' : 'text-blue-600'}`}>{helperText}</p>
      )}

      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
