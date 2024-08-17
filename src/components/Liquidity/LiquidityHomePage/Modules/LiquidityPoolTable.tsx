import Table, { TableContainerStyle } from '../../../common/TableStyled';

import {
  LiquidityHeaderColumn,
  TableHeaderWrapper,
} from '../styles/LiquidityTable.style.tsx';
import SortIcon from '../../../../assets/short.svg';

import { ImgIconStyle } from '../../../ManageVeTenex/Styles/ManageVetenex.style.tsx';
import LiquidityPoolCard from './LiquidityPoolCard.tsx';
import { LiquidityPoolNewType } from '../../../../graphql/types/LiquidityPoolNew.ts';

type SortableKeys = keyof LiquidityPoolNewType;

interface PoolTableProps {
  handleSortedFeatures?: (item: SortableKeys) => void;
  sortedData: LiquidityPoolNewType[];
}

const LiquidityPoolTable: React.FC<PoolTableProps> = ({
  //handleSortedFeatures,
  sortedData,
}) => {
  // const handleSorting = (item: SortableKeys) => {
  //   handleSortedFeatures(item);
  // };

  return (
    <TableContainerStyle>
      <Table padding="20px" margin="0px 0px">
        <thead>
          <tr>
            <th>
              {' '}
              <LiquidityHeaderColumn>Liquidity Pool </LiquidityHeaderColumn>
            </th>
            <th>
              <TableHeaderWrapper>
                APR <img src={SortIcon} />
              </TableHeaderWrapper>
            </th>
            <th>
              <TableHeaderWrapper>
                {' '}
                Volume{' '}
                <ImgIconStyle width="12px" height="12px" src={SortIcon} />
              </TableHeaderWrapper>
            </th>
            <th>
              <TableHeaderWrapper>
                {' '}
                Fees <ImgIconStyle width="12px" height="12px" src={SortIcon} />
              </TableHeaderWrapper>
            </th>
            <th>
              <TableHeaderWrapper>
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
  );
};

export default LiquidityPoolTable;
