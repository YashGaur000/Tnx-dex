import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const ManageLiquidityFormSection = styled.form<{ theme: DefaultTheme }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 15px;
  padding: 40px;
  fontsize: ${({ theme }) => theme.fontSize.medium};
  gap: 20px;
`;

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormRowWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.whiteBorder};
  text-align: left;
`;

export const LiquidityProgress = styled.span`
  display: flex;
  justify-content: end;
  padding-right: 5px;
  gap: 10px;
  font-size: 12px;
  color: silver;
`;

interface InputBoxProps {
  isInvalid: boolean;
  theme: DefaultTheme;
}

export const LiquidityInputBox = styled.input<InputBoxProps>`
  width: 99%;
  height: 47px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.greyBorder};
  color: ${(props) => (props.isInvalid ? 'red' : 'white')};
  padding-left: 20px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SwapImgConatiner = styled.div`
  display: block;
  margin: auto;
  cursor: pointer;
`;

export const TokenImgLiquidity = styled.img`
  width: 17px;
  height: 17px;
  margin: auto;
  margin-right: 7px;
`;

export const ImageWithTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
