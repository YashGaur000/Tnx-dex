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
  Slider,
  SliderContainer,
} from '../../Swap/styles/TransactionDeadline.style';

import InformationIcon from '../../../assets/Tips.svg';
import { ChangeEvent, useEffect, useState } from 'react';
import WithdrawStepper from './WithdrawStepper';
import { TokenInfo } from '../../../constants/tokens/type';
import useQueryParams from '../../../hooks/useQueryParams';
import { usePoolContract } from '../../../hooks/usePoolContract';
import { Metadata } from '../../../types/Pool';
import { getTokenInfo } from '../../../utils/transaction/getTokenInfo';
import { usePoolBalances } from '../../../hooks/usePoolBalances';
import { useRootStore } from '../../../store/root';
import { TransactionStatus } from '../../../types/Transaction';

const WithdrawLiquidity = () => {
  const [SelectWithdrawValue, SetSelectWithdrawValue] = useState<number>(100);
  const [selectedToken1, setSelectedToken1] = useState<TokenInfo | undefined>(
    undefined
  );
  const [selectedToken2, setSelectedToken2] = useState<TokenInfo | undefined>(
    undefined
  );
  const [poolType, setPoolType] = useState(false);
  const [deposit0, setDeposit0] = useState('');
  const [deposit1, setDeposit1] = useState('');

  const getParam = useQueryParams();
  const poolId = getParam('pool');
  const { metadata } = usePoolContract(poolId ?? '');
  const { transactionStatus } = useRootStore();

  useEffect(() => {
    metadata()
      .then((data: Metadata | undefined) => {
        if (data) {
          setSelectedToken1(getTokenInfo(data.t0));
          setSelectedToken2(getTokenInfo(data.t1));
          setPoolType(data.st);
        }
      })
      .catch((error) => {
        console.error('error loading metadata', error);
      });

    if (transactionStatus === TransactionStatus.DONE) {
      SetSelectWithdrawValue(100);
    }
  }, [poolId, metadata, transactionStatus]);

  const { balance0, balance1, reserve0, reserve1 } = usePoolBalances(
    poolId ?? '',
    selectedToken1?.decimals ?? 18,
    selectedToken2?.decimals ?? 18
  );

  const handleCustomSliderValue = (value: number) => {
    SetSelectWithdrawValue(Number(value));
  };
  const HandleStakeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    const StakeValue = e.target.value;
    SetSelectWithdrawValue(Number(StakeValue));
    const deposit0 = Number(StakeValue) * 0.01 * Number(balance0);
    const deposit1 = Number(StakeValue) * 0.01 * Number(balance1);
    setDeposit0(deposit0.toString());
    setDeposit1(deposit1.toString());
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
                  <StatsCardtitle fontSize={12}>
                    {poolType ? 'stable' : 'volatile'}
                  </StatsCardtitle>
                  <LiquidityTitle fontSize={12}>0.01%</LiquidityTitle>
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
                  {reserve0} {selectedToken1?.symbol}
                </LiquidityTitle>
                <LiquidityTitle fontSize={12}>
                  {reserve1} {selectedToken2?.symbol}
                </LiquidityTitle>
              </TokenAmountWrapper>
            </LiquidityStyleContainer>

            <DepositeStyle>
              <LiquidityHeaderTitle fontSize={16}>
                Unstaked Deposits
              </LiquidityHeaderTitle>
              <TokenAmountWrapper>
                <LiquidityTitle textalign="right" fontSize={12}>
                  {deposit0 ? deposit0 : balance0} {selectedToken1?.symbol}
                </LiquidityTitle>
                <LiquidityTitle textalign="right" fontSize={12}>
                  {deposit1 ? deposit1 : balance1} {selectedToken2?.symbol}
                </LiquidityTitle>
              </TokenAmountWrapper>
            </DepositeStyle>
          </DepositeContentWrapper>
          <StakeRangeWrapper>
            <StakeTitle fontSize={16}>
              Withdrawing {SelectWithdrawValue}%
            </StakeTitle>

            <SliderStatusWrapper>
              <LoaderStatus fontSize={12}>{SelectWithdrawValue}%</LoaderStatus>
            </SliderStatusWrapper>
            <LoaderStyle>
              <SliderContainer margin="0px">
                <Slider
                  type="range"
                  min="0"
                  max="100"
                  step={1}
                  value={SelectWithdrawValue}
                  onChange={HandleStakeSlider}
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
          <WithdrawStepper
            poolId={poolId ?? ''}
            withdrawPercentage={SelectWithdrawValue.toString()}
            tokenA={selectedToken1?.address ?? ''}
            tokenB={selectedToken2?.address ?? ''}
          />
        </StakeCard>
      </StakeMainContainer>
    </MainContainerStyle>
  );
};

export default WithdrawLiquidity;
