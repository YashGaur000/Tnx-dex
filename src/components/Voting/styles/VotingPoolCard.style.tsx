import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import { GradientButton } from '../../common';

export const CardContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-left: 30px;
  width: 200px;

  @media (max-width: 768px) {
    margin-left: 10px;
    width: 150px;
  }

  @media (max-width: 480px) {
    margin-left: 5px;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const GroupImg = styled.div`
  display: block;
  position: relative;
  width: 60px;
  height: 50px;

  @media (max-width: 768px) {
    width: 50px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 30px;
  }
`;

export const TraidingSyleLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    gap: 3px;
  }
`;

export const IMG1 = styled.div`
  display: block;
  position: absolute;
  left: 0px;
  top: 20px;

  @media (max-width: 768px) {
    top: 15px;
  }

  @media (max-width: 480px) {
    top: 10px;
  }
`;

export const IMG2 = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;

  @media (max-width: 768px) {
    left: 15px;
    top: 15px;
  }

  @media (max-width: 480px) {
    left: 10px;
    top: 10px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #cccccc;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Span = styled.span`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-right: 10px;

  @media (max-width: 480px) {
    padding-right: 5px;
  }
`;

export const Img = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    margin-left: 5px;
  }
`;

export const Imgstyle = styled.img`
  width: 35px;
  height: 35px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

export const PairContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

export const VoteTooltip = styled.div<{
  theme: DefaultTheme;
  fontWeight?: string;
}>`
  position: absolute;
  top: 50px;
  left: 40px;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  width: 220px;
  text-align: left;
  display: none;
  z-index: 1;
  line-height: 23.92px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    top: 40px;
    left: 30px;
    font-size: 14px;
    width: 180px;
  }

  @media (max-width: 480px) {
    top: 30px;
    left: 20px;
    font-size: 12px;
    width: 150px;
  }

  &::after {
    content: 'Start Voting →';
    display: block;
    margin-top: 10px;
    color: #3498db;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const VolumeStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: flex-end;
  width: 60%;
  position: relative;

  &:hover ${VoteTooltip} {
    display: block;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip-content {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipContent = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  visibility: hidden;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  text-align: left;
  padding: 12px;
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  width: 220px;
  bottom: -90px;
  left: 190px;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  @media (max-width: 768px) {
    width: 180px;
    bottom: -70px;
    left: 170px;
  }

  @media (max-width: 480px) {
    width: 150px;
    bottom: -60px;
    left: 150px;
    padding: 10px;
  }
`;

export const TooltipValueBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TooltipValue = styled.div<{ theme: DefaultTheme }>`
  font-size: 16px;
  font-weight: bold;
  -webkit-background-clip: text;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TooltipTextBox = styled.div<{ theme: DefaultTheme }>`
  margin-right: 60px;

  @media (max-width: 768px) {
    margin-right: 50px;
  }

  @media (max-width: 480px) {
    margin-right: 40px;
  }
`;

export const TooltipText = styled.span`
  font-size: 14px;
  color: #cccccc;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const VoteButtonContainer = styled.div`
  position: relative;

  &:hover ${VoteTooltip} {
    display: block;
  }
`;

export const StyledGradientButton = styled(GradientButton)`
  &:hover + ${VoteTooltip} {
    display: block;
  }
`;
