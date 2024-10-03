import React, { useEffect, useState } from 'react';
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
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
import useNftData from '../../../hooks/useUserNFTs';

import useVoterData from '../../../hooks/useVoterData';
import PageLoader from '../../common/PageLoader';
import SuccessPopup from '../../common/SucessPopup';
import ErrorPopup from '../../common/Error/ErrorPopup';
type SortField = 'totalFeesUSD' | 'totalBribesUSD';
type SortOrder = 'asc' | 'desc';
const VotePoolTable: React.FC = () => {
  const [selectedPoolsCount, setSelectedPoolsCount] = useState<number>(0);
  const [VoteSelectPool, setVoteSelectPool] = useState<LiquidityPoolNewType[]>(
    []
  );
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortedData, setSortedData] = useState<LiquidityPoolNewType[]>([]);

  const [islockPresent, setLockPresent] = useState<boolean>(false);
  const [isSucess, setSucess] = useState(false);
  const nftData = useNftData();
  const { voteData, Loading, error } = useVoterData();

  useEffect(() => {
    if (nftData.length > 0 && !islockPresent) {
      setLockPresent(true);
    } else if (nftData.length === 0 && islockPresent) {
      setLockPresent(false);
    }
  }, [nftData, islockPresent]);

  useEffect(() => {
    if (voteData) {
      setSortedData(voteData);
      console.log(voteData);
    }
  }, [voteData]);

  const handleSelectPool = (
    isSelected: boolean,
    pool: LiquidityPoolNewType
  ) => {
    if (selectedPoolsCount < 30 && VoteSelectPool.length < 30)
      if (isSelected) {
        setSelectedPoolsCount((Count) => Count + 1);
        setVoteSelectPool((prevPools) => [...prevPools, pool]);
      } else {
        setVoteSelectPool((prevPools) =>
          prevPools.filter((selectedPool) => selectedPool.id !== pool.id)
        );
        setSelectedPoolsCount((Count) => Count - 1);
      }
  };

  const handleSort = (field: SortField) => {
    const isAsc = sortField === field && sortOrder === 'asc';
    setSortField(field);
    setSortOrder(isAsc ? 'desc' : 'asc');

    const sorted = [...sortedData].sort((a, b) => {
      if (a[field] < b[field]) return isAsc ? 1 : -1;
      if (a[field] > b[field]) return isAsc ? -1 : 1;
      return 0;
    });

    setSortedData(sorted);
  };

  if (Loading) {
    return <PageLoader />;
  }

  if (!Loading && voteData.length <= 0)
    return (
      <LiquidityTableWrapper>
        You are not Eligible for Vote
      </LiquidityTableWrapper>
    );
  if (error) return 'error! Fetching Data';
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
                  handleSelectPool={(isSelected) =>
                    handleSelectPool(isSelected, item)
                  }
                />
              ))}
            </tbody>
          </TableContains>
          {selectedPoolsCount > 0 && (
            <VoteSelectedCard
              countSelectedItem={selectedPoolsCount}
              VoteSelectPoolData={VoteSelectPool}
              nftData={nftData}
              setVoteSelectPool={setVoteSelectPool}
              setSelectedPoolsCount={setSelectedPoolsCount}
              setSucess={setSucess}
            />
          )}
        </TableWrapper>
      </LiquidityTableWrapper>

      {isSucess && <SuccessPopup message="Vote Sucessfully" />}
      {selectedPoolsCount >= 30 && (
        <ErrorPopup errorMessage="only  30 pool allowed" />
      )}
    </>
  );
};

export default VotePoolTable;
