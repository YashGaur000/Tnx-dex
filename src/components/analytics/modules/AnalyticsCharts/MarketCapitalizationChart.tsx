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
    Circulating: 500000,
    Locked: 1000000,
    'Total Issued': 200000,
  },
  {
    date: '24/04/2024',
    Circulating: 1000000,
    Locked: 1500000,
    'Total Issued': 500000,
  },
  {
    date: '26/04/2024',
    Circulating: 1500000,
    Locked: 2000000,
    'Total Issued': 800000,
  },
  {
    date: '28/04/2024',
    Circulating: 2000000,
    Locked: 2500000,
    'Total Issued': 1000000,
  },
  {
    date: '30/04/2024',
    Circulating: 2500000,
    Locked: 3000000,
    'Total Issued': 1500000,
  },
  {
    date: '02/05/2024',
    Circulating: 3000000,
    Locked: 3500000,
    'Total Issued': 2000000,
  },
  {
    date: '04/05/2024',
    Circulating: 3500000,
    Locked: 4000000,
    'Total Issued': 2500000,
  },
  {
    date: '06/05/2024',
    Circulating: 4000000,
    Locked: 4500000,
    'Total Issued': 3000000,
  },
  {
    date: '08/05/2024',
    Circulating: 4500000,
    Locked: 5000000,
    'Total Issued': 3500000,
  },
  {
    date: '10/05/2024',
    Circulating: 5000000,
    Locked: 5500000,
    'Total Issued': 4000000,
  },
  {
    date: '12/05/2024',
    Circulating: 5500000,
    Locked: 6000000,
    'Total Issued': 4500000,
  },
  {
    date: '14/05/2024',
    Circulating: 6000000,
    Locked: 6500000,
    'Total Issued': 5000000,
  },
  {
    date: '16/05/2024',
    Circulating: 6500000,
    Locked: 7000000,
    'Total Issued': 5500000,
  },
  {
    date: '18/05/2024',
    Circulating: 7000000,
    Locked: 7500000,
    'Total Issued': 6000000,
  },
];

const MarketCapitalization: React.FC = () => (
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
        type="monotone"
        dataKey="Circulating"
        stroke="#FFC107"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="monotone"
        dataKey="Locked"
        stroke="#16C062"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="monotone"
        dataKey="Total Issued"
        stroke="#3EACFC"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default MarketCapitalization;
