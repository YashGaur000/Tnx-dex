import {
  DashBoardParagraph,
  DepositeStakedData,
  DepositeStakedHeading,
  DepositMainContainer,
  PoolContainer,
  PoolContainerData,
  Stable,
  StakedContainer,
  TotalPoolData,
  UnstackedContainer,
  UnstackedData,
  UnstackedData1,
  UnstackedHeading,
  USDTData,
  USDTHeading,
  WalletContainer,
} from '../styles/DepositAndStake.styled';
import {
  DashBoardCard,
  DashBoardCardData,
  DashboardNavigation,
} from '../styles/DashBoard.styled';
import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import InformationIcon from '../../../../assets/Tips.svg';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import { LoadingSpinner } from '../../../common/Loader';
import React, { useState } from 'react';
import { useTokenBalances } from '../../../../hooks/useTokenBalance';
import { ERC20_TEST_TOKEN_LIST } from '../../../../constants/tokens/testnetTokens';
import { Address } from 'viem';
import { getTokenLogo } from '../../../../utils/getTokenLogo';
import { useNavigate } from 'react-router-dom';
import { UserPositionData } from './DashBoard';
import Pagination from '../../../common/Pagination';

const ITEMS_PER_PAGE = 5;

const DepositAndStake = ({
  address,
  userPools,
  isError,
  isLoading,
}: UserPositionData) => {
  const { balances } = useTokenBalances(ERC20_TEST_TOKEN_LIST, address!);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = userPools
    ? Math.ceil(userPools.length / ITEMS_PER_PAGE)
    : 0;

  const handlePrevpage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedData = userPools
    ? userPools.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    : [];

  const handleDepositeButton = (
    token0: string,
    token1: string,
    isStable: boolean,
    lp: string
  ) => {
    const queryParams = new URLSearchParams(location.search);

    const typeValue = isStable ? '0' : '1';

    queryParams.set('token1', token0);
    queryParams.set('token2', token1);
    queryParams.set('type', typeValue);
    queryParams.set('exists', true.toString()); //@Todo need to handle properly and check routes of both manage and create new pool

    queryParams.set('id', lp);

    navigate({
      pathname: '/liquidity/manage',
      search: `?${queryParams.toString()}`,
    });
  };

  const handleStake = (lp: string) => {
    const queryParams = new URLSearchParams(location.search);

    queryParams.set('pool', lp);

    navigate({
      pathname: '/stake',
      search: `?${queryParams.toString()}`,
    });
  };

  const handleUnstake = (lp: string) => {
    const queryParams = new URLSearchParams(location.search);

    queryParams.set('pool', lp);

    navigate({
      pathname: '/unstake',
      search: `?${queryParams.toString()}`,
    });
  };

  const handleWithdraw = (lp: string) => {
    const queryParams = new URLSearchParams(location.search);

    queryParams.set('pool', lp);

    navigate({
      pathname: '/withdraw',
      search: `?${queryParams.toString()}`,
    });
  };

  if (userPools && userPools.length === 0 && !isLoading) {
    if (isLoading) {
      return (
        <DashBoardCard>
          <DashBoardCardData>
            To receive emissions{' '}
            <DashboardNavigation onClick={() => navigate('/liquidity/create')}>
              {' '}
              deposit and stake{' '}
            </DashboardNavigation>{' '}
            your liquidity first.
          </DashBoardCardData>
        </DashBoardCard>
      );
    } else {
      return <LoadingSpinner />;
    }
  }

  return (
    <>
      {isError && <p>Error in Fetching....</p>}
      {isLoading && <LoadingSpinner />}
      {!isError &&
        paginatedData.map((userPool, index) => (
          <React.Fragment key={index}>
            <DepositMainContainer>
              <PoolContainer>
                <PoolContainerData>
                  <GroupImgContains>
                    <IMG1Contains top={5} left={0}>
                      <Imgstyle src={getTokenLogo(userPool.token0.symbol)} />
                    </IMG1Contains>
                    <IMG2Contains top={5} left={26}>
                      <Imgstyle src={getTokenLogo(userPool.token1.symbol)} />
                    </IMG2Contains>
                  </GroupImgContains>
                  <TotalPoolData>
                    <DashBoardParagraph>Pool Total</DashBoardParagraph>
                    <DashBoardParagraph>
                      {Number.isInteger(Number(userPool.reserve0))
                        ? Number(userPool.reserve0).toFixed(2)
                        : userPool.reserve0}{' '}
                      {userPool.token0.symbol}
                    </DashBoardParagraph>
                    <DashBoardParagraph>
                      {Number.isInteger(Number(userPool.reserve1))
                        ? Number(userPool.reserve1).toFixed(2)
                        : userPool.reserve1}{' '}
                      {userPool.token1.symbol}
                    </DashBoardParagraph>
                  </TotalPoolData>
                </PoolContainerData>
                <PoolContainerData>
                  <USDTHeading>
                    {userPool.token0.symbol}-{userPool.token1.symbol}
                  </USDTHeading>
                  <USDTData>
                    <Stable>{userPool.isStable ? 'Stable' : 'Volatile'}</Stable>
                    <DashBoardParagraph>
                      {userPool.isStable ? '0.05' : '0.3'} %
                    </DashBoardParagraph>
                    <DashBoardParagraph>
                      <ImageContainer
                        width="16px"
                        height="18px"
                        src={InformationIcon}
                      />
                    </DashBoardParagraph>
                  </USDTData>
                </PoolContainerData>
              </PoolContainer>
              <UnstackedContainer>
                <UnstackedHeading>Unstaked</UnstackedHeading>
                <UnstackedData>
                  <DashBoardParagraph>
                    {Number.isInteger(Number(userPool.accountUnstaked0))
                      ? Number(userPool.accountUnstaked0).toFixed(2)
                      : userPool.accountUnstaked0}{' '}
                    {userPool.token0.symbol}
                  </DashBoardParagraph>
                  <DashBoardParagraph>
                    {Number.isInteger(Number(userPool.accountUnstaked1))
                      ? Number(userPool.accountUnstaked1).toFixed(2)
                      : userPool.accountUnstaked1}{' '}
                    {userPool.token1.symbol}
                  </DashBoardParagraph>
                </UnstackedData>
                <UnstackedData1>
                  {(Number(userPool.accountUnstaked0) > 0 ||
                    Number(userPool.accountUnstaked1) > 0) && (
                    <>
                      <DashboardNavigation
                        onClick={() => handleWithdraw(userPool.lp)}
                      >
                        Withdraw
                      </DashboardNavigation>
                      <DashboardNavigation
                        onClick={() => handleStake(userPool.lp)}
                      >
                        Stake
                      </DashboardNavigation>
                    </>
                  )}
                </UnstackedData1>
              </UnstackedContainer>
              <StakedContainer>
                <DepositeStakedHeading>
                  <DashBoardParagraph>Staked</DashBoardParagraph>
                </DepositeStakedHeading>
                <DepositeStakedData>
                  <DashBoardParagraph>
                    {Number.isInteger(Number(userPool.accountStaked0))
                      ? Number(userPool.accountStaked0).toFixed(2)
                      : userPool.accountStaked0}{' '}
                    {userPool.token0.symbol}
                  </DashBoardParagraph>
                  <DashBoardParagraph>
                    {Number.isInteger(Number(userPool.accountStaked1))
                      ? Number(userPool.accountStaked1).toFixed(2)
                      : userPool.accountStaked1}{' '}
                    {userPool.token1.symbol}
                  </DashBoardParagraph>
                </DepositeStakedData>
                {(Number(userPool.accountStaked0) > 0 ||
                  Number(userPool.accountStaked1) > 0) && (
                  <DashboardNavigation
                    onClick={() => handleUnstake(userPool.lp)}
                  >
                    Unstake
                  </DashboardNavigation>
                )}
              </StakedContainer>
              <WalletContainer>
                <DepositeStakedHeading>In Wallet</DepositeStakedHeading>
                <DepositeStakedData>
                  <DashBoardParagraph>
                    {balances[userPool.token0.id as Address]?.toString()}{' '}
                    {userPool.token0.symbol}
                  </DashBoardParagraph>
                  <DashBoardParagraph>
                    {balances[userPool.token1.id as Address]?.toString()}{' '}
                    {userPool.token1.symbol}
                  </DashBoardParagraph>
                </DepositeStakedData>
                <DashboardNavigation
                  onClick={() =>
                    handleDepositeButton(
                      userPool.token0.id,
                      userPool.token1.id,
                      userPool.isStable,
                      userPool.lp
                    )
                  }
                >
                  Deposit
                </DashboardNavigation>
              </WalletContainer>
            </DepositMainContainer>
          </React.Fragment>
        ))}
      {userPools && userPools.length > ITEMS_PER_PAGE && (
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevpage={handlePrevpage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default DepositAndStake;
