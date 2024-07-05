import React from 'react';
import styled from 'styled-components';

const SwapBox = styled.div`
  background: ${({ theme }) => theme.colors.cardLight};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #7a8aa0;
  margin-bottom: 20px;
`;

const SwapInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #2d3e50;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.cardLight};
  border-color: ${({ theme }) => theme.colors.greyBorder};
  color: #ffffff;
`;

const TokenSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #2d3e50;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.cardLight};
  border-color: ${({ theme }) => theme.colors.greyBorder};
`;

const ConnectWalletButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const SwapForm: React.FC = () => {
  return (
    <SwapBox>
      <Title>Swap</Title>
      <InfoText>
        Our unique engine automatically chooses the best route for your trade
      </InfoText>
      <SwapInput type="text" placeholder="100" />
      <TokenSelect>
        <option>SUI</option>
        <option>ETH</option>
        <option>BTC</option>
      </TokenSelect>
      <SwapInput type="text" placeholder="0" />
      <TokenSelect>
        <option>SOL</option>
        <option>ADA</option>
        <option>DOT</option>
      </TokenSelect>
      <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
    </SwapBox>
  );
};

export default SwapForm;
