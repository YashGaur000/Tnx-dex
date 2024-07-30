import React from 'react';

import {
  SidebarTitle,
  SlippageWrapper,
  ToleranceButton,
  ToleranceButtons,
} from '../styles/SlippageTolerance.style';

const SlippageTolerance: React.FC = () => (
  <SlippageWrapper display="flow">
    <SidebarTitle fontSize={16}>Slippage Tolerance</SidebarTitle>
    <ToleranceButtons>
      <ToleranceButton>0.1%</ToleranceButton>
      <ToleranceButton>0.5%</ToleranceButton>
      <ToleranceButton>1.0%</ToleranceButton>
      <ToleranceButton>2.0%</ToleranceButton>
      <ToleranceButton>5.0%</ToleranceButton>
    </ToleranceButtons>
  </SlippageWrapper>
);

export default SlippageTolerance;
