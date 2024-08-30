import React, { useState, useEffect } from 'react';
import { useAccount } from '../../../hooks/useAccount';
import { TokenInfo } from './../../../constants/tokens';
import TokenSelectModal from '../../modal/TokenSelectModal';
import SelectIcon from '../../../assets/select.png';
import faSwitchAlt from '../../../assets/faSwitchAlt.svg';
import {
  ContectedText,
  InputWrapper,
  PercentageButton,
  PercentageOptions,
  PercentageSelectorContainer,
  SwapBox,
  SwapboxInner,
  SwapBoxWrapper,
  SwapFormContainer,
  SwapTitle,
  SwitchButton,
  SwTitle,
  TokenSelect,
  TokenSelectAlign,
  TokenSelectAlignSelect,
  WalletInfo,
  WalletText,
} from '../styles/SwapForm.style.';

import Sidebar from './Sidebar';
import { useRootStore } from '../../../store/root';
import { useTokenInfo } from '../../../hooks/useTokenInfo';
import { Address } from 'viem';
import InputBox from './InputBox';
import { SidebarContainer } from '../styles/Sidebar.style';
import LiquityRouting from './LiquityRouting';
import SwitchComponent from './SwitchComponent';

const SwapForm: React.FC = () => {
  const { address } = useAccount();
  const [isConnected, setIsConnected] = useState(false);
  const { from, to, setFrom, setTo } = useRootStore();
  const [inputValue1, setinputValue1] = useState<string>(''); // add mandeep
  const [inputValue2, setinputValue2] = useState<string>(''); //add mandeep
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

  const handleSwap = () => {
    console.log('Swap Handle');
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

  function handleInputfield1(data: string) {
    setinputValue1(data);
    return true;
  }
  function handleInputfield2(data: string) {
    setinputValue2(data);
    return true;
  }
  const handleToggleChange = () => {
    if (isConnected) {
      //disconnect();
    } else {
      // logic to open wallet connect modal
    }
    setIsConnected(!isConnected);
  };

  return (
    <>
      <SwapFormContainer>
        <SwapBoxWrapper>
          <SwapBox>
            <SwapTitle>
              <SwTitle>Swap</SwTitle>
              <SwitchComponent
                isChecked={isConnected}
                handleToggle={handleToggleChange}
                onText=""
                offText=""
                isDisabled={true}
              />
              {isConnected && <ContectedText>Connected</ContectedText>}
            </SwapTitle>
            <SwapboxInner>
              <InputWrapper>
                <InputBox
                  type="number"
                  border="none"
                  placeholder=""
                  width="75%"
                  padding="0px"
                  handleInputData={handleInputfield1}
                />
                <TokenSelect onClick={() => handleTokenSelectOpen('token1')}>
                  <TokenSelectAlign>
                    <img
                      src={selectedToken1?.logoURI}
                      width={20}
                      height={20}
                      alt={selectedToken1?.logoURI}
                    />
                  </TokenSelectAlign>
                  <TokenSelectAlign>{selectedToken1?.symbol}</TokenSelectAlign>
                  <TokenSelectAlignSelect>
                    <img
                      src={SelectIcon}
                      width={8}
                      height={4}
                      alt={SelectIcon}
                    />
                  </TokenSelectAlignSelect>
                </TokenSelect>

                <PercentageSelectorContainer>
                  <WalletInfo>Wallet: 0.000 - $0.00</WalletInfo>

                  <PercentageOptions>
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
                {/* <Input
              type="number"
              inputMode="numeric"
              placeholder="0"
              value={''}
              //onChange={(e) => setInputValue2(e.target.value)}
            /> */}
                <InputBox
                  type="number"
                  border="none"
                  placeholder=""
                  width="75%"
                  padding="0px"
                  handleInputData={handleInputfield2}
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
            </SwapboxInner>
            <TokenSelectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSelect={handleTokenSelect}
              account={address!}
            />
          </SwapBox>
          {inputValue1 && inputValue2 && <LiquityRouting />}
        </SwapBoxWrapper>
      </SwapFormContainer>
      <SidebarContainer height={inputValue1 && inputValue2 ? 540 : 340}>
        <Sidebar InputAmount1={inputValue1} InputAmount2={inputValue2} />
      </SidebarContainer>
    </>
  );
};

export default SwapForm;
