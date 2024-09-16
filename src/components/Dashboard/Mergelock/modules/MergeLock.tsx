import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { CreateMainContainer } from '../../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  ImageContainer,
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import SelectIcon from '../../../../assets/select.svg';
import {
  LockHeaderWrapper,
  LockleftSection,
  TipsContainer,
  WalletAdressConainer,
} from '../../Extendlock/styles/Extendlock.style';
import InformIcon from '../../../../assets/information.svg';
import MergeStepper from './MergeStepper';
import { DropDownContainer, DropdownTitle } from '../styles/MergeLock.style';

import { useState } from 'react';

import PopupScreen from '../../../common/PopupScreen';
import LockModel from '../../../modal/LockModel';

const MergeLock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectLockToken, setSelectLockToken] = useState('Your locks...');
  const handleSelectToken = (option: string) => {
    console.log(option);
    setSelectLockToken(option);
    setIsModalOpen(false);
  };

  const handleInputBox = () => {
    setIsModalOpen(true);
  };
  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={360}>
          <WalletAdressConainer>
            <LockHeaderTitle fontSize={16}>
              Select the lock you want to merge
            </LockHeaderTitle>

            <DropDownContainer onClick={handleInputBox}>
              <DropdownTitle
                color={
                  selectLockToken !== 'Your locks...' ? '#FFFFFF' : ' #CCCCCC'
                }
              >
                {selectLockToken}
              </DropdownTitle>
              <ImageContainer src={SelectIcon} width="8px" height="4px" />
            </DropDownContainer>
          </WalletAdressConainer>

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

          <TipsContainer>
            <ImageContainer width="24px" height="24px" src={InformIcon} />
            <LockDescriptonTitle fontSize={14}>
              Merging two locks will inherit the longest lock time of the two
              and will increase the final lock (veNFT) voting power by adding up
              the two underlying locked amount based ont he new lock time.
            </LockDescriptonTitle>
          </TipsContainer>
        </LockleftSection>

        <MergeStepper />
      </CreateMainContainer>

      <PopupScreen
        isvisible={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        height="540px"
        width="540px"
        padding="0px"
        scroll="none"
      >
        <LockModel handleSelectToken={handleSelectToken} />
      </PopupScreen>
    </MainContainerStyle>
  );
};

export default MergeLock;
