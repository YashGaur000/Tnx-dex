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
import { useState } from 'react';
const ITEMS_PER_PAGE = 5;
type SortableKeys = 'totalVolumeUSD' | 'reserve0' | 'totalFeesUSD';

interface PoolTableProps {
  handleSortedFeatures: (item: SortableKeys) => void;
  sortedData: LiquidityPoolNewType[];
}

const LiquidityPoolTable: React.FC<PoolTableProps> = ({
  handleSortedFeatures,
  sortedData,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);

  const handleSorting = (item: SortableKeys) => {
    handleSortedFeatures(item);
  };
  function handlePrevpage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }
  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = sortedData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

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
                    onClick={() => handleSorting('totalVolumeUSD')}
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
                    onClick={() => handleSorting('totalVolumeUSD')}
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
                    onClick={() => handleSorting('totalVolumeUSD')}
                  />
                </TableHeaderWrapper>
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {paginatedData.map((item, key) => (
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
