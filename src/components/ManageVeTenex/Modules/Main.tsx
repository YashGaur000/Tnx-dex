import { useEffect, useMemo, useState } from 'react';
import TenexIcon from '../../../assets/Tenex.png';
import { GlobalButton } from '../../common';
import { useNavigate } from 'react-router-dom';
import QuestionIcon from '../../../assets/question-mark.png';
import {
  MetricDisplay,
  MetricDisplayWrapper,
  AsideSectionContains,
  StatsCardtitle,
  PopupWrapper,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  AmountWithImg,
  ImageContainer,
  LockButtonConatainer,
  LockDescriptonTitle,
  LockHeaderTitle,
  LockHeroSection,
  LockHeroSectionContent,
  LockContainerWrapper,
  LockheaderWrapper,
  LockheaderContentStyle,
  ToolTipsWrapper,
} from '../Styles/ManageVetenex.style';
import Relay from './Relaymodules/Relay';
import PopupScreen from '../../common/PopupScreen';
import LockToolTips from './LockToolTips';
import RelayToolTips from './RelayToolTips';
import { useAccount } from '../../../hooks/useAccount';
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../constants/contract-address/address';
import { Nft } from '../../../types/VotingEscrow';
import VeTenexTable from './VeTenexTable';
import {
  decodeBase64,
  // filterNftsByUnlockDate,
  //sortNftsByUnlockDateDesc,
} from '../../../utils/common/voteTenex';

const Main = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isToolTipActive, setToolTipActive] = useState(false);
  const [nftData, setNftData] = useState<Nft[]>([]);
  const Navigate = useNavigate();

  const escrowAddress = contractAddress.VotingEscrow;
  const { fetchUserNFTs } = useVotingEscrowContract(escrowAddress);
  const { address } = useAccount();

  useEffect(() => {
    void (async function fetchData() {
      try {
        if (address) {
          const fetchedNftVal = await fetchUserNFTs(address);

          const formattedNftFormateData = fetchedNftVal.map((nft) => ({
            tokenId: nft.tokenId,
            metadata: decodeBase64(nft.metadata),
          }));

          /* const filteredNftVal = filterNftsByUnlockDate(
            formattedNftFormateData
          ); */
          // const formattedNftData = sortNftsByUnlockDateDesc(filteredNftVal);
          setNftData(formattedNftFormateData);
        } else {
          console.warn('Address is undefined');
        }
      } catch (error) {
        console.error('Error fetching NFT data:', error);
      }
    })();
  }, [address, fetchUserNFTs]);
  const totalValues = useMemo(() => {
    const totalLockedTENEX = nftData.reduce((total, lock) => {
      const lockedVELO = lock.metadata?.attributes.find(
        (attr) => attr.trait_type === 'Locked VELO'
      )?.value;
      return total + (lockedVELO ? parseFloat(lockedVELO) : 0);
    }, 0);

    const totalVotingPower = nftData.reduce((total, lock) => {
      const votingPower = lock.metadata?.attributes.find(
        (attr) => attr.trait_type === 'Voting Power'
      )?.value;
      return total + (votingPower ? parseFloat(votingPower) : 0);
    }, 0);

    const totalValueLocked = totalLockedTENEX * 1.0; // Replace 1.0 with the current price of TENEX

    return {
      totalLockedTENEX,
      totalVotingPower,
      totalValueLocked,
    };
  }, [nftData]);
  function handleCreateLock() {
    Navigate('/governance/create');
  }

  function handleTooltipShow(option: string) {
    setToolTipActive(option === 'lock');
    setPopupVisible(true);
  }

  function handleTooltipHide() {
    setPopupVisible(false);
  }

  const closeModal = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <LockHeroSection>
        <LockHeroSectionContent>
          <LockHeaderTitle fontsize={36}>Manage veTENEX</LockHeaderTitle>
          <LockheaderContentStyle>
            <LockDescriptonTitle fontsize={16}>
              Maximize your voting power and boost rewards by locking more
              tokens for longer durations.
            </LockDescriptonTitle>
          </LockheaderContentStyle>
        </LockHeroSectionContent>

        <AsideSectionContains>
          <LockButtonConatainer>
            <GlobalButton
              width="150px"
              height="40px"
              margin="0px"
              onClick={handleCreateLock}
            >
              Create Lock
            </GlobalButton>
          </LockButtonConatainer>
          <MetricDisplayWrapper>
            <MetricDisplay>
              <StatsCardtitle fontsize={16}>Locked TENEX</StatsCardtitle>
              <AmountWithImg>
                {totalValues.totalLockedTENEX.toLocaleString()}{' '}
                <ImageContainer
                  width={'15'}
                  height={'15'}
                  margin={'0px 10px'}
                  src={TenexIcon}
                />
              </AmountWithImg>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontsize={16}>Total Voting Power</StatsCardtitle>
              <LockHeaderTitle fontsize={16}>
                {totalValues.totalVotingPower}
              </LockHeaderTitle>
            </MetricDisplay>
            <MetricDisplay>
              <StatsCardtitle fontsize={16}>Total Value Locked</StatsCardtitle>
              <LockHeaderTitle fontsize={16}>
                {totalValues.totalValueLocked.toLocaleString()}
              </LockHeaderTitle>
            </MetricDisplay>
          </MetricDisplayWrapper>
        </AsideSectionContains>
      </LockHeroSection>

      <LockContainerWrapper>
        <LockheaderWrapper>
          <LockHeaderTitle fontsize={24}>Locks</LockHeaderTitle>
          <ToolTipsWrapper onMouseEnter={() => handleTooltipShow('lock')}>
            <ImageContainer
              width={'16px'}
              height={'16px'}
              margin="7px 0px 0px 0px"
              src={QuestionIcon}
            ></ImageContainer>
          </ToolTipsWrapper>
        </LockheaderWrapper>

        <VeTenexTable nftData={nftData} />
      </LockContainerWrapper>

      <LockContainerWrapper>
        <LockheaderWrapper>
          <LockHeaderTitle fontsize={24}>Relay</LockHeaderTitle>
          <ToolTipsWrapper onMouseEnter={() => handleTooltipShow('relay')}>
            <ImageContainer
              width={'16px'}
              height={'16px'}
              margin="7px 0px 0px 0px"
              src={QuestionIcon}
            ></ImageContainer>
          </ToolTipsWrapper>
        </LockheaderWrapper>

        <Relay />
      </LockContainerWrapper>

      {isPopupVisible && (
        <PopupScreen
          isvisible={isPopupVisible}
          onClose={closeModal}
          width="500px"
          height="518px"
        >
          <PopupWrapper onMouseLeave={handleTooltipHide}>
            {isToolTipActive ? <LockToolTips /> : <RelayToolTips />}
          </PopupWrapper>
        </PopupScreen>
      )}
    </>
  );
};

export default Main;
