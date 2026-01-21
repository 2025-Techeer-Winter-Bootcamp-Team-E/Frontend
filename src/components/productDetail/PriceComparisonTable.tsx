import useProductPricesQuery from '@/hooks/queries/useProductPricesQuery';
import { useParams } from 'react-router-dom';

const PriceComparisonTable = () => {
   const { id } = useParams<{ id: string }>();

  const { data } = useProductPricesQuery(Number(id));
  const comparisons = data ?? [];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#d2d2d7]/30 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex items-center justify-between p-8 pb-4">
        <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">가격비교</h3>
        <span className="text-sm font-medium text-[#86868b]">판매처 {comparisons.length}곳</span>
      </div>

      <div className="overflow-x-auto px-4">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#f5f5f7]">
              <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#86868b]">
                판매처
              </th>
              <th className="px-4 py-4 text-right text-[13px] font-semibold text-[#86868b]">
                가격
              </th>
              <th className="px-4 py-4 text-center text-[13px] font-semibold text-[#86868b]">
                구매
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f5f5f7]">
            {comparisons.map((comparison, index) => (
              <tr key={index} className="group transition-colors hover:bg-[#f5f5f7]/50">
                <td className="px-4 py-6">
                  <span className="text-[15px] font-semibold text-[#1d1d1f]">
                    {comparison.mall_name}
                  </span>
                </td>
                <td className="px-4 py-6 text-right">
                  <span className="text-[17px] font-bold tracking-tight text-[#1d1d1f]">
                    {comparison.price.toLocaleString()}원
                  </span>
                </td>
                <td className="px-4 py-6 text-center">
                  <a
                    href={comparison.url}
                    className="inline-block rounded-full bg-[#f5f5f7] px-5 py-1.5 text-[13px] font-semibold text-[#0066cc] transition-all hover:bg-[#0066cc] hover:text-white"
                  >
                    이동
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceComparisonTable;
