import React from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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

const ChartContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 300;
  line-height: 71.76px;
  text-align: center;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const ResponsiveWrapper = styled(ResponsiveContainer)`
  padding: 20px;
`;

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
          tickFormatter={(tick) => `${tick.toLocaleString()}`}
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
