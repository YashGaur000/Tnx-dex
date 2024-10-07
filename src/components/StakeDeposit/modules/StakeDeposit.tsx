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
import InformIcon from '../../../assets/Tips.svg';

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
  SliderLabel,
  SliderStatusWrapper,
  StakeCard,
  StakeMainContainer,
  StakeRangeWrapper,
  StakeTitle,
  TokenAmountWrapper,
} from '../styles/Stake.style';
import {
  LoaderStatus,
  LoaderStyle,
  SliderDeadlineStyle,
} from '../../ManageVeTenex/Styles/CreateLock.style';
import {
  Slider,
  SliderContainer,
} from '../../Swap/styles/TransactionDeadline.style';
import StakeStepper from './StakeStepper';
import { ChangeEvent, useEffect, useState } from 'react';
import useQueryParams from '../../../hooks/useQueryParams';
import { usePoolBalances } from '../../../hooks/usePoolBalances';
import { usePoolContract } from '../../../hooks/usePoolContract';
import { Metadata } from '../../../types/Pool';
import { TokenInfo } from '../../../constants/tokens/type';
import { getTokenInfo } from '../../../utils/transaction/getTokenInfo';
import { TransactionStatus } from '../../../types/Transaction';
import { useRootStore } from '../../../store/root';

const StakeDeposit = () => {
  const [SelectStakeValue, SetSelectStakeValue] = useState<number>(100);
  const [selectedToken1, setSelectedToken1] = useState<TokenInfo | undefined>(
    undefined
  );
  const [selectedToken2, setSelectedToken2] = useState<TokenInfo | undefined>(
    undefined
  );
  // const [token1, setToken1Value] = useState<string>("");
  // const [ token2, setToken2Value] = useState<string>("");

  const getParam = useQueryParams();
  const poolId = getParam('pool');
  const { metadata } = usePoolContract(poolId ?? '');
  const { transactionStatus } = useRootStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    metadata()
      .then((data: Metadata | undefined) => {
        if (data) {
          setSelectedToken1(getTokenInfo(data.t0));
          setSelectedToken2(getTokenInfo(data.t1));
        }
      })
      .catch((error) => {
        console.error('error loading metadata', error);
      });
  }, [poolId, metadata]);

  const poolType = getParam('type') === '0' ? 'stable' : 'volatile';

  // Fetch balances from pool contract
  const { balance0, balance1, reserve0, reserve1 } = usePoolBalances(
    poolId ?? '',
    selectedToken1?.decimals ?? 18,
    selectedToken2?.decimals ?? 18
  );

  const HandleStakeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    const StakeValue = e.target.value;
    SetSelectStakeValue(Number(StakeValue));
  };

  const handleCustomSliderValue = (value: number) => {
    SetSelectStakeValue(Number(value));
  };
  const SliderPercentage = [
    { id: '1', value: 0 },
    { id: '2', value: 25 },
    { id: '3', value: 50 },
    { id: '4', value: 75 },
    { id: '5', value: 100 },
  ];
  return (
    <MainContainerStyle>
      <StakeMainContainer>
        <StakeCard>
          <DepositeContentWrapper>
            <DepositeTokenWithImage>
              <GroupImgContains>
                <IMG1Contains top={5} left={0}>
                  <Imgstyle src={selectedToken1?.logoURI} />
                </IMG1Contains>
                <IMG2Contains top={5} left={26}>
                  <Imgstyle src={selectedToken2?.logoURI} />
                </IMG2Contains>
              </GroupImgContains>

              <TokenDescription>
                <LiquidityHeaderTitle fontSize={16}>
                  {selectedToken1?.symbol}-{selectedToken2?.symbol}
                </LiquidityHeaderTitle>
                <TokenStatus>
                  <StatsCardtitle fontSize={12}>{poolType}</StatsCardtitle>
                  <LiquidityTitle fontSize={12}>0.01%</LiquidityTitle>
                  <LiquidityImgStyle
                    width={'17px'}
                    height={'17px'}
                    src={InformIcon}
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
                  {reserve0 + ' ' + selectedToken1?.symbol}
                </LiquidityTitle>
                <LiquidityTitle fontSize={12}>
                  {reserve1 + ' ' + selectedToken2?.symbol}
                </LiquidityTitle>
              </TokenAmountWrapper>
            </LiquidityStyleContainer>

            <DepositeStyle>
              <LiquidityHeaderTitle fontSize={16}>
                Unstaked Deposits
              </LiquidityHeaderTitle>
              <TokenAmountWrapper>
                <LiquidityTitle textalign="right" fontSize={12}>
                  {balance0 + ' ' + selectedToken1?.symbol}
                </LiquidityTitle>
                <LiquidityTitle textalign="right" fontSize={12}>
                  {balance1 + ' ' + selectedToken2?.symbol}
                </LiquidityTitle>
              </TokenAmountWrapper>
            </DepositeStyle>
          </DepositeContentWrapper>
          <StakeRangeWrapper>
            <StakeTitle fontSize={16}>Staking {SelectStakeValue}%</StakeTitle>

            <SliderStatusWrapper>
              <LoaderStatus fontSize={12}>{SelectStakeValue}%</LoaderStatus>
            </SliderStatusWrapper>
            <LoaderStyle>
              <SliderContainer margin="0px">
                <Slider
                  type="range"
                  min="0"
                  max="100"
                  step={1}
                  value={SelectStakeValue}
                  onChange={HandleStakeSlider}
                  disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
                />
              </SliderContainer>
              <SliderDeadlineStyle fontSize={10}>
                {SliderPercentage.map(({ value, id }) => (
                  <SliderLabel
                    key={id}
                    onClick={() => handleCustomSliderValue(value)}
                    disabled={
                      transactionStatus === TransactionStatus.IN_PROGRESS
                    }
                  >
                    {value}%
                  </SliderLabel>
                ))}
              </SliderDeadlineStyle>
            </LoaderStyle>
          </StakeRangeWrapper>
        </StakeCard>

        <StakeCard width="40%">
          <StakeStepper selectedStakeValue={SelectStakeValue} />
        </StakeCard>
      </StakeMainContainer>
    </MainContainerStyle>
  );
};

export default StakeDeposit;
