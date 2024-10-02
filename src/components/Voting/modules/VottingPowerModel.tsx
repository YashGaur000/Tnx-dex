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
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../ManageVeTenex/Styles/ManageVetenex.style';
import {
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
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
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
import SuccessPopup from '../../common/SucessPopup';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import { useRootStore } from '../../../store/root';

interface VottingPowerModelProps {
  VoteSelectPoolData: LiquidityPoolNewType[];
  selectedNftData: Nft;
  setVoteSelectPool: React.Dispatch<
    React.SetStateAction<LiquidityPoolNewType[]>
  >;
  setSelectedPoolsCount: React.Dispatch<React.SetStateAction<number>>;
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
}) => {
  const { vote } = useVoterContract();

  const totalPower = 100;
  const [inputValues, setInputValues] = useState<string[]>(
    new Array(VoteSelectPoolData.length)
  );
  const [isVoteButtonVisible, setVoteButtonVisible] = useState(false);
  const [PoolAddress, setPoolAddress] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    'something went Wrong'
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSucess, setSucess] = useState(false);

  const availablePower = useMemo(() => {
    const totalUsedPower = inputValues.reduce(
      (a1, a2) => a1 + parseFloat(a2 || '0'),
      0
    );
    const rem = totalPower - totalUsedPower;
    console.log(rem);

    if (isSucess) return 0;
    return rem;
  }, [inputValues]);

  const { setTransactionStatus } = useRootStore();
  const Navigate = useNavigate();

  const handleSelectPercentage = (
    index: number,
    percentage: number,
    poolAddress: string
  ) => {
    setInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      const totalUsedPower = prevValues.reduce(
        (sum, value) => sum + (parseFloat(value) || 0),
        0
      );
      const availablePower = totalPower - totalUsedPower;

      const previousValue = parseFloat(prevValues[index]) || 0;
      const maxNewValue = availablePower + previousValue;
      const desiredNewValue = maxNewValue * (percentage / 100);

      updatedValues[index] = Math.min(desiredNewValue, maxNewValue).toString();

      return updatedValues;
    });

    setPoolAddress((prevVal) => {
      if (!prevVal.includes(poolAddress)) {
        const updatedVal: string[] = [...prevVal];
        updatedVal[index] = poolAddress;
        return updatedVal;
      }

      return prevVal;
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

  const handleVote = useCallback(async () => {
    try {
      setIsError(false);
      setSucess(false);
      setIsDisabled(true);

      const tokenId = Number(selectedNftData.tokenId);
      const votingWeight = inputValues.map((value) => Number(value));
      console.log(tokenId, PoolAddress, votingWeight);
      const poolAddress = PoolAddress as Address[];
      if (!tokenId) {
        setIsError(true);
        setErrorMessage('Toked is Required');
        return;
      }

      if (votingWeight.length === 0) {
        setIsError(true);
        setErrorMessage('votingWeight is Required');
        return;
      }
      if (poolAddress.length === 0) {
        setIsError(true);
        setErrorMessage('Pool Address is Required');
        return;
      }

      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      const voteStart = await vote(tokenId, poolAddress, votingWeight);

      console.log(voteStart);

      setTransactionStatus(TransactionStatus.DONE);

      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
        setInputValues(new Array(VoteSelectPoolData.length).fill(''));
        setSucess(true);
        setIsDisabled(true);
        setVoteSelectPool([]);
        setSelectedPoolsCount(0);
        setVoteSelectPool([]);
      }, TRANSACTION_DELAY);

      setIsDisabled(false);
    } catch (error) {
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

  const handleVotingInputdata = (
    index: number,
    value: string,
    poolAddress: string
  ) => {
    setInputValues((prev) => {
      const updateinput = [...prev];
      updateinput[index] = value;
      return updateinput;
    });

    setPoolAddress((prevVal) => {
      if (!prevVal.includes(poolAddress)) {
        const updatedVal: string[] = [...prevVal];
        updatedVal[index] = poolAddress;
        return updatedVal;
      }
      return prevVal;
    });
  };

  const clearVotes = () => {
    setInputValues(new Array(VoteSelectPoolData.length).fill(''));
    setVoteButtonVisible(false);
  };

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

  const handleSpecificClearVote = (index: number) => {
    setInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = '';
      return updatedValues;
    });
  };

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
                  {selectedNftData?.metadata.attributes[2].value} VELO locked
                  until {selectedNftData?.metadata.attributes[0].value}
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
            >
              {isSucess ? 'voted' : 'vote'}
            </GlobalButton>
          ) : (
            <VotingPowerContainer>
              <LockDescriptonTitle fontSize={12}>
                Total voting power
              </LockDescriptonTitle>
              <LockHeaderTitle
                fontSize={14}
                style={{ color: availablePower <= 0 ? 'red' : 'inherit' }}
              >
                {isSucess
                  ? 'Aldready Voted'
                  : availablePower > 0
                    ? availablePower.toFixed(2)
                    : '0.00'}
                % available
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

                        <LiquidityTitle fontSize={12}>{0.01} %</LiquidityTitle>
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
                      Total rewards ~$10,180
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
                      type="text"
                      placeholder="0.0"
                      value={inputValues[index]}
                      onChange={(e) => {
                        handleVotingInputdata(index, e.target.value, data.id);
                      }}
                    />
                    %
                  </VoteInputWrapper>
                  <PercentageSelectorContainer>
                    <PercentageOptions>
                      <PercentageButton
                        onClick={() =>
                          handleSelectPercentage(index, 25, data.id)
                        }
                      >
                        25%
                      </PercentageButton>

                      <PercentageButton
                        onClick={() =>
                          handleSelectPercentage(index, 50, data.id)
                        }
                      >
                        50%
                      </PercentageButton>
                      <PercentageButton
                        onClick={() =>
                          handleSelectPercentage(index, 75, data.id)
                        }
                      >
                        75%
                      </PercentageButton>
                      <PercentageButton
                        onClick={() =>
                          handleSelectPercentage(index, 100, data.id)
                        }
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
      {isSucess && <SuccessPopup message="Vote Sucessfully" />}
    </>
  );
};

export default VottingPowerModel;
