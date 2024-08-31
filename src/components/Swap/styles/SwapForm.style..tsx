import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SwapBoxWrapper = styled.div<{ theme: DefaultTheme }>`
  margin-bottom: 24px;
  padding: 20px;

  @media (max-width: 900px) {
    padding: 15px;
  }

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const SwapFormContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  @media (max-width: 780px) {
    padding: 10px;
  }

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const SwapBox = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  border: Mixed solid rgba(184, 184, 184, 0.8);
  border-radius: 20px;
  width: 600px;
  height: 348px;
  padding: 41px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};

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

export const SwTitle = styled.div<{ theme: DefaultTheme }>`
  font-size: 24px;
  line-height: 35.88px;
  width: 520px;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 8px;
  margin-left: -12px;

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    line-height: 32px;
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
export const SwapboxInner = styled.div<{ theme: DefaultTheme }>`
  width: 520px;
  height: 216px;
  top: 232px;
  left: 140px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
`;

export const InputWrapper = styled.div<{ theme: DefaultTheme }>`
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 10px;
  max-width: 520px;
  min-height: 78px;
  padding-left: 13px;

  @media only screen and (max-width: 600px) {
    width: 72%;
    padding: 8px;
  }
`;

export const Input = styled.input<{ theme: DefaultTheme }>`
  border-color: ${({ theme }) => theme.colors.greyBorder};
  width: 75%;
  height: 32px;
  border: none;
  padding-left: 13px;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

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
  width: 90px;
  height: 32px;
  border-spacing: 6px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  margin-left: 24px;
  display: inline-block;
  img {
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    z-index: 10;
    border-radius: 10px;
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
  padding: 9px 32px 0px 1px;
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
  margin-left: 16px;
  padding: 5px 10px;
  font-size: 12px;
  border: none;
  background: rgba(219, 219, 219, 1);
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

  img {
    transform: rotate(180deg);
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
  justify-content: flex-end;
  align-items: center;
  margin-left: 24px;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    margin-top: 10px;
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
export const SwapTitle = styled.div<{ theme: DefaultTheme }>`
  border-radius: 10px;
  max-width: 520px;
  min-height: 36px;
  padding-left: 13px;
  display: flex;

  @media only screen and (max-width: 600px) {
    width: 72%;
    padding: 8px;
  }
`;
export const ContectedText = styled.span<{ theme: DefaultTheme }>`
  font-size: 10px;
  font-weight: 300;
  line-height: 14.95px;
  text-align: left;
  margin-top: 16px;
`;
