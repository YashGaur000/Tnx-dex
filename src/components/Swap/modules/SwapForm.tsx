import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import { useAccount } from '../../../hooks/useAccount';
import SwitchComponent from './SwitchComponent';
import { TOKEN_LIST } from '../../../constants/tokens';
import BalanceDisplay from './BalanceDisplay';
import { GlobalButton, Input, InputWrapper } from '../../common';
import {
  SwapBoxWrapper,
  SwapBox,
  Title,
  Description,
  TokenSelect,
  TokenOption,
  Text,
  SwitchButton,
  WalletWrapper,
  WalletButton,
  WalletIcon,
} from '../styles/SwapForm.style.';

const SwapForm: React.FC = () => {
  const { address } = useAccount();
  const [isConnected, setIsConnected] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectedToken1, setSelectedToken1] = useState(TOKEN_LIST[0].symbol);
  const [selectedToken2, setSelectedToken2] = useState(TOKEN_LIST[1].symbol);

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

  const handleSwap = () => {
    setSelectedToken1(selectedToken2);
    setSelectedToken2(selectedToken1);
    // setInputValue1(''); //to clear the input fields when we click on swap
    // setInputValue2('');
  };

  return (
    <SwapBoxWrapper>
      <SwapBox>
        <Title>Swap</Title>
        <Description>
          Our unique engine automatically chooses the best route for your trade
        </Description>
        <WalletWrapper>
          <WalletButton>
            <WalletIcon icon={faWallet} />
            {address && <BalanceDisplay address={address} />}
          </WalletButton>
          <SwitchComponent
            isChecked={isConnected}
            handleToggle={handleToggleChange}
            onText=""
            offText=""
            isDisabled={true}
          />
        </WalletWrapper>
        <InputWrapper>
          <Input
            type="number"
            placeholder="0"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
          />
          <TokenSelect
            value={selectedToken1}
            onChange={(e) => setSelectedToken1(e.target.value)}
          >
            {TOKEN_LIST.map((token) => (
              <TokenOption key={token.symbol} value={token.symbol}>
                {token.symbol}
              </TokenOption>
            ))}
          </TokenSelect>
          <Text>Wallet: 0.000 &nbsp;&nbsp; ~$0.00</Text>
        </InputWrapper>
        <SwitchButton onClick={handleSwap}>
          <FontAwesomeIcon icon={faExchangeAlt} color="white" />
        </SwitchButton>
        <InputWrapper>
          <Input
            type="number"
            inputMode="numeric"
            placeholder="0"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
          />
          <TokenSelect
            value={selectedToken2}
            onChange={(e) => setSelectedToken2(e.target.value)}
          >
            {TOKEN_LIST.map((token) => (
              <TokenOption key={token.symbol} value={token.symbol}>
                {token.symbol}
              </TokenOption>
            ))}
          </TokenSelect>
          <Text>Wallet: 0.000 &nbsp;&nbsp; ~$0.00</Text>
        </InputWrapper>
        <GlobalButton padding="15px">Swap</GlobalButton>
        <Description>
          TenEx&#39;s Meta Aggregator sources quotes from TenEx pools and Odos
        </Description>
      </SwapBox>
    </SwapBoxWrapper>
  );
};

export default SwapForm;
