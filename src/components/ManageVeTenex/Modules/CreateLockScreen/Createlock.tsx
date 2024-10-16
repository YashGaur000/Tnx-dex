import { ChangeEvent, useCallback, useState, useEffect } from 'react';
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
import { useAccount } from '../../../../hooks/useAccount';
import { useTokenBalances } from '../../../../hooks/useTokenBalance';
import { TokenInfo } from '../../../../constants/tokens/type';
import {
  InputBoxRow,
  InputWrapper,
  PercentageButton,
  PercentageOptions,
  PercentageSelectorContainer,
  SwapPageIconWrapper,
  TokenSelect,
  TokenSelectAlign,
  WalletInfo,
  WalletText,
} from '../../../Swap/styles/SwapForm.style.';
import { InputBox } from '../../../Swap/modules/InputBox';
import SuccessPopup from '../../../common/SucessPopup';
import { ERC20_TEST_TOKEN_LIST } from '../../../../constants/tokens/testnetTokens';
import { LockleftSection } from '../../../Dashboard/Extendlock/styles/Extendlock.style';

const CreatelockForm = () => {
  const lockTokenInfo: TokenInfo = ERC20_TEST_TOKEN_LIST[1];
  const [selectedPercentage, setSelectedPercentage] = useState<number | null>(
    null
  );
  const tokenList = [lockTokenInfo];
  const { address } = useAccount();
  const { balances } = useTokenBalances(tokenList, address!);
  const [lockDuration, setLockDuration] = useState<number>(1); // Slider value (1 week initially)
  const [lockTokenValue, setLockTokenValue] = useState<string>(''); // Lock amount input
  const [successLock, setSuccessLock] = useState<boolean>(false);
  const [approveLock, setApproveLock] = useState<boolean>(false);
  const [votingPower, setVotingPower] = useState<number>(0); // Calculated voting power
  const [errorColor, setErrorColor] = useState<string>('#FFFFFF');
  const [userBalance, setUserBalance] = useState<number>(0);
  const [isSliderDisabled, setIsSliderDisabled] = useState<boolean>(false);

  const calculateVotingPower = useCallback(() => {
    if (!lockTokenValue || lockDuration < 1) {
      setVotingPower(0);
      return;
    }
    const calculatedPower = (
      (Number(lockTokenValue) * Number(lockDuration)) /
      208
    ).toFixed(5);
    setVotingPower(Number(calculatedPower));
  }, [lockTokenValue, lockDuration]);

  useEffect(() => {
    calculateVotingPower();
  }, [lockTokenValue, lockDuration, calculateVotingPower]);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const weeks = Number(e.target.value);
    setLockDuration(weeks);
    calculateVotingPower();
  };

  const handleLockInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (Number(value) > Number(balances[lockTokenInfo?.address])) {
      setErrorColor('#FF0000');
      setLockTokenValue('');
    } else {
      setErrorColor('#FFFFFF');
      setLockTokenValue(value);
    }
  };

  const handleSelectPercentage = useCallback(
    (percentage: number) => {
      if (approveLock) return;
      setSuccessLock(false);
      setSelectedPercentage(percentage);
      const balance = Number(balances[lockTokenInfo?.address]);
      const amount = ((balance * percentage) / 100).toFixed(5);
      setLockTokenValue(amount);
      setUserBalance(balance - Number(amount));
    },
    [approveLock, balances, lockTokenInfo?.address]
  );

  const labels = [
    { value: 1, weeks: '1 week' },
    { value: 52, weeks: '1 year' },
    { value: 104, weeks: '2 years' },
    { value: 156, weeks: '3 years' },
    { value: 208, weeks: '4 years' },
  ];

  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={322}>
          <FormFieldContainer>
            <FormRowWrapper>
              <InputWrapper>
                <InputBoxRow>
                  <InputBox
                    errortextcode={errorColor}
                    type="number"
                    border="none"
                    placeholder="0"
                    width="70%"
                    padding="0px"
                    value={lockTokenValue}
                    disabled={isSliderDisabled}
                    onChange={handleLockInputChange}
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
                      {userBalance || Number(balances[lockTokenInfo?.address])}
                    </WalletText>
                  </WalletInfo>
                  <PercentageOptions>
                    <PercentageButton
                      active={selectedPercentage === 25}
                      onClick={() => handleSelectPercentage(25)}
                      disabled={isSliderDisabled}
                    >
                      25%
                    </PercentageButton>
                    <PercentageButton
                      active={selectedPercentage === 50}
                      onClick={() => handleSelectPercentage(50)}
                      disabled={isSliderDisabled}
                    >
                      50%
                    </PercentageButton>
                    <PercentageButton
                      active={selectedPercentage === 75}
                      onClick={() => handleSelectPercentage(75)}
                      disabled={isSliderDisabled}
                    >
                      75%
                    </PercentageButton>
                    <PercentageButton
                      active={selectedPercentage === 100}
                      onClick={() => handleSelectPercentage(100)}
                      disabled={isSliderDisabled}
                    >
                      MAX
                    </PercentageButton>
                  </PercentageOptions>
                </PercentageSelectorContainer>
              </InputWrapper>
            </FormRowWrapper>
          </FormFieldContainer>

          <LockTitle fontSize={16} lineheight={23.93}>
            Locking your TENEX tokens for {votingPower} veTENEX voting power
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
                  onChange={handleSliderChange} // Slider handler
                  disabled={isSliderDisabled}
                />
              </SliderContainer>
            </LoaderStyle>
            <SliderDeadlineStyle fontSize={10}>
              {labels.map(({ value, weeks }) => (
                <WeeksLabel
                  key={value}
                  onClick={() =>
                    !isSliderDisabled ? setLockDuration(value) : ''
                  }
                  isdisable={isSliderDisabled}
                >
                  {weeks}
                </WeeksLabel>
              ))}
            </SliderDeadlineStyle>
          </LockLoaderContainer>
        </LockleftSection>

        <LockDeposite
          LockTokenValue={lockTokenValue}
          SetlockDuration={setLockDuration}
          setLockTokenValue={setLockTokenValue}
          LockTokenSymbol={lockTokenInfo.symbol}
          LocTokenAddress={lockTokenInfo.address}
          LockTokenDecimal={lockTokenInfo.decimals}
          lockDuration={Number(lockDuration)}
          setSuccessLock={setSuccessLock}
          setIsApproveLock={setApproveLock}
          setIsSliderDisabled={setIsSliderDisabled}
        />
      </CreateMainContainer>

      <LockScreenInstruction>
        <InformImg src={InformIcon} />
        <LockCardtitle fontSize={16}>
          Locking will give you an NFT, referred to as a veNFT. You can increase
          the Lock amount or extend the Lock time at any point after.
        </LockCardtitle>
      </LockScreenInstruction>

      {successLock && <SuccessPopup message="Locked confirmed" />}
    </MainContainerStyle>
  );
};

export default CreatelockForm;
