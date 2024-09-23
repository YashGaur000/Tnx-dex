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
import React from 'react';
import { getTokenLogo } from '../../../../utils/getTokenLogo';
import { LoadingSpinner } from '../../../common/Loader';
// import { usePoolContract } from '../../../../hooks/usePoolContract';
// import { TRANSACTION_DELAY, TransactionStatus } from '../../../../types/Transaction';
// import { useRootStore } from '../../../../store/root';

const LiquidityRewards = ({
  userPools,
  isError,
  isLoading,
}: UserPositionData) => {
  //const { claimFees } = usePoolContract('');

  //const { setTransactionStatus } = useRootStore();

  if (userPools && userPools.length === 0 && !isLoading) {
    return <p>No Data Available</p>;
  }

  const handleFeeClaim = (lp: string) => {
    // setTransactionStatus(TransactionStatus.IN_PROGRESS);

    // const result = await claimFees(lp);
    // if (result) {
    //   setTransactionStatus(TransactionStatus.DONE);
    // } else {
    //   setTimeout(
    //     () => setTransactionStatus(TransactionStatus.IDEAL),
    //     TRANSACTION_DELAY
    //   );
    // }
    alert(`${lp}`);
  };

  return (
    <>
      {isError && <p>Error in Fetching....</p>}
      {isLoading && <LoadingSpinner />}
      {!isError &&
        userPools?.map((userPool, index) => (
          <React.Fragment key={index}>
            <LiquityMainContainer>
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
                <DepositeStakedHeading>Emissions APR</DepositeStakedHeading>
                <DepositeStakedData>40.43%</DepositeStakedData>
              </StakedContainer>

              <StakedContainer>
                <DepositeStakedHeading>Emissions </DepositeStakedHeading>
                <DepositeStakedData>
                  {userPool.emissions} {userPool.emissionsToken}
                </DepositeStakedData>
              </StakedContainer>

              <StakedContainer>
                <DepositeStakedHeading>Trading fees</DepositeStakedHeading>
                <DepositeStakedData>
                  <DashBoardParagraph>
                    {userPool.claimable0} {userPool.token0.symbol}
                  </DashBoardParagraph>
                  <DashBoardParagraph>
                    {userPool.claimable1} {userPool.token1.symbol}
                  </DashBoardParagraph>
                </DepositeStakedData>
              </StakedContainer>
              <Stable>
                <DashBoardParagraph onClick={() => handleFeeClaim(userPool.lp)}>
                  Claim
                </DashBoardParagraph>
              </Stable>
            </LiquityMainContainer>
          </React.Fragment>
        ))}
    </>
  );
};

export default LiquidityRewards;
