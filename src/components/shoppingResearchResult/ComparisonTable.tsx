import React from 'react';
import { RefreshCw } from 'lucide-react';
import StarRating from './StarRating';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  performance_score: number;
  cpu: string;
  ram: string;
  is_lowest_price: boolean;
}

interface ComparisonTableProps {
  title: string;
  products: Product[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, products }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 px-1">
        <RefreshCw className="h-5 w-5 text-[#1d1d1f]" strokeWidth={2.5} />
        <h2 className="text-[22px] font-bold tracking-tight text-[#1d1d1f]">{title}</h2>
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
                  <th key={product.id} className="min-w-60 px-6 py-8 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-black/[0.03]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <p className="text-[15px] font-bold tracking-tight text-[#1d1d1f]">
                        {product.name}
                      </p>
                    </div>
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
                    key={product.id}
                    className="px-6 py-5 text-center text-[15px] font-bold text-[#1d1d1f]"
                  >
                    <span className={product.is_lowest_price ? 'text-[#0066cc]' : ''}>
                      {product.price.toLocaleString()}원
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="bg-[#f5f5f7]/30 px-6 py-5 text-center text-[14px] font-semibold text-[#86868b]">
                  성능 지수
                </td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-5">
                    <div className="flex scale-90 justify-center opacity-80">
                      <StarRating rating={Math.round(product.performance_score * 5)} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="bg-[#f5f5f7]/30 px-6 py-5 text-center text-[14px] font-semibold text-[#86868b]">
                  프로세서
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="px-6 py-5 text-center text-[14px] font-medium text-[#424245]"
                  >
                    {product.cpu}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="bg-[#f5f5f7]/30 px-6 py-5 text-center text-[14px] font-semibold text-[#86868b]">
                  메모리 용량
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="px-6 py-5 text-center text-[14px] font-medium text-[#424245]"
                  >
                    {product.ram}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
