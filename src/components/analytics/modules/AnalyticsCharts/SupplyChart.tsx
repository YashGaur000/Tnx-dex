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
    Diluted: 500000,
    Outstanding: 1000000,
    Circulating: 200000,
  },
  {
    date: '24/04/2024',
    Diluted: 1000000,
    Outstanding: 1500000,
    Circulating: 500000,
  },
  {
    date: '26/04/2024',
    Diluted: 1500000,
    Outstanding: 2000000,
    Circulating: 800000,
  },
  {
    date: '28/04/2024',
    Diluted: 2000000,
    Outstanding: 2500000,
    Circulating: 1000000,
  },
  {
    date: '30/04/2024',
    Diluted: 2500000,
    Outstanding: 3000000,
    Circulating: 1500000,
  },
  {
    date: '02/05/2024',
    Diluted: 3000000,
    Outstanding: 3500000,
    Circulating: 2000000,
  },
  {
    date: '04/05/2024',
    Diluted: 3500000,
    Outstanding: 4000000,
    Circulating: 2500000,
  },
  {
    date: '06/05/2024',
    Diluted: 4000000,
    Outstanding: 4500000,
    Circulating: 3000000,
  },
  {
    date: '08/05/2024',
    Diluted: 4500000,
    Outstanding: 5000000,
    Circulating: 3500000,
  },
  {
    date: '10/05/2024',
    Diluted: 5000000,
    Outstanding: 5500000,
    Circulating: 4000000,
  },
  {
    date: '12/05/2024',
    Diluted: 5500000,
    Outstanding: 6000000,
    Circulating: 4500000,
  },
  {
    date: '14/05/2024',
    Diluted: 6000000,
    Outstanding: 6500000,
    Circulating: 5000000,
  },
  {
    date: '16/05/2024',
    Diluted: 6500000,
    Outstanding: 7000000,
    Circulating: 5500000,
  },
  {
    date: '18/05/2024',
    Diluted: 7000000,
    Outstanding: 7500000,
    Circulating: 6000000,
  },
];

const formattedData = data.map((item) => ({
  ...item,
  date: moment(item.date, 'DD/MM/YYYY').format('MM/DD/YYYY'), // Convert to MM/DD/YYYY
}));

const SupplyChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={600}>
    <LineChart
      data={formattedData}
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
        fillOpacity={0.8}
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
        dataKey="Diluted"
        stroke="#FFC0CB"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="monotone"
        dataKey="Outstanding"
        stroke="#16C062"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="monotone"
        dataKey="Circulating"
        stroke="#3EACFC"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default SupplyChart;
