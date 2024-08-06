import React from 'react';
import moment from 'moment';
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
    'Total TENEX': 500000,
    'Locked TENEX': 1000000,
    'veTENEX Voting Power': 200000,
  },
  {
    date: '24/04/2024',
    'Total TENEX': 1000000,
    'Locked TENEX': 1500000,
    'veTENEX Voting Power': 500000,
  },
  {
    date: '26/04/2024',
    'Total TENEX': 1500000,
    'Locked TENEX': 2000000,
    'veTENEX Voting Power': 800000,
  },
  {
    date: '28/04/2024',
    'Total TENEX': 2000000,
    'Locked TENEX': 2500000,
    'veTENEX Voting Power': 1000000,
  },
  {
    date: '30/04/2024',
    'Total TENEX': 2500000,
    'Locked TENEX': 3000000,
    'veTENEX Voting Power': 1500000,
  },
  {
    date: '02/05/2024',
    'Total TENEX': 3000000,
    'Locked TENEX': 3500000,
    'veTENEX Voting Power': 2000000,
  },
  {
    date: '04/05/2024',
    'Total TENEX': 3500000,
    'Locked TENEX': 4000000,
    'veTENEX Voting Power': 2500000,
  },
  {
    date: '06/05/2024',
    'Total TENEX': 4000000,
    'Locked TENEX': 4500000,
    'veTENEX Voting Power': 3000000,
  },
  {
    date: '08/05/2024',
    'Total TENEX': 4500000,
    'Locked TENEX': 5000000,
    'veTENEX Voting Power': 3500000,
  },
  {
    date: '10/05/2024',
    'Total TENEX': 5000000,
    'Locked TENEX': 5500000,
    'veTENEX Voting Power': 4000000,
  },
  {
    date: '12/05/2024',
    'Total TENEX': 5500000,
    'Locked TENEX': 6000000,
    'veTENEX Voting Power': 4500000,
  },
  {
    date: '14/05/2024',
    'Total TENEX': 6000000,
    'Locked TENEX': 6500000,
    'veTENEX Voting Power': 5000000,
  },
  {
    date: '16/05/2024',
    'Total TENEX': 6500000,
    'Locked TENEX': 7000000,
    'veTENEX Voting Power': 5500000,
  },
  {
    date: '18/05/2024',
    'Total TENEX': 7000000,
    'Locked TENEX': 7500000,
    'veTENEX Voting Power': 6000000,
  },
];

// Convert the dates to MM/DD/YYYY format
const formattedData = data.map((item) => ({
  ...item,
  date: moment(item.date, 'DD/MM/YYYY').format('MM/DD/YYYY'), // Convert date format
}));

const VoteEscrowedSupplyChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={600}>
    <LineChart
      data={formattedData}
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
        type="monotone"
        dataKey="Total TENEX"
        stroke="#FF7707"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="monotone"
        dataKey="Locked TENEX"
        stroke="#16C062"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="monotone"
        dataKey="veTENEX Voting Power"
        stroke="#3EACFC"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default VoteEscrowedSupplyChart;
