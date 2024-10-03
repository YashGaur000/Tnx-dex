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

import { useCallback, useEffect, useState } from 'react';
import PopupScreen from '../../../common/PopupScreen';
import LockModel from '../../../modal/LockModel';
import { useParams } from 'react-router-dom';
import { useVotingPowerCalculation } from '../../../../hooks/useVotingNftData';
import {
  calculateRemainingDays,
  convertDateToTimestamp,
  convertTimestampToDate,
  convertToDecimal,
  formatTokenAmount,
  getTimeDifference,
  locktokeninfo,
} from '../../../../utils/common/voteTenex';
import SuccessPopup from '../../../common/SucessPopup';

const MergeLock = () => {
  const { tokenId } = useParams<{ tokenId: string }>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isToTokenId, setIsToTokenId] = useState<number>(0);
  const [isToVotingPower, setIsToVotingPower] = useState<number>(0);
  const [isTotalDuration, setIsTotalDuration] = useState<string>('');
  const [iSuccessLock, setSuccessLock] = useState<boolean>(false);
  const [selectLockToken, setSelectLockToken] = useState('Your locks...');

  const { votingPower, lockData, timeStampValue } =
    useVotingPowerCalculation(tokenId);
  const lockTokenInfo = locktokeninfo();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSelectToken = useCallback(
    (
      option: string,
      toTokenId: number,
      toVotingPower: number,
      toLockDate: string
    ) => {
      setIsToVotingPower(toVotingPower);

      const toTillDate = convertDateToTimestamp(toLockDate);
      if (lockData) {
        const lockdataEnd = lockData.end;
        const fromTillDate = convertDateToTimestamp(lockdataEnd.toString());

        const Duration = fromTillDate >= toTillDate ? fromTillDate : toTillDate;
        const totalDuration = convertTimestampToDate(Duration);
        const formatUnlockData = getTimeDifference(totalDuration);
        setIsToVotingPower(toVotingPower);
        setIsTotalDuration(formatUnlockData);
      }
      setIsToTokenId(toTokenId);
      setSelectLockToken(option);
      setIsModalOpen(false);
    },
    [lockData, setIsToTokenId, setIsToVotingPower]
  );

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
                  selectLockToken !== 'Your locks...' ? '#FFFFFF' : '#CCCCCC'
                }
              >
                {selectLockToken}
              </DropdownTitle>
              <ImageContainer src={SelectIcon} width="8px" height="4px" />
            </DropDownContainer>
          </WalletAdressConainer>

          <LockHeaderWrapper>
            <LockHeaderTitle fontSize={16}>
              Extending your Lock #{tokenId}
            </LockHeaderTitle>
            <LockDescriptonTitle fontSize={14}>
              {lockData ? formatTokenAmount(Number(lockData.amount)) : 0.0}{' '}
              <LockHeaderTitle fontSize={14}>
                {lockTokenInfo.symbol}
              </LockHeaderTitle>{' '}
              locked for{' '}
              {timeStampValue ? calculateRemainingDays(timeStampValue) : '0'}
            </LockDescriptonTitle>
            <LockDescriptonTitle fontSize={14}>
              {votingPower ? convertToDecimal(votingPower).toString() : 0.0}{' '}
              <LockHeaderTitle fontSize={14}>veTENEX</LockHeaderTitle> voting
              power granted
            </LockDescriptonTitle>
          </LockHeaderWrapper>

          <TipsContainer>
            <ImageContainer width="24px" height="24px" src={InformIcon} />
            <LockDescriptonTitle fontSize={14}>
              Merging two locks will inherit the longest lock time of the two
              and will increase the final lock (veNFT) voting power by adding up
              the two underlying locked amounts based on the new lock time.
            </LockDescriptonTitle>
          </TipsContainer>
        </LockleftSection>

        <MergeStepper
          fromTokenId={tokenId}
          toTokenId={isToTokenId}
          setIsToVotingPower={setIsToVotingPower}
          isToVotingPower={isToVotingPower}
          votingPower={Number(votingPower)}
          isTotalDuration={isTotalDuration}
          setSuccessLock={setSuccessLock}
        />
      </CreateMainContainer>
      {isModalOpen && (
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
          <LockModel
            handleSelectToken={handleSelectToken}
            tokenId={Number(tokenId)}
          />
        </PopupScreen>
      )}
      {iSuccessLock && <SuccessPopup message="Merge lock confirmed" />}
    </MainContainerStyle>
  );
};

export default MergeLock;
