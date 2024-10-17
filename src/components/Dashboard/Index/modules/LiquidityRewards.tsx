import InformationIcon from '../../../../assets/Tips.svg';
import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import {
  DashBoardParagraph,
  DepositeStakedData,
  DepositeStakedHeading,
  PoolContainer,
  PoolContainerData,
  Stable,
  StakedContainer,
  USDTData,
  USDTHeading,
} from '../styles/DepositAndStake.styled';
import { LiquityMainContainer } from '../styles/LiquidityRewards.styled';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import { UserPositionData } from './DashBoard';
import React, { useState } from 'react';
import { getTokenLogo } from '../../../../utils/getTokenLogo';
import { LoadingSpinner } from '../../../common/Loader';
import { usePoolContract } from '../../../../hooks/usePoolContract';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { useRootStore } from '../../../../store/root';
import { Address } from 'viem';
import { useGaugeContract } from '../../../../hooks/useGaugeContract';
import {
  DashBoardCard,
  DashBoardCardData,
  DashboardNavigation,
} from '../styles/DashBoard.styled';
import Pagination from '../../../common/Pagination';
import { useNavigate } from 'react-router-dom';
import {
  DEFAULT_GAUGE,
  DEFAULT_POOL,
} from '../../../../constants/contract-address/Pool';

const ITEMS_PER_PAGE = 5;

const LiquidityRewards = ({
  userPools,
  isError,
  isLoading,
}: UserPositionData) => {
  const { claimFees, getPoolContract } = usePoolContract(DEFAULT_POOL);
  const { getReward, getGaugeContract } = useGaugeContract(DEFAULT_GAUGE);
  const { setTransactionStatus } = useRootStore();

  const [poolToClaim, setPoolToClaim] = useState('');

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

  const handleFeeClaim = async (lp: Address) => {
    if (!poolToClaim) {
      try {
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setPoolToClaim(lp);

        const poolInstance = getPoolContract(lp);

        if (!poolInstance) return;

        const result = await claimFees(poolInstance);
        if (result) {
          setTransactionStatus(TransactionStatus.DONE);
        }
        setTimeout(() => {
          setTransactionStatus(TransactionStatus.IDEAL);
          setPoolToClaim('');
        }, TRANSACTION_DELAY);
      } catch (error) {
        console.error('Error during fee claim transaction:', error);
        setTimeout(() => {
          setTransactionStatus(TransactionStatus.IDEAL);
          setPoolToClaim('');
        }, TRANSACTION_DELAY);
      }
    }
  };

  const handleReward = async (gauge: Address) => {
    if (!poolToClaim) {
      try {
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setPoolToClaim(gauge);

        const gaugeInstance = getGaugeContract(gauge);

        if (!gaugeInstance) throw new Error('Gauge contract not found');

        const result = await getReward(gaugeInstance);

        if (result) {
          setTransactionStatus(TransactionStatus.DONE);
        }

        setTimeout(() => {
          setTransactionStatus(TransactionStatus.IDEAL);
          setPoolToClaim('');
        }, TRANSACTION_DELAY);
      } catch (error) {
        console.error('Error during reward transaction:', error);
        setPoolToClaim('');
      }
    }
  };

  if (userPools && userPools.length === 0 && !isLoading) {
    if (isLoading) {
      return (
        <DashBoardCard>
          <DashBoardCardData>
            Start by{' '}
            <DashboardNavigation onClick={() => navigate('/liquidity/create')}>
              {' '}
              depositing and staking
            </DashboardNavigation>{' '}
            liquidity.
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
            <LiquityMainContainer height="auto">
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

              <StakedContainer>
                <DepositeStakedHeading>Emissions APR </DepositeStakedHeading>
                <DepositeStakedData>40.43%</DepositeStakedData>
              </StakedContainer>

              <StakedContainer>
                <DepositeStakedHeading>Emissions </DepositeStakedHeading>
                <DepositeStakedData>
                  {Number.isInteger(Number(userPool.emissions))
                    ? Number(userPool.emissions).toFixed(2)
                    : userPool.emissions}{' '}
                  {userPool.emissionsToken}
                </DepositeStakedData>
                {Number(userPool.emissions) > 0 && (
                  <DashboardNavigation
                    margin="28px 0px 0px"
                    onClick={() => handleReward(userPool.gauge)}
                  >
                    {poolToClaim === userPool.gauge ? (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '15px',
                        }}
                      >
                        <LoadingSpinner width="10px" height="10px" />
                        <p>Claiming</p>
                      </div>
                    ) : (
                      <p>Claim</p>
                    )}
                  </DashboardNavigation>
                )}
              </StakedContainer>
              <StakedContainer>
                <DepositeStakedHeading>Trading fees</DepositeStakedHeading>
                <DepositeStakedData>
                  <DashBoardParagraph>
                    {Number.isInteger(Number(userPool.claimable0))
                      ? Number(userPool.claimable0).toFixed(2)
                      : userPool.claimable0}{' '}
                    {userPool.token0.symbol}
                  </DashBoardParagraph>
                  <DashBoardParagraph>
                    {Number.isInteger(Number(userPool.claimable1))
                      ? Number(userPool.claimable1).toFixed(2)
                      : userPool.claimable1}{' '}
                    {userPool.token1.symbol}
                  </DashBoardParagraph>
                </DepositeStakedData>
                {(Number(userPool.claimable0) > 0 ||
                  Number(userPool.claimable1) > 0) && (
                  <DashboardNavigation
                    margin="28px 0px 0px"
                    onClick={() => handleFeeClaim(userPool.lp)}
                  >
                    {poolToClaim === userPool.lp ? (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '15px',
                        }}
                      >
                        <LoadingSpinner width="10px" height="10px" />
                        <p>Claiming</p>
                      </div>
                    ) : (
                      <p>Claim</p>
                    )}
                  </DashboardNavigation>
                )}
              </StakedContainer>
            </LiquityMainContainer>
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

export default LiquidityRewards;
