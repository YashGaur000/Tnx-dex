import React, { useEffect, useState } from 'react';

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
  const [activeTab, setActiveTab] = useState(location.pathname);
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

  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [activeTab]);

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
            <SectionLink
              className={activeTab === '/tenex' ? 'active' : ''}
              to="introduction/tenex"
              onClick={() => handleTabClick('/tenex')}
            >
              What is TENEX V1.0 ?
            </SectionLink>
            <SectionLink
              className={activeTab === '/core' ? 'active' : ''}
              to="introduction/core"
              onClick={() => handleTabClick('/core')}
            >
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
            </NestedSectionLinks> */}
            <SectionLink
              to="introduction/veTenex"
              className={activeTab === '/veTenex' ? 'active' : ''}
              onClick={() => {
                handleTabClick('/veTenex');
                toggleSection('veTenex');
              }}
            >
              veTENEX(veNFT) &nbsp;
              <FontAwesomeIcon
                icon={visibleSections.veTenex ? faChevronUp : faChevronDown}
              />
            </SectionLink>
            <NestedSectionLinks isVisible={visibleSections.veTenex}>
              <SectionLink
                to="introduction/revenue"
                className={activeTab === '/revenue' ? 'active' : ''}
                onClick={() => handleTabClick('/revenue')}
              >
                Voters Revenue Distribution Schedule
              </SectionLink>
              <SectionLink
                to="introduction/swap"
                className={activeTab === '/swap' ? 'active' : ''}
                onClick={() => handleTabClick('/swap')}
              >
                TENEX Swap
              </SectionLink>
            </NestedSectionLinks>
            <SectionLink
              className={activeTab === '/rewards' ? 'active' : ''}
              to="introduction/rewards"
              onClick={() => handleTabClick('/rewards')}
            >
              Rewards
            </SectionLink>
            <SectionLink
              className={activeTab === '/analytics' ? 'active' : ''}
              to="introduction/analytics"
              onClick={() => handleTabClick('/analytics')}
            >
              TENEX Analytics
            </SectionLink>
            <SectionLink
              className={activeTab === '/glossary' ? 'active' : ''}
              to="introduction/glossary"
              onClick={() => handleTabClick('/glossary')}
            >
              Defi-Glossary
            </SectionLink>
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
              className={activeTab === '/pools' ? 'active' : ''}
              onClick={() => {
                toggleSection('pools');
                handleTabClick('/pools');
              }}
            >
              Legacy Pools (LP) &nbsp;
              <FontAwesomeIcon
                icon={visibleSections.pools ? faChevronUp : faChevronDown}
              />
            </SectionLink>
            <NestedSectionLinks isVisible={visibleSections.pools}>
              <SectionLink
                to="liquidity/volatile"
                className={activeTab === '/volatile' ? 'active' : ''}
                onClick={() => handleTabClick('/volatile')}
              >
                Volatile
              </SectionLink>
              <SectionLink
                to="liquidity/correlated"
                className={activeTab === '/correlated' ? 'active' : ''}
                onClick={() => handleTabClick('/correlated')}
              >
                Correlated
              </SectionLink>
              <SectionLink
                to="liquidity/fee"
                className={activeTab === '/fee' ? 'active' : ''}
                onClick={() => handleTabClick('/fee')}
              >
                Rewards Distribution
              </SectionLink>
            </NestedSectionLinks>
            {/* <SectionLink to="liquidity/fee">Rewards Distribution</SectionLink> */}
            <SectionLink
              to="liquidity/curves"
              className={activeTab === '/curves' ? 'active' : ''}
              onClick={() => handleTabClick('/curves')}
            >
              Swap Curves
            </SectionLink>
            <SectionLink
              to="liquidity/busl"
              className={activeTab === '/busl' ? 'active' : ''}
              onClick={() => {
                toggleSection('busl');
                handleTabClick('/busl');
              }}
            >
              BUSL - 1.1 License &nbsp;
              <FontAwesomeIcon
                icon={visibleSections.busl ? faChevronUp : faChevronDown}
              />
            </SectionLink>
            <NestedSectionLinks isVisible={visibleSections.busl}>
              <SectionLink
                to="liquidity/protected-contracts"
                className={activeTab === '/protected-contract' ? 'active' : ''}
                onClick={() => handleTabClick('/protected-contract')}
              >
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
            <SectionLink
              to="tokenomics/distribution"
              className={activeTab === '/distribution' ? 'active' : ''}
              onClick={() => handleTabClick('/distribution')}
            >
              TENEX Token Distribution
            </SectionLink>
            <SectionLink
              to="tokenomics/emissions-schedule"
              className={activeTab === '/emissions-schedule' ? 'active' : ''}
              onClick={() => handleTabClick('/emissions-schedule')}
            >
              Emissions Schedule / Bootstrapping Period
            </SectionLink>
            <SectionLink
              to="tokenomics/elastic-emissions"
              className={activeTab === '/elastic-emissions' ? 'active' : ''}
              onClick={() => handleTabClick('/elastic-emissions')}
            >
              Elastic Emissions
            </SectionLink>
            <SectionLink
              to="tokenomics/rebasing"
              className={activeTab === '/rebasing' ? 'active' : ''}
              onClick={() => handleTabClick('/rebasing')}
            >
              Rebasing
            </SectionLink>
            <SectionLink
              to="tokenomics/tge"
              className={activeTab === '/tge' ? 'active' : ''}
              onClick={() => {
                toggleSection('liquidityEvent');
                handleTabClick('/tge');
              }}
            >
              TENEX LGE - Liquidity Generation Event &nbsp;
              <FontAwesomeIcon
                icon={
                  visibleSections.liquidityEvent ? faChevronUp : faChevronDown
                }
              />
            </SectionLink>
            <NestedSectionLinks isVisible={visibleSections.liquidityEvent}>
              <SectionLink
                to="tokenomics/price"
                className={activeTab === '/price' ? 'active' : ''}
                onClick={() => handleTabClick('/price')}
              >
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
            <SectionLink
              to="v2/v2"
              className={activeTab === '/v2' ? 'active' : ''}
              onClick={() => handleTabClick('/v2')}
            >
              V2.0
            </SectionLink>
            <SectionLink
              to="v2/functionalitiesUpgrade"
              className={
                activeTab === '/functionalitiesUpgrade' ? 'active' : ''
              }
              onClick={() => {
                toggleSection('functionalitiesUpgrade');
                handleTabClick('/functionalitiesUpgrade');
              }}
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
              <SectionLink
                to="v2/functionalitiesUpgrade/swap"
                className={activeTab === '/swap' ? 'active' : ''}
                onClick={() => handleTabClick('/swap')}
              >
                Swap
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/liquidityPool"
                className={activeTab === '/liquidityPool' ? 'active' : ''}
                onClick={() => handleTabClick('/liquidityPool')}
              >
                Liquidity Pool
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/voting"
                className={activeTab === '/voting' ? 'active' : ''}
                onClick={() => handleTabClick('/voting')}
              >
                Voting
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/lock"
                className={activeTab === '/lock' ? 'active' : ''}
                onClick={() => handleTabClick('/lock')}
              >
                Lock
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/incentives"
                className={activeTab === '/incentives' ? 'active' : ''}
                onClick={() => handleTabClick('/incentives')}
              >
                Incentives
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/mintTokens"
                className={activeTab === '/mintTokens' ? 'active' : ''}
                onClick={() => handleTabClick('/mintTokens')}
              >
                Mint Tokens
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/launchpad"
                className={activeTab === '/launchpad' ? 'active' : ''}
                onClick={() => handleTabClick('/launchpad')}
              >
                Launchpad
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/chat"
                className={activeTab === '/chat' ? 'active' : ''}
                onClick={() => handleTabClick('/chat')}
              >
                Chat
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/whitelisting"
                className={activeTab === '/whitelisting' ? 'active' : ''}
                onClick={() => handleTabClick('/whitelisting')}
              >
                Whitelisting
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/ads"
                className={activeTab === '/ads' ? 'active' : ''}
                onClick={() => handleTabClick('/ads')}
              >
                Ads
              </SectionLink>
              <SectionLink
                to="v2/functionalitiesUpgrade/lendBorrow"
                className={activeTab === '/lendBorrow' ? 'active' : ''}
                onClick={() => handleTabClick('/lendBorrow')}
              >
                Lending & Borrowing Platform
              </SectionLink>
            </NestedSectionLinks>
            <SectionLink
              to="v2/liquidityProvisioning"
              className={activeTab === '/liquidityProvisioning' ? 'active' : ''}
              onClick={() => {
                toggleSection('liquidityProvisioning');
                handleTabClick('/liquidityProvisioning');
              }}
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
              <SectionLink
                to="v2/liquidityProvisioning/multiAssetsPool"
                className={activeTab === '/multiAssetsPool' ? 'active' : ''}
                onClick={() => handleTabClick('/multiAssetsPool')}
              >
                Multi Assets Pools
              </SectionLink>
              <SectionLink
                to="v2/liquidityProvisioning/liquidityConcentrated"
                className={
                  activeTab === '/liquidityConcentrated' ? 'active' : ''
                }
                onClick={() => {
                  toggleSection('liquidityConcentrated');
                  handleTabClick('/liquidityConcentrated');
                }}
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
                <SectionLink
                  to="v2/liquidityProvisioning/liquidityConcentrated/clGauges"
                  className={
                    activeTab === '/liquidityConcentrated/clGauges'
                      ? 'active'
                      : ''
                  }
                  onClick={() =>
                    handleTabClick('/liquidityConcentrated/clGauges')
                  }
                >
                  CL Gauges
                </SectionLink>
                <SectionLink
                  to="v2/liquidityProvisioning/liquidityConcentrated/tickspacing"
                  className={
                    activeTab === '/liquidityConcentrated/tickspacing'
                      ? 'active'
                      : ''
                  }
                  onClick={() =>
                    handleTabClick('/liquidityConcentrated/tickspacing')
                  }
                >
                  Default Fee Tiers/Tickspacing
                </SectionLink>
                <SectionLink
                  to="v2/liquidityProvisioning/liquidityConcentrated/feeDistribution"
                  className={
                    activeTab === '/liquidityConcentrated/feeDistribution'
                      ? 'active'
                      : ''
                  }
                  onClick={() =>
                    handleTabClick('/liquidityConcentrated/feeDistribution')
                  }
                >
                  Fee Distribution
                </SectionLink>
              </NestedSectionLinks>
            </NestedSectionLinks>

            <SectionLink
              to="v2/roadAhead"
              className={activeTab === '/roadAhead' ? 'active' : ''}
              onClick={() => handleTabClick('/roadAhead')}
            >
              Road Ahead
            </SectionLink>
            <SectionLink
              to="v2/fullMigration"
              className={activeTab === '/fullMigration' ? 'active' : ''}
              onClick={() => handleTabClick('/fullMigration')}
            >
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
            <SectionLink
              to="security/legal"
              className={activeTab === '/legal' ? 'active' : ''}
              onClick={() => handleTabClick('/legal')}
            >
              Risk and Legal Disclosures
            </SectionLink>
          </NestedSectionLinks>
        </Section>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
