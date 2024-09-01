import React from 'react';
import styled from 'styled-components';
import SlippageTolerance from '../Swap/modules/SlippageTolerance';
import TransactionDeadline from '../Swap/modules/TransactionDeadline';
import { DefaultTheme } from '../../styles/Theme';
import AllowUnsafeTrades from '../Swap/modules/AllowUnsafeTrades';

interface SettingProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PopupContainer = styled.div`
  position: absolute;
  width: 440px;
  height: 466px;
  top: 130px;
  left: 420px;
  gap: 0px;
  border-radius: 24px;
  background-color: rgba(24, 38, 76, 1);
  background: linear-gradient(
    to bottom,
    rgba(24, 38, 76, 1),
    rgba(31, 48, 95, 1)
  );

  z-index: 1000;
`;

const CloseButton = styled.button<{ theme: DefaultTheme }>`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const SettingModal: React.FC<SettingProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <PopupContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <SlippageTolerance />
      <TransactionDeadline />
      <AllowUnsafeTrades
        isChecked={false}
        handleToggle={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </PopupContainer>
  );
};

export default SettingModal;
