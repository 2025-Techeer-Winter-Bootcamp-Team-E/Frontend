import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useProductTrendQuery from '@/hooks/queries/useProductTrendQuery';

const PriceTrendGraph = ({ productCode }: { productCode: number }) => {
  const { data } = useProductTrendQuery(productCode);

  if (!data) return null;

  const chartData = data.price_history.map((item) => ({
    date: item.date.slice(5),
    price: item.price,
  }));

  const prices = chartData.map((d) => d.price);
  const minPrice = Math.min(...prices);

  return (
    <div className="flex-1 rounded-xl border border-[#F3F4F6] bg-[#F9FAFB] p-5">
      <h4 className="mb-4 text-sm font-bold text-[#111827]">
        최저가 추이 (최근 {data.selected_period}
        {data.period_unit})
      </h4>

      <div className="h-30">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: '#9CA3AF' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111827',
                borderRadius: 8,
                border: 'none',
                color: '#fff',
                fontSize: 12,
              }}
              labelStyle={{ color: '#9CA3AF' }}
              formatter={(value: number) => `${value.toLocaleString()}원`}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#0D9DDA"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 하단 요약 */}
      <div className="mt-4 border-t border-[#F3F4F6] pt-4">
        <p className="mb-1 text-[10px] text-[#6B7280]">기간 내 최저가</p>
        <span className="text-xl font-black text-[#EF4444]">{minPrice.toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default PriceTrendGraph;
