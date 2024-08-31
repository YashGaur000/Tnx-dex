import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {
  Align,
  SidebarTitle,
  Slider,
  SliderContainer,
  SlippageWrapper,
  TdText,
  TimerButton,
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
    <SlippageWrapper display="flow">
      <Align>
        <SidebarTitle fontSize={16}>Transaction Deadline</SidebarTitle>
        <TimerButton>{formatTime(deadLineValue)}</TimerButton>
      </Align>
      <SliderContainer>
        <Slider
          type="range"
          min="0"
          max="60"
          value={deadLineValue}
          onChange={handleSliderChange}
        />
      </SliderContainer>
      <TdText>
        <FontAwesomeIcon icon={faInfoCircle} /> Max: 1 hour
      </TdText>
    </SlippageWrapper>
  );
};

export default TransactionDeadline;
