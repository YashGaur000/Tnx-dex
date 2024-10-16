import React, { useEffect, useState } from 'react';
import tenexarrow from '../../../assets/tenex-arrow.png';
import {
  IncentiveleftBarBox1,
  Img2,
  Img4,
  IncentivesValues,
  Box2Container,
  Box2DataPoint1,
  Box2DataPoint2,
  Box2DataPoint4,
  Box2Title,
  Box2Value,
  Box2DataPoint3,
  Box2DataPoint1Tenex,
  Box2TokenName,
  Box2TitleAvailable,
  // Box2ValueAvailable,
  Box2ProgressContainer,
  Box2ProgressBar,
  Box2PercentageBar,
  Box2Percentage,
  Box2ContainerBorder,
} from '../Styles/IncentiveSection.style';

import { useAccount } from '../../../hooks/useAccount';
import TokenSelectModal from '../../modal/TokenSelectModal';
import { TokenInfo } from '../../../constants/tokens/type';
import { useTokenBalances } from '../../../hooks/useTokenBalance';
import contractAddresses from '../../../constants/contract-address/address';
import {
  findTokenBySymbol,
  getTokenInfo,
} from '../../../utils/transaction/getTokenInfo';
import { AddressZero } from '@ethersproject/constants';
import { useIncentiveStore } from '../../../store/slices/useIncentiveStore';
import { useBribeVotingReward } from '../../../hooks/useBribeVotingReward';
import { useMultiCall } from '../../../hooks/useMultiCall';
import { Address } from 'viem';
import { ethers } from 'ethers';
import { PublicClient } from 'viem';
import { useNativeBalance } from '../../../hooks/useNativeBalance';
import { useRootStore } from '../../../store/root';
import { TransactionStatus } from '../../../types/Transaction';
import { useTokenPrice } from '../../../hooks/useTokenPrice';
interface IncentiveTokenSelectionProps {
  handleIncentiveFormValue: (inputValue: string) => void; // Updated to be a function
  handleTokenSymbol: (token: TokenInfo) => void;
  incentive: string;
}

const IncentiveTokenSelection: React.FC<IncentiveTokenSelectionProps> = ({
  handleIncentiveFormValue,
  handleTokenSymbol,
  incentive,
}) => {
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedIncentiveToken, setSelectedIncentiveToken] = useState<
    TokenInfo | undefined
  >(getTokenInfo(contractAddresses.TENEX));
  // const [tokenSelectTarget2, setTokenSelectTarget2] =
  //   useState<'token1'>('token1');

  const { address } = useAccount();

  const { balance: nativeBalance } = useNativeBalance(address!);

  const { data: tokenPriceData } = useTokenPrice();

  const { transactionStatus } = useRootStore();

  const tokenList = selectedIncentiveToken ? [selectedIncentiveToken] : [];
  const { balances } = useTokenBalances(tokenList, address ?? AddressZero);
  const {
    bribeAddress,
    balances: rewardBalances,
    rewardTokens,
    setRewardTokens,
    getTokenBalances,
    setTokenBalances,
  } = useIncentiveStore();

  const { rewards } = useBribeVotingReward(bribeAddress);
  const multicall = useMultiCall();

  const totalBalanceIncentiveToken =
    selectedIncentiveToken && Number(balances[selectedIncentiveToken?.address]);

  // if (error) return `Error! ${error.message}`;

  useEffect(() => {
    if (bribeAddress && multicall) {
      rewards()
        .then(async (tokens) => {
          const filteredTokens = (tokens ?? []).filter(
            (token): token is TokenInfo => token !== undefined
          );
          setRewardTokens(filteredTokens);
          if (filteredTokens) {
            const tokenBalance = (await getTokenBalances(
              multicall as PublicClient,
              filteredTokens,
              bribeAddress
            )) as unknown as Record<Address, ethers.Numeric>;
            setTokenBalances(tokenBalance);
          }
        })
        .catch((error) => {
          console.error('Error fetching rewards:', error);
        });
    }
  }, [bribeAddress, rewards, multicall, getTokenBalances, transactionStatus]);

  const handleTokenSelectOpen2 = () => {
    // setTokenSelectTarget2(target);
    setIsModalOpen2(true);
    handleIncentiveFormValue('0');
  };

  const handleIncentiveToken = (token: TokenInfo) => {
    setSelectedIncentiveToken(token);
    handleTokenSymbol(token);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value; // Ensure inputValue is a number
    const validInput = /^[0-9]*\.?[0-9]*$/.test(inputValue);
    if (!validInput) return;

    // Check the number of decimals
    if (inputValue.includes('.') && selectedIncentiveToken) {
      const decimalPlaces = inputValue.split('.')[1]?.length || 0;
      if (decimalPlaces > selectedIncentiveToken.decimals) return;
    }
    handleIncentiveFormValue(inputValue); // Call the function
  };

  // if (!address) {
  //   return <div>No account connected.</div>;
  // }

  const handleSelectPercentage = (percentage: number) => {
    if (!selectedIncentiveToken) return;

    let walletBalance = 0;
    if (selectedIncentiveToken.symbol === 'ETH') {
      walletBalance = (Number(nativeBalance?.formatted) * percentage) / 100;
    } else {
      walletBalance =
        (Number(balances[selectedIncentiveToken?.address].toString()) *
          percentage) /
        100;
    }

    // const amount = walletBalance.toFixed(5);
    const amount = walletBalance.toString();

    handleIncentiveFormValue(amount);
  };

  return (
    <IncentiveleftBarBox1 margintop="40px" height="fit-content" width="600px">
      <Box2Container>
        <Box2DataPoint1>
          <Box2Title>APR</Box2Title>
          <Box2Value>0.0%</Box2Value>
        </Box2DataPoint1>
        <Box2DataPoint2>
          <Box2Title>Current Votes</Box2Title>
          <Box2Value>0.0</Box2Value>
        </Box2DataPoint2>
        <Box2DataPoint3>
          <Box2Title>Current Incentives</Box2Title>
          {rewardTokens.length > 0 ? (
            rewardTokens
              .filter((token: TokenInfo) => {
                // Check if the token balance is non-zero
                const balance = rewardBalances[token.address];
                return balance && Number(balance) > 0;
              })
              .map((token: TokenInfo) => (
                <IncentivesValues key={token.address}>
                  {rewardBalances[token.address]
                    ? rewardBalances[token.address].toString()
                    : '0'}{' '}
                  {token.symbol}{' '}
                </IncentivesValues>
              ))
          ) : (
            <Box2Value>~$0.0</Box2Value>
          )}
        </Box2DataPoint3>
      </Box2Container>
      <Box2ContainerBorder>
        <Box2ProgressContainer>
          <Box2ProgressBar
            type="text"
            onChange={handleChange}
            value={incentive}
            disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
          />
          <Box2Container>
            <Box2DataPoint1Tenex
              onClick={() => handleTokenSelectOpen2()}
              disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
            >
              <Img2
                width={19.5}
                height={20}
                src={selectedIncentiveToken?.logoURI}
                alt={selectedIncentiveToken?.symbol}
              />
              <Box2TokenName>{selectedIncentiveToken?.symbol}</Box2TokenName>
              <Img4 src={tenexarrow} alt="Select Arrow" />
            </Box2DataPoint1Tenex>
          </Box2Container>
        </Box2ProgressContainer>
        <Box2PercentageBar>
          <Box2DataPoint4>
            <Box2TitleAvailable>
              Wallet :{' '}
              {totalBalanceIncentiveToken ? totalBalanceIncentiveToken : '0.0'}{' '}
              {selectedIncentiveToken?.symbol}
            </Box2TitleAvailable>
            {/* <Box2ValueAvailable>~</Box2ValueAvailable>
            <Box2ValueAvailable>$0.00</Box2ValueAvailable> */}
          </Box2DataPoint4>

          <Box2Percentage
            onClick={() => handleSelectPercentage(25)}
            disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
          >
            25%
          </Box2Percentage>
          <Box2Percentage
            onClick={() => handleSelectPercentage(50)}
            disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
          >
            50%
          </Box2Percentage>
          <Box2Percentage
            onClick={() => handleSelectPercentage(75)}
            disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
          >
            75%
          </Box2Percentage>
          <Box2Percentage
            onClick={() => handleSelectPercentage(100)}
            disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
          >
            MAX
          </Box2Percentage>
        </Box2PercentageBar>
      </Box2ContainerBorder>
      <TokenSelectModal
        isOpen={isModalOpen2}
        onClose={() => setIsModalOpen2(false)}
        onSelect={handleIncentiveToken}
        account={address!}
        excludeToken1={findTokenBySymbol('ETH')}
        tokenPriceData={tokenPriceData}
      />
    </IncentiveleftBarBox1>
  );
};

export default IncentiveTokenSelection;
