import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DefaultTheme } from '../../../styles/Theme';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarContainer = styled.aside<{ theme: DefaultTheme; isopen: string }>`
  width: 300px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px;
  //height: 100vh;
  position: fixed;
  overflow-y: auto;
  flex: 1;
  //border-right: 2px solid  ${({ theme }) => theme.colors.grey} ; @Todo

  @media (max-width: 1200px) {
    width: 200px;
    padding: 30px;
  }

  @media (max-width: 900px) {
    width: 180px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    background: ${({ theme, isopen }) =>
      isopen === 'true' ? theme.colors.card : theme.colors.background};
    width: 80%;
    position: fixed;
    top: 5%;
    left: 20%;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isopen }) =>
      isopen === 'true' ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const SectionLink = styled(Link)<{ theme: DefaultTheme }>`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-bottom: 5px;
  margin-left: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const HamburgerIcon = styled.div<{ theme: DefaultTheme }>`
  display: none;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  top: 50%;
  left: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
          <SectionLink to="introduction/fundamentals">
            ve3,3 Fundamentals
          </SectionLink>
          <SectionLink to="introduction/glossary">Glossary</SectionLink>
          <SectionLink to="introduction/veTenex">veTENEX(veNFT)</SectionLink>
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
          <SectionLink to="tokenomics/tge">
            TENEX LGE - Liquidity Generation Event
          </SectionLink>
          <SectionLink to="tokenomics/price">Price Determination</SectionLink>
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
