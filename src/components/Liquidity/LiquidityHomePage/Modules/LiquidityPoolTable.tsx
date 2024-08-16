import Table, { TableContainerStyle } from '../../../common/TableStyled';

import LiquidityPoolCard from './LiquidityPoolCard.tsx';

import {
  LiquidityHeaderColumn,
  TableHeaderWrapper,
  PoolTableContains,
} from '../styles/LiquidityTable.style.tsx';
import SortIcon from '../../../../assets/short.svg';
import { PoolDataProps } from './LiquidityPool.tsx';
import { ImgIconStyle } from '../../../ManageVeTenex/Styles/ManageVetenex.style.tsx';

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
    <PoolTableContains>
      <TableContainerStyle>
        <Table padding="20px" margin="0px 0px">
          <thead>
            <tr>
              <th>
                {' '}
                <LiquidityHeaderColumn>Liquidity Pool </LiquidityHeaderColumn>
              </th>
              <th>
                <TableHeaderWrapper onClick={() => handleSorting('apr')}>
                  APR <ImgIconStyle width="12px" height="12px" src={SortIcon} />
                </TableHeaderWrapper>
              </th>
              <th>
                <TableHeaderWrapper onClick={() => handleSorting('volume')}>
                  {' '}
                  Volume{' '}
                  <ImgIconStyle width="12px" height="12px" src={SortIcon} />
                </TableHeaderWrapper>
              </th>
              <th>
                <TableHeaderWrapper onClick={() => handleSorting('fees')}>
                  {' '}
                  Fees{' '}
                  <ImgIconStyle width="12px" height="12px" src={SortIcon} />
                </TableHeaderWrapper>
              </th>
              <th>
                <TableHeaderWrapper
                  onClick={() => handleSorting('poolBalance')}
                >
                  {' '}
                  Pool Balance{' '}
                  <ImgIconStyle width="12px" height="12px" src={SortIcon} />
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
    </PoolTableContains>
  );
};

export default LiquidityPoolTable;
