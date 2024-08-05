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

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  margin-top: 40px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;

    gap: 15px;
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
    margin-left: 70%;
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
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  align-items: flex-start;
  @media only screen and (max-width: 1100px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
export const InformImg = styled.img`
  width: 20px;
  height: 20px;
`;
