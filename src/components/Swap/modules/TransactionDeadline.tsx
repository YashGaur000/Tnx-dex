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
} from '../styles/TransactionDeadline.style';

const TransactionDeadline: React.FC = () => (
  <SlippageWrapper display="flow">
    <Align>
      <SidebarTitle fontSize={16}>Transaction Deadline</SidebarTitle>
      <TimerButton>30 mins</TimerButton>
    </Align>
    <SliderContainer>
      <Slider type="range" min="0" max="60" />
    </SliderContainer>
    <TdText>
      <FontAwesomeIcon icon={faInfoCircle} /> Max: 1 hour
    </TdText>
  </SlippageWrapper>
);

export default TransactionDeadline;
