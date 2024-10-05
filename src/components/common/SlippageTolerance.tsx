import React, { useState } from 'react';
import {
  SidebarTitle,
  SlippageAlign,
  SlippageInput,
  SlippageWrapper,
  ToleranceButton,
  ToleranceButtons,
  SlipageInputWrapper,
  PercentageTitle,
} from '../Swap/styles/SlippageTolerance.style';
import { useRootStore } from '../../store/root';

const SlippageTolerance: React.FC = () => {
  const { selectedTolerance, setSelectedTolerance } = useRootStore();
  const [toleranceInput, setToleranceInput] =
    useState<string>(selectedTolerance);

  const [color, setColor] = useState('');

  const handleToleranceChange = (tolerance: string) => {
    setSelectedTolerance(tolerance.toString());
    setToleranceInput(tolerance);

    setColor('');
  };

  const handleCustomTolerance = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const numValue = parseFloat(value);

    // Check if the value is valid
    if (!isNaN(numValue) && numValue >= 0.1 && numValue <= 50) {
      setSelectedTolerance(value);

      setColor(''); // Reset color to default if valid
    } else {
      setSelectedTolerance('1.0');
      // Set to default value if invalid

      setColor('red'); // Set color to red to indicate an error
    }

    setToleranceInput(value);
  };

  return (
    <SlippageWrapper display="flow">
      <SlippageAlign>
        <SidebarTitle fontSize={16}>Slippage Tolerance</SidebarTitle>
        <SlipageInputWrapper>
          <SlippageInput
            type="number"
            value={toleranceInput}
            onChange={handleCustomTolerance}
            style={{ color: `${color}` }}
          />
          <PercentageTitle> %</PercentageTitle>
        </SlipageInputWrapper>
      </SlippageAlign>
      <ToleranceButtons>
        <ToleranceButton
          selected={toleranceInput === '0.1'}
          onClick={() => handleToleranceChange('0.1')}
        >
          0.1%
        </ToleranceButton>
        <ToleranceButton
          selected={toleranceInput === '0.5'}
          onClick={() => handleToleranceChange('0.5')}
        >
          0.5%
        </ToleranceButton>
        <ToleranceButton
          selected={toleranceInput === '1.0'}
          onClick={() => handleToleranceChange('1.0')}
        >
          1.0%
        </ToleranceButton>
        <ToleranceButton
          selected={toleranceInput === '2.0'}
          onClick={() => handleToleranceChange('2.0')}
        >
          2.0%
        </ToleranceButton>
        <ToleranceButton
          selected={toleranceInput === '5.0'}
          onClick={() => handleToleranceChange('5.0')}
        >
          5.0%
        </ToleranceButton>
      </ToleranceButtons>
    </SlippageWrapper>
  );
};

export default SlippageTolerance;
