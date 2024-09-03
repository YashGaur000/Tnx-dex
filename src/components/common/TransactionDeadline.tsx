import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
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
        <SidebarTitle fontSize={16}>Transaction Deadline</SidebarTitle>
        <TimerButton>{formatTime(deadLineValue)}</TimerButton>
      </Align>
      <SliderContainer>
        <Slider
          type="range"
          min="0"
          max="30"
          value={deadLineValue}
          onChange={handleSliderChange}
        />
      </SliderContainer>
      <TdText>
        <FontAwesomeIcon icon={faInfoCircle} /> Max. 30 min
      </TdText>
    </TransactionWrapper>
  );
};

export default TransactionDeadline;
