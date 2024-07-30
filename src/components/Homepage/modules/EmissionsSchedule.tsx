import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  Legend,
} from 'recharts';
import {
  Description,
  EmissionsContainer,
  Title,
} from '../styles/EmmissionsSchedule.style';

const data = [
  { epoch: 1, emissions: 50000, reducedEmissions: 0 },
  { epoch: 21, emissions: 40000, reducedEmissions: 0 },
  { epoch: 34, emissions: 38000, reducedEmissions: 0 },
  { epoch: 41, emissions: 30000, reducedEmissions: 2000 },
  { epoch: 61, emissions: 20000, reducedEmissions: 12000 },
  { epoch: 81, emissions: 10000, reducedEmissions: 20000 },
  { epoch: 101, emissions: 5000, reducedEmissions: 25000 },
  { epoch: 121, emissions: 2000, reducedEmissions: 28000 },
  { epoch: 141, emissions: 1000, reducedEmissions: 29000 },
  { epoch: 161, emissions: 500, reducedEmissions: 29500 },
];

const EmissionsSchedule: React.FC = () => (
  <EmissionsContainer>
    <Title>Emissions Schedule</Title>
    <Description>
      We introduced a 2% Reverse Rebase at epoch 34 reducing emissions by 514261
      TEREX so far.
    </Description>
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid
          horizontal={true}
          vertical={false}
          stroke="rgba(219, 219, 219, 0.4)"
        />
        <XAxis
          dataKey="epoch"
          tick={{ fontSize: 12, fill: '#ffffff' }}
          axisLine={false}
        />
        <YAxis tick={{ fontSize: 12, fill: '#ffffff' }} axisLine={false} />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="center"
          wrapperStyle={{ paddingBottom: 20 }}
        />
        <Area
          type="monotone"
          dataKey="emissions"
          stroke="rgba(21, 117, 187, 1)"
          fill="rgba(21, 117, 187, 1)"
          fillOpacity={1}
          dot={{ fill: 'rgba(204, 204, 204, 1)', r: 3 }}
        />
        <Area
          type="monotone"
          dataKey="reducedEmissions"
          stroke="rgba(4, 102, 48, 1)"
          fill="rgba(4, 102, 48, 1)"
          fillOpacity={1}
          dot={{ fill: 'rgba(204, 204, 204, 1)', r: 3 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </EmissionsContainer>
);

export default EmissionsSchedule;
