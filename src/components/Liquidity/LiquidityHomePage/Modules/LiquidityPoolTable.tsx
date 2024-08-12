import Table, { TableContainerStyle } from '../../../common/TableStyled';

import LiquidityPoolCard from './LiquidityPoolCard.tsx';

import {
  LiquidityHeaderColumn,
  TableHeaderWrapper,
} from '../styles/LiquidityTable.style.tsx';
import SortIcon from '../../../../assets/sorting.png';
import { PoolDataProps } from './LiquidityPool.tsx';

type SortableKeys = keyof PoolDataProps;

interface PoolTableProps {
  handleSortedFeatures: (item: SortableKeys) => void;
  sortedData: PoolDataProps[];
}

const LiquidityPoolTable: React.FC<PoolTableProps> = ({
  handleSortedFeatures,
  sortedData,
}) => {
  const handleSorting = (item: SortableKeys) => {
    handleSortedFeatures(item);
  };

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
            <LiquidityHeaderColumn>Liquidity Pool </LiquidityHeaderColumn>
            <th>
              <TableHeaderWrapper onClick={() => handleSorting('apr')}>
                APR <img src={SortIcon} />
              </TableHeaderWrapper>
            </th>
            <th>
              <TableHeaderWrapper onClick={() => handleSorting('volume')}>
                {' '}
                Volume <img src={SortIcon} />
              </TableHeaderWrapper>
            </th>
            <th>
              <TableHeaderWrapper onClick={() => handleSorting('fees')}>
                {' '}
                Fees <img src={SortIcon} />
              </TableHeaderWrapper>
            </th>
            <th>
              <TableHeaderWrapper onClick={() => handleSorting('poolBalance')}>
                {' '}
                Pool Balance <img src={SortIcon} />
              </TableHeaderWrapper>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, key) => (
            <LiquidityPoolCard key={key} data={item} />
          ))}
        </tbody>
      </Table>
    </TableContainerStyle>
  );
};

export default LiquidityPoolTable;
