// src/components/Header.tsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../assets/TenExlogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { ConnectWallet } from './ConnectWallet';
import SubTabs from './SubTabsComponent';
import { DefaultTheme } from '../styles/Theme';
import { useHeaderStore, useRootStore } from '../store/root';
import { useAccount } from '../hooks/useAccount';

const HeaderContainer = styled.header<{ theme: DefaultTheme; sticky: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5px;
  background-color: ${({ theme }) => theme.colors.background};

  ${({ sticky }) =>
    sticky === 'true' &&
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
  height: 36px;
  width: 88px;
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

const NavLink = styled.div<{ theme: DefaultTheme; isactive: string }>`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ isactive, theme }) =>
    isactive ? theme.colors.hover : 'transparent'};

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const Toggler = styled.button<{ theme: DefaultTheme }>`
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
    z-index: 999;
  }
`;

const MobileConnectWallet = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    margin-top: 10px;
  }
`;

export const DesktopConnectWallet = styled.div`
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
  const {
    showTradeSubTabs,
    showLiquiditySubTabs,
    showGovernanceSubTabs,
    showToolsSubTabs,
    navOpen,
    activeMainTab,
    setShowTradeSubTabs,
    setShowLiquiditySubTabs,
    setShowGovernanceSubTabs,
    setShowToolsSubTabs,
    setNavOpen,
    setActiveMainTab,
  } = useHeaderStore();

  const navigate = useNavigate();
  const location = useLocation();
  const { isConnected } = useAccount();
  const isSticky = location.pathname.includes('/documentation');

  const handleMouseEnter = (setShow: (value: boolean) => void) => setShow(true);

  const handleMouseLeave = (setShow: (value: boolean) => void) =>
    setShow(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const { from, to, resetTokens } = useRootStore();

  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    // Reset the tokens
    if (prevLocationRef.current !== location.pathname) {
      resetTokens();
      prevLocationRef.current = location.pathname;
    }
  }, [location, resetTokens]);

  return (
    <HeaderContainer sticky={isSticky.toString()}>
      <Logo
        src={logoImage}
        alt="TenEx Logo"
        onClick={() => {
          setActiveMainTab('');
          navigate('/');
        }}
      />

      <Toggler onClick={toggleNav}>
        <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
      </Toggler>

      <Nav isopen={navOpen.toString()}>
        {isConnected && (
          <NavItem>
            <NavLink
              isactive={activeMainTab === 'Dashboard' ? ' true' : ''}
              onClick={() => {
                navigate('/dashboard');
                setActiveMainTab('Dashboard');
              }}
            >
              Dashboard
            </NavLink>
          </NavItem>
        )}
        <NavItem
          onMouseEnter={() => handleMouseEnter(setShowTradeSubTabs)}
          onMouseLeave={() => handleMouseLeave(setShowTradeSubTabs)}
        >
          <NavLink
            isactive={activeMainTab === 'Trade' ? 'true' : ''}
            onClick={() => {
              setShowTradeSubTabs(!showTradeSubTabs);
              {
                console.log(activeMainTab);
              }
            }}
          >
            Trade <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
          {showTradeSubTabs && (
            <SubTabs
              items={[
                {
                  main: 'Trade',
                  to: `/swap?from=${from}&to=${to}`,
                  label: 'Swap',
                  description:
                    'Tenex Meta Aggregator swaps for efficient routing',
                },
                {
                  main: 'Trade',
                  to: '/cross-chain-swap',
                  label: 'Cross chain swaps',
                  description:
                    'Bridge and swap via Wormhole Axelar and LayerZero',
                  disabled: true,
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
            isactive={activeMainTab === 'Liquidity' ? ' true' : ''}
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
                  main: 'Liquidity',
                  to: '/liquidity',
                  label: 'Liquidity',
                  description: 'Provide liquidity and earn TENEX rewards',
                },
                {
                  main: 'Liquidity',
                  to: '/concentrated-liquidity-farms',
                  label: 'Concentrated Liquidity Farms',
                  description: 'Highly efficient CL farms for max fees',
                  disabled: true,
                },
              ]}
              showTabs={showLiquiditySubTabs}
              setShowTabs={setShowLiquiditySubTabs}
              setNavOpen={setNavOpen}
            />
          )}
        </NavItem>

        {isConnected && (
          <NavItem
            onMouseEnter={() => handleMouseEnter(setShowGovernanceSubTabs)}
            onMouseLeave={() => handleMouseLeave(setShowGovernanceSubTabs)}
          >
            <NavLink
              isactive={activeMainTab === 'Governance' ? ' true' : ''}
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
                    main: 'Governance',
                    to: '/governance',
                    label: 'Manage veTENEX',
                    description: 'Lock TENEX into veTENEX to earn rewards',
                  },
                  {
                    main: 'Governance',
                    to: '/vote',
                    label: 'Vote',
                    description: 'Vote weekly to earn real yields',
                  },
                  {
                    main: 'Governance',
                    to: `/incentives`,
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
        )}

        <NavItem
          onMouseEnter={() => handleMouseEnter(setShowToolsSubTabs)}
          onMouseLeave={() => handleMouseLeave(setShowToolsSubTabs)}
        >
          <NavLink
            isactive={activeMainTab === 'Resources' ? 'true' : ''}
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
                  main: 'Resources',
                  to: '/analytics',
                  label: 'Analytics',
                  description: 'Deep dive into TenEx',
                },
                {
                  main: 'Resources',
                  to: '/documentation/introduction/tenex',
                  label: 'Documentation',
                  description: 'Get the low-down in our docs',
                },
                {
                  main: 'Resources',
                  to: '/bridge',
                  label: 'Bridge',
                  description: 'Bridge tokens to and from other chain',
                  disabled: true,
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
