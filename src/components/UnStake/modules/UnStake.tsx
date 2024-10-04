import { MainContainerStyle } from '../../common/MainContainerStyle';
import {
  LiquidityImgStyle,
  LiquidityTitle,
  StatsCardtitle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import {
  DepositeContentWrapper,
  DepositeStyle,
  DepositeTokenWithImage,
  LiquidityStyleContainer,
  TokenContainer,
  TokenDescription,
  TokenStatus,
} from '../../Liquidity/ManageLiquidity/styles/TokenDeposite.style';
import {
  LoaderStatus,
  LoaderStyle,
  SliderDeadlineStyle,
} from '../../ManageVeTenex/Styles/CreateLock.style';
import {
  SliderLabel,
  SliderStatusWrapper,
  StakeCard,
  StakeMainContainer,
  StakeRangeWrapper,
  StakeTitle,
  TokenAmountWrapper,
} from '../../StakeDeposit/styles/Stake.style';
import {
  SliderContainer,
  Slider,
} from '../../Swap/styles/TransactionDeadline.style';

import InformationIcon from '../../../assets/Tips.svg';
import UnStakeStepper from './UnStakeStepper';
import { ChangeEvent, useEffect, useState } from 'react';
import useQueryParams from '../../../hooks/useQueryParams';
import { useUserPosition } from '../../../hooks/useUserPosition';
import { useAccount } from '../../../hooks/useAccount';
import { UserPosition } from '../../../types/Pool';
import { getTokenLogo } from '../../../utils/getTokenLogo';
import PageLoader from '../../common/PageLoader';
import { useRootStore } from '../../../store/root';
import { TransactionStatus } from '../../../types/Transaction';

const UnStake = () => {
  const [unstakedPool, setUnstakedPool] = useState<UserPosition | undefined>(
    undefined
  );

  const [selectUnsatkeValue, setSelectedUnstakeValue] = useState<number>(100);

  const [staked, setStaked] = useState({
    value0: '0',
    value1: '0',
  });

  const getParam = useQueryParams();
  const poolId = getParam('pool');

  const { address } = useAccount();

  const { userPools } = useUserPosition(address!);
  const { transactionStatus } = useRootStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (userPools) {
      const pool = userPools.find((pool) => pool.lp === poolId);
      if (pool) {
        setUnstakedPool(pool);
        setStaked({
          value0: pool.accountStaked0,
          value1: pool.accountStaked1,
        });
      }
    }
  }, [poolId, userPools]);

  const handleCustomSliderValue = (unstake: number) => {
    if (unstakedPool) {
      setStaked({
        value0: ((Number(unstakedPool.accountStaked0) * unstake) / 100).toFixed(
          5
        ),
        value1: ((Number(unstakedPool.accountStaked1) * unstake) / 100).toFixed(
          5
        ),
      });
    }
    setSelectedUnstakeValue(unstake);
  };
  const handleUnstakeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    const unstake = Number(e.target.value);
    if (unstakedPool) {
      setStaked({
        value0: (
          (Number(unstakedPool?.accountStaked0) * unstake) /
          100
        ).toFixed(5),
        value1: (
          (Number(unstakedPool?.accountStaked1) * unstake) /
          100
        ).toFixed(5),
      });
    }

    setSelectedUnstakeValue(unstake);
  };

  const SliderPercentage = [
    { id: '1', value: 0 },
    { id: '2', value: 25 },
    { id: '3', value: 50 },
    { id: '4', value: 75 },
    { id: '5', value: 100 },
  ];

  if (!unstakedPool) {
    return (
      <>
        <PageLoader />
      </>
    );
  }

  return (
    <MainContainerStyle>
      <StakeMainContainer>
        <StakeCard>
          <DepositeContentWrapper>
            <DepositeTokenWithImage>
              <GroupImgContains>
                <IMG1Contains top={5} left={0}>
                  <Imgstyle
                    src={
                      unstakedPool?.token0.symbol &&
                      getTokenLogo(unstakedPool?.token0.symbol)
                    }
                  />
                </IMG1Contains>
                <IMG2Contains top={5} left={26}>
                  <Imgstyle
                    src={
                      unstakedPool?.token1.symbol &&
                      getTokenLogo(unstakedPool?.token1.symbol)
                    }
                  />
                </IMG2Contains>
              </GroupImgContains>

              <TokenDescription>
                <LiquidityHeaderTitle fontSize={16}>
                  {unstakedPool.token0.symbol}-{unstakedPool.token1.symbol}
                </LiquidityHeaderTitle>
                <TokenStatus>
                  <StatsCardtitle fontSize={12}>
                    {unstakedPool.isStable ? 'Stable' : 'Volatile'}
                  </StatsCardtitle>
                  <LiquidityTitle fontSize={12}>
                    {unstakedPool.isStable ? '0.05' : '0.3'} %
                  </LiquidityTitle>
                  <LiquidityImgStyle
                    width={'17px'}
                    height={'17px'}
                    src={InformationIcon}
                  />
                </TokenStatus>
              </TokenDescription>
            </DepositeTokenWithImage>

            <TokenContainer>
              <StatsCardtitle fontSize={16}>APR</StatsCardtitle>
              <LiquidityHeaderTitle fontSize={14}>226.18%</LiquidityHeaderTitle>
            </TokenContainer>
          </DepositeContentWrapper>

          <DepositeContentWrapper>
            <LiquidityStyleContainer>
              <LiquidityHeaderTitle fontSize={16}>
                Liquidity
              </LiquidityHeaderTitle>
              <TokenAmountWrapper>
                <LiquidityTitle fontSize={12}>
                  {unstakedPool.reserve0} {unstakedPool?.token0.symbol}
                </LiquidityTitle>
                <LiquidityTitle fontSize={12}>
                  {unstakedPool.reserve1} {unstakedPool?.token1.symbol}
                </LiquidityTitle>
              </TokenAmountWrapper>
            </LiquidityStyleContainer>

            <DepositeStyle>
              <LiquidityHeaderTitle fontSize={16}>
                Staked Deposits
              </LiquidityHeaderTitle>
              <TokenAmountWrapper>
                <LiquidityTitle textalign="right" fontSize={12}>
                  {staked.value0} {unstakedPool?.token0.symbol}
                </LiquidityTitle>
                <LiquidityTitle textalign="right" fontSize={12}>
                  {staked.value1} {unstakedPool?.token0.symbol}
                </LiquidityTitle>
              </TokenAmountWrapper>
            </DepositeStyle>
          </DepositeContentWrapper>
          <StakeRangeWrapper>
            <StakeTitle fontSize={16}>
              Unstaking {selectUnsatkeValue}%
            </StakeTitle>

            <SliderStatusWrapper>
              <LoaderStatus fontSize={12}>{selectUnsatkeValue}%</LoaderStatus>
            </SliderStatusWrapper>
            <LoaderStyle>
              <SliderContainer margin="0px">
                <Slider
                  type="range"
                  min="0"
                  max="100"
                  step={1}
                  value={selectUnsatkeValue}
                  onChange={handleUnstakeSlider}
                  disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
                />
              </SliderContainer>
              <SliderDeadlineStyle fontSize={10}>
                {SliderPercentage.map(({ value, id }) => (
                  <SliderLabel
                    key={id}
                    onClick={() => handleCustomSliderValue(value)}
                  >
                    {value}%
                  </SliderLabel>
                ))}
              </SliderDeadlineStyle>
            </LoaderStyle>
          </StakeRangeWrapper>
        </StakeCard>

        <StakeCard width="40%">
          <UnStakeStepper
            selectUnsatkeValue={selectUnsatkeValue}
            gauge={unstakedPool.gauge}
            gaugeBalance={unstakedPool.gaugeBalance}
            lp={unstakedPool.lp}
          />
        </StakeCard>
      </StakeMainContainer>
    </MainContainerStyle>
  );
};

export default UnStake;
