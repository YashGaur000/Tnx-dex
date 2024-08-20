import TableContains, {
  TableHeader,
  TableWrapper,
} from '../../../common/TableStyled';

import {
  LiquidityHeaderColumn,
  TableHeaderWrapper,
} from '../styles/LiquidityTable.style.tsx';
import SortIcon from '../../../../assets/short.svg';

import { ImgContains } from '../../../ManageVeTenex/Styles/ManageVetenex.style.tsx';
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
    <TableWrapper>
      <TableContains padding="20px" margin="0px 0px">
        <thead>
          <tr>
            <TableHeader>
              {' '}
              <LiquidityHeaderColumn>Liquidity Pool </LiquidityHeaderColumn>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>
                APR <img src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>
                {' '}
                Volume <ImgContains width="12px" height="12px" src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>
                {' '}
                Fees <ImgContains width="12px" height="12px" src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>
                {' '}
                Pool Balance{' '}
                <ImgContains width="12px" height="12px" src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, key) => (
            <LiquidityPoolCard key={key} data={item} />
          ))}
        </tbody>
      </TableContains>
    </TableWrapper>
  );
};

export default LiquidityPoolTable;
