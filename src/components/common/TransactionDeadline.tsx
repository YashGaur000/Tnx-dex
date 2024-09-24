import React from 'react';

import {
  Align,
  SidebarTitle,
  Slider,
  SliderContainer,
  TdText,
  TimerButton,
  TransactionWrapper,
} from '../Swap/styles/TransactionDeadline.style';
import { useLiquidityStore } from '../../store/slices/liquiditySlice';

const TransactionDeadline: React.FC = () => {
  const { setDeadLineValue, deadLineValue } = useLiquidityStore();
  // const [sliderValue, setSliderValue] = useState<number>(30);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSliderValue(Number(event.target.value));
    setDeadLineValue(Number(event.target.value));
  };

  const formatTime = (minutes: number) => {
    if (minutes === 60) {
      return '1 hour';
    } else {
      return `${minutes} mins`;
    }
  };

  return (
    <TransactionWrapper display="flow">
      <Align>
        <SidebarTitle fontsize={16}>Transaction Deadline</SidebarTitle>
        <TimerButton>{formatTime(deadLineValue)}</TimerButton>
      </Align>
      <SliderContainer>
        <Slider
          type="range"
          min="5"
          max="30"
          value={deadLineValue}
          onChange={handleSliderChange}
        />
      </SliderContainer>
      <TdText>Max. 30 min</TdText>
    </TransactionWrapper>
  );
};

export default TransactionDeadline;
