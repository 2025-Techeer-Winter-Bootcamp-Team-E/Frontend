import { PATH } from '@/routes/path';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentMethodSection = ({
  availableTokens,
  totalAmount,
}: {
  availableTokens: number;
  totalAmount: number;
}) => {
  const remainingBalance = availableTokens - totalAmount;
  const navigate = useNavigate();

  return (
    <div className="mb-8 rounded-[2.5rem] bg-[#1d1d1f] p-10 text-white shadow-2xl shadow-black/10">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-3">
            <h3 className="text-[17px] font-semibold tracking-tight opacity-90">
              My Token Payment
            </h3>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-white/80 uppercase">
              Selected
            </span>
          </div>

          <div className="mt-8 space-y-1">
            <p className="text-[13px] font-medium text-white/50">보유 잔액</p>
            <p className="text-[28px] font-bold tracking-tighter">
              {availableTokens.toLocaleString()}{' '}
              <span className="text-[16px] font-medium opacity-60">TK</span>
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4 text-[13px]">
            <span className="font-medium text-white/40">결제 후 예정 잔액</span>
            <span className="font-bold tracking-tight text-[#34c759]">
              {remainingBalance.toLocaleString()} TK
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between self-stretch">
          <div className="rounded-full bg-[#34c759] p-1.5 shadow-[0_0_20px_rgba(52,199,89,0.3)]">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <button
            onClick={() => navigate(`${PATH.TOKEN}`)}
            className="group flex items-center gap-1 text-[13px] font-semibold text-white/70 transition-all hover:text-white"
          >
            충전하기
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSection;
