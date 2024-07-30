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
  max-width: 600px;
  height: 538px;
  width: 100%;
`;

export const Title = styled.h1<{ theme: DefaultTheme }>`
  font-size: 36px;
  margin-bottom: 10px;
  line-height: 53.82px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const Description = styled.p<{ theme: DefaultTheme }>`
  text-align: center;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
`;

export const InputWrapper = styled.div<{ theme: DefaultTheme }>`
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input<{ theme: DefaultTheme }>`
  border-color: ${({ theme }) => theme.colors.greyBorder};
  width: 75%;
  padding: 10px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-right: 1%;

  /* Hide spin buttons */
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield; /* Chrome, Safari, Edge */
  /* Remove inner padding and search cancel button */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const TokenSelect = styled.div<{ theme: DefaultTheme }>`
  width: 90px;
  height: 24px;
  display: table;
  table-layout: fixed; /*Optional*/
  border-spacing: 3px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  display: inline-block;
`;

export const WalletText = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  font-size: 10px;
  line-height: 14.95px;
  padding: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
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
  color: ${({ theme }) => theme.colors.textGreyColor};
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

export const TokenSelectAlign = styled.div`
  display: table-cell;
  align-content: center;
`;
export const TokenSelectAlignSelect = styled.div`
  display: table-cell;
  align-content: center;
  
  img {
    color:white;
    position: relative;
    margin-bottom: 6px;
    display: block;
}
  }
`;
