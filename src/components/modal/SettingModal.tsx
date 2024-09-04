import React from 'react';
import styled from 'styled-components';

import { DefaultTheme } from '../../styles/Theme';
import AllowUnsafeTrades from '../Swap/modules/AllowUnsafeTrades';
import SlippageTolerance from '../common/SlippageTolerance';

import TransactionDeadline from '../common/TransactionDeadline';

interface SettingProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const PopupContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SettingModalContent = styled.div`
  width: 440px;
  height: 466px;
  position: relative;
  position: relative;
  top: 180px;
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
      <SettingModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SlippageTolerance />
        <TransactionDeadline />
        <AllowUnsafeTrades
          isChecked={false}
          handleToggle={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SettingModalContent>
    </PopupContainer>
  );
};

export default SettingModal;
