import React, { useState } from 'react';
import { TokenInfo } from '../../constants/tokens/type';
import SearchIcons from '../../assets/search-icon.png';
import {
  HeaderleftContent,
  HeaderRightContent,
  HeaderTokenContent,
  ModalContent,
  ModalWrapper,
  SearchIcon,
  SearchInput,
  SearchWrapper,
  TokenItem,
  TokenList,
  TokenItemImage,
  TokenItemData,
  TokenNameWrapper,
  TokenListsWrapper,
  ScrollContainer,
  TokenItemWithAdressWrapper,
} from './styles/TokenSelectModal.style';
import tenex from '../../assets/Tenex.png';

import { useTokenBalances } from '../../hooks/useTokenBalance';
import { Address } from 'viem';
import useQueryParams from '../../hooks/useQueryParams';
import BalanceDisplay from '../Swap/modules/BalanceDisplay';
import Copy from '../common/Copy';
import { ERC20_TEST_TOKEN_LIST } from '../../constants/tokens/testnetTokens';
import { TokenPriceData } from '../../hooks/useTokenPrice';
import { findTokenPriceBytokenInfo } from '../../utils/transaction/getTokenInfo';
import { useNativeBalance } from '../../hooks/useNativeBalance';

interface TokenSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (token: TokenInfo) => void;
  account: Address;
  excludeToken1?: Address;
  excludeToken2?: Address;
  tokenPriceData: TokenPriceData[];
}

const TokenSelectModal: React.FC<TokenSelectModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  account,
  excludeToken1,
  excludeToken2,
  tokenPriceData,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const getParam = useQueryParams();

  if (!excludeToken1) {
    excludeToken1 = getParam('token1') as Address;
  }

  if (!excludeToken2) {
    excludeToken2 = getParam('token2') as Address;
  }

  const { balances, loading, error } = useTokenBalances(
    ERC20_TEST_TOKEN_LIST,
    account
  );

  const { balance: nativeBalance } = useNativeBalance(account);

  if (!isOpen || loading || error) {
    return null;
  }

  const handleSelectToken = (token: TokenInfo) => {
    onSelect(token);
    setSearchQuery('');
    onClose();
  };

  const filteredTokens = ERC20_TEST_TOKEN_LIST.filter(
    (token) =>
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) &&
      token.address !== excludeToken1 && // Exclude the selected token
      token.address !== excludeToken2
  );

  return (
    <ModalWrapper
      onClick={() => {
        setSearchQuery('');
        onClose();
      }}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <SearchWrapper>
          <SearchIcon src={SearchIcons} />
          <SearchInput
            type="text"
            marginbottom="0px"
            placeholder="Search by symbol or address"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>
        <TokenListsWrapper>
          <HeaderTokenContent>
            <HeaderleftContent>
              {filteredTokens.length} Tokens
            </HeaderleftContent>
            <HeaderRightContent>Balance</HeaderRightContent>
          </HeaderTokenContent>
          <ScrollContainer>
            <TokenList>
              {filteredTokens.map((token) => (
                <TokenItem
                  key={token.symbol}
                  onClick={() => handleSelectToken(token)}
                >
                  <TokenItemWithAdressWrapper>
                    <TokenItemImage
                      src={token.logoURI ? token.logoURI : tenex}
                      width={36}
                      height={36}
                      alt={token.symbol}
                    />
                    <TokenNameWrapper>
                      <TokenItemData>{token.symbol}</TokenItemData>
                      <Copy copydata={token.address} />
                    </TokenNameWrapper>
                  </TokenItemWithAdressWrapper>
                  <TokenItemData fontSize={16}>
                    <p>
                      {account && token.symbol == 'ETH' ? (
                        <BalanceDisplay address={account} />
                      ) : balances[token.address] > 0 ? (
                        balances[token.address].toString()
                      ) : (
                        '0.0'
                      )}
                    </p>
                    <p>
                      {account && token.symbol === 'ETH' && nativeBalance
                        ? `~$ ${findTokenPriceBytokenInfo(
                            tokenPriceData,
                            token,
                            nativeBalance?.formatted.toString()
                          )}`
                        : `~$ ${findTokenPriceBytokenInfo(
                            tokenPriceData,
                            token,
                            balances[token.address].toString()
                          )}`}
                    </p>
                  </TokenItemData>
                </TokenItem>
              ))}
            </TokenList>
          </ScrollContainer>
        </TokenListsWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default TokenSelectModal;
