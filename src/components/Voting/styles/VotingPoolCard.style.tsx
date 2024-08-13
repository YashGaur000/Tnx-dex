import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import { GradientButton } from '../../common';

export const CardContainer = styled.div`
  display: flex;
  gap: 15px;

  justify-content: center;
  margin-left: 30px;

  width: 200px;
`;

export const GroupImg = styled.div`
  display: block;
  position: relative;

  width: 60px;
  height: 50px;
`;
export const TraidingSyleLabel = styled.label`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const IMG1 = styled.div`
  display: block;
  position: absolute;
  left: 0px;
  top: 20px;
`;
export const IMG2 = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #cccccc;
  font-size: 12px;
`;
export const Span = styled.span`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-right: 10px;
`;
export const Img = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;
export const Imgstyle = styled.img`
  width: 35px;
  height: 35px;
`;
export const PairContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const VoteTooltip = styled.div<{ theme: DefaultTheme }>`
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
  line-height: 1.5;

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

  // &::after {
  //     // content: 'Start Voting →';
  //     display: block;
  //     margin-top: 40px;
  //     // color: #3498db;
  //   }
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
`;

export const TooltipTextBox = styled.div<{ theme: DefaultTheme }>`
  margin-right: 60px;
`;

export const TooltipText = styled.span`
  font-size: 14px;
  color: #cccccc;
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
