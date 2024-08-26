import React from 'react';
import {
  SidebarTitle,
  SlippageAlign,
  // SlippageInput,
  SlippageWrapper,
  ToleranceButton,
  ToleranceButtons,
} from '../styles/SlippageTolerance.style';
import { useRootStore } from '../../../store/root';

const SlippageTolerance: React.FC = () => {
  const { setSelectedTolerance } = useRootStore();

  const handleToleranceChange = (tolerance: string) => {
    setSelectedTolerance(tolerance);
  };

  // const handleCustomToleranceChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   //setCustomTolerance(event.target.value);
  //   setSelectedTolerance(event.target.value);
  // };

  return (
    <SlippageWrapper display="flow">
      <SlippageAlign>
        <SidebarTitle fontSize={16}>Slippage Tolerance</SidebarTitle>

        {/* <SlippageInput
          type="text"
          value={selectedTolerance}
          onChange={(e) => handleCustomToleranceChange(e)}
          placeholder={selectedTolerance}
          style={{ width: '50px', textAlign: 'center' }}
        /> */}
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
