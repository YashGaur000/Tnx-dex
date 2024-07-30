import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SwapBoxWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SwapBox = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.cardLight};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 40px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  max-width: 500px;
  width: 100%;
`;

export const Title = styled.h1<{ theme: DefaultTheme }>`
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const Description = styled.p<{ theme: DefaultTheme }>`
  text-align: center;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const TokenSelect = styled.select<{ theme: DefaultTheme }>`
  width: 22%;
  padding: 10px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const TokenOption = styled.option<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
`;

export const Text = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  font-size: 10px;
  line-height: 14.95px;
  padding: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.grey};
`;

export const SwitchButton = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.colors.swapIconBackground};
  border-radius: 50%;
  margin: 10px auto;
  cursor: pointer;
  transform: rotate(90deg);

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const WalletWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 10px;
`;

export const WalletButton = styled.button<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  background: ${({ theme }) => theme.colors.cardLight};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const WalletIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
