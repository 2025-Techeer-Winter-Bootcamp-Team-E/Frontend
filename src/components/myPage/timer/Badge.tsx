interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'sale' | 'coupon';
}

const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const variants = {
    default: 'bg-teal-500 text-white',
    sale: 'bg-orange-500 text-white',
    coupon: 'bg-teal-500 text-white',
  };

  return (
    <span className={`${variants[variant]} text-xs px-2 py-1 rounded font-medium`}>
      {children}
    </span>
  );
};

export default Badge;
