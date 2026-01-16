interface ActionButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  className?: string;
}

const ActionButton = ({ children, variant = 'primary', onClick, className = '' }: ActionButtonProps) => {
  const variants = {
    primary: 'bg-red-500 hover:bg-red-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`rounded px-8 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
