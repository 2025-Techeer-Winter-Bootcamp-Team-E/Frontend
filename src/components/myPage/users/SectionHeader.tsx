interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return <h3 className="mb-5 text-lg font-semibold tracking-tight text-[#1d1d1f]">{title}</h3>;
};
export default SectionHeader;
