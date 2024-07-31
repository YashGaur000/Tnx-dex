import React, { useState } from 'react';

import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  HamburgerIcon,
  NestedSectionLinks,
  Section,
  SectionLink,
  SectionTitle,
  SidebarContainer,
} from './style';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<
    Record<string, boolean>
  >({
    introduction: true,
    fundamentals: false,
    liquidity: false,
    tokenomics: false,
    security: false,
    v2: false,
    functionalitiesUpgrade: false,
    liquidityProvisioning: false,
    liquidityConcentrated: false,
    liquidityEvent: false,
    veTenex: false,
    pools: false,
    busl: false,
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSection = (section: string) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <HamburgerIcon onClick={toggleSidebar}>
        <FontAwesomeIcon
          icon={isOpen ? faArrowAltCircleLeft : faArrowAltCircleRight}
        />
      </HamburgerIcon>
      <SidebarContainer isopen={isOpen.toString()}>
        <Section>
          <SectionTitle
            onClick={() => toggleSection('introduction')}
            isOpen={visibleSections.introduction}
          >
            Introduction to TENEX
            <FontAwesomeIcon
              icon={visibleSections.introduction ? faChevronUp : faChevronDown}
            />
          </SectionTitle>
          <NestedSectionLinks isVisible={visibleSections.introduction}>
            <SectionLink to="introduction/tenex">What is TENEX</SectionLink>
            <SectionLink to="introduction/core">
              Core Functionalities
            </SectionLink>
            {/* <SectionLink
              to="introduction/fundamentals"
              onClick={() => toggleSection('fundamentals')}
            >
              ve(3,3) Fundamentals &nbsp;
              <FontAwesomeIcon
                icon={
                  visibleSections.fundamentals ? faChevronUp : faChevronDown
                }
              />
            </SectionLink>
            <NestedSectionLinks isVisible={visibleSections.fundamentals}>
              <SectionLink to="introduction/glossary">Glossary</SectionLink>
              <SectionLink to="introduction/veTenex">
                veTENEX(veNFT)
              </SectionLink>
            </NestedSectionLinks>  */}
            <SectionLink
              to="introduction/veTenex"
              onClick={() => toggleSection('veTenex')}
            >
              veTENEX(veNFT) &nbsp;
              <FontAwesomeIcon
                icon={visibleSections.veTenex ? faChevronUp : faChevronDown}
              />
            </SectionLink>
            <NestedSectionLinks isVisible={visibleSections.veTenex}>
              <SectionLink to="introduction/revenue">
                Voters Revenue Distribution Schedule
              </SectionLink>
              <SectionLink to="introduction/swap">TENEX Swap</SectionLink>
            </NestedSectionLinks>
            <SectionLink to="introduction/rewards">Rewards</SectionLink>
            <SectionLink to="introduction/analytics">
              TENEX Analytics
            </SectionLink>
            <SectionLink to="introduction/glossary">Glossary</SectionLink>
            {/* <SectionLink to="introduction/swap">TENEX Swap</SectionLink>
            <SectionLink to="introduction/revenue">
              Voters Revenue Distribution Schedule
            </SectionLink> */}
          </NestedSectionLinks>
        </Section>
        <Section>
          <SectionTitle
            onClick={() => toggleSection('liquidity')}
            isOpen={visibleSections.liquidity}
          >
            Liquidity Provisioning
            <FontAwesomeIcon
              icon={visibleSections.liquidity ? faChevronUp : faChevronDown}
            />
          </SectionTitle>
          <NestedSectionLinks isVisible={visibleSections.liquidity}>
            <SectionLink
              to="liquidity/pools"
              onClick={() => toggleSection('pools')}
            >
              veTENEX(veNFT) &nbsp;
              <FontAwesomeIcon
                icon={visibleSections.pools ? faChevronUp : faChevronDown}
              />
            </SectionLink>
            <NestedSectionLinks isVisible={visibleSections.pools}>
              <SectionLink to="liquidity/volatile">Volatile</SectionLink>
              <SectionLink to="liquidity/correlated">Correlated</SectionLink>
              <SectionLink to="liquidity/fee">Rewards Distribution</SectionLink>
            </NestedSectionLinks>
            {/* <SectionLink to="liquidity/fee">Rewards Distribution</SectionLink> */}
            <SectionLink to="liquidity/curves">Swap Curves</SectionLink>
            <SectionLink
              to="liquidity/busl"
              onClick={() => toggleSection('busl')}
            >
              BUSL - 1.1 License &nbsp;
              <FontAwesomeIcon
                icon={visibleSections.busl ? faChevronUp : faChevronDown}
              />
            </SectionLink>
            <NestedSectionLinks isVisible={visibleSections.busl}>
              <SectionLink to="liquidity/protected-contracts">
                Protected Contracts
              </SectionLink>
            </NestedSectionLinks>
          </NestedSectionLinks>
        </Section>
        <Section>
          <SectionTitle
            onClick={() => toggleSection('tokenomics')}
            isOpen={visibleSections.tokenomics}
          >
            TENEX Tokenomics
            <FontAwesomeIcon
              icon={visibleSections.tokenomics ? faChevronUp : faChevronDown}
            />
          </SectionTitle>
          <NestedSectionLinks isVisible={visibleSections.tokenomics}>
            <SectionLink to="tokenomics/distribution">
              TENEX Token Distribution
            </SectionLink>
            <SectionLink to="tokenomics/emissions-schedule">
              Emissions Schedule / Bootstrapping Period
            </SectionLink>
            <SectionLink
              to="tokenomics/tge"
              onClick={() => toggleSection('liquidityEvent')}
            >
              TENEX LGE - Liquidity Generation Event &nbsp;
              <FontAwesomeIcon
                icon={
                  visibleSections.liquidityEvent ? faChevronUp : faChevronDown
                }
              />
            </SectionLink>
            <NestedSectionLinks isVisible={visibleSections.liquidityEvent}>
              <SectionLink to="tokenomics/price">
                Price Determination
              </SectionLink>
            </NestedSectionLinks>
          </NestedSectionLinks>
        </Section>

        <Section>
          <SectionTitle
            onClick={() => toggleSection('v2')}
            isOpen={visibleSections.v2}
          >
            TENEX V2.0 - TO DO
            <FontAwesomeIcon
              icon={visibleSections.v2 ? faChevronUp : faChevronDown}
            />
          </SectionTitle>
          <NestedSectionLinks isVisible={visibleSections.v2}>
            <SectionLink to="v2/v2">V2.0</SectionLink>
            <SectionLink
              to="v2/functionalitiesUpgrade"
              onClick={() => toggleSection('functionalitiesUpgrade')}
            >
              Functionalities Upgrade &nbsp;
              <FontAwesomeIcon
                icon={
                  visibleSections.fundamentals ? faChevronUp : faChevronDown
                }
              />
            </SectionLink>
            <NestedSectionLinks
              isVisible={visibleSections.functionalitiesUpgrade}
            >
              <SectionLink to="v2/functionalitiesUpgrade/swap">
                Swap
              </SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/liquidityPool">
                Liquidity Pool
              </SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/voting">
                Voting
              </SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/lock">
                Lock
              </SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/incentives">
                Incentives
              </SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/mintTokens">
                Mint Tokens
              </SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/launchpad">
                Launchpad
              </SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/chat">
                Chat
              </SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/whitelisting">
                Whitelisting
              </SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/ads">Ads</SectionLink>
              <SectionLink to="v2/functionalitiesUpgrade/lendBorrow">
                Lending & Borrowing Platform
              </SectionLink>
            </NestedSectionLinks>
            <SectionLink
              to="v2/liquidityProvisioning"
              onClick={() => toggleSection('liquidityProvisioning')}
            >
              Liquidity Provisioning &nbsp;
              <FontAwesomeIcon
                icon={
                  visibleSections.fundamentals ? faChevronUp : faChevronDown
                }
              />
            </SectionLink>
            <NestedSectionLinks
              isVisible={visibleSections.liquidityProvisioning}
            >
              <SectionLink to="v2/liquidityProvisioning/multiAssetsPool">
                Multi Assets Pools
              </SectionLink>
              <SectionLink
                to="v2/liquidityProvisioning/liquidityConcentrated"
                onClick={() => toggleSection('liquidityConcentrated')}
              >
                Concentrated Liquidity &nbsp;
                <FontAwesomeIcon
                  icon={
                    visibleSections.liquidityConcentrated
                      ? faChevronUp
                      : faChevronDown
                  }
                />
              </SectionLink>

              <NestedSectionLinks
                isVisible={visibleSections.liquidityConcentrated}
              >
                <SectionLink to="v2/liquidityProvisioning/liquidityConcentrated/clGauges">
                  CL Gauges
                </SectionLink>
                <SectionLink to="v2/liquidityProvisioning/liquidityConcentrated/tickspacing">
                  Default Fee Tiers/Tickspacing
                </SectionLink>
                <SectionLink to="v2/liquidityProvisioning/liquidityConcentrated/feeDistribution">
                  Fee Distribution
                </SectionLink>
              </NestedSectionLinks>
            </NestedSectionLinks>

            <SectionLink to="v2/roadAhead">Road Ahead</SectionLink>
            <SectionLink to="v2/fullMigration">
              Full Migration to V2.0
            </SectionLink>
          </NestedSectionLinks>
        </Section>

        <Section>
          <SectionTitle
            onClick={() => toggleSection('security')}
            isOpen={visibleSections.security}
          >
            Security And Legal Considerations
            <FontAwesomeIcon
              icon={visibleSections.security ? faChevronUp : faChevronDown}
            />
          </SectionTitle>
          <NestedSectionLinks isVisible={visibleSections.security}>
            <SectionLink to="security/legal">
              Risk and Legal Disclosures
            </SectionLink>
          </NestedSectionLinks>
        </Section>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
