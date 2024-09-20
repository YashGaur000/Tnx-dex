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
          fontsize="14px"
          borderradius="10px"
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
