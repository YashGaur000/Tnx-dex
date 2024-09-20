import ExchangeIcon from '../../../../assets/exchange-image.svg';
import {
  LockHeaderWrapper,
  LockleftSection,
  MaxLoadContainer,
  AutoMaxLoaderWrapper,
  HeaderWithImgContainer,
  SliderMainContainer,
} from '../styles/Extendlock.style';

import ExtendStepper from './ExtendStepper';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { CreateMainContainer } from '../../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  LockHeaderTitle,
  ImageContainer,
  LockDescriptonTitle,
} from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import SwitchComponent from '../../../Swap/modules/SwitchComponent';
import {
  LoaderStatus,
  LoaderStatusWrapper,
  LoaderStyle,
  LockLoaderContainer,
  SliderDeadlineStyle,
  WeeksLabel,
} from '../../../ManageVeTenex/Styles/CreateLock.style';
import {
  Slider,
  SliderContainer,
} from '../../../Swap/styles/TransactionDeadline.style';
import {
  calculateRemainingDays,
  convertToDecimal,
  formatTokenAmount,
  MAX_LOCK_TIME,
} from '../../../../utils/common/voteTenex';
import { useCallback, useEffect, useState } from 'react';
import { useVotingEscrowContract } from '../../../../hooks/useVotingEscrowContract';
import { LockedBalance } from '../../../../types/VotingEscrow';
import { useParams } from 'react-router-dom';
import contractAddress from '../../../../constants/contract-address/address';

const ExtendLock = () => {
  const { tokenId } = useParams<{ tokenId: string }>();
  const [lockData, setLockData] = useState<LockedBalance | null>(null);
  const [isMaxLockMode, setIsMaxLockMode] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(1);
  const [timeStampValue, setTimeStamp] = useState<number>(1);
  const [calculatedVotingPower, setCalculatedVotingPower] = useState<number>(0);
  const { getLockData } = useVotingEscrowContract(contractAddress.VotingEscrow);

  const calculateVotingPower = useCallback(
    (weeks: number) => {
      if (lockData) {
        const currentTime = Math.floor(Date.now() / 1000);
        const selectedEndTime = currentTime + weeks * 7 * 24 * 60 * 60;
        const timeRemaining = selectedEndTime - currentTime;
        const votingPower =
          Number(lockData.amount) * (timeRemaining / MAX_LOCK_TIME);
        setCalculatedVotingPower(Number(votingPower));
      }
    },
    [lockData]
  );

  const handleToggle = () => {
    setIsMaxLockMode((prev) => !prev);

    if (!isMaxLockMode) {
      setSliderValue(208);
      calculateVotingPower(208);
    }
  };

  useEffect(() => {
    const fetchLockData = async () => {
      if (tokenId) {
        try {
          const data = await getLockData(Number(tokenId));
          console.log('lock data:', data);
          if (data) {
            setTimeStamp(Number(data.end));
            const currentTime = Math.floor(Date.now() / 1000);
            const timeRemaining =
              Number(data.end) > currentTime
                ? Number(data.end) - currentTime
                : 0;
            const weeksRemaining = Math.floor(
              timeRemaining / (7 * 24 * 60 * 60)
            );
            setSliderValue(weeksRemaining);
            calculateVotingPower(weeksRemaining);
            setLockData(data);
          }
        } catch (error) {
          console.error('Error fetching lock data:', error);
        }
      }
    };

    void fetchLockData();
  }, [tokenId, calculateVotingPower, getLockData]);

  // Function to handle slider changes
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weeks = Number(e.target.value);
    console.log('WWWWWWW:', weeks);
    setSliderValue(weeks);
    calculateVotingPower(weeks);
  };

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
        <LockleftSection>
          <LockHeaderWrapper>
            <LockHeaderTitle fontsize={16}>
              Extending your Lock #{tokenId}
            </LockHeaderTitle>
            <LockDescriptonTitle fontsize={14}>
              {lockData ? formatTokenAmount(Number(lockData.amount)) : 0.0}{' '}
              <LockHeaderTitle fontsize={14}>TENEX</LockHeaderTitle> locked
              until{' '}
              {timeStampValue ? calculateRemainingDays(timeStampValue) : '0'}
            </LockDescriptonTitle>
            <LockDescriptonTitle fontsize={14}>
              {calculatedVotingPower
                ? convertToDecimal(calculatedVotingPower)
                : 0.0}{' '}
              <LockHeaderTitle fontsize={14}>veTENEX</LockHeaderTitle> voting
              power granted
            </LockDescriptonTitle>
          </LockHeaderWrapper>

          <MaxLoadContainer>
            <AutoMaxLoaderWrapper>
              <HeaderWithImgContainer>
                <ImageContainer width="24px" height="24px" src={ExchangeIcon} />
                <LockHeaderTitle fontsize={16}>
                  Auto Max-Lock Mode
                </LockHeaderTitle>
              </HeaderWithImgContainer>
              <LockDescriptonTitle fontsize={12}>
                When activated, it sets the lock to maximum unlock time until
                disabled. Once disabled, the regular vesting unlock time will
                apply. Maximum unlock time gives a 1-to-1 voting power to the
                amount of locked tokens.
              </LockDescriptonTitle>
            </AutoMaxLoaderWrapper>

            <SwitchComponent
              isChecked={isMaxLockMode}
              handleToggle={handleToggle}
              onText="Max Lock"
              offText="Custom Lock"
              isDisabled={false}
            />
          </MaxLoadContainer>

          <SliderMainContainer>
            <LockHeaderTitle fontsize={16}>
              Locking your TENEX tokens for{' '}
              {convertToDecimal(calculatedVotingPower)} veTENEX voting power
            </LockHeaderTitle>
            <LockLoaderContainer padding="0px">
              <LoaderStatusWrapper fontsize={12} lineheight={17.94}>
                <LoaderStatus>{sliderValue} weeks</LoaderStatus>
              </LoaderStatusWrapper>
              <LoaderStyle>
                <SliderContainer>
                  <Slider
                    type="range"
                    min="1"
                    max="208"
                    step={1}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    disabled={isMaxLockMode}
                  />
                </SliderContainer>
              </LoaderStyle>
              <SliderDeadlineStyle fontsize={10}>
                {labels.map(({ value, weeks }) => (
                  <WeeksLabel
                    key={value}
                    onClick={void handleSliderChange}
                    isdisable={isMaxLockMode}
                  >
                    {weeks}
                  </WeeksLabel>
                ))}
              </SliderDeadlineStyle>
            </LockLoaderContainer>
          </SliderMainContainer>
        </LockleftSection>
        {/* error  Unsafe argument of type `BigNumber` assigned to a parameter of type `number`  @typescript-eslint/no-unsafe-argument*/}
        <ExtendStepper
          tokenId={Number(tokenId)}
          timeStampValue={timeStampValue}
          selectedWeeks={sliderValue}
          votingPower={convertToDecimal(calculatedVotingPower)}
        />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default ExtendLock;
