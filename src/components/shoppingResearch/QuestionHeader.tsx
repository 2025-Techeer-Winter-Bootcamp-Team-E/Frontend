const QuestionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-[12px] font-bold tracking-widest text-[#0066cc] uppercase opacity-90">
        {subtitle}
      </span>
      <h1 className="text-[28px] leading-tight font-bold tracking-tight text-[#1d1d1f] md:text-[34px]">
        {title}
      </h1>
    </div>
  );
};

export default QuestionHeader;
