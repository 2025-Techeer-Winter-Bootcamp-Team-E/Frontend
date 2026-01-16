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
          <RefreshCw className="w-6 h-7 text-[#0d9dda]" />
        </div>
        <h2 className="text-xl font-bold text-[#111827] leading-[28px]">{title}</h2>
      </div>
      <div className="bg-white border border-[#f3f4f6] rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f9fafb] border-b border-[#f3f4f6]">
                <th className="text-left py-[68px] px-6 text-sm font-bold text-[#6b7280] uppercase text-center w-[160px]">
                  속성
                </th>
                {products.map((product) => (
                  <th key={product.id} className="text-center py-4 px-6 min-w-[263.5px]">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-bold text-[#111827] uppercase">
                        {product.name}
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#f3f4f6]">
                <td className="bg-[rgba(249,250,251,0.5)] px-6 py-4 text-sm font-bold text-[#111827] text-center">
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
                <td className="bg-[rgba(249,250,251,0.5)] px-6 py-[18.5px] text-sm font-bold text-[#111827] text-center">
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
                <td className="bg-[rgba(249,250,251,0.5)] px-6 py-4 text-sm font-bold text-[#111827] text-center">
                  소비 전력
                </td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-4 text-sm font-light text-[#111827] text-center">
                    {product.power}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="bg-[rgba(249,250,251,0.5)] px-6 py-4 text-sm font-bold text-[#111827] text-center">
                  메모리 용량
                </td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-4 text-sm font-light text-[#111827] text-center">
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
