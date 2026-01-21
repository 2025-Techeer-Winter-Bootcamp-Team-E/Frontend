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
    <div className="mb-8 rounded-2xl border-2 border-[#0D9DDA] bg-[rgba(239,246,255,0.3)] p-6">
      <div className="mb-6 flex items-center gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D9DDA] shadow-lg">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="text-lg font-black text-[#0D9DDA]">내 토큰 결제 (My Token Payment)</h3>
            <span className="rounded-full bg-[rgba(13,157,218,0.1)] px-2.5 py-0.5 text-xs font-bold text-[#0D9DDA]">
              추천
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium text-[#6B7280]">
              보유 잔액:{' '}
              <span className="font-bold text-[#111827]">
                {availableTokens.toLocaleString()} TK
              </span>
            </span>
            <span className="h-3 w-px bg-[#D1D5DB]"></span>
            <span className="text-xs font-bold text-[#0D9DDA]">
              결제 후 잔액: {remainingBalance.toLocaleString()} TK
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            className="h-8 w-8 text-[#10B981]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      <div className="border-t border-[#DBEAFE] pt-4">
        <button
          onClick={() => navigate(`${PATH.TOKEN}`)}
          className="flex items-center gap-1.5 rounded-lg border border-[#0D9DDA] bg-white px-4 py-2 text-sm font-bold text-[#0D9DDA] shadow-sm transition-colors hover:bg-[#0D9DDA]/5"
        >
          토큰 충전하기
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodSection;
