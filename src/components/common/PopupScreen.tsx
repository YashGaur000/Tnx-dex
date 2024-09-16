import styled from 'styled-components';
import { ReactNode } from 'react';
import { DefaultTheme } from '../../styles/Theme';
import CloseIcon from '../../assets/close.png';
const ModalBackground = styled.div<{ isvisible: boolean; theme: DefaultTheme }>`
  display: ${({ isvisible }) => (isvisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const ModalContent = styled.div<{
  theme: DefaultTheme;
  width?: string;
  height?: string;
}>`
  position: fixed;

  width: ${({ width }) => width ?? 'auto'};
  max-width: 664px;
  max-height: 666px;
  height: ${({ height }) => height ?? 'auto'};
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.card};
  padding: 16px;
  border-radius: 24px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 13px;
  right: 11px;
  background: none;
  text-align: left;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
const CloseImg = styled.img`
  width: 25px;
  height: 25px;
`;
const DivOverflow = styled.div<{
  theme: DefaultTheme;
  padding?: string;
  scroll?: string;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 450px;
  height: auto;
  padding: ${({ padding }) => padding ?? '20px'};
  padding-top: 0px;

  overflow-y: ${({ scroll }) => scroll ?? 'auto'};
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
    width: 6px;
    margin-top: 50px;
    background: ${({ theme }) => theme.colors.swapIconBackground};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.bordercolor};
    border-radius: 10px;
    margin-right: 5px;
  }
`;
interface PopUpProps {
  isvisible: boolean;
  onClose: () => void;
  children: ReactNode;
  top?: number;
  left?: number;
  width?: string;
  height?: string;
  padding?: string;
  isvisiblecloseIcon?: boolean;
  scroll?: string;
}

const PopupScreen: React.FC<PopUpProps> = ({
  isvisible,
  onClose,
  children,
  width,
  height,
  padding,
  scroll,
  isvisiblecloseIcon = true,
}) => {
  return (
    <ModalBackground isvisible={isvisible} onClick={onClose}>
      <ModalContent
        width={width}
        height={height}
        onClick={(e) => e.stopPropagation()}
      >
        {isvisiblecloseIcon && (
          <CloseButton onClick={onClose}>
            <CloseImg src={CloseIcon} />
          </CloseButton>
        )}
        <DivOverflow padding={padding} scroll={scroll}>
          {children}
        </DivOverflow>
      </ModalContent>
    </ModalBackground>
  );
};

export default PopupScreen;
