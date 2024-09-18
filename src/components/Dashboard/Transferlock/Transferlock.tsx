import { useEffect, useState } from 'react';
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

const Transferlock = () => {
  const { tokenId } = useParams<{ tokenId: string }>();
  const [lockData, setLockData] = useState<LockedBalance | null>(null);
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

  const lockTokenInfo = locktokeninfo();

  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={278}>
          <LockHeaderWrapper>
            <LockHeaderTitle fontSize={16}>
              Transferring Lock #{tokenId}
            </LockHeaderTitle>
            <LockDescriptonTitle fontSize={14}>
              {lockedTENEX ? lockedTENEX : '0.00'}{' '}
              <LockHeaderTitle fontSize={14}>
                {lockTokenInfo?.symbol}
              </LockHeaderTitle>{' '}
              locked for{' '}
              {lockData ? calculateRemainingDays(Number(lockData.end)) : '...'}
            </LockDescriptonTitle>
            <LockDescriptonTitle fontSize={14}>
              {totalVotingPower ? totalVotingPower : '0.00'}{' '}
              <LockHeaderTitle fontSize={14}>veTENEX</LockHeaderTitle> voting
              power granted
            </LockDescriptonTitle>
          </LockHeaderWrapper>
          <WalletAdressConainer>
            <LockHeaderTitle fontSize={16}>To wallet address</LockHeaderTitle>
            <InputBox
              height="48px"
              border="1px solid #B8B8B899"
              borderradius={12}
              padding="12px  24px"
            />
          </WalletAdressConainer>
        </LockleftSection>

        <TransferLockSidebar />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default Transferlock;
