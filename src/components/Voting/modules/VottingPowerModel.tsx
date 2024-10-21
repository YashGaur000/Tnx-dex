import {
  LockTokenContainer,
  ScrollContainer,
  TokenItemData,
  TokenItemImage,
  TokenItemWithAdressWrapper,
  TokenList,
  TokenNameWrapper,
} from '../../modal/styles/TokenSelectModal.style';
import TenexLogo from '../../../assets/Tenex.png';
import {
  ImageContainer,
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../ManageVeTenex/Styles/ManageVetenex.style';
import {
  Decrement,
  IncrementWrapper,
  VoteInput,
  VoteInputWrapper,
  VotingLockWrapper,
  VotingPowerContainer,
} from '../styles/VottingPowerModel.style';

import { DashboardNavigation } from '../../Dashboard/Index/styles/DashBoard.styled';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
  LiquidityTokenWrapper,
  PairContain,
  SugestImgWrapper,
  SuggestImg,
  TokenAmountTitle,
  TokenCardContainer,
  TraidingSyleLabel,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import {
  LiquidityTitle,
  StatsCardtitle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import ImpIcon from '../../../assets/Tips.svg';

import { getTokenLogo } from '../../../utils/getTokenLogo';

import { Title } from '../styles/VotingPoolBar.style';

import {
  PercentageButton,
  PercentageOptions,
  PercentageSelectorContainer,
} from '../../Swap/styles/SwapForm.style.';
import { Nft } from '../../../types/VotingEscrow';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalButton } from '../../common';
import { useVoterContract } from '../../../hooks/useVoterContract';
import { Address } from 'viem';
import ErrorPopup from '../../common/Error/ErrorPopup';
import SelectIcon from '../../../assets/selectGradient.svg';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import { useRootStore } from '../../../store/root';
import {
  getTimeDifference,
  locktokeninfo,
} from '../../../utils/common/voteTenex';
import { useLiquidityStore } from '../../../store/slices/liquiditySlice';
import { VoteDataType } from '../../../types/VoteData';
const lockTokenInfo = locktokeninfo();
interface VottingPowerModelProps {
  VoteSelectPoolData: VoteDataType[];
  selectedNftData: Nft;
  setVoteSelectPool: React.Dispatch<React.SetStateAction<VoteDataType[]>>;
  setSelectedPoolsCount: React.Dispatch<React.SetStateAction<number>>;
  setSucess: (input: boolean) => void;
  setExplorerlink: (link: string) => void;
}

interface RPCError extends Error {
  code?: number;
  data?: {
    message?: string;
    code?: number;
  };
}
const VottingPowerModel: React.FC<VottingPowerModelProps> = ({
  VoteSelectPoolData,
  selectedNftData,
  setVoteSelectPool,
  setSelectedPoolsCount,
  setSucess,
  setExplorerlink,
}) => {
  const { vote } = useVoterContract();

  const totalPower = 100;
  const [inputValues, setInputValues] = useState<number[]>([]);
  const [isVoteButtonVisible, setVoteButtonVisible] = useState(false);
  const [PoolAddress, setPoolAddress] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    'something went Wrong'
  );
  const { getPoolFeeById } = useLiquidityStore();
  const [isDisabled, setIsDisabled] = useState(false);
  const { setTransactionStatus } = useRootStore();
  const Navigate = useNavigate();

  useEffect(() => {
    setInputValues(new Array(VoteSelectPoolData.length).fill(0));
  }, [VoteSelectPoolData.length]);
  const availablePower = useMemo(() => {
    const totalUsedPower = inputValues.reduce((a1, a2) => a1 + (a2 || 0), 0);
    const rem = totalPower - totalUsedPower;

    return rem;
  }, [inputValues]);

  useEffect(() => {
    const poolIds = VoteSelectPoolData.map((pool) => pool.id);
    setPoolAddress(poolIds);
  }, [VoteSelectPoolData]);

  useEffect(() => {
    setTimeout(() => {
      setIsError(false);
    }, 10000);
  }, [isError]);
  const handleSelectPercentage = (index: number, percentage: number) => {
    setInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      const totalAllocated = updatedValues.reduce(
        (sum, value) => sum + value,
        0
      );
      const currentPoolValue = updatedValues[index] || 0;
      const remainingPercentage = 100 - totalAllocated + currentPoolValue;
      updatedValues[index] = Math.min(percentage, remainingPercentage);

      const newTotalAllocated = updatedValues.reduce(
        (sum, value) => sum + value,
        0
      );

      if (newTotalAllocated > 100) {
        let excessPercentage = newTotalAllocated - 100;

        updatedValues.forEach((value, i) => {
          if (i !== index && value > 0 && excessPercentage > 0) {
            const adjustment = Math.min(value, excessPercentage);
            updatedValues[i] -= adjustment;
            excessPercentage -= adjustment;
          }
        });
      }

      return updatedValues;
    });
  };

  const handleError = (error: unknown) => {
    const typedError = error as RPCError;

    console.log('Error:', typedError.message);

    //Todo : handle error properly
    if (typedError.message.includes('execution reverted')) {
      setIsError(true);

      setErrorMessage('Already voted this Lock');
    } else if (typedError.message.includes('gas')) {
      setIsError(true);
      setErrorMessage('Gas limit too low or transaction not sufficient');
    } else {
      setIsError(true);
      setErrorMessage('An unknown error occurred.');
    }
  };

  const handleIncrement = (index: number) => {
    console.log(availablePower);

    if (availablePower > 0) {
      setInputValues((prev) => {
        const updateValue = [...prev];
        updateValue[index] = Math.min(100, updateValue[index] + 5);
        return updateValue;
      });
    }
  };

  const handleDecrement = (index: number) => {
    setInputValues((prev) => {
      const updateValue = [...prev];

      updateValue[index] = Math.max(0, updateValue[index] - 5);
      return updateValue;
    });
  };

  const handleVote = useCallback(async () => {
    try {
      setIsError(false);
      setSucess(false);
      setIsDisabled(true);
      setLoading(true);
      const tokenId = Number(selectedNftData.tokenId);
      const isZeroWeight = inputValues.includes(0);

      if (isZeroWeight) {
        setIsError(true);
        setErrorMessage('Zero Weight not Allowed');
        console.log('zero weight not Allowed');

        setIsDisabled(false);
        setLoading(false);
        return;
      }

      console.log(tokenId, PoolAddress, inputValues);
      const poolAddress = PoolAddress as Address[];
      if (!tokenId) {
        setIsError(true);
        setErrorMessage('Toked is Required');
        setLoading(false);
        return;
      }

      if (poolAddress.length === 0) {
        setIsError(true);
        setErrorMessage('Pool Address is Required');
        setLoading(false);
        return;
      }

      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      const voteStart = await vote(tokenId, poolAddress, inputValues);
      if (voteStart?.hash) {
        const TransactionHash: string = voteStart?.hash;
        setExplorerlink(`https://testnet.blastscan.io/tx/${TransactionHash}`);
      }
      setTransactionStatus(TransactionStatus.DONE);

      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
        setInputValues(new Array(VoteSelectPoolData.length).fill(0));
        setLoading(false);
        setSucess(true);
        setIsDisabled(true);
        setVoteSelectPool([]);
        setSelectedPoolsCount(0);
      }, TRANSACTION_DELAY);

      setIsDisabled(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setIsDisabled(false);
      handleError(error);
    }
  }, [inputValues, vote]);

  useEffect(() => {
    if (availablePower === 0) {
      setVoteButtonVisible(true);
    } else {
      setVoteButtonVisible(false);
    }
  }, [availablePower]);

  const clearVotes = useCallback(() => {
    setVoteSelectPool([]);
    setInputValues([]);
    setSelectedPoolsCount(0);
    setPoolAddress([]);
    setTransactionStatus(TransactionStatus.FAILED);
  }, [setVoteSelectPool, setSelectedPoolsCount]);

  const handleNavigateButton = (option: string) => {
    if (option === 'clearvote') {
      clearVotes();
    } else if (option) {
      Navigate(
        `/governance/managevetenex/${option}/${selectedNftData?.tokenId}`
      );
    } else {
      console.log('route is undefine');
    }
  };

  const handleSpecificClearVote = useCallback(
    (index: number) => {
      setVoteSelectPool((prevPools) => {
        const updatedPools = [...prevPools];
        updatedPools.splice(index, 1);
        return updatedPools;
      });
      setInputValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues.splice(index, 1);
        return updatedValues;
      });
      setPoolAddress((prevAddresses) => {
        const updatedAddresses = [...prevAddresses];
        updatedAddresses.splice(index, 1);
        return updatedAddresses;
      });
      setSelectedPoolsCount((prevCount) => prevCount - 1);
    },
    [setVoteSelectPool, setSelectedPoolsCount]
  );

  const metadata = selectedNftData.metadata;
  const attributes = metadata.attributes;
  const unlockDate =
    attributes.find((attr) => attr.trait_type === 'Unlock Date')?.value ?? '';
  const formatUnloackData = getTimeDifference(unlockDate);

  return (
    <>
      <LockTokenContainer padding="20px 10px 10px">
        <VotingLockWrapper>
          <TokenItemWithAdressWrapper>
            <TokenItemImage
              src={TenexLogo}
              width={36}
              height={36}
              alt={'wrong'}
            />
            <TokenNameWrapper>
              <TokenItemData>
                Lock #{selectedNftData?.tokenId.toString()}
              </TokenItemData>

              <TokenItemWithAdressWrapper>
                <LockDescriptonTitle fontSize={12}>
                  {selectedNftData?.metadata.attributes[2].value}
                  {' ' + lockTokenInfo.symbol} locked for {formatUnloackData}
                </LockDescriptonTitle>
                <DashboardNavigation
                  fontSize={14}
                  onClick={() => handleNavigateButton('increase')}
                >
                  Increase
                </DashboardNavigation>
                <DashboardNavigation
                  fontSize={14}
                  onClick={() => handleNavigateButton('extend')}
                >
                  Extend
                </DashboardNavigation>
                <DashboardNavigation
                  fontSize={14}
                  onClick={() => handleNavigateButton('clearvote')}
                >
                  Clear Votes
                </DashboardNavigation>
              </TokenItemWithAdressWrapper>
            </TokenNameWrapper>
          </TokenItemWithAdressWrapper>

          {isVoteButtonVisible ? (
            <GlobalButton
              margin="0px"
              width="82px"
              height="40px"
              onClick={handleVote}
              disabled={isDisabled}
              inProgress={isLoading}
            >
              Vote
            </GlobalButton>
          ) : (
            <VotingPowerContainer>
              <LockDescriptonTitle fontSize={12}>
                Total voting power
              </LockDescriptonTitle>
              <LockHeaderTitle
                fontSize={14}
                style={{ color: availablePower <= 0 ? '#f44336' : 'inherit' }}
              >
                {availablePower > 0 ? availablePower.toFixed(2) : '0.00'}%
                available
              </LockHeaderTitle>
            </VotingPowerContainer>
          )}
        </VotingLockWrapper>

        <ScrollContainer height="350px">
          <TokenList>
            {VoteSelectPoolData.map((data, index) => (
              <VotingLockWrapper key={index}>
                <TokenCardContainer height={96}>
                  <GroupImgContains>
                    <IMG1Contains top={10} left={0}>
                      <Imgstyle src={getTokenLogo(data.token0.symbol)} />
                    </IMG1Contains>
                    <IMG2Contains top={10} left={25}>
                      <Imgstyle src={getTokenLogo(data.token1.symbol)} />
                    </IMG2Contains>
                  </GroupImgContains>

                  <PairContain>
                    <TraidingSyleLabel>
                      {data.token0.symbol}-{data.token1.symbol}
                    </TraidingSyleLabel>
                    <LiquidityTokenWrapper alignitem="flex-start">
                      <TokenAmountTitle>
                        <StatsCardtitle lineheight="17px" fontSize={12}>
                          {data.isStable ? 'Stable' : 'Volatile'}
                        </StatsCardtitle>

                        <LiquidityTitle fontSize={12}>
                          {(() => {
                            const poolFees = Number(getPoolFeeById(data.id));
                            return poolFees ? `${poolFees}%` : '';
                          })()}
                        </LiquidityTitle>

                        <SugestImgWrapper>
                          <SuggestImg src={ImpIcon} />
                        </SugestImgWrapper>
                      </TokenAmountTitle>
                      <TokenAmountTitle>
                        <DashboardNavigation
                          fontSize={12}
                          onClick={() => {
                            handleSpecificClearVote(index);
                          }}
                        >
                          Clear Vote
                        </DashboardNavigation>
                      </TokenAmountTitle>
                    </LiquidityTokenWrapper>
                  </PairContain>
                </TokenCardContainer>

                <PairContain>
                  <LockDescriptonTitle fontSize={12}>
                    Votes 8,923,342.27
                  </LockDescriptonTitle>
                  <LiquidityTokenWrapper alignitem="flex-start">
                    <LockDescriptonTitle fontSize={12}>
                      Total rewards ~${' '}
                      {Number(data.totalBribesUSD.toString()) +
                        Number(data.totalFeesUSD.toString())}
                    </LockDescriptonTitle>
                    <LockDescriptonTitle fontSize={12}>
                      Voting APR 45.9%
                    </LockDescriptonTitle>
                  </LiquidityTokenWrapper>
                </PairContain>

                <PairContain>
                  <Title fontSize="14">~$0.0</Title>
                  <LiquidityTokenWrapper alignitem="flex-start">
                    <LockDescriptonTitle fontSize={12}>
                      Est. Rewards
                    </LockDescriptonTitle>
                  </LiquidityTokenWrapper>
                </PairContain>

                <PairContain>
                  <Title fontSize="14">0.0 veTENEX</Title>
                  <LiquidityTokenWrapper alignitem="flex-start">
                    <LockDescriptonTitle fontSize={12}>
                      Voting power
                    </LockDescriptonTitle>
                  </LiquidityTokenWrapper>
                </PairContain>

                <LiquidityTokenWrapper alignitem="flex-start">
                  <VoteInputWrapper>
                    <VoteInput
                      type="number"
                      placeholder="0.0"
                      value={inputValues[index] == 0 ? '' : inputValues[index]}
                      readOnly
                    />
                    <IncrementWrapper>
                      <Decrement
                        src={SelectIcon}
                        width="9px"
                        height="5px"
                        onClick={() => handleIncrement(index)}
                      />
                      <ImageContainer
                        src={SelectIcon}
                        width="9px"
                        height="5px"
                        cursor="pointer"
                        onClick={() => handleDecrement(index)}
                      />
                    </IncrementWrapper>
                  </VoteInputWrapper>

                  <PercentageSelectorContainer>
                    <PercentageOptions>
                      <PercentageButton
                        onClick={() => handleSelectPercentage(index, 25)}
                      >
                        25%
                      </PercentageButton>

                      <PercentageButton
                        onClick={() => handleSelectPercentage(index, 50)}
                      >
                        50%
                      </PercentageButton>
                      <PercentageButton
                        onClick={() => handleSelectPercentage(index, 75)}
                      >
                        75%
                      </PercentageButton>
                      <PercentageButton
                        onClick={() => handleSelectPercentage(index, 100)}
                      >
                        MAX
                      </PercentageButton>
                    </PercentageOptions>
                  </PercentageSelectorContainer>
                </LiquidityTokenWrapper>
              </VotingLockWrapper>
            ))}
          </TokenList>
        </ScrollContainer>
      </LockTokenContainer>
      {isError && <ErrorPopup errorMessage={errorMessage} />}
    </>
  );
};

export default VottingPowerModel;
