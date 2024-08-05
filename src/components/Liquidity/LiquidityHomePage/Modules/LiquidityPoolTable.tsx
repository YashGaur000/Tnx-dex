import Table, { TableContainerStyle } from '../../../common/TableStyled';
import Teth from '../../../../assets/Tether.svg';
import BTC from '../../../../assets/Btc.svg';
import SOL from '../../../../assets/sol.png';
import USDC from '../../../../assets/usdc.png';
import FTM from '../../../../assets/ftm.png';
import LiquidityPoolCard from './LiquidityPoolCard';

interface PoolData {
  id: string;
  pair: string;
  icon1: string;
  icon2: string;
  stablePercentage: number;
  tvl: string;
  apr: number;
  volume: string;
  volumeDesc: string;
  volumeSubDesc: string;
  fees: string;
  feesDesc: string;
  feesSubDesc: string;
  poolBalance: string;
  balanceDesc: string;
}

const LiquidityPoolTable = () => {
  const poolData: PoolData[] = [
    {
      id: '1',
      pair: 'USDT-BTC',
      icon1: Teth,
      icon2: BTC,
      stablePercentage: 0.01,
      tvl: '~$7,428,176,4',
      apr: 226.18,
      volume: '~$101,804,848',
      volumeDesc: '0.5643 USDT',
      volumeSubDesc: '0.003 BTC',
      fees: '~$10,180',
      feesDesc: '0.5643 USDT',
      feesSubDesc: '0.003 BTC',
      poolBalance: '2,428.64 USDT',
      balanceDesc: '0.5643 USDT',
    },
    {
      id: '2',
      pair: 'USDT-SOL',
      icon1: Teth,
      icon2: SOL,
      stablePercentage: 0.01,
      tvl: '~$7,428,176,4',
      apr: 47.74,
      volume: '~$101,804,848',
      volumeDesc: '0.5643 USDT',
      volumeSubDesc: '0.003 SOL',
      fees: '~$10,180',
      feesDesc: '0.5643 USDT',
      feesSubDesc: '0.003 SOL',
      poolBalance: '2,428.64 USDT',
      balanceDesc: '0.5643 USDT',
    },
    {
      id: '3',
      pair: 'USDT-SOL',
      icon1: USDC,
      icon2: FTM,
      stablePercentage: 0.01,
      tvl: '~$7,428,176,4',
      apr: 47.74,
      volume: '~$101,804,848',
      volumeDesc: '0.5643 USDT',
      volumeSubDesc: '0.003 SOL',
      fees: '~$10,180',
      feesDesc: '0.5643 USDT',
      feesSubDesc: '0.003 SOL',
      poolBalance: '2,428.64 USDT',
      balanceDesc: '0.5643 USDT',
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
            <th>Liquidity Pool </th>
            <th>APR</th>
            <th>Volume</th>
            <th>Fees</th>
            <th>Pool Balance</th>
          </tr>
        </thead>
        <tbody>
          {poolData.map((item, key) => (
            <LiquidityPoolCard key={key} data={item} />
          ))}
        </tbody>
      </Table>
    </TableContainerStyle>
  );
};

export default LiquidityPoolTable;
