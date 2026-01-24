import { RefreshCw } from 'lucide-react';
import StarRating from './StarRating';
import type { ShoppingResearchResultEntity } from '@/types/searchType';
import { PATH } from '@/routes/path';
import { Link } from 'react-router-dom';

interface ComparisonTableProps {
  products: ShoppingResearchResultEntity[];
}

const ComparisonTable = ({ products }: ComparisonTableProps) => {
  const specKeys = Array.from(
    new Set(products.flatMap((product) => Object.keys(product.product_specs ?? {}))),
  );
  const formatSpecLabel = (key: string) => key.replace(/_/g, ' ').toUpperCase();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 px-1">
        <RefreshCw className="h-5 w-5 text-[#1d1d1f]" strokeWidth={2.5} />
        <h2 className="text-[22px] font-bold tracking-tight text-[#1d1d1f]">추천 상품</h2>
      </div>
      <div className="overflow-hidden rounded-3xl border border-[#d2d2d7]/30 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#f5f5f7] bg-[#f5f5f7]/50">
                <th className="w-40 px-6 py-12 text-center text-[13px] font-bold tracking-widest text-[#86868b] uppercase">
                  속성
                </th>
                {products.map((product) => (
                  <th key={product.product_code} className="min-w-60 px-6 py-8 text-center">
                    <Link
                      to={`${PATH.PRODUCT_DETAIL(product.product_code)}`}
                      className="flex flex-col items-center gap-4 no-underline"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-black/3">
                        <img
                          src={product.product_image_url}
                          alt={product.product_name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <p className="text-[15px] font-bold tracking-tight text-[#1d1d1f]">
                        {product.product_name}
                      </p>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-[#f5f5f7]">
              <tr>
                <td className="bg-[#f5f5f7]/30 px-6 py-5 text-center text-[14px] font-semibold text-[#86868b]">
                  가격
                </td>
                {products.map((product) => (
                  <td
                    key={product.product_code}
                    className="px-6 py-5 text-center text-[15px] font-bold text-[#1d1d1f]"
                  >
                    {product.price.toLocaleString()}원
                  </td>
                ))}
              </tr>
              <tr>
                <td className="bg-[#f5f5f7]/30 px-6 py-5 text-center text-[14px] font-semibold text-[#86868b]">
                  성능
                </td>
                {products.map((product) => (
                  <td key={product.product_code} className="px-6 py-5">
                    <div className="flex scale-90 justify-center opacity-80">
                      <StarRating rating={Math.round(product.performance_score * 5)} />
                    </div>
                  </td>
                ))}
              </tr>
              {specKeys.map((specKey) => (
                <tr key={specKey}>
                  <td className="bg-[#f5f5f7]/30 px-6 py-5 text-center text-[14px] font-semibold text-[#86868b]">
                    {formatSpecLabel(specKey)}
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.product_code}
                      className="px-6 py-5 text-center text-[14px] font-medium text-[#424245]"
                    >
                      {product.product_specs?.[specKey] ?? '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
