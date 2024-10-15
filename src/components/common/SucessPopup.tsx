import React, { useState } from 'react';
import styled from 'styled-components';
//import { DefaultTheme } from '../../styles/Theme';
import PartyPopper from '../../assets/party-popper.svg';
import PopupScreen from './PopupScreen';
const Overlay = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  transition: background-color 0.3s ease;
`;

// const PopupContainer = styled.div<{ visible: boolean; theme: DefaultTheme }>`
//   display: ${({ visible }) => (visible ? 'flex' : 'none')};
//   position: fixed;
//   flex-direction: column;
//   gap: 10px;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: ${({ theme }) => theme.colors.card};
//   color: ${({ theme }) => theme.colors.whiteBorder};
//   font-family: ${({ theme }) => theme.fonts.main};
//   font-weight: ${({ theme }) => theme.fontWeights.regular};
//   font-size: 20px;
//   padding: 40px;
//   border-radius: 24px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   z-index: 1000;
//   justify-content: center;
//   align-items: center;
// `;

const SuccessPopup: React.FC<{ message: string; explorerLink?: string }> = ({
  message,
  explorerLink,
}) => {
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   setVisible(true);
  //   const timer = setTimeout(() => {
  //     setVisible(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <Overlay visible={visible} />
      <PopupScreen isvisible={visible} onClose={() => setVisible(false)}>
        <div>
          <img
            src={PartyPopper}
            onClick={() => {
              if (explorerLink) window.location.href = explorerLink;
            }}
          />{' '}
        </div>
        <label>{message}</label>
      </PopupScreen>
    </>
  );
};

export default SuccessPopup;
