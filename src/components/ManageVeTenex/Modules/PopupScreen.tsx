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
  height: 500px;
  overflow-y: scroll;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  @media (max-width: 700px) {
    width: 350px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    padding-right: 25px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
    width: 5px;
    margin: 5px;
    background: black;
    margin-right: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.bordercolor};
    border-radius: 10px;
    margin-right: 5px;
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
const CloseImg = styled.img`
  width: 20px;
  height: 20px;
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
    <ModalBackground isVisible={isVisible} onClick={onClose}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <CloseImg src={CloseIcon} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default PopupScreen;
