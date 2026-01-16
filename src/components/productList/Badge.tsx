interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'free' | 'discount';
}

const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    free: 'bg-blue-100 text-blue-700',
    discount: 'bg-red-100 text-red-700',
  };

  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
