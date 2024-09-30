import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f44336;
  color: white;
  padding: 16px;
  margin: 8px 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 16px;
  animation: ${slideDown} 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ErrorPopupProps {
  errorMessage: string;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ errorMessage }) => {
  const [visible, setVisible] = useState(false);
  console.log(errorMessage);

  useEffect(() => {
    if (errorMessage) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  if (!visible) return null;

  return <StyledPopup>{errorMessage}</StyledPopup>;
};

export default ErrorPopup;
