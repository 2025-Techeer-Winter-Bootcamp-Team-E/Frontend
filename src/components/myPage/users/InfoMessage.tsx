interface InfoMessageProps {
  children: React.ReactNode;
}

const InfoMessage = ({ children }: InfoMessageProps) => {
  return (
    <p className="mt-3 text-center text-xs text-gray-500">{children}</p>
  );
};

export default InfoMessage;
