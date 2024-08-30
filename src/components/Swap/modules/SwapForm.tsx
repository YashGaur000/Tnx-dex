import React, { useState, useEffect } from 'react';

import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { useAccount } from '../../../hooks/useAccount';
import SwitchComponent from './SwitchComponent';
import { TokenInfo } from './../../../constants/tokens';
import BalanceDisplay from './BalanceDisplay';
import TokenSelectModal from '../../modal/TokenSelectModal';
import { GlobalButton } from '../../common';
import SelectIcon from '../../../assets/select.svg';
import faSwitchAlt from '../../../assets/faSwitchAlt.svg';
import {
  Description,
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
  InputBoxWithTokenSelectWrapper,
  TokenIcon,
} from '../styles/SwapForm.style.';
import LiquityRouting from './LiquityRouting';
import Sidebar from './Sidebar';
import { useRootStore } from '../../../store/root';
import { useTokenInfo } from '../../../hooks/useTokenInfo';
import { Address } from 'viem';
import { useTokenBalances } from '../../../hooks/useTokenBalance';
import { useRouterContract } from '../../../hooks/useRouterContract';
import { InputBox } from './InputBox';
import { LoadingSpinner } from '../../common/Loader';
import { findBestRoute, getAllRoutes } from '../../../utils/generateAllRoutes';
import { useLiquidityRouting } from '../../../hooks/useLiquidityRouting';

const SwapForm: React.FC = () => {
  const { address } = useAccount();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);

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

  const handleTokenInput1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = event.target.value;
    setTokenInput1(amount);
    setTokenInput2('');

    if (!amount) setIsLoading(false);

    if (selectedToken1 && selectedToken2 && amount != '') {
      setIsLoading(true);

      console.log('graph-------->', graph);

      setTimeout(() => {
        void (async () => {
          try {
            // const reserves = await getReserves(
            //   selectedToken1,
            //   selectedToken2,
            //   false
            // );

            // const exchangeRate =
            //   reserves &&
            //   Number(reserves.formatedReserveB) /
            //     Number(reserves.formatedReserveA);

            // let token2Value = 0;
            // if (exchangeRate) {
            //   setExchangeRate(exchangeRate);
            //   token2Value = Number(amount) * exchangeRate;
            // }

            // setTokenInput2(token2Value.toString());
            if (graph) {
              const routes = getAllRoutes(
                graph,
                selectedToken1.address,
                selectedToken2.address,
                3
              );
              console.log('routes------->', routes);
              const test = await findBestRoute(amount, routes, getAmountsOut);
              console.log(
                'test------->',
                Number(test?.bestQuote.toString()) / 10 ** 18,
                test?.bestRoute
              );
            }
            setExchangeRate(1);
          } catch (error) {
            console.error('Error fetching reserves:', error);
          } finally {
            setIsLoading(false);
          }
        })();
      }, 5000);
    }
  };

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
            <InputBoxWithTokenSelectWrapper>
              <InputBox
                type="number"
                border="none"
                placeholder=""
                width="75%"
                padding="0px"
                value={tokenInput1}
                onChange={handleTokenInput1}
              />
              <TokenSelect onClick={() => handleTokenSelectOpen('token1')}>
                <TokenSelectAlign>
                  <TokenIcon
                    src={selectedToken1?.logoURI}
                    width={20}
                    height={20}
                    alt={selectedToken1?.logoURI}
                  />
                </TokenSelectAlign>
                <TokenSelectAlign>{selectedToken1?.symbol}</TokenSelectAlign>
                <TokenSelectAlignSelect>
                  <TokenIcon
                    src={SelectIcon}
                    width={8}
                    height={4}
                    alt={SelectIcon}
                  />
                </TokenSelectAlignSelect>
              </TokenSelect>
            </InputBoxWithTokenSelectWrapper>
            <PercentageSelectorContainer>
              <WalletInfo>
                Wallet:{' '}
                {Number(selectedToken1 && balances[selectedToken1?.address])}{' '}
              </WalletInfo>

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
            <InputBoxWithTokenSelectWrapper>
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
            </InputBoxWithTokenSelectWrapper>
            <WalletText>
              Wallet:{' '}
              {Number(selectedToken2 && balances[selectedToken2?.address])}{' '}
            </WalletText>
          </InputWrapper>
          <TokenSelectModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSelect={handleTokenSelect}
            account={address!}
          />
          <GlobalButton padding="15px">Swap</GlobalButton>
          <Description textAlign="center">
            TenEx&#39; Meta Aggregator sources quotes from TenEx pools and Odos
          </Description>
        </SwapBox>
        {tokenInput1 ? (
          isLoading ? (
            <LoadingSpinner />
          ) : (
            <LiquityRouting />
          )
        ) : (
          <></>
        )}
      </SwapBoxWrapper>

      <Sidebar
        isLoading={isLoading}
        exchangeRate={tokenInput1 ? exchangeRate : 0}
      />
    </SwapFormContainer>
  );
};

export default SwapForm;
