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
import { useNavigate, useParams } from 'react-router-dom';
import { LockedBalance } from '../../../types/VotingEscrow';
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../constants/contract-address/address';
import { useAccount } from '../../../hooks/useAccount';
import SuccessPopup from '../../common/SucessPopup';
import { ToastContainer } from 'react-toastify';

import { Address } from 'viem';
import { showErrorToast } from '../../../utils/common/toastUtils';
import { useVoterContract } from '../../../hooks/useVoterContract';

const Transferlock = () => {
  const { encryptedTokenId } = useParams<{
    encryptedTokenId: string;
  }>();
  const navigate = useNavigate();
  const tokenId = encryptedTokenId ? encryptedTokenId : 0;

  if (!tokenId) {
    navigate('/governance');
  }

  const [lockData, setLockData] = useState<LockedBalance | null>(null);
  const [totalVotingPower, setTotalVotingPower] = useState<number>(0);
  const [toAddress, setToAddress] = useState<Address>();
  const [isInputLocked, setInputLock] = useState<boolean>(false);
  const [isSuccessLock, setSuccessLock] = useState<boolean>(false);
  const [votingStatus, setIsvotingStatus] = useState<boolean>(false);
  const [lockedTENEX, setLockedTENEX] = useState<number>(0);
  const [isValidAddress, setIsValidAddress] = useState<string>('');
  const { getLockData } = useVotingEscrowContract(contractAddress.VotingEscrow);
  const { address: currentAddress } = useAccount();
  const lockTokenInfo = locktokeninfo();
  const { lastVote } = useVoterContract();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isSuccessLock) navigate('/governance');
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
            const lockedAmount = formatTokenAmount(Number(data.amount));
            setLockedTENEX(Number(lockedAmount));

            const currentTime = Math.floor(Date.now() / 1000);
            const timeRemaining =
              data.end > currentTime ? data.end - currentTime : 0;
            const votingPower = data.amount * (timeRemaining / MAX_LOCK_TIME);
            const setVotePower = convertToDecimal(Number(votingPower));
            setTotalVotingPower(Number(setVotePower));
          }
          setLockData(data);
        } catch (error) {
          console.error('Error fetching lock data:', error);
        }
      }
    };
    void fetchLockData();
  }, [tokenId, getLockData]);

  const handleTransferAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue == '') {
      setIsValidAddress('Enter wallet address.');
    }
    if (inputValue.length !== 42) {
      setIsValidAddress('Wallet address is not valid.');
    }
    if (inputValue.toLowerCase() === currentAddress?.toLowerCase()) {
      setIsValidAddress('You cannot transfer to your own wallet address');
    }
    if (
      inputValue.length === 42 &&
      inputValue.toLowerCase() !== currentAddress?.toLowerCase()
    ) {
      setIsValidAddress('Wallet Address is valid');
    }

    setToAddress(inputValue as Address);
  };

  const validateAddress = () => {
    setIsValidAddress('Wallet address is valid.');
    if (!toAddress || toAddress.length !== 42) {
      setIsValidAddress('Wallet address is not valid.');
      void showErrorToast('Please enter a valid EVM wallet address.');
      return;
    }
    if (toAddress.toLowerCase() === currentAddress?.toLowerCase()) {
      setIsValidAddress('You cannot transfer to your own wallet address');
      void showErrorToast('You cannot transfer to your own wallet address.');
      return;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateAddress()) {
      setInputLock(true);
    }
  };

  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={436}>
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
              type="text"
              height="48px"
              disabled={isInputLocked}
              border="1px solid #B8B8B899"
              borderradius={12}
              value={toAddress}
              placeholder="Enter recipient address"
              padding="12px 24px"
              onChange={handleTransferAddress}
            />
          </WalletAdressConainer>
        </LockleftSection>

        <TransferLockSidebar
          tokenId={Number(tokenId)}
          toAddress={toAddress!}
          fromOwner={currentAddress!}
          setInputLock={setInputLock}
          setSuccessLock={setSuccessLock}
          setToAddres={setToAddress}
          handleSubmit={handleSubmit}
          votingStatus={votingStatus}
          isValidAddress={isValidAddress}
        />
      </CreateMainContainer>
      {isSuccessLock && <SuccessPopup message="Transfer Successful!" />}
      <ToastContainer />
    </MainContainerStyle>
  );
};

export default Transferlock;
