import React from 'react';
import { RefreshCw } from 'lucide-react';
import StarRating from './StarRating';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  power: string;
  memory: string;
}

interface ComparisonTableProps {
  title: string;
  products: Product[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, products }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="scale-y-[-1]">
          <RefreshCw className="h-7 w-6 text-[#0d9dda]" />
        </div>
        <h2 className="text-xl leading-[28px] font-bold text-[#111827]">{title}</h2>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#f3f4f6] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f3f4f6] bg-[#f9fafb]">
                <th className="w-40 px-6 py-[68px] text-center text-left text-sm font-bold text-[#6b7280] uppercase">
                  속성
                </th>
                {products.map((product) => (
                  <th key={product.id} className="min-w-[263.5px] px-6 py-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="mb-2 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-bold text-[#111827] uppercase">{product.name}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#f3f4f6]">
                <td className="bg-[rgba(249,250,251,0.5)] px-6 py-4 text-center text-sm font-bold text-[#111827]">
                  가격
                </td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-4 text-center">
                    <span
                      className={`text-sm font-bold ${
                        product.id === 1 ? 'text-[#0d9dda]' : 'text-[#111827]'
                      }`}
                    >
                      {product.price}
                    </span>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[#f3f4f6]">
                <td className="bg-[rgba(249,250,251,0.5)] px-6 py-[18.5px] text-center text-sm font-bold text-[#111827]">
                  성능 지수
                </td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-[18.5px] text-center">
                    <div className="flex justify-center">
                      <StarRating rating={product.rating} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[#f3f4f6]">
                <td className="bg-[rgba(249,250,251,0.5)] px-6 py-4 text-center text-sm font-bold text-[#111827]">
                  소비 전력
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="px-6 py-4 text-center text-sm font-light text-[#111827]"
                  >
                    {product.power}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="bg-[rgba(249,250,251,0.5)] px-6 py-4 text-center text-sm font-bold text-[#111827]">
                  메모리 용량
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="px-6 py-4 text-center text-sm font-light text-[#111827]"
                  >
                    {product.memory}
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
