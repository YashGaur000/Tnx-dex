import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { ConnectWallet } from './ConnectWallet';
import SubTabs from './SubTabsComponent';
import { DefaultTheme } from '../styles/Theme';

const HeaderContainer = styled.header<{
  theme: DefaultTheme;
  isSticky: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.background};

  ${({ isSticky }) =>
    isSticky &&
    `
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #0F1B3B;
  `}

  @media (max-width: 900px) {
    display: block;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    display: block;
  }
`;

export const Logo = styled.img<{ theme: DefaultTheme }>`
  height: 40px;
  margin-right: 10px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const Nav = styled.nav<{ isopen: string; theme: DefaultTheme }>`
  display: flex;
  gap: 70px;

  @media (max-width: 1200px) {
    gap: 30px;
    padding: 20px 10px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
    display: ${({ isopen }) => (isopen === 'true' ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.card};
    padding: 20px 0;
    z-index: 1;
  }
`;

const NavLink = styled.div<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

const Toggler = styled.button<{ theme: DefaultTheme }>`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;

  @media (max-width: 900px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
    margin-top: 10px;

    z-index: 999;
  }
`;

export const Button = styled.button<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 29.9px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 16px;
    margin-top: 10px;
  }
`;

const MobileConnectWallet = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    margin-top: 10px;
  }
`;

const DesktopConnectWallet = styled.div`
  display: block;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
`;

const Header: React.FC = () => {
  const [showTradeSubTabs, setShowTradeSubTabs] = useState(false);
  const [showLiquiditySubTabs, setShowLiquiditySubTabs] = useState(false);
  const [showGovernanceSubTabs, setShowGovernanceSubTabs] = useState(false);
  const [showToolsSubTabs, setShowToolsSubTabs] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const isSticky = location.pathname.includes('/documentation');

  const handleMouseEnter = (
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) => setShow(true);

  const handleMouseLeave = (
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) => setShow(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <HeaderContainer isSticky={isSticky}>
      <Logo src={logoImage} alt="TenEx Logo" onClick={() => navigate('/')} />

      <Toggler onClick={toggleNav}>
        <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
      </Toggler>

      <Nav isopen={navOpen.toString()}>
        <NavItem
          onMouseEnter={() => handleMouseEnter(setShowTradeSubTabs)}
          onMouseLeave={() => handleMouseLeave(setShowTradeSubTabs)}
        >
          <NavLink
            onClick={() => {
              setShowTradeSubTabs(!showTradeSubTabs);
            }}
          >
            Trade <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
          {showTradeSubTabs && (
            <SubTabs
              items={[
                {
                  to: '/swap',
                  label: 'Swap',
                  description:
                    'Equalizer Meta Aggregator swaps for efficient routing',
                },
                {
                  to: '/cross-chain-swap',
                  label: 'Cross chain swaps',
                  description:
                    'Bridge and swap via Wormhole Axelar and LayerZero',
                },
              ]}
              showTabs={showTradeSubTabs}
              setShowTabs={setShowTradeSubTabs}
              setNavOpen={setNavOpen}
            />
          )}
        </NavItem>
        <NavItem
          onMouseEnter={() => handleMouseEnter(setShowLiquiditySubTabs)}
          onMouseLeave={() => handleMouseLeave(setShowLiquiditySubTabs)}
        >
          <NavLink
            onClick={() => {
              setShowLiquiditySubTabs(!showLiquiditySubTabs);
            }}
          >
            Liquidity <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
          {showLiquiditySubTabs && (
            <SubTabs
              items={[
                {
                  to: '/liquidity',
                  label: 'Liquidity',
                  description: 'Provide liquidity and earn TENEX rewards',
                },
                {
                  to: '/concentrated-liquidity-farms',
                  label: 'Concentrated Liquidity Farms',
                  description: 'Highly efficient CL farms for max fees',
                },
              ]}
              showTabs={showLiquiditySubTabs}
              setShowTabs={setShowLiquiditySubTabs}
              setNavOpen={setNavOpen}
            />
          )}
        </NavItem>

        <NavItem
          onMouseEnter={() => handleMouseEnter(setShowGovernanceSubTabs)}
          onMouseLeave={() => handleMouseLeave(setShowGovernanceSubTabs)}
        >
          <NavLink
            onClick={() => {
              setShowGovernanceSubTabs(!showGovernanceSubTabs);
            }}
          >
            Governance <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
          {showGovernanceSubTabs && (
            <SubTabs
              items={[
                {
                  to: '/governance',
                  label: 'Manage veTENEX',
                  description: 'Lock TENEX into veTENEX to earn rewards',
                },
                {
                  to: '/vote',
                  label: 'Vote',
                  description: 'Vote weekly to earn real yields',
                },
                {
                  to: '/incentives',
                  label: 'Incentives',
                  description: 'Protocol liquidity incentivization',
                },
              ]}
              showTabs={showGovernanceSubTabs}
              setShowTabs={setShowGovernanceSubTabs}
              setNavOpen={setNavOpen}
            />
          )}
        </NavItem>

        <NavItem>
          <NavLink onClick={() => navigate('/rewards')}>Rewards</NavLink>
        </NavItem>
        <NavItem
          onMouseEnter={() => handleMouseEnter(setShowToolsSubTabs)}
          onMouseLeave={() => handleMouseLeave(setShowToolsSubTabs)}
        >
          <NavLink
            onClick={() => {
              setShowToolsSubTabs(!showToolsSubTabs);
            }}
          >
            Resources <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
          {showToolsSubTabs && (
            <SubTabs
              items={[
                {
                  to: '/analytics',
                  label: 'Analytics',
                  description: 'Deep dive into TenEx',
                },
                {
                  to: '/documentation/introduction/tenex',
                  label: 'Documentation',
                  description: 'Get the low-down in our docs',
                },
                {
                  to: '/bridge',
                  label: 'Bridge',
                  description: 'Bridge tokens to and from other chain',
                },
              ]}
              showTabs={showToolsSubTabs}
              setShowTabs={setShowToolsSubTabs}
              setNavOpen={setNavOpen}
            />
          )}
        </NavItem>
        <MobileConnectWallet>
          <ConnectWallet />
        </MobileConnectWallet>
      </Nav>
      <DesktopConnectWallet>
        <ConnectWallet />
      </DesktopConnectWallet>
    </HeaderContainer>
  );
};

export default Header;
