import ExchangeIcon from '../../../../assets/exchange-image.svg';
import {
  LockHeaderWrapper,
  LockleftSection,
  MaxLoadContainer,
  AutoMaxLoaderWrapper,
  HeaderWithImgContainer,
  SliderMainContainer,
} from '../styles/Extendlock.style';

import { ChangeEvent, useState } from 'react';
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

const ExtendLock = () => {
  const [lockDuration, SetlockDuration] = useState<number>(1);
  const handleToggle = () => {
    console.log('toggle button');
  };

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
  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection>
          <LockHeaderWrapper>
            <LockHeaderTitle fontSize={16}>
              Extending your Lock #24947
            </LockHeaderTitle>
            <LockDescriptonTitle fontSize={14}>
              50.0 <LockHeaderTitle fontSize={14}>TENEX</LockHeaderTitle> locked
              for 11 hours
            </LockDescriptonTitle>
            <LockDescriptonTitle fontSize={14}>
              0.015 <LockHeaderTitle fontSize={14}>veTENEX</LockHeaderTitle>{' '}
              voting power granted
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
                When activated, it sets the lock to maximum unlock time, until
                disabled. Once disabled, the regular vesting unlock time will
                apply. Maximum unlock time gives a 1 to 1 voting power to the
                amount of locked tokens.
              </LockDescriptonTitle>
            </AutoMaxLoaderWrapper>

            <SwitchComponent
              isChecked={true}
              handleToggle={handleToggle}
              onText=""
              offText=""
              isDisabled={false}
            />
          </MaxLoadContainer>

          <SliderMainContainer>
            <LockHeaderTitle fontSize={16}>
              Locking your TENEX tokens for 0.243 veTENEX voting power
            </LockHeaderTitle>
            <LockLoaderContainer padding="0px">
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
                    disabled
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
          </SliderMainContainer>
        </LockleftSection>

        <ExtendStepper />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default ExtendLock;
