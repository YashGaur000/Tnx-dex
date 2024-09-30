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
} from '../../../../utils/common/voteTenex';
import { useEffect, useState } from 'react';
import { useVotingPowerCalculation } from '../../../../hooks/useVotingNftData';
import { useParams } from 'react-router-dom';
import SuccessPopup from '../../../common/SucessPopup';

const ExtendLock = () => {
  const { tokenId } = useParams<{ tokenId: string }>();
  const [isMaxLockMode, setIsMaxLockMode] = useState<boolean>(false);
  const [iSuccessLock, setSuccessLock] = useState<boolean>(false);
  const [isExtendDisable, setIsExtendDisable] = useState<boolean>(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    votingPower,
    lockData,
    timeStampValue,
    sliderValue,
    updateSliderValue,
  } = useVotingPowerCalculation(tokenId);

  const handleToggle = () => {
    setIsMaxLockMode((prev) => !prev);
    if (!isMaxLockMode) {
      updateSliderValue(208);
      setIsExtendDisable(false);
    } else {
      setIsExtendDisable(true);
      updateSliderValue(sliderValue);
      setIsMaxLockMode(true);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weeks = Number(e.target.value);
    updateSliderValue(weeks);
  };

  const handleLabelClick = (weeks: number) => {
    updateSliderValue(weeks);
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
              {votingPower ? convertToDecimal(votingPower).toString() : 0.0}{' '}
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
              isDisabled={false}
              onText={''}
              offText={''}
            />
          </MaxLoadContainer>

          <SliderMainContainer>
            <LockHeaderTitle fontsize={16}>
              Locking your TENEX tokens for {convertToDecimal(votingPower)}{' '}
              veTENEX voting power
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
                    disabled={true}
                  />
                </SliderContainer>
              </LoaderStyle>
              <SliderDeadlineStyle fontsize={10}>
                {labels.map(({ value, weeks }) => (
                  <WeeksLabel
                    key={value}
                    onClick={() => handleLabelClick(value)}
                    isdisable={true}
                  >
                    {weeks}
                  </WeeksLabel>
                ))}
              </SliderDeadlineStyle>
            </LockLoaderContainer>
          </SliderMainContainer>
        </LockleftSection>
        <ExtendStepper
          tokenId={Number(tokenId)}
          selectedWeeks={sliderValue}
          votingPower={convertToDecimal(votingPower)}
          setSuccessLock={setSuccessLock}
          isExtendDisable={isExtendDisable}
        />
      </CreateMainContainer>
      {iSuccessLock && <SuccessPopup message="Merge lock confirmed" />}
    </MainContainerStyle>
  );
};

export default ExtendLock;
