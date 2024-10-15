import { GlobalButton } from '../../common';
import { Stable } from '../../Dashboard/Index/styles/DepositAndStake.styled';
import {
  CardsButton,
  CardsDescription,
  CardsTitleData,
  ProtocolCard,
  ProtocolCardHeading,
  ProtocolCardsData,
  ProtocolMainCardContainer,
  ToolsCard,
  ToolsCardButton,
  ToolsCardsContainer,
  ToolsDataContainer,
  ToolsDataHeading,
  ToolsDescriptionData,
  ToolsMainContainer,
} from '../styles/ToolsScreen.style';

import MorethanIcon from '../../../assets/moreIcone.svg';
import lessthanIcon from '../../../assets/lessIcon.svg';
import { useState } from 'react';
import PopupScreen from '../../common/PopupScreen';
import { PopupWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import ToolsPopupForm from './ToolsPopupForm';
const ToolsScreen = () => {
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showLiquidity, setShowLiquidity] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  function handleTooltipShow() {
    setPopupVisible(true);
  }

  function handleTooltipHide() {
    setPopupVisible(false);
  }

  const closeModal = () => {
    setPopupVisible(false);
  };

  return (
    <ToolsMainContainer>
      <ToolsDataContainer>
        <ToolsDataHeading Fontsize="24px">
          Getting Started with
        </ToolsDataHeading>
        <ToolsDataHeading Fontsize="54px">
          <Stable>TENEX </Stable> Finance
        </ToolsDataHeading>
        <ToolsDescriptionData>
          <p>
            TENEX is a DEX that combines the best of Curve, Convex, and Uniswap
            V2 into a cohesive AMM designed to serve as BLAST network&apos;s
            liquidity layer.
          </p>
        </ToolsDescriptionData>
        <GlobalButton
          width="234px"
          height="54px"
          margin="40px"
          onClick={handleTooltipShow}
        >
          Token Listing Inquiry
        </GlobalButton>
      </ToolsDataContainer>
      <ToolsCardsContainer>
        <ToolsCard>
          <CardsTitleData>Token Integration</CardsTitleData>
          <CardsDescription>
            You will need the token contract address and the logo. Add the token
            data in a pull request on the Tokenlist repo, or ask for help doing
            so on the Aerodrome Discord.
          </CardsDescription>
          <ToolsCardButton>
            <GlobalButton width="81px" height="26px" fontSize={12} margin="0px">
              Add Token
            </GlobalButton>
          </ToolsCardButton>
        </ToolsCard>
        <ToolsCard>
          <CardsTitleData>Create a Pair</CardsTitleData>
          <CardsDescription>
            Deposit your tokens by creating a liquidity pool. You can stake the
            deposited tokens right away to start earning the emissions after the
            voting concludes.
          </CardsDescription>
          <ToolsCardButton>
            <GlobalButton width="81px" height="26px" fontSize={12} margin="0px">
              Deposit
            </GlobalButton>
          </ToolsCardButton>
        </ToolsCard>
        <ToolsCard>
          <CardsTitleData>Add Incentives & Vote</CardsTitleData>
          <CardsDescription>
            The liquidity pool can receive incentives and votes every week
            before Wednesday midnight UTC. Consider adding incentives at least 4
            hours before the deadline to get more voters.
          </CardsDescription>
          <ToolsCardButton>
            <GlobalButton
              width="103px"
              height="26px"
              fontSize={12}
              margin="0px"
            >
              Add Incentives
            </GlobalButton>
          </ToolsCardButton>
        </ToolsCard>
      </ToolsCardsContainer>
      <ProtocolMainCardContainer>
        <ProtocolCard>
          <ProtocolCardHeading>
            <Stable>Protocol Architecture</Stable>
            <CardsButton onClick={() => setShowArchitecture(!showArchitecture)}>
              {showArchitecture ? (
                <img src={lessthanIcon} alt=""></img>
              ) : (
                <img src={MorethanIcon} alt=""></img>
              )}
            </CardsButton>
          </ProtocolCardHeading>
          {showArchitecture && (
            <ProtocolCardsData style={{ color: '#CCCCCC' }}>
              <CardsTitleData>
                Aerodrome Finance uses AERO as a utility token and AERO as
                governance token.
              </CardsTitleData>
              <CardsTitleData>
                AERO is used for rewarding liquidity providers through
                emissions. veAERO is used for governance. Any AERO holder can
                vote-escrow their tokens for up to 4 years and receive a veAERO
                NFT in exchange.
              </CardsTitleData>
              <CardsTitleData>
                veAERO holders vote every epoch (weekly) on which pools receive
                AERO emissions. In return, voters receive 100% of the fees and
                incentives the pool collects. Protocols looking to incentivize
                liquidity can bribe veAERO voters (i.e., deposit token rewards
                for voters of a pool) and accumulate veAERO to vote directly.
              </CardsTitleData>
            </ProtocolCardsData>
          )}
        </ProtocolCard>
        <ProtocolCard>
          <ProtocolCardHeading>
            <Stable>Liquidity Market</Stable>
            <CardsButton onClick={() => setShowLiquidity(!showLiquidity)}>
              {showLiquidity ? (
                <img src={lessthanIcon} alt=""></img>
              ) : (
                <img src={MorethanIcon} alt=""></img>
              )}
            </CardsButton>
          </ProtocolCardHeading>
          {showLiquidity && (
            <ProtocolCardsData>
              <CardsTitleData>
                All tokens need liquidity on AMM dexes. Having more liquidity
                for a token:
              </CardsTitleData>
              <CardsTitleData>
                Allows people to trade more of it without incurring a high price
                impact Provides utility for tokens; holders will buy and hold
                tokens for gains from providing liquidity
              </CardsTitleData>
              <CardsTitleData>
                Liquidity providers add liquidity by depositing equal values of
                two tokens (one of which is usually a stable or ETH) into a
                liquidity pool. Doing so carries impermanent loss risk, where
                big price changes make depositors recoup less value than what
                they&apos;d have had if they&apos;d just held the tokens. So
                they need to be highly compensated to take on this risk. The
                thinking is, will the rewards make me better off than I think I
                risk losing from impermanent loss?
              </CardsTitleData>
              <CardsTitleData>
                Aerodrome rewards liquidity providers solely through AERO
                emissions. AERO emitted to a liquidity pool is distributed
                proportionally. If I provide more of the liquidity in an LP, I
                get more AERO as rewards
              </CardsTitleData>
              <CardsTitleData>
                Aerodrome distributes a programmed amount of AERO to liquidity
                providers across all liquidity pools. How much AERO goes to each
                liquidity pool changes by a weekly vote. Voters are veAERO
                holders — people who have acquired AERO and locked it to receive
                a veAERO NFT, which gives them votes to distribute to pools
              </CardsTitleData>
              <CardsTitleData>
                Voters have several potential reasons to vote for specific pools
                and increase compensation for liquidity providers to those
                pools. They might
              </CardsTitleData>
              <CardsTitleData>
                want to get more liquidity for specific tokens for the benefits
                mentioned above; themselves be liquidity providers on those
                pools and want to gain more for providing liquidity; want to get
                more direct rewards for their vote.
              </CardsTitleData>
              <CardsTitleData>
                The third reason, direct rewards, is the most common one.
                Aerodrome rewards votes in two ways: fees and incentives.
              </CardsTitleData>
              <CardsTitleData>
                Fees: Aerodrome charges trading fees; when someone swaps tokens
                from a liquidity pool, some of the tokens they trade are
                distributed to voters for that pool. More trade volume
                translates to more fees distributed to voters, so voters are
                incentivized to vote for pools they think will be highly used.
              </CardsTitleData>
              <CardsTitleData>
                Incentives: Anybody can incentivize votes for a specific pool by
                depositing tokens to be distributed to voters on that pool.
                Their thinking is: if I pay voters for voting on that pool,
                I&apos;ll get more votes on that pool and thus more AERO emitted
                to that pool, which means more liquidity for tokens on that
                pool. And then these tokens get the benefits mentioned at the
                top: more trading, more (and larger) participants, more token
                utility.
              </CardsTitleData>
              <CardsTitleData>
                Note: Voters can add incentives for pools they&apos;re voting
                on. They recoup some of their incentives by voting on that pool,
                and they incentivize others to join in with them in voting for
                that pool. Liquidity providers also can and add incentives for
                pools they&apos;re providing liquidity to, as historically that
                pool gets a multiple of the incentive value back in AERO
                emissions; they may receive more value than they send as an
                incentive.
              </CardsTitleData>
            </ProtocolCardsData>
          )}
        </ProtocolCard>
      </ProtocolMainCardContainer>
      {isPopupVisible && (
        <PopupScreen
          isvisible={isPopupVisible}
          onClose={closeModal}
          width="500px"
          height="518px"
        >
          <PopupWrapper onMouseLeave={handleTooltipHide}>
            <ToolsPopupForm />
          </PopupWrapper>
        </PopupScreen>
      )}
    </ToolsMainContainer>
  );
};

export default ToolsScreen;
