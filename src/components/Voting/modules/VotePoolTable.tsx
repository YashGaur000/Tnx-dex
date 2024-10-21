import React, { useState } from 'react';
import TableContains, {
  TableWrapper,
  TableHeader,
  TableHeaderWrapper,
  TableRow,
} from '../../common/TableStyled';

import VotingPoolCard from './VotingPoolCard';
import SortIcon from '../../../assets/short.svg';
import { StatsCardtitle } from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import { ImageContainer } from '../../ManageVeTenex/Styles/ManageVetenex.style';

import VoteSelectedCard from './VoteSelectedCard';
import { LiquidityTableWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';

import SuccessPopup from '../../common/SucessPopup';
import ErrorPopup from '../../common/Error/ErrorPopup';
import { Nft } from '../../../types/VotingEscrow';
import Pagination from '../../common/Pagination';
import { VoteDataType } from '../../../types/VoteData';
type SortField = 'totalFeesUSD' | 'totalBribesUSD' | 'totalValueLocked';

interface VotePoolTableProps {
  islockPresent: boolean;
  sortedData: VoteDataType[];
  UserNft: Nft[];
  handleSort: (field: SortField) => void;
  handleNextPage: () => void;
  handlePrevpage: () => void;
  currentPage: number;
  totalPages: number;
}
const VotePoolTable: React.FC<VotePoolTableProps> = ({
  islockPresent,
  sortedData,
  UserNft,
  handleSort,
  handleNextPage,
  handlePrevpage,
  totalPages,
  currentPage,
}) => {
  const [selectedPoolsCount, setSelectedPoolsCount] = useState<number>(0);
  const [VoteSelectPool, setVoteSelectPool] = useState<VoteDataType[]>([]);
  const [explorerLink, setExplorerlink] = useState<string>('');
  const [isSucess, setSucess] = useState(false);

  const handleSelectButton = (pool: VoteDataType) => {
    const isSelected = VoteSelectPool.some(
      (selectedPool) => selectedPool.id === pool.id
    );

    if (islockPresent) {
      if (isSelected) {
        setVoteSelectPool((prevPools) =>
          prevPools.filter((selectedPool) => selectedPool.id !== pool.id)
        );
        setSelectedPoolsCount((Count) => Count - 1);
      } else if (selectedPoolsCount < 30 && VoteSelectPool.length < 30) {
        setVoteSelectPool((prevPools) => [...prevPools, pool]);
        setSelectedPoolsCount((Count) => Count + 1);
      }
    }
  };

  return (
    <>
      <LiquidityTableWrapper>
        <TableWrapper background="none" padding="0px">
          <TableContains margin="0px 0px">
            <thead>
              <TableRow>
                <TableHeader textalign="left" width="330px">
                  <StatsCardtitle fontSize={16}>Liquidity Pool</StatsCardtitle>
                </TableHeader>
                <TableHeader>
                  <TableHeaderWrapper>
                    <StatsCardtitle fontSize={16}>Fees</StatsCardtitle>
                    <ImageContainer
                      width="16px"
                      height="16px"
                      src={SortIcon}
                      cursor="pointer"
                      onClick={() => handleSort('totalFeesUSD')}
                    />
                  </TableHeaderWrapper>
                </TableHeader>

                <TableHeader>
                  <TableHeaderWrapper>
                    <StatsCardtitle fontSize={16}>Incentives</StatsCardtitle>
                    <ImageContainer
                      width="16px"
                      height="16px"
                      src={SortIcon}
                      cursor="pointer"
                      onClick={() => handleSort('totalBribesUSD')}
                    />
                  </TableHeaderWrapper>
                </TableHeader>
                <TableHeader>
                  <TableHeaderWrapper>
                    <StatsCardtitle fontSize={16}>Total Rewards</StatsCardtitle>
                    <ImageContainer
                      width="16px"
                      height="16px"
                      src={SortIcon}
                      cursor="pointer"
                      onClick={() => handleSort('totalFeesUSD')}
                    />
                  </TableHeaderWrapper>
                </TableHeader>
                <TableHeader>
                  <TableHeaderWrapper>
                    <StatsCardtitle fontSize={16}>vAPR</StatsCardtitle>
                    <ImageContainer
                      width="16px"
                      height="16px"
                      src={SortIcon}
                      cursor="pointer"
                    />
                  </TableHeaderWrapper>
                </TableHeader>
                <TableHeader>
                  <TableHeaderWrapper>
                    <StatsCardtitle fontSize={16}>Vote Pools</StatsCardtitle>
                  </TableHeaderWrapper>
                </TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {sortedData.map((item, key) => (
                <VotingPoolCard
                  key={key}
                  data={item}
                  islock={islockPresent}
                  isSelectCardOpen={VoteSelectPool.some(
                    (pool) => pool.id === item.id
                  )}
                  handleSelectButton={handleSelectButton}
                />
              ))}
            </tbody>
          </TableContains>
          {selectedPoolsCount > 0 && (
            <VoteSelectedCard
              countSelectedItem={selectedPoolsCount}
              VoteSelectPoolData={VoteSelectPool}
              nftData={UserNft}
              setVoteSelectPool={setVoteSelectPool}
              setSelectedPoolsCount={setSelectedPoolsCount}
              setSucess={setSucess}
              setExplorerlink={setExplorerlink}
            />
          )}
        </TableWrapper>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevpage={handlePrevpage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </LiquidityTableWrapper>

      {isSucess && (
        <SuccessPopup message="Vote Sucessfully" explorerLink={explorerLink} />
      )}
      {selectedPoolsCount >= 30 && (
        <ErrorPopup errorMessage="only  30 pool allowed" />
      )}
    </>
  );
};

export default VotePoolTable;
