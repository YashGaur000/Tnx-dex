import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useAccount } from '../../../hooks/useAccount';
import { TokenInfo } from '../../../constants/tokens/type';
import TokenSelectModal from '../../modal/TokenSelectModal';
import SelectIcon from '../../../assets/select.svg';
import SwapSettingIcon from '../../../assets/setting.svg';
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
import {
  Graph,
  Route,
} from '../../../utils/liquidityRouting/generateAllRoutes';
import { useLiquidityRouting } from '../../../hooks/useLiquidityRouting';
import { SidebarContainer } from '../styles/Sidebar.style';
import { useTokenBalances } from '../../../hooks/useTokenBalance';
import SettingModal from '../../modal/SettingModal';

import BalanceDisplay from './BalanceDisplay';
import { fetchBestRouteAndUpdateState } from '../../../utils/liquidityRouting/refreshRouting';
import { ROUTING_DELAY } from '../../../utils/liquidityRouting/chunk';
import { useNativeBalance } from '../../../hooks/useNativeBalance';

const SwapForm: React.FC = () => {
  const { address } = useAccount();
  const [isSettingModelOpen, setIsSettingModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const [exchangeRate, setExchangeRate] = useState(0);
  const [route, setRoute] = useState<Route[] | null>(null);
  const [amountsOut, setAmountsOut] = useState<bigint[] | null>(null);

  const [tokenInput1, setTokenInput1] = useState('');
  const [tokenInput2, setTokenInput2] = useState('');
  const { from, to, setFrom, setTo } = useRootStore();
  const selectedToken1 = useTokenInfo(from);
  const selectedToken2 = useTokenInfo(to);
  const tokenList = [selectedToken1, selectedToken2];
  const { balances } = useTokenBalances(tokenList as TokenInfo[], address!);
  const { balance: nativeBalance } = useNativeBalance(address!);

  const inputTimeout = useRef<NodeJS.Timeout | null>(null);

  const { getAmountsOut } = useRouterContract();

  const graph = useLiquidityRouting();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokenSelectTarget, setTokenSelectTarget] = useState<
    'token1' | 'token2'
  >('token1');

  useEffect(() => {
    if (tokenInput1 && selectedToken1) {
      const walletBalanceCheck =
        Number(tokenInput1) <=
          Number(balances[selectedToken1.address].toString()) ||
        (selectedToken1.symbol === 'ETH' &&
          Number(tokenInput1) <= Number(nativeBalance?.formatted));

      setIsValid(walletBalanceCheck);
    }
  }, [tokenInput1, selectedToken1, balances, nativeBalance]);

  // Helper function to update the URL
  const updateUrl = (fromAddress: Address, toAddress: Address) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('from', fromAddress);
    queryParams.set('to', toAddress);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.pushState(null, '', newUrl);
  };

  const handleTokenSelectOpen = (target: 'token1' | 'token2') => {
    setTokenSelectTarget(target);
    setIsModalOpen(true);
  };

  // Function to debounce async calls
  const debounceFetchRoute = useCallback(
    (
      fromToken: TokenInfo,
      toToken: TokenInfo,
      amount: string,
      graph: Graph,
      getAmountsOut: (
        amountIn: bigint,
        routes: Route[][]
      ) => Promise<bigint[][] | undefined>,
      setTokenInput2: (val: string) => void,
      setExchangeRate: (val: number) => void,
      setRoute: (route: Route[] | null) => void,
      setIsLoading: (loading: boolean) => void,
      setAmountsOut: (amountsOut: bigint[]) => void
    ) => {
      // Clear any previous timeouts before setting a new one
      if (inputTimeout.current) {
        clearTimeout(inputTimeout.current);
      }

      // Regular function wrapping the async logic
      inputTimeout.current = setTimeout(() => {
        void fetchBestRouteAndUpdateState(
          fromToken,
          toToken,
          amount,
          graph,
          getAmountsOut,
          setTokenInput2,
          setExchangeRate,
          setRoute,
          setIsLoading,
          setAmountsOut
        );
      }, ROUTING_DELAY);
    },
    []
  );

  const handleTokenInput1 = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const amount = event.target.value;

      const validInput = /^[0-9]*\.?[0-9]*$/.test(amount);
      if (!validInput) return;

      // Check the number of decimals
      if (amount.includes('.') && selectedToken1) {
        const decimalPlaces = amount.split('.')[1]?.length || 0;
        if (decimalPlaces > selectedToken1.decimals) return;
      }

      setTokenInput1(amount);
      setTokenInput2(''); // Reset the second token input
      setRoute(null);

      if (!amount || !selectedToken1 || !selectedToken2 || !graph) {
        setIsLoading(false);
        setRoute(null);
        return;
      }

      setIsLoading(true);
      debounceFetchRoute(
        selectedToken1,
        selectedToken2,
        amount,
        graph,
        getAmountsOut,
        setTokenInput2,
        setExchangeRate,
        setRoute,
        setIsLoading,
        setAmountsOut
      );
    },
    [selectedToken1, selectedToken2, graph, debounceFetchRoute]
  );

  const handleTokenSelect = useCallback(
    (token: TokenInfo) => {
      if (!selectedToken1 || !selectedToken2 || !graph) return;

      let fromToken = selectedToken1;
      let toToken = selectedToken2;

      if (tokenSelectTarget === 'token1') {
        setFrom(token.address);
        fromToken = token;
      } else {
        setTo(token.address);
        toToken = token;
      }

      updateUrl(fromToken.address, toToken.address);

      if (!tokenInput1) return;

      setIsLoading(true);
      setTokenInput2('');
      setRoute(null);

      debounceFetchRoute(
        fromToken,
        toToken,
        tokenInput1,
        graph,
        getAmountsOut,
        setTokenInput2,
        setExchangeRate,
        setRoute,
        setIsLoading,
        setAmountsOut
      );
    },
    [
      selectedToken1,
      selectedToken2,
      graph,
      tokenSelectTarget,
      tokenInput1,
      debounceFetchRoute,
    ]
  );

  const handleSelectPercentage = useCallback(
    (percentage: number) => {
      if (!selectedToken1 || !selectedToken2 || !graph) return;

      let walletBalance = 0;
      if (selectedToken1.symbol === 'ETH') {
        walletBalance = (Number(nativeBalance?.formatted) * percentage) / 100;
      } else {
        walletBalance =
          (Number(balances[selectedToken1?.address].toString()) * percentage) /
          100;
      }

      const amount = walletBalance.toFixed(5);
      setTokenInput1(amount);
      setTokenInput2(''); // Reset the second token input
      setRoute(null);

      setIsLoading(true);

      debounceFetchRoute(
        selectedToken1,
        selectedToken2,
        amount,
        graph,
        getAmountsOut,
        setTokenInput2,
        setExchangeRate,
        setRoute,
        setIsLoading,
        setAmountsOut
      );
    },
    [
      selectedToken1,
      selectedToken2,
      graph,
      nativeBalance,
      balances,
      debounceFetchRoute,
    ]
  );

  const handleReverse = useCallback(() => {
    if (!selectedToken1 || !selectedToken2 || !graph) return;

    setFrom(selectedToken2.address);
    setTo(selectedToken1.address);

    updateUrl(selectedToken2.address, selectedToken1.address);
    setTokenInput2(''); // Reset the second token input
    setRoute(null);

    if (!tokenInput1) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    debounceFetchRoute(
      selectedToken2,
      selectedToken1,
      tokenInput1,
      graph,
      getAmountsOut,
      setTokenInput2,
      setExchangeRate,
      setRoute,
      setIsLoading,
      setAmountsOut
    );
  }, [selectedToken1, selectedToken2, tokenInput1, graph, debounceFetchRoute]);

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
                onClick={() => setIsSettingModelOpen(true)}
              />
              <SettingModal
                isOpen={isSettingModelOpen}
                onClose={() => setIsSettingModelOpen(false)}
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
                    placeholder="0.0"
                    width="70%"
                    padding="0px"
                    value={tokenInput1}
                    onChange={handleTokenInput1}
                    style={{ color: isValid ? '' : 'red' }}
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
                      onClick={() => handleSelectPercentage(25)}
                    >
                      25%
                    </PercentageButton>
                    <PercentageButton
                      onClick={() => handleSelectPercentage(50)}
                    >
                      50%
                    </PercentageButton>
                    <PercentageButton
                      onClick={() => handleSelectPercentage(75)}
                    >
                      75%
                    </PercentageButton>
                    <PercentageButton
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
                <InputBoxRow>
                  <InputBox
                    type="number"
                    border="none"
                    placeholder="0.0"
                    width="75%"
                    padding="0px"
                    value={tokenInput1 ? tokenInput2 : ''}
                    disabled={true}
                  />
                  <TokenSelect onClick={() => handleTokenSelectOpen('token2')}>
                    <SwapPageIconWrapper
                      src={selectedToken2?.logoURI}
                      width="18px"
                      height="18px"
                      alt={selectedToken2?.logoURI}
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
                  <PercentageOptions></PercentageOptions>
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
            <LiquityRouting
              route={route}
              isLoading={isLoading}
              amountsOut={amountsOut}
            />
          )}
        </SwapBoxWrapper>
      </SwapFormContainer>

      <SidebarContainer height={tokenInput1 ? 540 : 348}>
        <Sidebar
          isLoading={isLoading}
          isValid={isValid}
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
          amountsOut={amountsOut}
          setAmountsOut={setAmountsOut}
          graph={graph}
        />
      </SidebarContainer>
    </>
  );
};

export default SwapForm;
