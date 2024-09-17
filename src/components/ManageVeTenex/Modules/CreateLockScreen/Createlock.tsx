import InformIcon from '../../../../assets/information.png';

import {
  Slider,
  SliderContainer,
} from '../../../Swap/styles/TransactionDeadline.style';
import {
  LockTitle,
  LockLoaderContainer,
  LoaderStatus,
  LoaderStyle,
  SliderDeadlineStyle,
  LockScreenInstruction,
  InformImg,
  LoaderStatusWrapper,
  WeeksLabel,
  LockCardtitle,
} from '../../Styles/CreateLock.style';
import LockDeposite from './LockDeposite';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { CreateMainContainer } from '../../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  FormFieldContainer,
  FormRowWrapper,
} from '../../../Liquidity/ManageLiquidity/styles/LiquidityForm.style';
import { ChangeEvent, useState } from 'react';
import { useAccount } from '../../../../hooks/useAccount';
import { useTokenBalances } from '../../../../hooks/useTokenBalance';
import { TokenInfo, ERC20_TEST_TOKEN_LIST } from '../../../../constants/tokens';

import {
  InputBoxRow,
  InputWrapper,
  PercentageButton,
  PercentageOptions,
  PercentageSelectorContainer,
  SwapPageIconWrapper,
  TokenSelect,
  TokenSelectAlign,
  //TokenSelectAlignSelect,
  WalletInfo,
  WalletText,
} from '../../../Swap/styles/SwapForm.style.';
import { InputBox } from '../../../Swap/modules/InputBox';
import React from 'react';
import { LockleftSection } from '../../../Dashboard/Extendlock/styles/Extendlock.style';

const CreatelockForm = () => {
  const [lockDuration, SetlockDuration] = useState<number>(1);
  const [LockTokenValue, setLockTokenValue] = useState<string>('');
  const lockTokenInfo: TokenInfo = ERC20_TEST_TOKEN_LIST[1];
  const [selectedPercentage, setSelectedPercentage] = React.useState<
    number | null
  >(null);

  const tokenList = [lockTokenInfo];
  const { address } = useAccount();
  const { balances } = useTokenBalances(tokenList, address!);

  const HandleWeeksStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const TotalWeeks = e.target.value;
    SetlockDuration(Number(TotalWeeks));
  };
  const handleSelectPercentage = (percentage: number) => {
    setSelectedPercentage(percentage);
  };
  const labels = [
    { value: 1, weeks: '1 week' },
    { value: 52, weeks: '1 year' },
    { value: 104, weeks: '2 year' },
    { value: 156, weeks: '3 year' },
    { value: 208, weeks: '4 year' },
  ];

  const handleLockInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setLockTokenValue(e.target.value);
  };

  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={322}>
          <FormFieldContainer>
            <FormRowWrapper>
              <InputWrapper>
                <InputBoxRow>
                  <InputBox
                    type="number"
                    border="none"
                    placeholder="0"
                    width="70%"
                    padding="0px"
                    value={LockTokenValue}
                    onChange={handleLockInputData}
                  />
                  <TokenSelect>
                    <SwapPageIconWrapper
                      src={lockTokenInfo?.logoURI}
                      width="18px"
                      height="18px"
                      alt={lockTokenInfo?.logoURI}
                    />

                    <TokenSelectAlign>{lockTokenInfo?.symbol}</TokenSelectAlign>
                  </TokenSelect>
                </InputBoxRow>

                <PercentageSelectorContainer>
                  <WalletInfo>
                    Wallet:
                    <WalletText>
                      {Number(
                        lockTokenInfo && balances[lockTokenInfo?.address]
                      )}{' '}
                    </WalletText>
                    <WalletText margin={8}>~$0.00</WalletText>
                  </WalletInfo>

                  <PercentageOptions>
                    <PercentageButton
                      active={selectedPercentage === 25}
                      onClick={() => handleSelectPercentage(25)}
                    >
                      25%
                    </PercentageButton>
                    <PercentageButton
                      active={selectedPercentage === 50}
                      onClick={() => handleSelectPercentage(50)}
                    >
                      50%
                    </PercentageButton>
                    <PercentageButton
                      active={selectedPercentage === 75}
                      onClick={() => handleSelectPercentage(75)}
                    >
                      75%
                    </PercentageButton>
                    <PercentageButton
                      active={selectedPercentage === 100}
                      onClick={() => handleSelectPercentage(100)}
                    >
                      MAX
                    </PercentageButton>
                  </PercentageOptions>
                </PercentageSelectorContainer>
              </InputWrapper>
            </FormRowWrapper>
          </FormFieldContainer>

          <LockTitle fontSize={16} lineheight={23.93}>
            Locking your TENEX tokens for 0.243 veTENEX voting power
          </LockTitle>
          <LockLoaderContainer>
            <LoaderStatusWrapper fontSize={12} lineheight={17.94}>
              <LoaderStatus>{lockDuration} weeks</LoaderStatus>
            </LoaderStatusWrapper>
            <LoaderStyle>
              <SliderContainer>
                <Slider
                  type="range"
                  min="1"
                  max="208"
                  step={1}
                  value={lockDuration}
                  onChange={HandleWeeksStatus}
                />
              </SliderContainer>
            </LoaderStyle>
            <SliderDeadlineStyle fontSize={10}>
              {labels.map(({ value, weeks }) => (
                <WeeksLabel key={value} onClick={() => SetlockDuration(value)}>
                  {weeks}
                </WeeksLabel>
              ))}
            </SliderDeadlineStyle>
          </LockLoaderContainer>
        </LockleftSection>
        <LockDeposite
          LockTokenValue={LockTokenValue}
          LockTokenSymbol={lockTokenInfo.symbol}
          LocTokenAddress={lockTokenInfo.address}
          LockTokenDecimal={lockTokenInfo.decimals}
          lockDuration={Number(lockDuration)}
        />
      </CreateMainContainer>
      <LockScreenInstruction>
        <InformImg src={InformIcon} />
        <LockCardtitle fontSize={16}>
          Locking will give you an NFT, referred to as a veNFT. You can increase
          the Lock amount or extend the Lock time at any point after.
        </LockCardtitle>
      </LockScreenInstruction>
    </MainContainerStyle>
  );
};

export default CreatelockForm;
