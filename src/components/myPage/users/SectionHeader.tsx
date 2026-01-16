interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h3 className="mb-4 text-base font-semibold text-gray-900">{title}</h3>
  );
};

export default SectionHeader;
