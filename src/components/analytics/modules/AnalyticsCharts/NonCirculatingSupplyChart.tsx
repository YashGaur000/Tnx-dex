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
  {
    date: '22/04/2024',
    OtherExcludedSupply: 500000,
    UnclaimedGaugeRewards: 1000000,
    LockedveNFT: 200000,
  },
  {
    date: '24/04/2024',
    OtherExcludedSupply: 1000000,
    UnclaimedGaugeRewards: 1500000,
    LockedveNFT: 500000,
  },
  {
    date: '26/04/2024',
    OtherExcludedSupply: 1500000,
    UnclaimedGaugeRewards: 2000000,
    LockedveNFT: 800000,
  },
  {
    date: '28/04/2024',
    OtherExcludedSupply: 2000000,
    UnclaimedGaugeRewards: 2500000,
    LockedveNFT: 1000000,
  },
  {
    date: '30/04/2024',
    OtherExcludedSupply: 2500000,
    UnclaimedGaugeRewards: 3000000,
    LockedveNFT: 1500000,
  },
  {
    date: '02/05/2024',
    OtherExcludedSupply: 3000000,
    UnclaimedGaugeRewards: 3500000,
    LockedveNFT: 2000000,
  },
  {
    date: '04/05/2024',
    OtherExcludedSupply: 3500000,
    UnclaimedGaugeRewards: 4000000,
    LockedveNFT: 2500000,
  },
  {
    date: '06/05/2024',
    OtherExcludedSupply: 4000000,
    UnclaimedGaugeRewards: 4500000,
    LockedveNFT: 3000000,
  },
  {
    date: '08/05/2024',
    OtherExcludedSupply: 4500000,
    UnclaimedGaugeRewards: 5000000,
    LockedveNFT: 3500000,
  },
  {
    date: '10/05/2024',
    OtherExcludedSupply: 5000000,
    UnclaimedGaugeRewards: 5500000,
    LockedveNFT: 4000000,
  },
  {
    date: '12/05/2024',
    OtherExcludedSupply: 5500000,
    UnclaimedGaugeRewards: 6000000,
    LockedveNFT: 4500000,
  },
  {
    date: '14/05/2024',
    OtherExcludedSupply: 6000000,
    UnclaimedGaugeRewards: 6500000,
    LockedveNFT: 5000000,
  },
  {
    date: '16/05/2024',
    OtherExcludedSupply: 6500000,
    UnclaimedGaugeRewards: 7000000,
    LockedveNFT: 5500000,
  },
  {
    date: '18/05/2024',
    OtherExcludedSupply: 7000000,
    UnclaimedGaugeRewards: 7500000,
    LockedveNFT: 6000000,
  },
];
const formattedData = data.map((item) => ({
  ...item,
  date: moment(item.date, 'DD/MM/YYYY').format('DD/MM/YYYY'),
}));
const NonCirculatingSupplyChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={600}>
    <LineChart
      width={1000}
      height={200}
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
        vertical={false}
        stroke="rgba(255, 255, 255, 0.2)"
      />
      <XAxis
        allowDataOverflow={true}
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
        iconSize={18}
        align="center"
        wrapperStyle={{
          paddingBottom: 20,
          color: '#fff',
          borderRadius: '20px',
        }}
      />

      <Line
        type="monotone"
        dataKey="LockedveNFT"
        stroke="#3EACFC"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="monotone"
        dataKey="UnclaimedGaugeRewards"
        stroke="#16C062"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
      <Line
        type="monotone"
        dataKey="OtherExcludedSupply"
        stroke="#FFC107"
        strokeWidth={2}
        dot={{ stroke: '#3EACFC', strokeWidth: 2, fill: '#3EACFC' }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default NonCirculatingSupplyChart;
