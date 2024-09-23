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
import { useLiquidityPoolData } from '../../../hooks/useLiquidityPoolData';
import PageLoader from '../../common/PageLoader';
import VoteSelectedCard from './VoteSelectedCard';
import { LiquidityTableWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
import useNftData from '../../../hooks/useUserNFTs';

const VotePoolTable: React.FC = () => {
  const [selectedPoolsCount, setSelectedPoolsCount] = useState<number>(0);
  const [VoteSelectPool, setVoteSelectPool] = useState<LiquidityPoolNewType[]>(
    []
  );
  const [islockPresent, setLockPresent] = useState<boolean>(false);

  const nftData = useNftData();

  useEffect(() => {
    if (nftData.length > 0 && !islockPresent) {
      setLockPresent(true);
    } else if (nftData.length === 0 && islockPresent) {
      setLockPresent(false);
    }
  }, [nftData, islockPresent]);

  const handleSelectPool = (
    isSelected: boolean,
    pool: LiquidityPoolNewType
  ) => {
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
  const { loading, error, data: poolData } = useLiquidityPoolData();
  if (loading)
    return (
      <>
        <PageLoader />
      </>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <LiquidityTableWrapper>
      <TableWrapper background="none" padding="0px">
        <TableContains margin="0px 0px">
          <thead>
            <TableRow>
              <TableHeader textalign="left">
                <StatsCardtitle fontsize={16}>Liquidity Pool</StatsCardtitle>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>
                  <StatsCardtitle fontsize={16}>Fees</StatsCardtitle>
                  <ImageContainer width="16px" height="16px" src={SortIcon} />
                </TableHeaderWrapper>
              </TableHeader>

              <TableHeader>
                <TableHeaderWrapper>
                  <StatsCardtitle fontsize={16}>Incentives</StatsCardtitle>
                  <ImageContainer width="16px" height="16px" src={SortIcon} />
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>
                  <StatsCardtitle fontsize={16}>Total Rewards</StatsCardtitle>
                  <ImageContainer width="16px" height="16px" src={SortIcon} />
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>
                  <StatsCardtitle fontsize={16}>vAPR</StatsCardtitle>
                  <ImageContainer width="16px" height="16px" src={SortIcon} />
                </TableHeaderWrapper>
              </TableHeader>
              <TableHeader>
                <TableHeaderWrapper>
                  <StatsCardtitle fontsize={16}>Vote Pools</StatsCardtitle>
                  <ImageContainer width="16px" height="16px" src={SortIcon} />
                </TableHeaderWrapper>
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {poolData.map((item, key) => (
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
          />
        )}
      </TableWrapper>
    </LiquidityTableWrapper>
  );
};

export default VotePoolTable;
