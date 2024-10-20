import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../constants/contract-address/address';
import { MainContainerStyle } from '../../common/MainContainerStyle';
import { CreateMainContainer } from '../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  AmountWithImg,
  ImageContainer,
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../ManageVeTenex/Styles/ManageVetenex.style';
import { InputBox } from '../../Swap/modules/InputBox';
import { PercentageSelectorContainer } from '../../Swap/styles/SwapForm.style.';
import {
  LockHeaderWrapper,
  LockleftSection,
  TipsContainer,
  UnderlineText,
} from '../Extendlock/styles/Extendlock.style';
import { DropDownContainer } from '../Mergelock/styles/MergeLock.style';
import InformIcon from '../../../assets/information.svg';
import IncreaseStepper from './IncreaseStepper';
import { LockedBalance } from '../../../types/VotingEscrow';
import {
  calculateRemainingDays,
  calVotingPower,
  convertToDecimal,
  formatTokenAmount,
  locktokeninfo,
} from '../../../utils/common/voteTenex';
import { useAccount } from '../../../hooks/useAccount';
import { useTokenBalances } from '../../../hooks/useTokenBalance';
import SuccessPopup from '../../common/SucessPopup';
import { useVoterContract } from '../../../hooks/useVoterContract';

const IncreaseLock = () => {
  const [lockData, setLockData] = useState<LockedBalance | null>(null);
  const [additionalAmount, setAdditionalAmount] = useState<string>('');
  const [totalVotingPower, setTotalVotingPower] = useState<number>(0);
  const [isLockDuration, isSetLockDuration] = useState<number>(0);
  const [lockedTENEX, setLockedTENEX] = useState<number>(0);
  const [lockedOrgiTENEX, setLockedOrigTENEX] = useState<number>(0);
  const [iSuccessLock, setSuccessLock] = useState<boolean>(false);
  const [isApproveLock, setIsApproveLock] = useState<boolean>(false);
  const [votingStatus, setIsvotingStatus] = useState<boolean>(false);
  const { lastVote } = useVoterContract();
  const { getLockData } = useVotingEscrowContract(contractAddress.VotingEscrow);
  const navigate = useNavigate();
  const { encryptedTokenId } = useParams<{
    encryptedTokenId: string;
  }>();
  const tokenId = encryptedTokenId ? encryptedTokenId : '';
  if (!tokenId) {
    navigate('/governance');
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchLockData = async () => {
      if (tokenId) {
        try {
          const checkLastVote = await lastVote(BigInt(tokenId));
          if (Number(checkLastVote)) {
            setIsvotingStatus(true);
            console.log('checkLastVote:', Number(checkLastVote));
          }

          const data = await getLockData(Number(tokenId));
          if (data) {
            const LockedAmt = formatTokenAmount(data.amount);
            setLockedTENEX(Number(LockedAmt));
            setLockedOrigTENEX(Number(LockedAmt));
            const lockDuration = data?.end;
            isSetLockDuration(lockDuration);
            const votingPower = calVotingPower(data?.end, data?.amount);
            const setVotePw = convertToDecimal(Number(votingPower));
            if (!totalVotingPower) {
              setTotalVotingPower(Number(setVotePw));
            }

            //setTotalLockedVELO(prevTotal => prevTotal + Number(data.amount));
            //setTotalVotingPower(prevTotal => prevTotal + setVotePw);
          }

          setLockData(data);
        } catch (error) {
          console.error('Error fetching lock data:', error);
          return null;
        }
      }
    };

    void fetchLockData();
  }, [tokenId, getLockData, convertToDecimal]);

  const handleLockInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setSuccessLock(false);
    const amount = e.target.value;
    const validInput = /^[0-9]*\.?[0-9]*$/.test(amount);
    if (!validInput) return;
    const tokenBal = Number(balances[lockTokenInfo?.address]);
    // Check the number of decimals
    if (amount.includes('.') && tokenBal) {
      const decimalPlaces = amount.split('.')[1]?.length || 0;
      if (decimalPlaces > tokenBal) return;
    }
    if (Number(e.target.value) > Number(balances[lockTokenInfo?.address]))
      return;
    setAdditionalAmount(e.target.value);
    const increaseValue = Number(e.target.value) + lockedOrgiTENEX;
    setLockedTENEX(increaseValue);
    const votePower = calVotingPower(isLockDuration, increaseValue);
    const votePowerVal = votePower.toFixed(1);
    setTotalVotingPower(Number(votePowerVal));
  };
  const lockTokenInfo = locktokeninfo();
  const tokenList = [lockTokenInfo];
  const { address } = useAccount();
  const { balances } = useTokenBalances(tokenList, address!);
  const handleExtend = (tokenId: number) => {
    navigate('/governance/managevetenex/extend/' + tokenId);
  };
  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={374}>
          <PercentageSelectorContainer>
            <LockHeaderTitle fontSize={24}>Increase Lock</LockHeaderTitle>
            <LockDescriptonTitle fontSize={14}>
              Current Lock {lockedTENEX ? lockedTENEX : '0'}{' '}
              {lockTokenInfo?.symbol}
            </LockDescriptonTitle>
          </PercentageSelectorContainer>

          <LockHeaderWrapper>
            <LockDescriptonTitle fontSize={14}>
              {lockedTENEX ? lockedTENEX : '0'}{' '}
              <LockHeaderTitle fontSize={14}>
                {lockTokenInfo?.symbol}
              </LockHeaderTitle>{' '}
              locked until{' '}
              {lockData ? calculateRemainingDays(Number(lockData.end)) : '...'}
            </LockDescriptonTitle>
            <LockDescriptonTitle fontSize={14}>
              {totalVotingPower ? totalVotingPower : '0.00'}{' '}
              <LockHeaderTitle fontSize={14}>veTENEX</LockHeaderTitle> voting
              power granted
            </LockDescriptonTitle>
          </LockHeaderWrapper>

          <PercentageSelectorContainer>
            <LockHeaderTitle fontSize={16}>Add to lock</LockHeaderTitle>
            <LockDescriptonTitle fontSize={14}>
              Available{' '}
              <LockHeaderTitle fontSize={14}>
                {Number(balances[lockTokenInfo?.address])}{' '}
                {lockTokenInfo?.symbol}
              </LockHeaderTitle>
            </LockDescriptonTitle>
          </PercentageSelectorContainer>

          <DropDownContainer>
            <InputBox
              type="number"
              border="none"
              value={additionalAmount}
              onChange={handleLockInputData}
              placeholder="0"
              disabled={isApproveLock}
            />
            <AmountWithImg gap={8}>
              <ImageContainer
                src={lockTokenInfo?.logoURI}
                width="20px"
                height="20px"
              />
              <LockHeaderTitle fontSize={14}>
                {lockTokenInfo?.symbol}
              </LockHeaderTitle>
            </AmountWithImg>
          </DropDownContainer>

          <TipsContainer>
            <ImageContainer width="24px" height="24px" src={InformIcon} />
            <LockHeaderTitle fontSize={14}>
              Depositing into the lock will increase your voting power. You can
              also{' '}
              <UnderlineText
                onClick={() => handleExtend(Number(tokenId))}
                fontSize={14}
              >
                extend the lock time.
              </UnderlineText>
            </LockHeaderTitle>
          </TipsContainer>
        </LockleftSection>
        <IncreaseStepper
          tokenId={Number(tokenId)}
          additionalAmount={Number(additionalAmount)}
          setAdditionalAmount={setAdditionalAmount}
          totalVotingPower={totalVotingPower}
          setSuccessLock={setSuccessLock}
          setIsApproveLock={setIsApproveLock}
          votingStatus={votingStatus}
        />
      </CreateMainContainer>
      {iSuccessLock && <SuccessPopup message="Increase Lock confirmed" />}
    </MainContainerStyle>
  );
};

export default IncreaseLock;
