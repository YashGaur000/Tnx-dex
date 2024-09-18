import React from 'react';
import styled from 'styled-components';

import AllowUnsafeTrades from '../Swap/modules/AllowUnsafeTrades';
import SlippageTolerance from '../common/SlippageTolerance';

import TransactionDeadline from '../common/TransactionDeadline';
import PopupScreen from '../common/PopupScreen';
import { useRootStore } from '../../store/root';

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
  const { allowUnsafe, setAllowUnsafe } = useRootStore();

  if (!isOpen) return null;

  return (
    <PopupScreen
      isvisible={isOpen}
      onClose={onClose}
      width="430px"
      height="466px"
    >
      <PopupContainer>
        <SlippageTolerance />
        <TransactionDeadline />
        <AllowUnsafeTrades
          isChecked={allowUnsafe}
          handleToggle={() => setAllowUnsafe(!allowUnsafe)}
        />
      </PopupContainer>
    </PopupScreen>
  );
};

export default SettingModal;
