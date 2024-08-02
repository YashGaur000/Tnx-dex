import styled from 'styled-components';
import { ReactNode } from 'react';
import { DefaultTheme } from '../../../styles/Theme';
import CloseIcon from '../../../assets/close.png';
const ModalBackground = styled.div<{ isVisible: boolean; theme: DefaultTheme }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const ModalContent = styled.div<{ theme: DefaultTheme }>`
  position: fixed;
  width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.cardDark};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  @media (max-width: 700px) {
    width: 350px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  text-align: left;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

interface PopUpProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const PopupScreen: React.FC<PopUpProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  return (
    <ModalBackground isVisible={isVisible}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={CloseIcon} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default PopupScreen;
