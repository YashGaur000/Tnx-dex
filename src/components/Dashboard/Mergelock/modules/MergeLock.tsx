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
import { useNavigate, useParams } from 'react-router-dom';
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

const MergeLock = () => {
  const navigate = useNavigate();
  const { encryptedTokenId } = useParams<{ encryptedTokenId: string }>();
  const tokenId = encryptedTokenId ? encryptedTokenId : '';

  if (!tokenId) {
    navigate('/governance');
  }
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFromTokenId, setIsFromTokenId] = useState<number>(0);
  const [isFromVotingPower, setIsFromVotingPower] = useState<number>(0);
  const [isTotalDuration, setIsTotalDuration] = useState<string>('');
  const [isVotingStatus, setVotingStatus] = useState<boolean>(false);
  const [IsModalDisabled, setIsModalDisable] = useState<boolean>(false);
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
      fromTokenId: number,
      fromVotingPower: number,
      fromLockDate: string,
      votingStatus: boolean
    ) => {
      setIsFromVotingPower(fromVotingPower);
      setVotingStatus(votingStatus);
      //console.log('votingStatus:', votingStatus);
      const fromTillDate = convertDateToTimestamp(fromLockDate);

      if (lockData) {
        const toTillDate = lockData.end.toString();
        const greaterTillDate = Math.max(fromTillDate, Number(toTillDate));
        const totalDuration = convertTimestampToDate(greaterTillDate);
        const formatUnlockData = getTimeDifference(totalDuration);
        setIsTotalDuration(formatUnlockData);
      }

      setIsFromTokenId(fromTokenId);
      setSelectLockToken(option);
      setIsModalOpen(false);
    },
    [lockData]
  );

  const handleInputBox = () => {
    if (IsModalDisabled) return;
    setIsModalOpen(true);
  };

  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={436}>
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
          toTokenId={tokenId}
          fromTokenId={isFromTokenId}
          setIsFromVotingPower={setIsFromVotingPower}
          isFromVotingPower={isFromVotingPower}
          votingPower={Number(votingPower)}
          votingStatus={isVotingStatus}
          isTotalDuration={isTotalDuration}
          setIsModalDisable={setIsModalDisable}
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
    </MainContainerStyle>
  );
};

export default MergeLock;
