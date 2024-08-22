import TableContains, {
  TableHeader,
  TableRow,
  TableWrapper,
} from '../../../common/TableStyled';

import {
  LiquidityHeaderColumn,
  TableHeaderWrapper,
} from '../styles/LiquidityTable.style.tsx';
import SortIcon from '../../../../assets/short.svg';

import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style.tsx';
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
      <TableContains margin="0px 0px">
        <thead>
          <TableRow>
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
                Volume{' '}
                <ImageContainer width="12px" height="12px" src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>
                {' '}
                Fees{' '}
                <ImageContainer width="12px" height="12px" src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>
                {' '}
                Pool Balance{' '}
                <ImageContainer width="12px" height="12px" src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
          </TableRow>
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
