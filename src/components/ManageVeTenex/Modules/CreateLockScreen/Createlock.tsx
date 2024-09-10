import InformIcon from '../../../../assets/information.png';
import { LockCardstyle } from '../../Styles/ManageVetenex.style';
//import SelectIcon from '../../../../assets/select.png';
import {
  Slider,
  SliderContainer,
} from '../../../Swap/styles/TransactionDeadline.style';
import {
  LockTitle,
  CreateLockFirstSection,
  LockLoaderContainer,
  LoaderStatus,
  LoaderStyle,
  SliderDeadlineStyle,
  LockScreenInstruction,
  InformImg,
  LockProgressStyle,
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
  InputWrapper,
  PercentageSelectorContainer,
  TokenSelect,
  TokenSelectAlign,
  //TokenSelectAlignSelect,
  WalletInfo,
} from '../../../Swap/styles/SwapForm.style.';
import { InputBox } from '../../../Swap/modules/InputBox';

const CreatelockForm = () => {
  const [lockDuration, SetlockDuration] = useState<number>(1);
  const [LockTokenValue, setLockTokenValue] = useState<string>('');
  const lockTokenInfo: TokenInfo = ERC20_TEST_TOKEN_LIST[1];
  //const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  //const lockTokenInfo = useTokenInfo(tokenInformation);
  const tokenList = [lockTokenInfo];
  const { address } = useAccount();
  const { balances } = useTokenBalances(tokenList, address!);
  const totalBalanceToken = Number(
    lockTokenInfo && balances[lockTokenInfo.address]
  );
  console.log(address);
  console.log(totalBalanceToken);
  console.log(lockTokenInfo);

  const HandleWeeksStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const TotalWeeks = e.target.value;
    SetlockDuration(Number(TotalWeeks));
  };

  const labels = [
    { value: 1, weeks: '1 week' },
    { value: 52, weeks: '1 year' },
    { value: 104, weeks: '2 year' },
    { value: 156, weeks: '3 year' },
    { value: 208, weeks: '4 year' },
  ];

  const handleLockInputData = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setLockTokenValue(e.target.value);
  };

  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <CreateLockFirstSection>
          <LockCardstyle>
            <FormFieldContainer>
              <FormRowWrapper>
                <InputWrapper>
                  <InputBox
                    type="number"
                    border="none"
                    placeholder="0"
                    width="75%"
                    padding="0px"
                    value={LockTokenValue}
                    onChange={handleLockInputData}
                  />
                  <TokenSelect marginleft={'32px'}>
                    <TokenSelectAlign>
                      <img
                        src={lockTokenInfo.logoURI}
                        width={20}
                        height={20}
                        alt={lockTokenInfo.logoURI}
                      />
                    </TokenSelectAlign>
                    <TokenSelectAlign>{lockTokenInfo?.symbol}</TokenSelectAlign>
                    {/* <TokenSelectAlignSelect>
                      <img
                        src={SelectIcon}
                        width={8}
                        height={4}
                        alt={SelectIcon}
                      />
                    </TokenSelectAlignSelect> */}
                  </TokenSelect>

                  <PercentageSelectorContainer>
                    <WalletInfo>
                      Wallet:{' '}
                      {Number(
                        lockTokenInfo && balances[lockTokenInfo?.address]
                      )}{' '}
                    </WalletInfo>

                    <LockProgressStyle>
                      <label>0%</label>
                      <label>25%</label>
                      <label>50%</label>
                      <label>75%</label>
                      <label>MAX</label>
                    </LockProgressStyle>
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
                  <WeeksLabel
                    key={value}
                    onClick={() => SetlockDuration(value)}
                  >
                    {weeks}
                  </WeeksLabel>
                ))}
              </SliderDeadlineStyle>
            </LockLoaderContainer>
          </LockCardstyle>
        </CreateLockFirstSection>
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
