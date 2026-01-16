interface ProgressBarProps {
  current: number;
  total: number;
  variant?: 'teal' | 'orange';
}

const ProgressBar = ({ current, total, variant = 'teal' }: ProgressBarProps) => {
  const percentage = (current / total) * 100;
  const colors = {
    teal: 'bg-teal-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div
        className={`${colors[variant]} h-1.5 rounded-full transition-all`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
