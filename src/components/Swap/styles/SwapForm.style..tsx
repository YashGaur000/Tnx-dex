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

  border-radius: 24px;
  width: 600px;
  height: 348px;
  padding: 40px;

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
  width: 58px;
  height: 36px;

  text-align: left;
  font-size: 24px;
  line-height: 35.88px;

  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const Description = styled.p<{ textalign: string; theme: DefaultTheme }>`
  text-align: ${({ textalign }) => textalign};
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
export const SwapboxInner = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const InputBoxRow = styled.div`
  display: flex;
  justify-content: space-between;

  height: 24px;
`;
export const InputWrapper = styled.div<{ theme: DefaultTheme }>`
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 10px;
  width: 100%;
  height: 78px;
  display: flex;

  flex-direction: column;
  gap: 13px;
  padding: 12px 16px;

  @media only screen and (max-width: 600px) {
    width: 100%;
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

export const TokenSelect = styled.div<{
  theme: DefaultTheme;
  width?: string;
  height?: string;
}>`
  height: 23px;
  display: flex;
  gap: 6px;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
`;

export const SwapPageIconWrapper = styled.img<{
  theme: DefaultTheme;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  overflow: hidden;
`;
export const PercentageArea = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  font-size: 10px;
  line-height: 14.95px;
  padding: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
`;

export const PercentageSelectorContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

export const WalletInfo = styled.div<{ theme: DefaultTheme }>`
  font-size: 12px;
  line-height: 14.95px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const WalletText = styled.span<{ theme: DefaultTheme; margin?: number }>`
  width: 100%;
  font-size: 12px;
  line-height: 14.95px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.titleColor};
  margin-left: ${({ margin }) => margin ?? '3'}px;
  display: inline;
`;

export const PercentageOptions = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  width: 150px;
  height: 18px;
`;

export const PercentageButton = styled.button<{
  active?: boolean;
  theme: DefaultTheme;
}>`
  font-size: 12px;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};

  background: ${({ active, theme }) =>
    active ? theme.colors.cardLight : 'transparent'};
  color: ${({ active, theme }) =>
    active ? theme.colors.whiteBorder : theme.colors.titleColor};
  cursor: pointer;
  border-radius: 4px;
  padding: 0px 5px;
  &:hover {
    background: ${({ theme }) => theme.colors.cardLight};
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
  margin: auto;
  cursor: pointer;

  img {
    transform: rotate(180deg);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const WalletWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 24px;
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
`;

export const WalletIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const TokenSelectAlign = styled.div<{ theme: DefaultTheme }>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.whiteBorder};
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
  width: 100%;
  height: 36px;
 
  gap: 0px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media only screen and (max-width: 600px) {
    padding: 8px;
  
`;
export const ContectedText = styled.span<{ theme: DefaultTheme }>`
  font-size: 10px;
  font-weight: 300;
  line-height: 14.95px;
  text-align: left;
  margin-top: 16px;
`;
export const SwapSetting = styled.div<{ theme: DefaultTheme }>`
  width: 20px;
  height: 20px;
  top: 188px;
  left: 640px;
  padding: 1.88px 2.2px 1.88px 2.2px;
  gap: 0px;
  opacity: 0px;
`;

export const SettingIcon = styled.img`
  width: 20px;
  height: 20px;
  top: 188px;
  left: 640px;
  padding: 1.88px 2.2px 1.88px 2.2px;
  gap: 0px;
  opacity: 0px;
`;
