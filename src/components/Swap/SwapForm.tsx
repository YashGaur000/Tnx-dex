import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import { useAccount } from '../../hooks/useAccount';
import SwitchComponent from './SwitchComponent';
import { TOKEN_LIST } from './../../constants/tokens';

const SwapBox = styled.div`
  background: ${({ theme }) => theme.colors.cardLight};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.grey};
`;

const InputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border-color: ${({ theme }) => theme.colors.greyBorder};
  width: 75%;
  padding: 10px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-right: 1%;
`;

const TokenSelect = styled.select`
  width: 22%;
  padding: 10px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const Text = styled.text`
  width: 100%;
  font-size: 10px;
  line-height: 14.95px;
  padding: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.grey};
`;

const SwitchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.colors.swapIconBackground};
  border-radius: 50%;
  margin: 10px auto;
  cursor: pointer;
  transform: rotate(90deg);

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

const WalletWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 10px;
`;

const WalletButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  background: ${({ theme }) => theme.colors.cardLight};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const WalletIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const SwapForm: React.FC = () => {
  const { address } = useAccount();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setIsConnected(!!address);
  }, [address]);

  const handleToggleChange = () => {
    if (isConnected) {
      //disconnect();
    } else {
      // logic to open wallet connect modal
    }
    setIsConnected(!isConnected);
  };

  return (
    <SwapBox>
      <Title>Swap</Title>
      <Description>
        Our unique engine automatically chooses the best route for your trade
      </Description>
      <WalletWrapper>
        <WalletButton>
          <WalletIcon icon={faWallet} />
        </WalletButton>
        <SwitchComponent
          isChecked={isConnected}
          handleToggle={handleToggleChange}
          onText="Connected"
          offText="Disconnected"
          disabled={true}
        />
      </WalletWrapper>
      <InputWrapper>
        <Input type="number" placeholder="0" />
        <TokenSelect>
          {TOKEN_LIST.map((token) => (
            <option key={token.symbol} value={token.symbol}>
              {token.symbol} - {token.name}
            </option>
          ))}
        </TokenSelect>
        <Text>Wallet: 0.000 &nbsp;&nbsp; ~$0.00</Text>
      </InputWrapper>
      <SwitchButton>
        <FontAwesomeIcon icon={faExchangeAlt} color="white" />
      </SwitchButton>
      <InputWrapper>
        <Input type="number" placeholder="0" />
        <TokenSelect>
          {TOKEN_LIST.map((token) => (
            <option key={token.symbol} value={token.symbol}>
              {token.symbol} - {token.name}
            </option>
          ))}
        </TokenSelect>
        <Text>Wallet: 0.000 &nbsp;&nbsp; ~$0.00</Text>
      </InputWrapper>
      <Button>Swap</Button>
      <Description>
        TenEx's Meta Aggregator sources quotes from TenEx pools and Odos
      </Description>
    </SwapBox>
  );
};

export default SwapForm;
