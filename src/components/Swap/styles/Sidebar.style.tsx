import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SidebarContainer = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.cardLight};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  width: 440px;
  margin-left: 24px;
  height: 786px;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
    margin-left: 0px;
  }
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SidebarList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: step-counter;
`;

export const SidebarListItem = styled.li<{ theme: DefaultTheme }>`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  margin-bottom: 20px;
  position: relative;
  padding-left: 30px;
  line-height: 20.93px;
  text-align: left;

  @media (max-width: 768px) {
    display: grid;
  }

  &:before {
    content: counter(step-counter);
    counter-increment: step-counter;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 13px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
  }

  &:not(:last-child):after {
    content: '';
    position: absolute;
    left: 11px;
    top: 22px;
    width: 1px;
    height: calc(100% - 0px);
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.greyDark} 50%,
      transparent 50%
    );
    background-size: 1px 5px;
  }
`;
