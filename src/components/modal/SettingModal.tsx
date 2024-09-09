import React from 'react';
import styled from 'styled-components';

import AllowUnsafeTrades from '../Swap/modules/AllowUnsafeTrades';
import SlippageTolerance from '../common/SlippageTolerance';

import TransactionDeadline from '../common/TransactionDeadline';
import PopupScreen from '../common/PopupScreen';

interface SettingProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SettingModal: React.FC<SettingProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <PopupScreen
      isVisible={isOpen}
      onClose={onClose}
      width="430px"
      height="466px"
    >
      <PopupContainer>
        <SlippageTolerance />
        <TransactionDeadline />
        <AllowUnsafeTrades
          isChecked={false}
          handleToggle={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </PopupContainer>
    </PopupScreen>
  );
};

export default SettingModal;
