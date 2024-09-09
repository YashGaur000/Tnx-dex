import React, { useState, useEffect, useRef } from 'react';
import { useAccount } from '../../../hooks/useAccount';
import { TokenInfo } from './../../../constants/tokens';
import TokenSelectModal from '../../modal/TokenSelectModal';
import SelectIcon from '../../../assets/select.svg';
import SwapSettingIcon from '../../../assets/swapSetting.png';
import faSwitchAlt from '../../../assets/faSwitchAlt.svg';
import {
  InputWrapper,
  PercentageButton,
  PercentageOptions,
  PercentageSelectorContainer,
  SwapBox,
  SwapBoxWrapper,
  SwapFormContainer,
  SwitchButton,
  TokenSelect,
  TokenSelectAlign,
  WalletText,
  SwapTitle,
  SwTitle,
  SwapboxInner,
  WalletInfo,
  SettingIcon,
  InputBoxRow,
  SwapPageIconWrapper,
} from '../styles/SwapForm.style.';
import LiquityRouting from './LiquityRouting';
import Sidebar from './Sidebar';
import { useRootStore } from '../../../store/root';
import { useTokenInfo } from '../../../hooks/useTokenInfo';
import { Address } from 'viem';
import { useRouterContract } from '../../../hooks/useRouterContract';
import { InputBox } from './InputBox';
import { Route } from '../../../utils/liquidityRouting/generateAllRoutes';
import { useLiquidityRouting } from '../../../hooks/useLiquidityRouting';
import { SidebarContainer } from '../styles/Sidebar.style';
import { useTokenBalances } from '../../../hooks/useTokenBalance';
import SettingModal from '../../modal/SettingModal';

import BalanceDisplay from './BalanceDisplay';
import { fetchBestRouteAndUpdateState } from '../../../utils/liquidityRouting/refreshRouting';

const SwapForm: React.FC = () => {
  const { address } = useAccount();
  const [isSettingModelOpen, setIsSettingModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [route, setRoute] = useState<Route[] | null>(null);

  const [tokenInput1, setTokenInput1] = useState('');
  const [tokenInput2, setTokenInput2] = useState('');
  const { from, to, setFrom, setTo } = useRootStore();
  const selectedToken1 = useTokenInfo(from);
  const selectedToken2 = useTokenInfo(to);
  const tokenList = [selectedToken1, selectedToken2];
  const { balances } = useTokenBalances(tokenList as TokenInfo[], address!);

  const { getAmountsOut } = useRouterContract();

  const graph = useLiquidityRouting();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokenSelectTarget, setTokenSelectTarget] = useState<
    'token1' | 'token2'
  >('token1');
  const [selectedPercentage, setSelectedPercentage] = React.useState<
    number | null
  >(null);

  useEffect(() => {
    // 1. Update connection state
    //setIsConnected(!!address);

    // 2. Scroll to the top when the component is mounted
    window.scrollTo(0, 0);

    // 3. Restore state from URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const fromAddress = queryParams.get('from');
    const toAddress = queryParams.get('to');

    if (fromAddress) setFrom(fromAddress as Address);
    if (toAddress) setTo(toAddress as Address);
  }, [address, setFrom, setTo]);

  const inputTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleTokenInput1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = event.target.value;
    setTokenInput1(amount);
    setTokenInput2(''); // Reset the second token input

    if (!amount) {
      setIsLoading(false);
      return;
    }

    if (!selectedToken1 || !selectedToken2 || !graph) return;

    setIsLoading(true);

    const delay = 5000; // 5 seconds delay

    // Clear any previous timeouts before setting a new one
    if (inputTimeout.current) {
      clearTimeout(inputTimeout.current);
    }

    // Regular function wrapping the async logic
    inputTimeout.current = setTimeout(() => {
      // Call the async function
      void fetchBestRouteAndUpdateState(
        selectedToken1,
        selectedToken2,
        amount,
        graph,
        getAmountsOut,
        setTokenInput2,
        setExchangeRate,
        setRoute,
        setIsLoading
      );
    }, delay);
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

  const handleIconClick = () => {
    setIsSettingModelOpen(true);
  };

  const handleCloseClick = () => {
    setIsSettingModelOpen(false);
  };

  const handleReverse = () => {
    if (!selectedToken1 || !selectedToken2 || !graph) return;
    const queryParams = new URLSearchParams(window.location.search);

    setFrom(selectedToken2.address);
    queryParams.set('from', selectedToken2.address);

    setTo(selectedToken1.address);
    queryParams.set('to', selectedToken1.address);

    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.pushState(null, '', newUrl);

    setTokenInput2(''); // Reset the second token input

    if (!tokenInput1) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const delay = 5000; // 5 seconds delay

    // Clear any previous timeouts before setting a new one
    if (inputTimeout.current) {
      clearTimeout(inputTimeout.current);
    }

    // Regular function wrapping the async logic
    inputTimeout.current = setTimeout(() => {
      // Call the async function
      void fetchBestRouteAndUpdateState(
        selectedToken2,
        selectedToken1,
        tokenInput1,
        graph,
        getAmountsOut,
        setTokenInput2,
        setExchangeRate,
        setRoute,
        setIsLoading
      );
    }, delay);
  };

  return (
    <>
      <SwapFormContainer>
        <SwapBoxWrapper>
          <SwapBox>
            <SwapTitle>
              <SwTitle>Swap</SwTitle>
              <SettingIcon
                src={SwapSettingIcon}
                alt="Setting"
                onClick={handleIconClick}
              />
              <SettingModal
                isOpen={isSettingModelOpen}
                onClose={handleCloseClick}
              >
                <p>Settings content goes here...</p>
              </SettingModal>
            </SwapTitle>
            <SwapboxInner>
              <InputWrapper>
                <InputBoxRow>
                  <InputBox
                    type="number"
                    border="none"
                    placeholder=""
                    width="70%"
                    padding="0px"
                    value={tokenInput1}
                    onChange={handleTokenInput1}
                  />
                  <TokenSelect onClick={() => handleTokenSelectOpen('token1')}>
                    <SwapPageIconWrapper
                      src={selectedToken1?.logoURI}
                      width="18px"
                      height="18px"
                      alt={selectedToken1?.logoURI}
                    />

                    <TokenSelectAlign>
                      {selectedToken1?.symbol}
                    </TokenSelectAlign>
                    <SwapPageIconWrapper
                      width="8px"
                      height="4px"
                      src={SelectIcon}
                    />
                  </TokenSelect>
                </InputBoxRow>

                <PercentageSelectorContainer>
                  <WalletInfo>
                    Wallet:
                    <WalletText>
                      {selectedToken1 &&
                        (selectedToken1.symbol === 'ETH' ? (
                          <BalanceDisplay address={address!} />
                        ) : (
                          balances[selectedToken1.address]?.toString()
                        ))}
                    </WalletText>
                    <WalletText margin={8}>~$0.00</WalletText>
                  </WalletInfo>

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

              <SwitchButton onClick={handleReverse}>
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
                <InputBoxRow>
                  <InputBox
                    type="number"
                    border="none"
                    placeholder=""
                    width="75%"
                    padding="0px"
                    value={tokenInput1 ? tokenInput2 : ''}
                    disabled={true}
                  />
                  <TokenSelect onClick={() => handleTokenSelectOpen('token2')}>
                    <SwapPageIconWrapper
                      src={selectedToken1?.logoURI}
                      width="18px"
                      height="18px"
                      alt={selectedToken1?.logoURI}
                    />

                    <TokenSelectAlign>
                      {selectedToken2?.symbol}
                    </TokenSelectAlign>

                    <SwapPageIconWrapper
                      width="8px"
                      height="4px"
                      src={SelectIcon}
                      alt="wrong"
                    />
                  </TokenSelect>
                </InputBoxRow>
                <PercentageSelectorContainer>
                  <WalletInfo>
                    Wallet:
                    <WalletText>
                      {selectedToken2 &&
                        (selectedToken2.symbol === 'ETH' ? (
                          <BalanceDisplay address={address!} />
                        ) : (
                          balances[selectedToken2.address]?.toString()
                        ))}
                    </WalletText>
                  </WalletInfo>
                  <WalletText margin={8}>~$0.00</WalletText>
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
            </SwapboxInner>
            <TokenSelectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSelect={handleTokenSelect}
              account={address!}
            />
          </SwapBox>
          {tokenInput1 && (
            <LiquityRouting route={route} isLoading={isLoading} />
          )}
        </SwapBoxWrapper>
      </SwapFormContainer>

      <SidebarContainer height={tokenInput1 ? 540 : 348}>
        <Sidebar
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          exchangeRate={exchangeRate}
          setExchangeRate={setExchangeRate}
          token1={selectedToken1!}
          token2={selectedToken2!}
          tokenInput1={tokenInput1}
          tokenInput2={tokenInput2}
          setTokenInput1={setTokenInput1}
          setTokenInput2={setTokenInput2}
          routes={route}
          setRoute={setRoute}
          graph={graph}
        />
      </SidebarContainer>
    </>
  );
};

export default SwapForm;
