interface InfoMessageProps {
  children: React.ReactNode;
}

const InfoMessage = ({ children }: InfoMessageProps) => {
  return (
    <p className="mt-4 text-center text-[0.75rem] leading-relaxed font-medium tracking-tight text-gray-400">
      {children}
    </p>
  );
};

export default InfoMessage;
