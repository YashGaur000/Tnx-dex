import React from 'react';
import {
  GlobalButton,
  GradientButton,
  Card as CardContainer,
  CardTitle,
  CardRow,
} from '../common';

interface CardProps {
  title: string;
  positionLabel: string;
  positionValue: string;
  valueLabel: string;
  valueValue: string;
}

const RewardCard: React.FC<CardProps> = ({
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
          margintop="15px"
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

export default RewardCard;
