import moment from 'moment';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: '22/04/2024', 'Price of $TENEX': 200000 },
  { date: '24/04/2024', 'Price of $TENEX': 500000 },
  { date: '26/04/2024', 'Price of $TENEX': 800000 },
  { date: '28/04/2024', 'Price of $TENEX': 1000000 },
  { date: '30/04/2024', 'Price of $TENEX': 1500000 },
  { date: '02/05/2024', 'Price of $TENEX': 2000000 },
  { date: '04/05/2024', 'Price of $TENEX': 2500000 },
  { date: '06/05/2024', 'Price of $TENEX': 3000000 },
  { date: '08/05/2024', 'Price of $TENEX': 3500000 },
  { date: '10/05/2024', 'Price of $TENEX': 4000000 },
  { date: '12/05/2024', 'Price of $TENEX': 4500000 },
  { date: '14/05/2024', 'Price of $TENEX': 5000000 },
  { date: '16/05/2024', 'Price of $TENEX': 5500000 },
  { date: '18/05/2024', 'Price of $TENEX': 6000000 },
];

const formattedData = data.map((item) => ({
  ...item,
  date: moment(item.date, 'DD/MM/YYYY').format('MM/DD/YYYY'), // Convert date format
}));
const PriceTenexChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={600}>
    <LineChart
      data={formattedData}
      width={1000}
      height={200}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
      style={{ borderradius: '8px', padding: '10px' }}
    >
      <CartesianGrid
        horizontal={true}
        vertical={false}
        stroke="rgba(255, 255, 255, 0.2)"
      />
      <XAxis
        dataKey="date"
        tick={{ fontSize: 12, fill: '#ffffff' }}
        axisLine={{ stroke: '#ffffff' }}
        tickLine={{ stroke: '#ffffff' }}
        interval={1}
      />

      <YAxis
        tick={{ fontSize: 12, fill: '#ffffff' }}
        domain={[0, 8000000]}
        axisLine={false}
        tickLine={false}
        interval={0}
      />
      <Tooltip
        contentStyle={{
          background:
            'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)',
          border: 'none',
          borderRadius: '8px',
        }}
        itemStyle={{ color: '#fff' }}
      />
      <Legend
        verticalAlign="top"
        iconType="rect"
        align="center"
        wrapperStyle={{ paddingBottom: 20, color: '#fff' }}
      />
      <Line
        connectNulls
        type="monotone"
        dataKey="Price of $TENEX"
        stroke="#3EACFC"
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default PriceTenexChart;
