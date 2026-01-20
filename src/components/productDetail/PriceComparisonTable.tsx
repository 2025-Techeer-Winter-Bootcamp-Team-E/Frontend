import useProductPricesQuery from '@/hooks/queries/useProductPricesQuery';
import { ChevronRight } from 'lucide-react';

const PriceComparisonTable = () => {
  const { data } = useProductPricesQuery(1);

  // ✅ React Query 데이터 안전 처리
  const comparisons = data ?? [];
  const totalSites = comparisons.length;

  return (
    <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
      {/* 헤더 */}
      <div className="flex items-center justify-between border-b border-[#E5E7EB] p-6">
        <h3 className="mb-1 text-lg font-bold text-[#111827]">가격비교</h3>
        <span className="text-sm text-[#0D9DDA]">판매처 {totalSites}곳</span>
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
              <th className="px-6 py-4 text-left text-sm font-bold text-[#6B7280]">판매처</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-[#6B7280]">가격</th>
              <th className="px-6 py-4 text-center text-sm font-bold text-[#6B7280]">구매</th>
            </tr>
          </thead>

          <tbody>
            {comparisons.map((comparison, index) => (
              <tr key={index} className="border-b border-[#F3F4F6]">
                {/* 판매처 */}
                <td className="px-6 py-6">
                  <span className="text-base font-bold text-[#1F2937]">{comparison.mall_name}</span>
                </td>

                {/* 가격 */}
                <td className="px-6 py-6 text-right">
                  <span className="text-xl font-black text-[#111827]">
                    {comparison.price.toLocaleString()}원
                  </span>
                </td>

                {/* 구매 */}
                <td className="px-6 py-6 text-center">
                  <a
                    href={comparison.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[#D1D5DB] px-5 py-2 text-sm font-medium text-[#6B7280] transition-colors hover:bg-gray-50"
                  >
                    이동
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 더보기 */}
      {totalSites > 5 && (
        <div className="border-t border-[#F3F4F6] bg-[#F9FAFB] p-4 text-center">
          <button className="mx-auto flex items-center justify-center gap-1 text-sm font-bold text-[#6B7280]">
            판매처 {totalSites - 5}곳 더보기
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceComparisonTable;
