interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'free' | 'discount';
}

const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const variants = {
    // 채도를 극도로 낮추고 명도를 높인 파스텔-그레이 톤
    default: 'bg-[#f5f5f7] text-[#1d1d1f] border-[#d2d2d7]',
    free: 'bg-[#e8f2ff] text-[#0066cc] border-[#b3d4ff]', // 애플의 차분한 블루
    discount: 'bg-[#fff0f0] text-[#ff3b30] border-[#ffb3b0]', // 애플의 차분한 레드
  };

  return (
    <span
      className={`inline-block rounded-full border-[0.5px] px-2.5 py-0.5 text-[11px] font-semibold tracking-tight ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
