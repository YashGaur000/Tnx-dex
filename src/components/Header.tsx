/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ConnectWallet } from './ConnectWallet';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 70px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: Hug (188px) px;
  height: Hug (54px) px;
  padding: 12px 24px 12px 24px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 29.9px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo src={logoImage} alt="TenEx Logo" />
    <Nav>
      <NavLink href="#">
        Trade <FontAwesomeIcon icon={faChevronDown} />
      </NavLink>
      <NavLink href="#">
        Liquidity <FontAwesomeIcon icon={faChevronDown} />
      </NavLink>
      <NavLink href="#">
        Governance <FontAwesomeIcon icon={faChevronDown} />
      </NavLink>
      <NavLink href="#">
        Rewards <FontAwesomeIcon icon={faChevronDown} />
      </NavLink>
      <NavLink href="#">
        Tools <FontAwesomeIcon icon={faChevronDown} />
      </NavLink>
    </Nav>
    <ConnectWallet />
  </HeaderContainer>
);
export default Header;
