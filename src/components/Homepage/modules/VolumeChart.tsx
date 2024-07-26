import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import {
  ChartContainer,
  ResponsiveWrapper,
  Title,
} from '../styles/VolumeChart.style';

const data = [
  { date: '24/04/2024', TENEX: 2000000, veTENEX: 2000000 },
  { date: '30/04/2024', TENEX: 1500000, veTENEX: 2500000 },
  { date: '06/05/2024', TENEX: 1700000, veTENEX: 2190000 },
  { date: '12/05/2024', TENEX: 1290000, veTENEX: 3510000 },
  { date: '18/05/2024', TENEX: 1590000, veTENEX: 2210000 },
  { date: '24/05/2024', TENEX: 2690000, veTENEX: 2810000 },
  { date: '30/05/2024', TENEX: 1200000, veTENEX: 2100000 },
  { date: '06/06/2024', TENEX: 1900000, veTENEX: 3200000 },
  { date: '24/04/2024', TENEX: 2000000, veTENEX: 2000000 },
  { date: '30/04/2024', TENEX: 1500000, veTENEX: 2500000 },
  { date: '06/05/2024', TENEX: 1700000, veTENEX: 2190000 },
  { date: '12/05/2024', TENEX: 1290000, veTENEX: 3510000 },
  { date: '18/05/2024', TENEX: 1590000, veTENEX: 2210000 },
  { date: '24/05/2024', TENEX: 2690000, veTENEX: 2810000 },
  { date: '30/05/2024', TENEX: 1200000, veTENEX: 2100000 },
  { date: '06/06/2024', TENEX: 1900000, veTENEX: 3200000 },
  { date: '24/04/2024', TENEX: 2000000, veTENEX: 2000000 },
  { date: '30/04/2024', TENEX: 1500000, veTENEX: 2500000 },
  { date: '06/05/2024', TENEX: 1700000, veTENEX: 2190000 },
  { date: '12/05/2024', TENEX: 1290000, veTENEX: 3510000 },
  { date: '18/05/2024', TENEX: 1590000, veTENEX: 2210000 },
  { date: '24/05/2024', TENEX: 2690000, veTENEX: 2810000 },
  { date: '30/05/2024', TENEX: 1200000, veTENEX: 2100000 },
  { date: '06/06/2024', TENEX: 1900000, veTENEX: 3200000 },
  { date: '24/04/2024', TENEX: 2000000, veTENEX: 2000000 },
  { date: '30/04/2024', TENEX: 1500000, veTENEX: 2500000 },
  { date: '06/05/2024', TENEX: 1700000, veTENEX: 2190000 },
  { date: '12/05/2024', TENEX: 1290000, veTENEX: 3510000 },
  { date: '18/05/2024', TENEX: 1590000, veTENEX: 2210000 },
  { date: '24/05/2024', TENEX: 2690000, veTENEX: 2810000 },
  { date: '30/05/2024', TENEX: 1200000, veTENEX: 2100000 },
  { date: '06/06/2024', TENEX: 1900000, veTENEX: 3200000 },
  { date: '24/04/2024', TENEX: 2000000, veTENEX: 2000000 },
  { date: '30/04/2024', TENEX: 1500000, veTENEX: 2500000 },
  { date: '06/05/2024', TENEX: 1700000, veTENEX: 2190000 },
];

const VolumeChart: React.FC = () => (
  <ChartContainer>
    <Title>Volume</Title>
    <ResponsiveWrapper width="100%" height={600}>
      <BarChart data={data} barSize={10}>
        <CartesianGrid
          horizontal={true}
          vertical={false}
          stroke="rgba(219, 219, 219, 0.4)"
        />
        <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#ffffff' }} />
        <YAxis
          tickFormatter={(tick: number) => `${tick.toLocaleString()}`}
          tick={{ fontSize: 12, fill: '#ffffff' }} // Adjust font size and color
          axisLine={false}
        />

        <Tooltip />
        <Legend
          verticalAlign="top"
          align="center"
          wrapperStyle={{ paddingBottom: 50 }}
        />
        <Bar dataKey="TENEX" stackId="a" fill="rgba(15, 170, 84, 1)" />
        <Bar dataKey="veTENEX" stackId="a" fill="rgba(15, 126, 206, 1)" />
      </BarChart>
    </ResponsiveWrapper>
  </ChartContainer>
);

export default VolumeChart;
