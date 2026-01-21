const QuestionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
        {subtitle}
      </span>
      <h1 className="text-2xl leading-tight font-black tracking-tight text-gray-900 md:text-3xl">
        {title}
      </h1>
    </div>
  );
};

export default QuestionHeader;
