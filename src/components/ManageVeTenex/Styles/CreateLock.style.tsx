import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const LockTitle = styled.p<{ theme: DefaultTheme; fontSize: number }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  padding-left: 5px;
  text-align: left;
  margin-top: 30px;
`;

export const CreateLockFirstSection = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  gap: 15px;

  @media only screen and (max-width: 1100px) {
    width: 45%;
    gap: 20px;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const LockLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
`;
export const LoaderStatusWrapper = styled.div<{
  theme: DefaultTheme;
  fontSize: number;
}>`
  font-size: ${({ fontSize }) => fontSize}px;

  padding: 10px;
  width: 100%;
  border: 1px solid;
  text-align: center;
  display: block;
`;
export const LoaderStatus = styled.p<{
  theme: DefaultTheme;
  fontSize?: number;
}>`
  background: ${({ theme }) => theme.colors.hover};
  display: inline-block;
  font-size: ${({ fontSize }) => fontSize}px;
  padding: 4px 6px;
  float: right;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  min-width: 39px;
  text-align: center;
`;
export const LoaderStyle = styled.div`
  width: 100%;
`;
export const SliderDeadlineStyle = styled.div<{
  theme: DefaultTheme;
  fontSize: number;
}>`
display:flex;
justify-content:space-between;
margin:0px;  
color:${({ theme }) => theme.colors.text}
font-size: ${({ fontSize }) => fontSize}px;
font-weight:${({ theme }) => theme.fontWeights.regular}

`;
export const LockScreenInstruction = styled.div`
  display: flex;
  padding: 14px;
  gap: 10px;
  align-items: flex-start;
`;
export const InformImg = styled.img`
  width: 24px;
  height: 24px;
  padding-top: 1px;
`;

export const LockInputBox = styled.input<{ theme: DefaultTheme }>`
  width: 99%;
  height: 47px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.greyBorder};
  color: ${({ theme }) => theme.colors.text};
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

export const LockProgressStyle = styled.span`
  display: flex;
  justify-content: end;
  padding-right: 5px;
  gap: 10px;
  font-size: 12px;
  color: silver;
`;

export const LockHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const WeeksLabel = styled.label`
  cursor: pointer;
`;
