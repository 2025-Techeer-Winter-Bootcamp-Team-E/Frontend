import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { ProductPriceTrendsResDto } from '@/types/productsType';

interface PriceTrendGraphProps {
  productTrend: ProductPriceTrendsResDto;
}

const PriceTrendGraph = ({ productTrend }: PriceTrendGraphProps) => {
  const chartData = productTrend.price_history.map((item) => ({
    date: item.date.slice(5),
    price: item.price,
  }));

  const prices = chartData.map((d) => d.price);
  const minPrice = Math.min(...prices);

  return (
    <div className="flex-1 rounded-4xl border border-[#d2d2d7]/40 bg-white p-7">
      <h4 className="mb-8 text-[15px] font-semibold tracking-tight text-[#1d1d1f]">
        최저가 추이{' '}
        <span className="font-normal text-[#86868b]">
          ({productTrend.selected_period}
          {productTrend.period_unit})
        </span>
      </h4>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="date" hide />
            <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              }}
              itemStyle={{ fontSize: '12px', fontWeight: '700', color: '#1d1d1f' }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#1d1d1f"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 4, fill: '#1d1d1f', strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 flex items-end justify-between border-t border-[#f5f5f7] pt-6">
        <div>
          <p className="mb-1 text-[11px] font-bold tracking-[0.05em] text-[#86868b] uppercase">
            Lowest Price
          </p>
          <span className="text-2xl font-bold tracking-tighter text-[#1d1d1f]">
            {minPrice.toLocaleString()}원
          </span>
        </div>
        <div className="text-[12px] font-medium text-[#0066cc]">최근 7일 기준</div>
      </div>
    </div>
  );
};

export default PriceTrendGraph;
