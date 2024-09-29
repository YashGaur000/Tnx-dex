import { ChangeEvent, useEffect, useState } from 'react';
import { MainContainerStyle } from '../../common/MainContainerStyle';
import { CreateMainContainer } from '../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../ManageVeTenex/Styles/ManageVetenex.style';
import { InputBox } from '../../Swap/modules/InputBox';
import {
  LockHeaderWrapper,
  LockleftSection,
  WalletAdressConainer,
} from '../Extendlock/styles/Extendlock.style';
import TransferLockSidebar from './TransferLockSidebar';
import {
  calculateRemainingDays,
  convertToDecimal,
  formatTokenAmount,
  locktokeninfo,
  MAX_LOCK_TIME,
} from '../../../utils/common/voteTenex';
import { useParams } from 'react-router-dom';
import { LockedBalance } from '../../../types/VotingEscrow';
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../constants/contract-address/address'; // Contract addresses
//import { Address } from 'viem';
import { useAccount } from '../../../hooks/useAccount';
import SuccessPopup from '../../common/SucessPopup';

const Transferlock = () => {
  const { tokenId } = useParams<{ tokenId: string }>();
  const [lockData, setLockData] = useState<LockedBalance | null>(null);
  const [totalVotingPower, setTotalVotingPower] = useState<number>(0);
  const [toAddres, setToAddres] = useState<`0x${string}` | undefined>(
    undefined
  );
  const [iSuccessLock, setSuccessLock] = useState<boolean>(false);
  const [lockedTENEX, setLockedTENEX] = useState<number>(0);
  const { getLockData } = useVotingEscrowContract(contractAddress.VotingEscrow);
  const { address } = useAccount();
  const lockTokenInfo = locktokeninfo();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchLockData = async () => {
      if (tokenId) {
        try {
          // setIsLoading(true);
          const data = await getLockData(Number(tokenId));
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

    void fetchLockData();
  }, [tokenId, getLockData]);

  const handleTransferAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.startsWith('0x') && inputValue.length === 42) {
      setToAddres(inputValue as `0x${string}`);
    } else {
      setToAddres(undefined);
    }
  };

  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={278}>
          <LockHeaderWrapper>
            <LockHeaderTitle fontsize={16}>
              Transferring Lock #{tokenId}
            </LockHeaderTitle>
            <LockDescriptonTitle fontsize={14}>
              {lockedTENEX ? lockedTENEX : '0.00'}{' '}
              <LockHeaderTitle fontsize={14}>
                {lockTokenInfo?.symbol}
              </LockHeaderTitle>{' '}
              locked for{' '}
              {lockData ? calculateRemainingDays(Number(lockData.end)) : '...'}
            </LockDescriptonTitle>
            <LockDescriptonTitle fontsize={14}>
              {totalVotingPower ? totalVotingPower : '0.00'}{' '}
              <LockHeaderTitle fontsize={14}>veTENEX</LockHeaderTitle> voting
              power granted
            </LockDescriptonTitle>
          </LockHeaderWrapper>
          <WalletAdressConainer>
            <LockHeaderTitle fontsize={16}>To wallet address</LockHeaderTitle>
            <InputBox
              type="text"
              height="48px"
              border="1px solid #B8B8B899"
              borderradius={12}
              value={toAddres}
              padding="12px  24px"
              onChange={handleTransferAddress}
            />
          </WalletAdressConainer>
        </LockleftSection>

        <TransferLockSidebar
          tokenId={Number(tokenId)}
          toAddress={toAddres!}
          fromOwner={address!}
          setSuccessLock={setSuccessLock}
        />
      </CreateMainContainer>
      {iSuccessLock && <SuccessPopup message="Transfer Succesfuly" />}
    </MainContainerStyle>
  );
};

export default Transferlock;
