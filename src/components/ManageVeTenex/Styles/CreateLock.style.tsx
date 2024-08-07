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
export const LoaderStatus = styled.p<{ theme: DefaultTheme; fontSize: number }>`
  background: ${({ theme }) => theme.colors.hover};
  font-size: ${({ fontSize }) => fontSize}px;
  border-radius: 10px;
  padding: 10px;
  width: 90px;
  text-align: center;
  margin-left: 85%;
  @media only screen and (max-width: 1000px) {
    margin-left: 80%;
  }
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
  gap: 10px;
`;
export const InformImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const LockInputBox = styled.input<{ theme: DefaultTheme }>`
  width: 99%;
  height: 47px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.greyBorder};
  color: ${({ theme }) => theme.colors.text};
  padding-left: 20px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const LockProgressStyle = styled.span`
  display: flex;
  justify-content: end;
  padding-right: 5px;
  gap: 10px;
  font-size: 12px;
  color: silver;
`;
