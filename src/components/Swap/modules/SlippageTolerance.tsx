import React from 'react';
import {
  SidebarTitle,
  SlippageAlign,
  SlippageInput,
  SlippageWrapper,
  ToleranceButton,
  ToleranceButtons,
} from '../styles/SlippageTolerance.style';
import { useRootStore } from '../../../store/root';

const SlippageTolerance: React.FC = () => {
  const { selectedTolerance, setSelectedTolerance } = useRootStore();

  const handleToleranceChange = (tolerance: number) => {
    setSelectedTolerance(tolerance);
  };

  // const handleCustomToleranceChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const value = event.target.value;

  //   if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
  //     // Convert the string value to a number
  //     const numericValue = parseFloat(value);

  //     // Check if the value is within the desired range
  //     if (value === '' || (numericValue >= 0.1 && numericValue <= 50)) {
  //       setSelectedTolerance();
  //     } else {
  //       // Optional: Handle out-of-range case, e.g., show a message
  //       console.log("Value must be between 0.1 and 50");
  //     }
  //   } else {
  //     // Optional: Handle invalid input case, e.g., show a message
  //     console.log("Invalid input format");
  //   }
  // };

  return (
    <SlippageWrapper display="flow">
      <SlippageAlign>
        <SidebarTitle fontSize={16}>Slippage Tolerance</SidebarTitle>

        <SlippageInput
          type="text"
          value={selectedTolerance == 0.5 ? '' : selectedTolerance}
          //onChange={(e) => handleCustomToleranceChange(e)}
          placeholder={selectedTolerance.toString()}
          style={{ width: '50px', textAlign: 'center' }}
        />
      </SlippageAlign>
      <ToleranceButtons>
        <ToleranceButton onClick={() => handleToleranceChange(0.1)}>
          0.1%
        </ToleranceButton>
        <ToleranceButton onClick={() => handleToleranceChange(0.5)}>
          0.5%
        </ToleranceButton>
        <ToleranceButton onClick={() => handleToleranceChange(1)}>
          1.0%
        </ToleranceButton>
        <ToleranceButton onClick={() => handleToleranceChange(2)}>
          2.0%
        </ToleranceButton>
        <ToleranceButton onClick={() => handleToleranceChange(5)}>
          5.0%
        </ToleranceButton>
      </ToleranceButtons>
    </SlippageWrapper>
  );
};

export default SlippageTolerance;
