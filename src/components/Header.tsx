import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid #1c1c1e;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Nav = styled.nav`
  display: flex;
  gap: 70px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  &:after {
    content: '▼';
    font-size: 10px;
    position: absolute;
    right: -10px;
    top: 2px;
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
    <Logo>TenEx</Logo>
    <Nav>
      <NavLink href="#">Trade</NavLink>
      <NavLink href="#">Liquidity</NavLink>
      <NavLink href="#">Governance</NavLink>
      <NavLink href="#">Rewards</NavLink>
      <NavLink href="#">Tools</NavLink>
    </Nav>
    <Button>Connect Wallet</Button>
  </HeaderContainer>
);

export default Header;
