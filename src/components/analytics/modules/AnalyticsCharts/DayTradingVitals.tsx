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
  {
    date: '22/04/2024',
    'Circulating Market Cap': 500000,
    'Pool2 Liquidity': 1000000,
    'TENEX Pooled': 200000,
  },
  {
    date: '24/04/2024',
    'Circulating Market Cap': 1000000,
    'Pool2 Liquidity': 1500000,
    'TENEX Pooled': 500000,
  },
  {
    date: '26/04/2024',
    'Circulating Market Cap': 1500000,
    'Pool2 Liquidity': 2000000,
    'TENEX Pooled': 800000,
  },
  {
    date: '28/04/2024',
    'Circulating Market Cap': 2000000,
    'Pool2 Liquidity': 2500000,
    'TENEX Pooled': 1000000,
  },
  {
    date: '30/04/2024',
    'Circulating Market Cap': 2500000,
    'Pool2 Liquidity': 3000000,
    'TENEX Pooled': 1500000,
  },
  {
    date: '02/05/2024',
    'Circulating Market Cap': 3000000,
    'Pool2 Liquidity': 3500000,
    'TENEX Pooled': 2000000,
  },
  {
    date: '04/05/2024',
    'Circulating Market Cap': 3500000,
    'Pool2 Liquidity': 4000000,
    'TENEX Pooled': 2500000,
  },
  {
    date: '06/05/2024',
    'Circulating Market Cap': 4000000,
    'Pool2 Liquidity': 4500000,
    'TENEX Pooled': 3000000,
  },
  {
    date: '08/05/2024',
    'Circulating Market Cap': 4500000,
    'Pool2 Liquidity': 5000000,
    'TENEX Pooled': 3500000,
  },
  {
    date: '10/05/2024',
    'Circulating Market Cap': 5000000,
    'Pool2 Liquidity': 5500000,
    'TENEX Pooled': 4000000,
  },
  {
    date: '12/05/2024',
    'Circulating Market Cap': 5500000,
    'Pool2 Liquidity': 6000000,
    'TENEX Pooled': 4500000,
  },
  {
    date: '14/05/2024',
    'Circulating Market Cap': 6000000,
    'Pool2 Liquidity': 6500000,
    'TENEX Pooled': 5000000,
  },
  {
    date: '16/05/2024',
    'Circulating Market Cap': 6500000,
    'Pool2 Liquidity': 7000000,
    'TENEX Pooled': 5500000,
  },
  {
    date: '18/05/2024',
    'Circulating Market Cap': 7000000,
    'Pool2 Liquidity': 7500000,
    'TENEX Pooled': 6000000,
  },
];

const DayTradingVitals: React.FC = () => (
  <ResponsiveContainer width="100%" height={600}>
    <LineChart
      width={1000}
      height={200}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
      style={{ borderRadius: '8px', padding: '10px' }}
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
        // Show label after every 5 dates
      />
      <YAxis
        tick={{ fontSize: 12, fill: '#ffffff' }}
        domain={[0, 8000000]}
        axisLine={false}
        tickLine={false}
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
        type="linear"
        dataKey="Circulating Market Cap"
        color="#FFFFFF"
        stroke="#EB5540"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="linear"
        dataKey="Pool2 Liquidity"
        stroke="#16C062"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="monotone"
        dataKey="TENEX Pooled"
        stroke="#3EACFC"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default DayTradingVitals;
