import React, { useState } from 'react';
import {
  SelectSlippage,
  SidebarTitle,
  SlippageAlign,
  SlippageWrapper,
  ToleranceButton,
  ToleranceButtons,
} from '../styles/SlippageTolerance.style';

const SlippageTolerance: React.FC = () => {
  const [selectedTolerance, setSelectedTolerance] = useState('0.5%');

  const handleToleranceChange = (tolerance: string) => {
    setSelectedTolerance(tolerance);
  };

  return (
    <SlippageWrapper display="flow">
      <SlippageAlign>
        <SidebarTitle fontSize={16}>Slippage Tolerance</SidebarTitle>
        <SelectSlippage>{selectedTolerance}</SelectSlippage>
      </SlippageAlign>
      <ToleranceButtons>
        <ToleranceButton onClick={() => handleToleranceChange('0.1%')}>
          0.1%
        </ToleranceButton>
        <ToleranceButton onClick={() => handleToleranceChange('0.5%')}>
          0.5%
        </ToleranceButton>
        <ToleranceButton onClick={() => handleToleranceChange('1.0%')}>
          1.0%
        </ToleranceButton>
        <ToleranceButton onClick={() => handleToleranceChange('2.0%')}>
          2.0%
        </ToleranceButton>
        <ToleranceButton onClick={() => handleToleranceChange('5.0%')}>
          5.0%
        </ToleranceButton>
      </ToleranceButtons>
    </SlippageWrapper>
  );
};

export default SlippageTolerance;
