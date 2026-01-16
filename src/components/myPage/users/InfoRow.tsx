interface InfoRowProps {
  label: string;
  value?: string;
  children?: React.ReactNode;
}

const InfoRow = ({ label, value, children }: InfoRowProps) => {
  return (
    <div className="flex border-b border-gray-100 py-4">
      <div className="w-32 flex-shrink-0 text-sm text-gray-600">{label}</div>
      <div className="flex-1 text-sm text-gray-900">{children || value}</div>
    </div>
  );
};

export default InfoRow;
