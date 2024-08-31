import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const LiquityContainer = styled.div<{ theme: DefaultTheme }>`
 background: ${({ theme }) => theme.colors.card};
  border-radius: 24px;
  padding: 40px;
  margin-top: 40px;
  width:600px
  height: 152px; 
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const LiquityTitle = styled.h2<{ theme: DefaultTheme }>`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textGreyColor};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
  padding-left: 20px;
`;

export const StepperContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const Step = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1 1 81px;
  margin: 0 10px;
`;
export const StepCommon = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1 1 81px;
  padding-bottom: 49px;
`;

export const StepImage = styled.img`
  width: 24px;
  height: 24px;
  z-index: 10;
`;

export const StepLabel = styled.div<{ theme: DefaultTheme }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 20.93px;
  color: ${({ theme }) => theme.colors.textGreyColor};
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;

export const StepLine = styled.div<{ theme: DefaultTheme }>`
  position: absolute;
  top: 16%;
  left: 10%;
  width: 100%;
  max-width: 80%;
  border-top: 1px dotted #ffffff;
  z-index: 0;
`;
