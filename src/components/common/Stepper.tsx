import React from 'react';
import styled from 'styled-components';
import { GlobalButton } from './Buttons/GlobalButton';
import { DefaultTheme } from '../../styles/Theme';
import ArrowIcon from './../../assets/doubleHederArrow.svg';
export interface StepperDataProps {
  step: number;
  icon?: string;
  descriptions: (string | string[])[];
  buttons?: {
    label: string;
    icon: string;
    onClick?: () => void;
    tooltip?: string;
    disabled?: boolean;
  }[];
}

interface StepperProps {
  data: StepperDataProps[];
}

const StepperContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 15px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const VerticalStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div<{ theme: DefaultTheme }>`
  border-radius: 50%;

  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.stepperColor};
  border: 0px;
  flex-shrink: 0;
  color: white;
  overflow: hidden;
`;

const IconImage = styled.img`
  width: 15px;
  height: 15px;
`;

const Line = styled.div`
  height: 100%;
  border-left: 2px dotted rgb(64, 120, 146);
`;

const Content = styled.div<{ theme: DefaultTheme }>`
  margin-left: 20px;
  display: inline-block;
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 23.92px;
  text-align: left;
`;

const ButtonIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 5px;
`;
const BalanceShowWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  margin: 10px 0px;
  gap: 10px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;
const StepperTitle = styled.span<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const Stepper: React.FC<StepperProps> = ({ data }) => {
  return (
    <StepperContainer>
      {data.map((item, index) => (
        <Step key={index}>
          <VerticalStep>
            <Circle>
              {item.icon ? (
                <IconImage src={item.icon} alt="Step Icon" />
              ) : (
                item.step
              )}
            </Circle>
            {index < data.length - 1 && <Line />}
          </VerticalStep>
          <Content>
            {item.descriptions.map((desc, idx) =>
              Array.isArray(desc) ? (
                <BalanceShowWrapper key={idx}>
                  <label>
                    {desc[0]} <StepperTitle>msETH</StepperTitle>{' '}
                  </label>
                  <span>
                    <img src={ArrowIcon} alt="Arrow" />
                  </span>
                  <label>
                    {desc[1]} <StepperTitle>ETH</StepperTitle>
                  </label>
                </BalanceShowWrapper>
              ) : (
                <p key={idx}>{desc}</p>
              )
            )}

            {item.buttons?.map((button, idx) => (
              <GlobalButton
                key={idx}
                padding="8px "
                tabIndex={idx}
                onClick={button.onClick}
                disabled={button.disabled}
              >
                {button.label}
                <ButtonIcon src={button.icon} alt={`${button.label} icon`} />
              </GlobalButton>
            ))}
          </Content>
        </Step>
      ))}
    </StepperContainer>
  );
};

export default Stepper;
