import { ChevronRight } from 'lucide-react';

interface PriceComparison {
  site: string;
  price: number;
  originalPrice: number | null;
  shipping: string;
  deliveryInfo: string | null;
  deliveryDate: string | null;
  link: string;
  isLowest: boolean;
}

interface PriceComparisonTableProps {
  comparisons: PriceComparison[];
  totalSites: number;
}

const PriceComparisonTable = ({
  comparisons,
  totalSites,
}: PriceComparisonTableProps) => {
  return (
    <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
      {/* 헤더 */}
      <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
        <div>
          <h3 className="text-lg font-bold text-[#111827] mb-1">가격비교</h3>
          <span className="text-sm text-[#0D9DDA]">판매처 {totalSites}곳</span>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 border border-[#D1D5DB] rounded"
            />
            <span className="text-sm text-[#6B7280]">배송비포함</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 border border-[#D1D5DB] rounded"
            />
            <span className="text-sm text-[#6B7280]">카드할인</span>
          </label>
        </div>
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <th className="px-6 py-4 text-left text-sm font-bold text-[#6B7280]">
                판매처
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-[#6B7280]">
                상품 정보
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-[#6B7280]">
                배송비
              </th>
              <th className="px-6 py-4 text-right text-sm font-bold text-[#6B7280]">
                가격
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-[#6B7280]">
                구매
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((comparison, index) => (
              <tr
                key={index}
                className={`border-b border-[#F3F4F6] ${
                  comparison.isLowest ? 'bg-[rgba(239,246,255,0.1)]' : ''
                }`}
              >
                {/* 판매처 */}
                <td className="px-6 py-6">
                  <div className="flex flex-col gap-1">
                    <span
                      className={`text-base font-bold ${
                        comparison.isLowest
                          ? 'text-[#2563EB]'
                          : comparison.site === 'Naver Shop'
                          ? 'text-[#16A34A]'
                          : 'text-[#1F2937]'
                      }`}
                    >
                      {comparison.site}
                    </span>
                    {comparison.isLowest && (
                      <span className="inline-block px-1.5 py-0.5 bg-[#FEE2E2] text-[#DC2626] text-[10px] font-bold uppercase rounded w-fit">
                        Best Price
                      </span>
                    )}
                  </div>
                </td>

                {/* 상품 정보 */}
                <td className="px-6 py-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-[#111827]">
                      {comparison.site === 'Coupang'
                        ? 'GIGABYTE RTX 4070 SUPER EAGLE OC 12GB [공식정품]'
                        : comparison.site === '11번가'
                        ? '기가바이트 지포스 RTX 4070 SUPER EAGLE OC 12G 제이씨현'
                        : 'NVIDIA 지포스 RTX 4070 슈퍼 이글 OC 12GB 공식인증대리점'}
                    </p>
                    <div className="flex items-center gap-2">
                      {comparison.deliveryInfo && (
                        <>
                          <span className="text-xs text-[#0D9DDA]">
                            {comparison.deliveryInfo}
                          </span>
                          <div className="w-px h-2 bg-[#E5E7EB]" />
                        </>
                      )}
                      {comparison.deliveryDate && (
                        <span className="text-xs text-[#6B7280]">
                          {comparison.deliveryDate}
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* 배송비 */}
                <td className="px-6 py-6 text-center">
                  <span
                    className={`text-sm font-bold ${
                      comparison.shipping === '무료배송'
                        ? 'text-[#0D9DDA]'
                        : 'text-[#6B7280]'
                    }`}
                  >
                    {comparison.shipping}
                  </span>
                </td>

                {/* 가격 */}
                <td className="px-6 py-6 text-right">
                  <div className="flex flex-col items-end gap-1">
                    {comparison.originalPrice && (
                      <span className="text-[11px] text-[#9CA3AF] line-through">
                        {comparison.originalPrice.toLocaleString()}원
                      </span>
                    )}
                    <span
                      className={`text-xl font-black ${
                        comparison.isLowest ? 'text-[#EF4444]' : 'text-[#111827]'
                      }`}
                    >
                      {comparison.price.toLocaleString()}원
                    </span>
                  </div>
                </td>

                {/* 구매 버튼 */}
                <td className="px-6 py-6 text-center">
                  <button
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      comparison.isLowest
                        ? 'bg-[#0D9DDA] text-white hover:bg-[#0B8BC7]'
                        : 'border border-[#D1D5DB] text-[#6B7280] hover:bg-gray-50'
                    }`}
                  >
                    {comparison.isLowest ? (
                      <span>
                        구매하
                        <br />
                        러 가기
                      </span>
                    ) : (
                      '이동'
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 더보기 */}
      <div className="bg-[#F9FAFB] border-t border-[#F3F4F6] p-4 text-center">
        <button className="flex items-center justify-center gap-1 text-sm font-bold text-[#6B7280] mx-auto">
          판매처 {totalSites - comparisons.length}곳 더보기
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PriceComparisonTable;
