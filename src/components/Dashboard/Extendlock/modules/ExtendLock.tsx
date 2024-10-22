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
  convertToDecimal,
  formatTokenAmount,
} from '../../../../utils/common/voteTenex';
import { useEffect, useState } from 'react';
import { useVotingPowerCalculation } from '../../../../hooks/useVotingNftData';
import { useNavigate, useParams } from 'react-router-dom';
import SuccessPopup from '../../../common/SucessPopup';
import { useVoterContract } from '../../../../hooks/useVoterContract';

const ExtendLock = () => {
  const { encryptedTokenId } = useParams<{
    encryptedTokenId: string;
  }>();
  const navigate = useNavigate();
  const tokenId = encryptedTokenId ? encryptedTokenId : '';

  if (!tokenId) {
    navigate('/governance');
  }
  const [isMaxLockMode, setIsMaxLockMode] = useState<boolean>(false);
  const [iSuccessLock, setSuccessLock] = useState<boolean>(false);
  const [isExtendDisable, setIsExtendDisable] = useState<boolean>(true);
  const [isSliderDisabled, setIsSliderDisabled] = useState<boolean>(false);
  const [votingStatus, setIsvotingStatus] = useState<boolean>(false);
  const { lastVote } = useVoterContract();
  const {
    votingPower,
    lockData,
    extendDuretion,
    sliderValue,
    updateSliderValue,
    IsSliderValue,
  } = useVotingPowerCalculation(tokenId);

  useEffect(() => {
    const fetchlastVote = async () => {
      try {
        //let timestamp = Math.floor(Date.now() / 1000);
        const checkLastVote = await lastVote(BigInt(tokenId));

        //let epochStartTime = await epochStart(timestamp)

        //if(Number(checkLastVote) > Number(epochStartTime)){

        //}
        if (Number(checkLastVote)) {
          setIsvotingStatus(true);
          console.log('checkLastVote:', Number(checkLastVote));
        }
      } catch (error) {
        console.error('Error during last vote fetch:', error);
      }

      window.scrollTo(0, 0);
    };

    void fetchlastVote();
  }, [tokenId, lastVote]);

  const handleToggle = () => {
    if (!isMaxLockMode) {
      setIsMaxLockMode(true);
      updateSliderValue(208);
      setIsExtendDisable(false);
    } else {
      setIsMaxLockMode(false);
      updateSliderValue(IsSliderValue);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weeks = Number(e.target.value);
    if (!isSliderDisabled && weeks > IsSliderValue) {
      setIsExtendDisable(false);
      updateSliderValue(weeks);
    } else {
      setIsExtendDisable(true);
    }
  };

  const handleLabelClick = (weeks: number) => {
    if (!isSliderDisabled && weeks > sliderValue) {
      updateSliderValue(weeks);
      setIsExtendDisable(false);
    } else {
      setIsExtendDisable(true);
    }
  };

  const handleExtendClick = (val: boolean) => {
    if (!val) {
      setIsSliderDisabled(false);
      setIsExtendDisable(true);
    } else {
      setIsSliderDisabled(true);
      setIsExtendDisable(false);
    }
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
            <LockHeaderTitle fontSize={16}>
              Extending your Lock #{tokenId}
            </LockHeaderTitle>
            <LockDescriptonTitle fontSize={14}>
              {lockData ? formatTokenAmount(Number(lockData.amount)) : 0.0}{' '}
              <LockHeaderTitle fontSize={14}>TENEX</LockHeaderTitle> locked
              until {extendDuretion}
            </LockDescriptonTitle>
            <LockDescriptonTitle fontSize={14}>
              {votingPower ? convertToDecimal(votingPower).toString() : 0.0}{' '}
              <LockHeaderTitle fontSize={14}>veTENEX</LockHeaderTitle> voting
              power granted
            </LockDescriptonTitle>
          </LockHeaderWrapper>

          <MaxLoadContainer>
            <AutoMaxLoaderWrapper>
              <HeaderWithImgContainer>
                <ImageContainer width="24px" height="24px" src={ExchangeIcon} />
                <LockHeaderTitle fontSize={16}>
                  Auto Max-Lock Mode
                </LockHeaderTitle>
              </HeaderWithImgContainer>
              <LockDescriptonTitle fontSize={12}>
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
            <LockHeaderTitle fontSize={16}>
              Locking your TENEX tokens for {convertToDecimal(votingPower)}{' '}
              veTENEX voting power
            </LockHeaderTitle>
            <LockLoaderContainer padding="0px">
              <LoaderStatusWrapper fontSize={12} lineheight={17.94}>
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
                    disabled={isSliderDisabled}
                  />
                </SliderContainer>
              </LoaderStyle>
              <SliderDeadlineStyle fontSize={10}>
                {labels.map(({ value, weeks }) => (
                  <WeeksLabel
                    key={value}
                    onClick={() => handleLabelClick(value)}
                    isdisable={isSliderDisabled}
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
          onExtendClick={handleExtendClick}
          votingStatus={votingStatus}
        />
      </CreateMainContainer>
      {iSuccessLock && <SuccessPopup message="Merge lock confirmed" />}
    </MainContainerStyle>
  );
};

export default ExtendLock;
