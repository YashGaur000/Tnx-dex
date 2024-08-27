import React, { useState, useEffect } from 'react';

import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { useAccount } from '../../../hooks/useAccount';
import SwitchComponent from './SwitchComponent';
import { TokenInfo } from './../../../constants/tokens';
import BalanceDisplay from './BalanceDisplay';
import TokenSelectModal from '../../modal/TokenSelectModal';
import { GlobalButton } from '../../common';
import SelectIcon from '../../../assets/select.png';
import faSwitchAlt from '../../../assets/faSwitchAlt.svg';
import {
  Description,
  Input,
  InputWrapper,
  PercentageButton,
  PercentageOptions,
  PercentageSelectorContainer,
  SwapBox,
  SwapBoxWrapper,
  SwapFormContainer,
  SwitchButton,
  Title,
  TokenSelect,
  TokenSelectAlign,
  TokenSelectAlignSelect,
  WalletButton,
  WalletIcon,
  WalletInfo,
  WalletText,
  WalletWrapper,
} from '../styles/SwapForm.style.';
import LiquityRouting from './LiquityRouting';
import Sidebar from './Sidebar';
import { useRootStore } from '../../../store/root';
import { useTokenInfo } from '../../../hooks/useTokenInfo';
import { Address } from 'viem';

const SwapForm: React.FC = () => {
  const { address } = useAccount();
  const [isConnected, setIsConnected] = useState(false);
  const { from, to, setFrom, setTo } = useRootStore();
  // const [selectedToken1, setSelectedToken1] = useState<TokenInfo>(
  //   ERC20_TEST_TOKEN_LIST[0]
  // );
  // const [selectedToken2, setSelectedToken2] = useState<TokenInfo>(
  //   ERC20_TEST_TOKEN_LIST[1]
  // );

  const selectedToken1 = useTokenInfo(from);

  const selectedToken2 = useTokenInfo(to);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokenSelectTarget, setTokenSelectTarget] = useState<
    'token1' | 'token2'
  >('token1');
  const [selectedPercentage, setSelectedPercentage] = React.useState<
    number | null
  >(null);

  useEffect(() => {
    // 1. Update connection state
    setIsConnected(!!address);

    // 2. Scroll to the top when the component is mounted
    window.scrollTo(0, 0);

    // 3. Restore state from URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const fromAddress = queryParams.get('from');
    const toAddress = queryParams.get('to');

    if (fromAddress) setFrom(fromAddress as Address);
    if (toAddress) setTo(toAddress as Address);
  }, [address, setFrom, setTo]);

  const handleToggleChange = () => {
    if (isConnected) {
      //disconnect();
    } else {
      // logic to open wallet connect modal
    }
    setIsConnected(!isConnected);
  };

  const handleSwap = () => {
    //setSelectedToken1(selectedToken2);
    //setSelectedToken2(selectedToken1);
    // setInputValue1(''); //to clear the input fields when we click on swap
    // setInputValue2('');
  };

  const handleTokenSelectOpen = (target: 'token1' | 'token2') => {
    setTokenSelectTarget(target);
    setIsModalOpen(true);
  };

  const handleTokenSelect = (token: TokenInfo) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (tokenSelectTarget === 'token1') {
      setFrom(token.address);
      queryParams.set('from', token.address);
    } else {
      setTo(token.address);
      queryParams.set('to', token.address);
    }
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.pushState(null, '', newUrl);
  };

  const handleSelectPercentage = (percentage: number) => {
    setSelectedPercentage(percentage);
  };

  return (
    <SwapFormContainer>
      <SwapBoxWrapper>
        <SwapBox>
          <Title>Swap</Title>
          <Description textAlign="center">
            Our unique engine automatically chooses the best route for your
            trade
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
              value={''}
              //onChange={(e) => setInputValue1(e.target.value)}
            />
            <TokenSelect onClick={() => handleTokenSelectOpen('token1')}>
              <TokenSelectAlign>
                <img
                  src={selectedToken1?.logoURI}
                  width={21}
                  height={22}
                  alt={selectedToken1?.logoURI}
                />
              </TokenSelectAlign>
              <TokenSelectAlign>{selectedToken1?.symbol}</TokenSelectAlign>
              <TokenSelectAlignSelect>
                <img src={SelectIcon} width={8} height={4} alt={SelectIcon} />
              </TokenSelectAlignSelect>
            </TokenSelect>
            <PercentageSelectorContainer>
              <WalletInfo>Wallet: 0.000 - $0.00</WalletInfo>

              <PercentageOptions>
                <PercentageButton
                  active={selectedPercentage === 0}
                  onClick={() => handleSelectPercentage(0)}
                >
                  0%
                </PercentageButton>
                <PercentageButton
                  active={selectedPercentage === 25}
                  onClick={() => handleSelectPercentage(25)}
                >
                  25%
                </PercentageButton>
                <PercentageButton
                  active={selectedPercentage === 50}
                  onClick={() => handleSelectPercentage(50)}
                >
                  50%
                </PercentageButton>
                <PercentageButton
                  active={selectedPercentage === 75}
                  onClick={() => handleSelectPercentage(75)}
                >
                  75%
                </PercentageButton>
                <PercentageButton
                  active={selectedPercentage === 100}
                  onClick={() => handleSelectPercentage(100)}
                >
                  MAX
                </PercentageButton>
              </PercentageOptions>
            </PercentageSelectorContainer>
          </InputWrapper>
          <SwitchButton onClick={handleSwap}>
            <img src={faSwitchAlt} alt={faSwitchAlt} />
          </SwitchButton>
          <InputWrapper>
            <Input
              type="number"
              inputMode="numeric"
              placeholder="0"
              value={''}
              //onChange={(e) => setInputValue2(e.target.value)}
            />
            <TokenSelect onClick={() => handleTokenSelectOpen('token2')}>
              <TokenSelectAlign>
                <img
                  src={selectedToken2?.logoURI}
                  width={20}
                  height={20}
                  alt={selectedToken2?.logoURI}
                />
              </TokenSelectAlign>
              <TokenSelectAlign>{selectedToken2?.symbol}</TokenSelectAlign>
              <TokenSelectAlign>
                <img
                  src={SelectIcon}
                  width={8}
                  height={4}
                  alt="src/assets/select.png"
                />
              </TokenSelectAlign>
            </TokenSelect>
            <WalletText>Wallet: 0.000 &nbsp;&nbsp; ~$0.00</WalletText>
          </InputWrapper>
          <TokenSelectModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSelect={handleTokenSelect}
            account={address!}
          />
          <GlobalButton padding="15px">Swap</GlobalButton>
          <Description textAlign="left">
            TenEx&#39; Meta Aggregator sources quotes from TenEx pools and Odos
          </Description>
        </SwapBox>
        {(from || to) && <LiquityRouting />}
      </SwapBoxWrapper>
      <Sidebar />
    </SwapFormContainer>
  );
};

export default SwapForm;
