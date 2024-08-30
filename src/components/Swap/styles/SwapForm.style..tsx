import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SwapBoxWrapper = styled.div<{ theme: DefaultTheme }>`
  margin-bottom: 20px;
`;
export const SwapFormContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    display: flex;
    gap: 20px;
  }

  @media (max-width: 780px) {
    display: flex;
    gap: 20px;
    display: block;
  }

  @media (max-width: 600px) {
    display: flex;
    gap: 20px;
    display: block;
  }
`;
export const SwapBox = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  max-width: 600px;
  height: 575px;
  width: 600px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 20px;
    height: auto;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 20px;
    height: auto;
  }
`;

export const Title = styled.h1<{ theme: DefaultTheme }>`
  font-size: 36px;
  margin-bottom: 10px;
  line-height: 53.82px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  @media only screen and (max-width: 600px) {
    font-size: 28px;
    line-height: 42px;
  }
`;

export const Description = styled.p<{ textAlign: string; theme: DefaultTheme }>`
  text-align: ${({ textAlign }) => textAlign};
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const InputWrapper = styled.div<{ theme: DefaultTheme }>`
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 12px;
  height: 78px;
  padding: 12px 16px;
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
    width: 72%;
    padding: 8px;
  }
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

  @media only screen and (max-width: 600px) {
    width: 72%;
    padding: 8px;
    font-size: 14px;
  }
`;

export const TokenSelect = styled.div<{ theme: DefaultTheme }>`
  max-width: 90px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;

  border-spacing: 3px;

  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;

  img {
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    z-index: 10;
    border-radius: 10px;
    margin-bottom: 2px;
    display: block;
  }

  @media only screen and (max-width: 600px) {
    width: 70px;
    font-size: 12px;
  }
`;

export const PercentageArea = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  font-size: 10px;
  line-height: 14.95px;
  padding: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  @media only screen and (max-width: 600px) {
    font-size: 9px;
    padding: 8px;
  }
`;

export const PercentageSelectorContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px;
  border-radius: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }
`;

export const WalletInfo = styled.div<{ theme: DefaultTheme }>`
  font-size: 12px;
  line-height: 14.95px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  @media only screen and (max-width: 600px) {
    font-size: 9px;
    padding: 8px;
  }
`;

export const WalletText = styled.span<{ theme: DefaultTheme }>`
  width: 100%;
  font-size: 12px;
  line-height: 14.95px;
  padding: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  @media only screen and (max-width: 600px) {
    font-size: 9px;
    padding: 8px;
  }
`;

export const PercentageOptions = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;

  width: 210px;
`;

export const PercentageButton = styled.button<{
  active?: boolean;
  theme: DefaultTheme;
}>`
  padding: 5px 10px;
  font-size: 12px;
  border: none;
  background-color: ${({ active }) => (active ? '#2b6cb0' : 'transparent')};
  color: ${({ active, theme }) =>
    active ? '#ffffff' : theme.colors.textGreyColor};
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #2b6cb0;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 8px 12px;
    font-size: 12px;
    flex: 1;
    text-align: center;
  }
`;

export const SwitchButton = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.colors.swapIconBackground};
  border-radius: 50%;
  margin: 16px auto;
  cursor: pointer;
  transform: rotate(90deg);

  img {
    transform: rotate(90deg);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  @media only screen and (max-width: 600px) {
    width: 24px;
    height: 24px;
    margin: 8px auto;
  }
`;

export const WalletWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    margin-bottom: 8px;
  }
`;

export const InputBoxWithTokenSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  margin-bottom: 5px;
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

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    padding: 4px 8px;
    margin-right: 8px;
  }
`;

export const WalletIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  @media only screen and (max-width: 600px) {
    margin-right: 8px;
  }
`;

export const TokenSelectAlign = styled.div<{ theme: DefaultTheme }>`
  display: table-cell;
  align-content: center;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: #ffffff;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const TokenIcon = styled.img<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
export const TokenSelectAlignSelect = styled.div`
  display: table-cell;
  align-content: center;
`;
