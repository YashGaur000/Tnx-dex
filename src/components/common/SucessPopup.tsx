import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import PartyPopper from '../../assets/party-popper.svg';
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

const PopupContainer = styled.div<{ visible: boolean; theme: DefaultTheme }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: fixed;
  flex-direction: column;
  gap: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 20px;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

const SuccessPopup: React.FC<{ message: string }> = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Overlay visible={visible} />
      <PopupContainer visible={visible}>
        <div>
          <img src={PartyPopper} />{' '}
        </div>
        <label>{message}</label>
      </PopupContainer>
    </>
  );
};

export default SuccessPopup;
