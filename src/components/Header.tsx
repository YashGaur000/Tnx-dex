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

  @media (max-width: 1200px) {
    padding: 15px 30px;
  }

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }

  @media (max-width: 900px) {
    padding: 8px 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 70px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
  }

  @media (max-width: 1200px) {
    gap: 50px;
  }

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 900px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 32px;
  }
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
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 29.9px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }

  @media (max-width: 1200px) {
    padding: 8px 16px;
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    padding: 6px 12px;
    font-size: 16px;
  }

  @media (max-width: 900px) {
    padding: 6px 12px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 16px;
    margin-top: 10px;
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
