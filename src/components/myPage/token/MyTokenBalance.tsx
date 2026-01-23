const MyTokenBalance = ({ currentToken }: { currentToken: number }) => {
  return (
    <div className="mt-8">
      <div className="mb-10 rounded-2xl bg-[#f5f5f7] p-6">
        <div className="text-xs font-semibold text-[#86868b] uppercase">My Balance</div>
        <div className="text-4xl font-semibold">
          {currentToken ?? 0}
          <span className="text-xl text-[#86868b]"> TOKEN </span>
        </div>
      </div>
    </div>
  );
};
export default MyTokenBalance;
