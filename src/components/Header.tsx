import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid #1c1c1e;
`;

const Logo = styled.img`
  height: 40px; /* Adjust the size as needed */
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

const Button = styled.button`
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

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
    <Button>Connect Wallet</Button>
  </HeaderContainer>
);
export default Header;
