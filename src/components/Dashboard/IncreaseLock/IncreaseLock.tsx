import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get tokenId from the URL
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract'; // Hook for contract interactions
import contractAddress from '../../../constants/contract-address/address'; // Contract addresses
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
  convertToDecimal,
  formatTokenAmount,
  locktokeninfo,
  MAX_LOCK_TIME,
} from '../../../utils/common/voteTenex';
import { useAccount } from '../../../hooks/useAccount';
import { useTokenBalances } from '../../../hooks/useTokenBalance';
//import BigNumber from 'bignumber.js';

const IncreaseLock = () => {
  const { tokenId } = useParams<{ tokenId: string }>();
  const [lockData, setLockData] = useState<LockedBalance | null>(null);
  const [additionalAmount, setAdditionalAmount] = useState<string>('');
  //const [isLoading, setIsLoading] = useState(false);
  //const [isLocking, setIsLocking] = useState(false);
  //const [isLocked, setIsLocked] = useState(false);
  const [totalVotingPower, setTotalVotingPower] = useState<number>(0);
  //const [totalLockedVELO, setTotalLockedVELO] = useState<number>(0);
  const [lockedTENEX, setLockedTENEX] = useState<number>(0);
  const { getLockData } = useVotingEscrowContract(contractAddress.VotingEscrow);

  useEffect(() => {
    const fetchLockData = async () => {
      if (tokenId) {
        try {
          // setIsLoading(true);
          const data = await getLockData(Number(tokenId));
          console.log('lock data inc:', data);
          if (data) {
            const LockedAmt = formatTokenAmount(Number(data.amount));
            setLockedTENEX(Number(LockedAmt));

            const currentTime = Math.floor(Date.now() / 1000);
            const timeRemaining =
              data.end > currentTime ? data.end - currentTime : 0;
            const votingPower = data.amount * (timeRemaining / MAX_LOCK_TIME);
            const setVotePw = convertToDecimal(Number(votingPower));
            setTotalVotingPower(Number(setVotePw));
            //setTotalLockedVELO(prevTotal => prevTotal + Number(data.amount));
            //setTotalVotingPower(prevTotal => prevTotal + setVotePw);
          }

          setLockData(data);
        } catch (error) {
          console.error('Error fetching lock data:', error);
          return null;
        } finally {
          //setIsLoading(false);
        }
      }
    };

    void fetchLockData(); // Fetch lock data and handle floating promise
  }, [tokenId, getLockData]);

  const handleLockInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setAdditionalAmount(e.target.value);
  };
  const lockTokenInfo = locktokeninfo();
  const tokenList = [lockTokenInfo];
  const { address } = useAccount();
  const { balances } = useTokenBalances(tokenList, address!);
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
              pattern="\d*\.?\d{0,2}"
              value={additionalAmount}
              onChange={handleLockInputData}
              placeholder="0"
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
              <UnderlineText fontsize={14}>extend the lock time.</UnderlineText>
            </LockHeaderTitle>
          </TipsContainer>
        </LockleftSection>

        {/* Stepper or confirmation UI */}
        <IncreaseStepper
          tokenId={Number(tokenId)}
          additionalAmount={Number(additionalAmount)}
          setAdditionalAmount={setAdditionalAmount}
        />

        {/* <button onClick={handleIncreaseLock} disabled={!additionalAmount || isLoading}>
          {isLoading ? 'Loading...' : 'Increase Lock'}
        </button> */}
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default IncreaseLock;
