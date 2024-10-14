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
import Pagination from '../../../common/Pagination.tsx';
import { LiquidityTableWrapper } from '../styles/LiquidityTable.style.tsx';

type SortableKeys = 'totalVolumeUSD' | 'totalFeesUSD' | 'totalValueLocked';

interface PoolTableProps {
  handleSortedFeatures: (field: SortableKeys) => void;
  sortedData: LiquidityPoolNewType[];
  handleNextPage: () => void;
  handlePrevpage: () => void;
  currentPage: number;
  totalPages: number;
}

const LiquidityPoolTable: React.FC<PoolTableProps> = ({
  handleSortedFeatures,
  sortedData,
  handleNextPage,
  handlePrevpage,
  totalPages,
  currentPage,
}) => {
  const handleSorting = (item: SortableKeys) => {
    handleSortedFeatures(item);
  };

  return (
    <LiquidityTableWrapper>
      <TableWrapper padding="0px" background="none">
        <TableContains margin="0px 0px">
          <thead>
            <TableRow>
              <TableHeader textalign="left">
                <StatsCardtitle fontSize={16}>Liquidity Pool</StatsCardtitle>
              </TableHeader>

              <TableHeader>
                <TableHeaderWrapper>
                  <StatsCardtitle fontSize={16}>APR</StatsCardtitle>
                  <ImageContainer
                    width="16px"
                    height="16px"
                    src={SortIcon}
                    cursor="pointer"
                    // onClick={() => handleSorting('totalVolumeUSD')}
                  />
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>
                  <StatsCardtitle fontSize={16}>Volume</StatsCardtitle>
                  <ImageContainer
                    width="16px"
                    height="16px"
                    src={SortIcon}
                    cursor="pointer"
                    onClick={() => handleSorting('totalVolumeUSD')}
                  />
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>
                  <StatsCardtitle fontSize={16}>Fees</StatsCardtitle>

                  <ImageContainer
                    width="16px"
                    height="16px"
                    src={SortIcon}
                    cursor="pointer"
                    onClick={() => handleSorting('totalFeesUSD')}
                  />
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>
                  <StatsCardtitle fontSize={16} lineheight={'23.92px'}>
                    Pool Balance
                  </StatsCardtitle>
                  <ImageContainer
                    width="16px"
                    height="16px"
                    src={SortIcon}
                    cursor="pointer"
                    onClick={() => handleSorting('totalValueLocked')}
                  />
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
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevpage={handlePrevpage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </LiquidityTableWrapper>
  );
};

export default LiquidityPoolTable;
