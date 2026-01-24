interface ProgressDotsProps {
  total: number;
  current: number;
}

const ProgressDots = ({ total, current }: ProgressDotsProps) => (
  <div className="flex gap-2">
    {Array.from({ length: total }).map((_, index) => (
      <div
        key={index}
        className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
          index === current
            ? 'scale-125 bg-[#1d1d1f]'
            : index < current
              ? 'bg-[#d2d2d7]'
              : 'bg-[#e5e5e7]'
        }`}
      />
    ))}
  </div>
);

export default ProgressDots;
