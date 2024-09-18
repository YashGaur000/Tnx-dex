import React, { useState } from 'react';
import {
  SidebarTitle,
  SlippageAlign,
  SlippageInput,
  SlippageWrapper,
  ToleranceButton,
  ToleranceButtons,
} from '../Swap/styles/SlippageTolerance.style';
import { useRootStore } from '../../store/root';

const SlippageTolerance: React.FC = () => {
  const { setSelectedTolerance } = useRootStore();
  const [toleranceInput, setToleranceInput] = useState<number>(1);

  const [color, setColor] = useState('');

  const handleToleranceChange = (tolerance: string) => {
    setSelectedTolerance(tolerance.toString());
    setToleranceInput(parseFloat(tolerance));

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
      setSelectedTolerance('1');
      // Set to default value if invalid

      setColor('red'); // Set color to red to indicate an error
    }

    setToleranceInput(numValue);
  };

  return (
    <SlippageWrapper display="flow">
      <SlippageAlign>
        <SidebarTitle fontSize={16}>Slippage Tolerance</SidebarTitle>
        <SlippageInput
          type="number"
          value={toleranceInput}
          onChange={handleCustomTolerance}
          style={{ textAlign: 'center', color: `${color}` }}
        />
      </SlippageAlign>
      <ToleranceButtons>
        <ToleranceButton
          selected={toleranceInput === 0.1}
          onClick={() => handleToleranceChange('0.1')}
        >
          0.1%
        </ToleranceButton>
        <ToleranceButton
          selected={toleranceInput === 0.5}
          onClick={() => handleToleranceChange('0.5')}
        >
          0.5%
        </ToleranceButton>
        <ToleranceButton
          selected={toleranceInput === 1}
          onClick={() => handleToleranceChange('1')}
        >
          1.0%
        </ToleranceButton>
        <ToleranceButton
          selected={toleranceInput === 2}
          onClick={() => handleToleranceChange('2')}
        >
          2.0%
        </ToleranceButton>
        <ToleranceButton
          selected={toleranceInput === 5}
          onClick={() => handleToleranceChange('5')}
        >
          5.0%
        </ToleranceButton>
      </ToleranceButtons>
    </SlippageWrapper>
  );
};

export default SlippageTolerance;
