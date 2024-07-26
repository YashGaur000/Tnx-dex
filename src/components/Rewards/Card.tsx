import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import { GlobalButton, GradientButton, Card as CardContainer } from '../common';

// const CardContainer = styled.div<{ theme: DefaultTheme }>`
//   background: ${({ theme }) => theme.colors.cardLight};
//   border-radius: 12px;
//   padding: 20px;
//   width: 400px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: left;
// `;

const CardTitle = styled.h3<{ theme: DefaultTheme }>`
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const CardRow = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;

  span {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;

interface CardProps {
  title: string;
  positionLabel: string;
  positionValue: string;
  valueLabel: string;
  valueValue: string;
}

const Card: React.FC<CardProps> = ({
  title,
  positionLabel,
  positionValue,
  valueLabel,
  valueValue,
}) => {
  return (
    <CardContainer width="400px">
      <CardTitle>{title}</CardTitle>
      <CardRow>
        <span>{positionLabel}</span>
        <span>{positionValue}</span>
      </CardRow>
      <CardRow>
        <span>{valueLabel}</span>
        <span>{valueValue}</span>
      </CardRow>
      <CardRow>
        <GradientButton
          width="100px"
          height="38px"
          padding="0px"
          fontSize="14px"
          borderRadius="10px"
          // border="none"
          // background={theme.colors.cardLight}
          // color={theme.colors.buttonBackground}
          cursor="pointer"
          marginTop="15px"
        >
          Claim
        </GradientButton>
        <GlobalButton padding="0px" width="100px" height="38px">
          Lock
        </GlobalButton>
      </CardRow>
    </CardContainer>
  );
};

export default Card;
