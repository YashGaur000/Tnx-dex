import React from 'react';
import Table, { TableContainerStyle } from '../../common/TableStyled';
import Teth from '../../../assets/tether.png';
import BTC from '../../../assets/Btc.svg';
import SOL from '../../../assets/sol.png';
import USDC from '../../../assets/usdc.png';
import FTM from '../../../assets/ftm.png';
import VotingPoolCard from './VotingPoolCard';
import SortIcon from '../../../assets/sorting.png';

interface voteData {
  id?: string;
  pair?: string;
  icon1?: string;
  icon2?: string;
  stablePercentage?: number;
  tvl?: string;
  apr?: number;
  volume?: string;
  volumeDesc?: string;
  volumeSubDesc?: string;
  fees?: string;
  feesDesc?: string;
  feesSubDesc?: string;
  poolBalance?: string;
  balanceDesc?: string;
}

const VotePoolTable: React.FC = () => {
  const voteData: voteData[] = [
    {
      id: '1',
      pair: 'USDT-BTC',
      icon1: Teth,
      icon2: BTC,
      stablePercentage: 0.01,
      tvl: '~$7,428,176,4',
      apr: 226.18,
      volume: 'No available incentives',
      volumeDesc: 'Add incentives',
      // volumeSubDesc: '0.003 BTC',
      fees: '~$10,180',
      feesDesc: 'Fees + Incentives',
      // feesSubDesc: '0.003 BTC',
      poolBalance: '37.18%',
      // balanceDesc: '0.5643 USDT',
    },
    {
      id: '2',
      pair: 'USDT-SOL',
      icon1: Teth,
      icon2: SOL,
      stablePercentage: 0.01,
      tvl: '~$7,428,176,4',
      apr: 47.74,
      volume: 'No available incentives',
      volumeDesc: 'Add incentives',
      // volumeSubDesc: '0.003 SOL',
      fees: '~$10,180',
      feesDesc: 'Fees + Incentives',
      // feesSubDesc: '0.003 SOL',
      poolBalance: '37.18%',
      // balanceDesc: '0.5643 USDT',
    },
    {
      id: '3',
      pair: 'USDT-SOL',
      icon1: USDC,
      icon2: FTM,
      stablePercentage: 0.01,
      tvl: '~$7,428,176,4',
      apr: 47.74,
      volume: 'No available incentives',
      volumeDesc: 'Add incentives',
      // volumeSubDesc: '0.003 SOL',
      fees: '~$10,180',
      feesDesc: 'Fees + Incentives',
      // feesSubDesc: '0.003 SOL',
      poolBalance: '37.18%',
      // balanceDesc: '0.5643 USDT',
    },
  ];

  return (
    <TableContainerStyle>
      <Table
        padding="20px 30px "
        borderRadius="20px"
        textAlign="center"
        width="100%"
        margin="20px 0px"
      >
        <thead>
          <tr>
            <th>Pool </th>
            <th>
              Fees <img src={SortIcon} />
            </th>
            <th>
              Incentives <img src={SortIcon} />
            </th>
            <th>
              Total Rewards <img src={SortIcon} />
            </th>
            <th>
              vAPR <img src={SortIcon} />
            </th>
            <th>
              Vote Pool <img src={SortIcon} />
            </th>
          </tr>
        </thead>
        <tbody>
          {voteData.map((item, key) => (
            <VotingPoolCard key={key} data={item} />
          ))}
        </tbody>
      </Table>
    </TableContainerStyle>
  );
};

export default VotePoolTable;
