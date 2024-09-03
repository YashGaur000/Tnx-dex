import React from 'react';
import styled from 'styled-components';
import { GlobalButton } from './Buttons/GlobalButton';
import { DefaultTheme } from '../../styles/Theme';
import ArrowIcon from './../../assets/doubleHederArrow.svg';
import { StepperDataProps } from '../../types/Stepper';

interface StepperProps {
  data: StepperDataProps[];
}

const StepperContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 10px;
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

  width: 26px;
  height: 26px;
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
  width: 16px;
  height: 16px;
`;

const Line = styled.div<{ theme: DefaultTheme }>`
  height: 100%;
  border-left: 1px dotted ${({ theme }) => theme.colors.greyBorder};
`;

const Content = styled.div<{ theme: DefaultTheme }>`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  gap: 12px;

  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 14px;
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
  margin: 0px 0px;
  gap: 10px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;
const StepperTitle = styled.span<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const UnderlinedText = styled.span<{ theme: DefaultTheme }>`
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

const DescriptionSection = styled.div`
  display: flex;
  gap: 10px;
`;
const DescriptionWrapper = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Stepperlabel = styled.label<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
const StepperRedTitle = styled.p<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.redToggle};
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
            <DescriptionSection>
              <DescriptionWrapper>
                {!item.descriptions.isSplit &&
                  (item.unSafe?.visible ? (
                    <StepperRedTitle>
                      {item.descriptions.labels}{' '}
                      <UnderlinedText onClick={item.unSafe.onClick}>
                        <br />
                        Allow unsafe trades
                      </UnderlinedText>{' '}
                      or try with smaller amount{' '}
                    </StepperRedTitle>
                  ) : (
                    <StepperTitle>{item.descriptions.labels} </StepperTitle>
                  ))}
                {item.descriptions.isSplit &&
                  item.descriptions.labels.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      <DescriptionWrapper>{line}</DescriptionWrapper>
                    </React.Fragment>
                  ))}
              </DescriptionWrapper>
              {item.descriptions.adjust && (
                <UnderlinedText onClick={item.descriptions.onClick}>
                  {item.descriptions.adjust}
                </UnderlinedText>
              )}
            </DescriptionSection>

            {item.descriptions.token1 && item.descriptions.token2 && (
              <BalanceShowWrapper>
                <Stepperlabel>
                  {item.descriptions.token1}
                  <StepperTitle></StepperTitle>
                </Stepperlabel>
                <Stepperlabel>
                  <img src={ArrowIcon} alt="Arrow" />
                </Stepperlabel>
                <Stepperlabel>
                  {item.descriptions.token2} <StepperTitle></StepperTitle>
                </Stepperlabel>
              </BalanceShowWrapper>
            )}

            {item.buttons && (
              <GlobalButton
                padding="8px"
                margin="0px"
                width="186px"
                height="40px"
                tabIndex={0}
                onClick={() => {
                  if (item.buttons?.onClick) {
                    item.buttons
                      ?.onClick()
                      .then(() => {
                        console.log('clicked sucess');
                      })
                      .catch((error) => {
                        console.error('Button click failed:', error);
                      });
                  }
                }}
                disabled={item.buttons?.disabled}
              >
                {item.buttons?.label}
                {item.buttons?.icon && (
                  <ButtonIcon
                    src={item.buttons?.icon}
                    alt={`${item.buttons?.label} icon`}
                  />
                )}
              </GlobalButton>
            )}
          </Content>
        </Step>
      ))}
    </StepperContainer>
  );
};

export default Stepper;
