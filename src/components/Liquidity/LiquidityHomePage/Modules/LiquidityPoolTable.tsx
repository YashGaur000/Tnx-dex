import TableContains, {
  TableHeader,
  TableHeaderWrapper,
  TableRow,
  TableWrapper,
} from '../../../common/TableStyled';

import SortIcon from '../../../../assets/short.svg';

import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style.tsx';
import LiquidityPoolCard from './LiquidityPoolCard.tsx';

import { LiquidityPoolNewType } from '../../../../graphql/types/LiquidityPoolNew';
import { StatsCardtitle } from '../styles/LiquidityHeroSection.style.tsx';

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
            <TableHeader textAlign="left">
              <StatsCardtitle fontSize={16}>Liquidity Pool</StatsCardtitle>
            </TableHeader>

            <TableHeader>
              <TableHeaderWrapper>
                <StatsCardtitle fontSize={16}>APR</StatsCardtitle>
                <ImageContainer width="16px" height="16px" src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>
                <StatsCardtitle fontSize={16}>Volume</StatsCardtitle>
                <ImageContainer width="16px" height="16px" src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>
                <StatsCardtitle fontSize={16}>Fees</StatsCardtitle>

                <ImageContainer width="16px" height="16px" src={SortIcon} />
              </TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>
                <StatsCardtitle fontSize={16} lineheight={'23.92px'}>
                  Pool Balance
                </StatsCardtitle>
                <ImageContainer width="16px" height="16px" src={SortIcon} />
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
