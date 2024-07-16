import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DefaultTheme } from '../../styles/Theme';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarContainer = styled.aside<{ theme: DefaultTheme; isopen: string }>`
  width: 20%;
  padding-top: 10px;
  padding-right: 10px;
  height: 700px;
  position: fixed;
  overflow-y: auto;
  padding-bottom: 20px;
  display: fixed;
  // border-right: 1px solid ${({ theme }) => theme.colors.grey};
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (max-width: 900px) {
    width: 50%;
    padding: 20px;
    background: ${({ theme, isopen }) =>
      isopen === 'true' ? theme.colors.card : 'transparent'};
    transition:
      transform 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    display: ${({ isopen }) => (isopen === 'true' ? 'block' : 'none')};
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3<{ theme: DefaultTheme; isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

const SectionLink = styled(Link)<{ theme: DefaultTheme }>`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-bottom: 5px;
  margin-left: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 14px;
  width: fit-content;
  padding: 7px;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  &.active {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

const NestedSectionLinks = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  margin-left: 20px;
`;

const HamburgerIcon = styled.div<{ theme: DefaultTheme }>`
  display: none;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  top: 50%;
  left: 20px;
  z-index: 1000;
  cursor: pointer;
  transform: translateY(-50%);

  @media (max-width: 900px) {
    display: block;
  }
`;

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
    liquidityEvent: false,
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
            <SectionLink
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
            </NestedSectionLinks>
            <SectionLink to="introduction/swap">TENEX Swap</SectionLink>
            <SectionLink to="introduction/revenue">
              Voters Revenue Distribution Schedule
            </SectionLink>
            <SectionLink to="introduction/analytics">
              TENEX Analytics
            </SectionLink>
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
            <SectionLink to="liquidity/pools">Legacy Pools(LP)</SectionLink>
            <SectionLink to="liquidity/fee">Fee Distribution</SectionLink>
            <SectionLink to="liquidity/curves">Swap Curves</SectionLink>
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
              Emissions Schedule
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
