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

const SectionTitle = styled.h3<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 20px;
`;

const SectionLink = styled(Link)<{ theme: DefaultTheme }>`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-bottom: 5px;
  margin-left: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 16px;

  &:hover {
    text-decoration: underline;
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
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    fundamentals: false,
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
          <SectionTitle>Introduction to TENEX</SectionTitle>
          <SectionLink to="introduction/tenex">What is TENEX</SectionLink>
          <SectionLink to="introduction/core">Core Functionalities</SectionLink>
          <SectionLink
            to="introduction/fundamentals"
            onClick={() => toggleSection('fundamentals')}
          >
            ve(3,3) Fundamentals &nbsp;
            <FontAwesomeIcon
              icon={visibleSections.fundamentals ? faChevronUp : faChevronDown}
            />
          </SectionLink>
          <NestedSectionLinks isVisible={visibleSections.fundamentals}>
            <SectionLink to="introduction/glossary">Glossary</SectionLink>
            <SectionLink to="introduction/veTenex">veTENEX(veNFT)</SectionLink>
          </NestedSectionLinks>
          <SectionLink to="introduction/swap">TENEX Swap</SectionLink>
          <SectionLink to="introduction/revenue">
            Voters Revenue Distribution Schedule
          </SectionLink>
          <SectionLink to="introduction/analytics">TENEX Analytics</SectionLink>
        </Section>
        <Section>
          <SectionTitle>Liquidity Provisioning</SectionTitle>
          <SectionLink to="liquidity/pools">Legacy Pools(LP)</SectionLink>
          <SectionLink to="liquidity/rewards">Rewards</SectionLink>
          <SectionLink to="liquidity/curves">Swap Curves</SectionLink>
        </Section>
        <Section>
          <SectionTitle>TENEX Tokenomics</SectionTitle>
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
            <SectionLink to="tokenomics/price">Price Determination</SectionLink>
          </NestedSectionLinks>
        </Section>
        <Section>
          <SectionTitle>Security And Legal Considerations</SectionTitle>
          <SectionLink to="security/legal">
            Risk and Legal Disclosures
          </SectionLink>
        </Section>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
